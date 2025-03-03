"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function StartPages() {
  return (
    <div className="container px-4 md:px-6">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <motion.h2
            className="text-3xl font-bold tracking-tighter md:text-4xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            ¿Listo para empezar?
          </motion.h2>
          <motion.p
            className="max-w-[600px] text-muted-foreground md:text-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Únete a miles de personas que ya confían en nosotros para gestionar
            sus finanzas.
          </motion.p>
        </div>
        <div className="flex flex-col gap-2 min-[400px]:flex-row">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Button asChild size="lg">
              <Link href="/register">
                Abrir cuenta gratis
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Button variant="outline" size="lg">
              <Link href="#contacto">Contactar un asesor</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
