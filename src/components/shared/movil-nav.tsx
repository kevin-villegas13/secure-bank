import { Button } from "@/components/ui/button";
import { navbarButtons, navbarLinks } from "@/config/navbar";
import { motion } from "framer-motion";
import Link from "next/link";

export default function MobileNav({ isMenuOpen }: { isMenuOpen: boolean }) {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: isMenuOpen ? 1 : 0, y: isMenuOpen ? 0 : -20 }}
      transition={{ duration: 0.3 }}
      className={`${
        isMenuOpen ? "flex" : "hidden"
      } md:hidden flex-col items-center gap-4 absolute top-16 left-0 right-0 bg-background/95 p-4 transition-all duration-300`}
    >
      {navbarLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="text-sm font-medium hover:underline transition-all duration-300"
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
    </motion.nav>
  );
}
