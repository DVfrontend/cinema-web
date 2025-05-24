import { memo } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import type { LayoutProps } from "@/types";

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-6 mt-3 sm:mt-6">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default memo(Layout);
