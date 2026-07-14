import type { CSSProperties, HTMLAttributes, ImgHTMLAttributes } from "react";

type XAlign = "left" | "center" | "right";
type YAlign = "top" | "center" | "bottom";

/**
 * 配置のキーフレーム。
 */
export interface AlignKeyframe {
  /**
   * 現在の正規化アスペクト比の値
   * 0は完全に縦長、1は完全に横長を表し、`0≦r≦1`の範囲を取る
   */
  readonly r: number;
  /**
   * r地点におけるの配置位置の割合
   * `0≦a≦1`の範囲を取る
   */
  readonly a: number;
}

export type XAlignValue = XAlign | number | ReadonlyArray<AlignKeyframe>;
export type YAlignValue = YAlign | number | ReadonlyArray<AlignKeyframe>;

export type SizeBasis = "h" | "w";

/**
 * サイズのキーフレーム。
 */
export interface SizeKeyframe {
  /**
   * 現在の正規化アスペクト比の値
   * 0は完全に縦長、1は完全に横長を表し、`0≦r≦1`の範囲を取る
   */
  readonly r: number;
  /**
   * r地点におけるサイズ
   * `0≦f≦1`の範囲を取る
   */
  readonly f: number;
  /**
   * 縦幅と横幅のどちらを基準にサイズを決めるかを決定する
   * @example w // 横幅基準
   * @example h // 縦幅基準
   */
  readonly b: SizeBasis;
}

export type SizeValue =
  | { readonly f: number; readonly b: SizeBasis } // 静的指定
  | ReadonlyArray<SizeKeyframe>; // キーフレーム

/**
 * 渡された画像の、絶対に表示したい領域の4点座標
 * 元画像の解像度の範囲内で指定する
 */
export interface ClipRect {
  xmin: number;
  xmax: number;
  ymin: number;
  ymax: number;
}

export interface ResponsiveImageProps {
  src: string;
  imageWidth: number;
  imageHeight: number;
  clipRect: ClipRect;
  xalign?: XAlignValue;
  yalign?: YAlignValue;
  /**
   * 未指定の場合、object-fit: cover のように可能な限り短辺を最大化する (s = min(sCover, sRect))
   */
  size?: SizeValue;
  className?: string;
  /**
   * このコンポーネントの最外部に位置する要素に対する特別な属性を指定するためのプロパティ
   */
  containerProps?: Omit<HTMLAttributes<HTMLDivElement>, "className">;
  /**
   * このコンポーネント内部で使用しているimg要素に対する特別な属性を指定するためのプロパティ
   */
  imgProps?: Omit<ImgHTMLAttributes<HTMLImageElement>, "src" | "style">;
}

const ALIGN_X: Record<XAlign, number> = { left: 0, center: 0.5, right: 1 };
const ALIGN_Y: Record<YAlign, number> = { top: 0, center: 0.5, bottom: 1 };

const STEP_EPSILON = 1e-6;

/** アスペクト比 w:h を正規化値 t に変換するヘルパー */
export const aspectToT = (w: number, h: number): number => w / (w + h);

const sizeToWidthExpr = (f: number, b: SizeBasis): string =>
  b === "w" ? `${f * 100}cqw` : `${f * 100}cqh * var(--ar)`;

const buildPiecewiseLinear = (
  keyframes: ReadonlyArray<AlignKeyframe>,
): string => {
  const kf = [...keyframes].sort((p, q) => p.r - q.r);
  if (kf.length === 1) return String(kf[0].a);

  const terms = kf.slice(0, -1).flatMap((k0, i) => {
    const k1 = kf[i + 1];
    if (k1.a === k0.a) return [];
    const rEnd = k1.r === k0.r ? k0.r + STEP_EPSILON : k1.r;
    const m = (k1.a - k0.a) / (rEnd - k0.r);
    return [`${m} * (clamp(${k0.r}, var(--t), ${rEnd}) - ${k0.r})`];
  });

  if (terms.length === 0) return String(kf[0].a);
  return `calc(${kf[0].a} + ${terms.join(" + ")})`;
};

