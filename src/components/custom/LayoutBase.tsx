import { Footer } from "@/components/custom/Footer";
import React from "react";

interface LayoutBaseProps {
  scrollable: boolean;
  children: React.ReactNode;
}

export const LayoutBase: React.FC<LayoutBaseProps> = ({
  scrollable,
  children,
}) => {
  return (
    <div className="grid [grid-template:'contents'_1fr_'footer'_auto_/_1fr] w-[100cqw] h-[100cqh] overflow-hidden">
      <div
        className={`[container-type:size] [grid-area:contents] bg-taupe-600 ${scrollable ? "overflow-y-scroll" : ""}`}
      >
        {children}
      </div>
      <div className="[grid-area:footer]">
        <Footer />
      </div>
    </div>
  );
};
