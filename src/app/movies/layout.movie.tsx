import React from "react";
import type { LayoutProps } from "@/types";

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return <div className="flex flex-col min-h-screen">{children}</div>;
};

export default Layout;
