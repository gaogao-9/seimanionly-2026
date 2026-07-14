import React from "react";
import { MenuIcon, XIcon } from "lucide-react";
import { LayoutBase } from "@/components/custom/LayoutBase";
import { RoutingMenu } from "@/components/custom/RoutingMenu";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";

interface TwoWayLayoutProps {
  scrollable?: boolean;
  children: React.ReactNode;
}

export const TwoWayLayout: React.FC<TwoWayLayoutProps> = ({
  scrollable = false,
  children,
}) => {
  return (
    <>
      <div className="grid [grid-template:'contents_sidebar'_1fr_/_1fr_auto] w-[100dvw] h-[100dvh]">
        <div className="[grid-area:contents] [container-type:size]">
          <LayoutBase scrollable={scrollable}>{children}</LayoutBase>
        </div>
        <div className="[grid-area:sidebar]">
          <div className="hidden lg:block w-[200px] h-[100dvh] overflow-y-auto p-4 bg-taupe-800">
            <RoutingMenu />
          </div>
        </div>
      </div>
      <div className="absolute">
        <Drawer swipeDirection="right">
          <DrawerTrigger
            render={
              <Button
                variant="outline"
                size="icon-lg"
                className="lg:hidden fixed top-[20px] right-[32px] rounded-sm border-gray-200 bg-taupe-800"
              >
                <MenuIcon className="size-8" color="var(--color-gray-200)" />
              </Button>
            }
          />
          <DrawerContent className="w-[200px] bg-taupe-800">
            <DrawerHeader>
              <DrawerDescription>
                <span className="flex justify-end px-3">
                  <DrawerClose
                    render={
                      <Button variant="secondary" size="icon-lg">
                        <XIcon
                          className="size-8"
                          color="var(--color-gray-200)"
                        />
                      </Button>
                    }
                  />
                </span>
              </DrawerDescription>
            </DrawerHeader>
            <div className="overflow-y-auto p-4">
              <RoutingMenu />
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </>
  );
};
