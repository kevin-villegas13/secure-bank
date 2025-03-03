import Link from "next/link";

const footerLinks = [
  {
    title: "Productos",
    links: [
      { href: "#", text: "Cuenta Corriente" },
      { href: "#", text: "Tarjetas" },
      { href: "#", text: "Préstamos" },
      { href: "#", text: "Inversiones" },
    ],
  },
  {
    title: "Ayuda",
    links: [
      { href: "#", text: "Centro de Ayuda" },
      { href: "#", text: "Seguridad" },
      { href: "#", text: "Contacto" },
      { href: "#", text: "FAQ" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "#", text: "Términos" },
      { href: "#", text: "Privacidad" },
      { href: "#", text: "Cookies" },
      { href: "#", text: "Licencias" },
    ],
  },
];

export default function Footer() {
  const years = new Date().getFullYear();

  return (
    <footer id="contacto" className="w-full border-t py-6 md:py-12">
      <div className="container flex flex-col gap-8 px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">BancaDigital</h3>
            <p className="text-sm text-muted-foreground">
              Tu banco digital de confianza. Seguro, rápido y fácil de usar.
            </p>
          </div>

          {footerLinks.map((section, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-lg font-semibold">{section.title}</h3>
              <ul className="space-y-2 text-sm">
                {section.links.map((link, idx) => (
                  <li key={idx}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-md"
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-muted-foreground">
            © {years} BancaDigital. Todos los derechos reservados. Entidad
            regulada por el Banco Central.
          </p>
          <div className="flex gap-4">
            <Link
              href="/terminos"
              className="text-sm text-muted-foreground hover:text-primary transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-md"
            >
              Términos de Servicio
            </Link>
            <Link
              href="/privacidad"
              className="text-sm text-muted-foreground hover:text-primary transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-md"
            >
              Política de Privacidad
            </Link>
            <Link
              href="/cookies"
              className="text-sm text-muted-foreground hover:text-primary transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-md"
            >
              Cookies
            </Link>
            <Link
              href="/ayuda"
              className="text-sm text-muted-foreground hover:text-primary transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-md"
            >
              Ayuda
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
