import { createImageContext } from "@/lib/useImageContext";

const imageNames = ["bg.png", "inukai.png", "kirara.png", "logo.png"] as const;

export const {
  ImageContext: TopImageContext,
  useImageContext: useTopImageContext,
  useImageContextValue: useTopImageContextValue,
} = createImageContext(
  imageNames,
  (imageName) => `/assets/img/top/${imageName}`,
);
