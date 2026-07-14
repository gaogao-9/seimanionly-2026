import { createContext, useContext, useState } from "react";

export type ImageContext<T extends string> = {
  loaded: boolean;
  images: { [k in T]: string };
  init: () => void;
  dispose: () => void;
};

export const createImageContext = <T extends string>(
  imageNames: readonly T[],
  computeResourcePath: (path: string) => string,
) => {
  const ImageContext = createContext<ImageContext<T> | null>(null);

  return {
    ImageContext,
    useImageContext: (): ImageContext<T> =>
      useContext(ImageContext) as ImageContext<T>,
    useImageContextValue: (): ImageContext<T> => {
      const [state, setState] = useState<ImageContext<T>>({
        loaded: false,
        images: {} as ImageContext<T>["images"],
        async init() {
          const imagePaths = createImagePaths(imageNames, computeResourcePath);
          const imagesPromise = preloadImages(imageNames, computeResourcePath);
          const delayPromise = new Promise((resolve) =>
            setTimeout(resolve, 1000),
          );
          await Promise.all([imagesPromise, delayPromise]);

          setState({
            ...state,
            loaded: true,
            images: imagePaths,
          });
        },
        dispose() {
          setState({
            ...state,
            loaded: false,
            images: {} as ImageContext<T>["images"],
          });
        },
      });

      return state;
    },
  };
};

const createImagePaths = <T extends string>(
  imageNames: readonly T[],
  computeResourcePath: (path: string) => string,
) => {
  const imagePaths = {} as { [k in T]: string };

  for (const imageName of imageNames) {
    const srcPath = computeResourcePath(imageName);
    imagePaths[imageName] = srcPath;
  }

  return imagePaths;
};

const preloadImages = async <T extends string>(
  imageNames: readonly T[],
  computeResourcePath: (path: string) => string,
): Promise<void> => {
  const promises: ReadonlyArray<Promise<void>> = imageNames.map((imageName) => {
    const srcPath = computeResourcePath(imageName);
    return preloadImage(srcPath);
  });

  await Promise.all(promises);
};

const preloadImage = (
  src: string,
  opts?: { srcset?: string; sizes?: string },
): Promise<void> => {
  const img = new Image();
  if (opts?.srcset) img.srcset = opts.srcset;
  if (opts?.sizes) img.sizes = opts.sizes;
  img.src = src;
  return img.decode();
};
