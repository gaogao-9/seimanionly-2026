"use client";

import { ResponsiveImage } from "@/components/custom/ResponsiveImage";
import { useTopImageContext } from "@/lib/useTopImageContext";
import { topImageSizes } from "@/foundation/topImageSizes";
import { Spinner } from "@/components/ui/spinner";

const clipRect = { xmin: 350, xmax: 1250, ymin: 200, ymax: 800 };
const logoClipRect = {
  xmin: 0,
  xmax: topImageSizes.logo.w,
  ymin: 0,
  ymax: topImageSizes.logo.h,
};

const Page: React.FC = () => {
  const { loaded, images } = useTopImageContext();

  return (
    <>
      <div className="grid *:[grid-area:1/2] w-[100cqw] h-[100cqh]">
        {loaded && (
          <>
            <ResponsiveImage
              src={images["bg.png"]}
              imageWidth={topImageSizes.bg.w}
              imageHeight={topImageSizes.bg.h}
              clipRect={clipRect}
            />
            <ResponsiveImage
              src={images["kirara.png"]}
              imageWidth={topImageSizes.kirara.w}
              imageHeight={topImageSizes.kirara.h}
              clipRect={clipRect}
              className="animate-fade-left animate-once animate-delay-[750ms] animate-ease-in-out animate-normal animate-fill-both"
            />
            <ResponsiveImage
              src={images["inukai.png"]}
              imageWidth={topImageSizes.inukai.w}
              imageHeight={topImageSizes.inukai.h}
              clipRect={clipRect}
              className="animate-fade-right animate-once animate-delay-[1050ms] animate-ease-in-out animate-normal animate-fill-both"
            />
            <ResponsiveImage
              src={images["logo.png"]}
              imageWidth={topImageSizes.logo.w}
              imageHeight={topImageSizes.logo.h}
              clipRect={logoClipRect}
              xalign="center"
              yalign={[
                { r: 0, a: 0.5 },
                { r: 0.5, a: 0.85 },
                { r: 0.695652, a: 0.95 },
                { r: 1, a: 0.95 },
              ]}
              size={[
                { r: 0, f: 0.95, b: "w" },
                { r: 0.25, f: 0.85, b: "w" },
                { r: 0.5, f: 0.3, b: "h" },
                { r: 1, f: 0.6, b: "h" },
              ]}
              className="animate-fade animate-once animate-delay-[1400ms] animate-ease-in-out animate-normal animate-fill-both"
            />
          </>
        )}
        <div
          className={`flex justify-center items-center bg-taupe-600 w-[100cqw] h-[100cqh] ${loaded ? "animate-play" : "animate-stop"} animate-fade animate-once animate-ease-in-out animate-reverse animate-fill-both`}
        >
          <div className="animate-fade animate-ease-in-out animate-once">
            <Spinner className="size-16" color="var(--color-gray-200)" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
