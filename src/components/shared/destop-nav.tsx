import { Button } from "@/components/ui/button";
import { navbarButtons, navbarLinks } from "@/config/navbar";
import Link from "next/link";

export default function DesktopNav() {
  return (
    <nav className="hidden md:flex items-center gap-6">
      {navbarLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="text-sm font-medium hover:text-primary transition-colors duration-300"
        >
          {link.label}
        </Link>
      ))}

      {navbarButtons.map((button) => (
        <Button key={button.href} asChild>
          <Link
            href={button.href}
            className="text-sm font-medium hover:underline transition-all duration-300"
          >
            {button.label}
          </Link>
        </Button>
      ))}
    </nav>
  );
}
