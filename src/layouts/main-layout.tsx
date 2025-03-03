import Footer from "@/components/shared/footer";
import { Navbar } from "@/components/shared/navbar";
import { ReactNode } from "react";

export const MainLayout = ({ children }: { children: ReactNode }) => (
  <div className="flex min-h-screen flex-col">
    <Navbar />
    <main className="flex-1">{children}</main>
    <Footer />
  </div>
);
