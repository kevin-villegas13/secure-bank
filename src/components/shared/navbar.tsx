"use client";

import { useState } from "react";
import DesktopNav from "./destop-nav";
import MobileNavToggle from "./mobilToggle-nav";
import MobileNav from "./movil-nav";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 font-bold text-xl text-primary">
          <span>BancaDigital</span>
        </div>

        {/* Menú de navegación en desktop */}
        <DesktopNav />

        {/* Menú hamburguesa para móviles */}
        <MobileNavToggle isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />

        {/* Menú de navegación en móvil */}
        <MobileNav isMenuOpen={isMenuOpen} />
      </div>
    </header>
  );
}