const buildPiecewiseLinearSize = (
  keyframes: ReadonlyArray<SizeKeyframe>,
): string => {
  const kf = [...keyframes].sort((p, q) => p.r - q.r);
  const exprs = kf.map((k) => sizeToWidthExpr(k.f, k.b));
  if (kf.length === 1) return `calc(${exprs[0]})`;

  const terms = kf.slice(0, -1).flatMap((k0, i) => {
    const k1 = kf[i + 1];
    const rEnd = k1.r === k0.r ? k0.r + STEP_EPSILON : k1.r;
    const invDr = 1 / (rEnd - k0.r);
    return [
      `(clamp(${k0.r}, var(--t), ${rEnd}) - ${k0.r}) * ${invDr} * ((${exprs[i + 1]}) - (${exprs[i]}))`,
    ];
  });
  return `calc((${exprs[0]}) + ${terms.join(" + ")})`;
};

const resolveAlign = <K extends string>(
  value: K | number | ReadonlyArray<AlignKeyframe>,
  table: Record<K, number>,
): number | string => {
  if (typeof value === "number") return value;
  if (Array.isArray(value)) return buildPiecewiseLinear(value);
  return table[value as K];
};

const resolveSize = (value: SizeValue): string => {
  if (!Array.isArray(value)) {
    const { f, b } = value as { f: number; b: SizeBasis };
    return `calc(${sizeToWidthExpr(f, b)})`;
  }
  return buildPiecewiseLinearSize(value as ReadonlyArray<SizeKeyframe>);
};

export const ResponsiveImage = ({
  className,
  src,
  imageWidth,
  imageHeight,
  clipRect,
  xalign = "center",
  yalign = "center",
  size,
  imgProps,
  containerProps,
}: ResponsiveImageProps) => {
  const { xmin, xmax, ymin, ymax } = clipRect;

  const style = {
    "--ar": imageWidth / imageHeight,
    "--h-per-w": imageHeight / imageWidth,
    "--w-per-rw": imageWidth / (xmax - xmin),
    "--w-per-rh": imageWidth / (ymax - ymin),
    "--xmin-r": xmin / imageWidth,
    "--xmax-r": xmax / imageWidth,
    "--ymin-r": ymin / imageHeight,
    "--ymax-r": ymax / imageHeight,
    "--ax": resolveAlign(xalign, ALIGN_X),
    "--ay": resolveAlign(yalign, ALIGN_Y),
    ...(size !== undefined && { "--size-w": resolveSize(size) }),
  } as CSSProperties;

  return (
    <div
      className={`relative overflow-hidden [container-type:size] [contain:paint] w-[100cqw] h-[100cqh]${className ? " " + className : ""}`}
      {...containerProps}
    >
      <img
        src={src}
        alt=""
        style={style}
        draggable={false}
        decoding="async"
        className="
          absolute block max-w-none select-none pointer-events-none
          [--t:tan(atan2(100cqw,calc(100cqw_+_100cqh)))]
          [--dw:min(var(--size-w,max(100cqw,calc(100cqh*var(--ar)))),calc(100cqw*var(--w-per-rw)),calc(100cqh*var(--w-per-rh)))]
          [--dh:calc(var(--dw)*var(--h-per-w))]
          w-[var(--dw)]
          h-[var(--dh)]
          left-[clamp(max(calc(var(--dw)*-1*var(--xmin-r)),min(0px,calc(100cqw_-_var(--dw)))),calc((100cqw_-_var(--dw))*var(--ax)),min(calc(100cqw_-_var(--dw)*var(--xmax-r)),max(0px,calc(100cqw_-_var(--dw)))))]
          top-[clamp(max(calc(var(--dh)*-1*var(--ymin-r)),min(0px,calc(100cqh_-_var(--dh)))),calc((100cqh_-_var(--dh))*var(--ay)),min(calc(100cqh_-_var(--dh)*var(--ymax-r)),max(0px,calc(100cqh_-_var(--dh)))))]
        "
        {...imgProps}
      />
    </div>
  );
};
