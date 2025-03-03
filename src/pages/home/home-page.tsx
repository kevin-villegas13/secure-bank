// pages/HomePages.tsx
"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Feature } from "@/components/shared/feature";

export default function HomePages() {
  const features = ["Sin comisiones", "100% online", "Soporte 24/7"];

  return (
    <div className="container px-4 md:px-6 mx-auto">
      <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
        {/* Sección de texto */}
        <motion.div
          className="flex flex-col justify-center space-y-4"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl">
              Tu banco digital de confianza
            </h1>
            <p className="max-w-[600px] text-muted-foreground md:text-xl">
              Gestiona tus finanzas de manera segura y eficiente. Accede a tu
              cuenta desde cualquier lugar y en cualquier momento.
            </p>
          </div>

          {/* Botones */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 min-[400px]:flex-row">
            <Button asChild size="lg">
              <Link href="/register">
                Abrir cuenta gratis
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg">
              <Link href="/login">Acceder</Link>
            </Button>
          </div>

          {/* Lista de características */}
          <motion.div
            className="flex flex-wrap gap-4 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            {features.map((feature) => (
              <Feature key={feature} text={feature} />
            ))}
          </motion.div>
        </motion.div>

        {/* Imagen */}
        <motion.div
          className="flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative">
            <div className="absolute -left-4 -top-4 h-72 w-72 bg-primary/10 rounded-full blur-3xl" />
            <img
              src="/placeholder.svg?height=550&width=550"
              alt="Banca Digital App"
              width={550}
              height={550}
              className="relative rounded-lg object-cover w-full max-w-md md:max-w-full"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
