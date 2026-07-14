"use client";

import { TwoWayLayout as Layout } from "@/components/custom/TwoWayLayout";

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Layout scrollable>{children}</Layout>;
}
