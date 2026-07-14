"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { routes } from "@/foundation/route";

interface RoutingMenuItemProps {
  title: string;
  isSelected?: boolean;
}

const RoutingMenuItem: React.FC<RoutingMenuItemProps> = ({
  title,
  isSelected = false,
}) => {
  return (
    <span
      className={`${isSelected ? "underline decoration-gray-200" : ""} font-['Kaisei_Opti',cursive] text-xl text-gray-200`}
    >
      {title}
    </span>
  );
};

export const RoutingMenu: React.FC = () => {
  const [currentPathName, setCurrentPathName] = useState<string | null>(null);

  useEffect(() => {
    setCurrentPathName(window.location.pathname);
  }, []);

  return (
    <ul className="text-center">
      {routes.map((route) => {
        const isSamePathname = route.pathname === currentPathName;

        return (
          <li key={route.title} className="my-5">
            {isSamePathname ? (
              <RoutingMenuItem title={route.title} isSelected />
            ) : (
              <Link href={route.pathname}>
                <RoutingMenuItem title={route.title} />
              </Link>
            )}
          </li>
        );
      })}
    </ul>
  );
};
