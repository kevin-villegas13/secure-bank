import Link from "next/link";

export const Footer = () => (
  <footer id="contacto" className="w-full border-t py-6 md:py-12">
    <div className="container flex flex-col gap-8 px-4 md:px-6">
      <div className="grid gap-8 md:grid-cols-4">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">BancaDigital</h3>
          <p className="text-sm text-muted-foreground">
            Tu banco digital de confianza. Seguro, rápido y fácil de usar.
          </p>
        </div>
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Productos</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary"
              >
                Cuenta Corriente
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary"
              >
                Tarjetas
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary"
              >
                Préstamos
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary"
              >
                Inversiones
              </Link>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Ayuda</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary"
              >
                Centro de Ayuda
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary"
              >
                Seguridad
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary"
              >
                Contacto
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary"
              >
                FAQ
              </Link>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Legal</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary"
              >
                Términos
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary"
              >
                Privacidad
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary"
              >
                Cookies
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary"
              >
                Licencias
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-muted-foreground">
          © 2024 BancaDigital. Todos los derechos reservados. Entidad regulada
          por el Banco Central.
        </p>
        <div className="flex gap-4">
          <Link
            href="/terminos"
            className="text-sm text-muted-foreground hover:text-primary"
          >
            Términos de Servicio
          </Link>
          <Link
            href="/privacidad"
            className="text-sm text-muted-foreground hover:text-primary"
          >
            Política de Privacidad
          </Link>
          <Link
            href="/cookies"
            className="text-sm text-muted-foreground hover:text-primary"
          >
            Cookies
          </Link>
          <Link
            href="/ayuda"
            className="text-sm text-muted-foreground hover:text-primary"
          >
            Ayuda
          </Link>
        </div>
      </div>
    </div>
  </footer>
);
