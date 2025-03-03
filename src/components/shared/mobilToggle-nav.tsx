import { Menu, X } from "lucide-react";

export default function MobileNavToggle({
  isMenuOpen,
  toggleMenu,
}: {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}) {
  return (
    <div className="md:hidden flex items-center gap-4">
      <button
        aria-label="Toggle Navigation"
        onClick={toggleMenu}
        className="text-xl text-primary hover:text-secondary transition duration-300"
      >
        {isMenuOpen ? <X /> : <Menu />}
      </button>
    </div>
  );
}
