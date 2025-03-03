"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DollarSign, CreditCard, Smartphone, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion"; // Importar framer-motion

interface Product {
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
}

const products: Product[] = [
  {
    title: "Cuenta Corriente",
    description: "Gestiona tu dinero día a día sin comisiones",
    icon: <DollarSign className="h-6 w-6 text-primary-foreground" />,
    features: [
      "Sin comisión de mantenimiento",
      "Tarjeta débito gratuita",
      "Transferencias sin costo",
    ],
  },
  {
    title: "Tarjeta de Crédito",
    description: "Paga de forma segura y flexible",
    icon: <CreditCard className="h-6 w-6 text-primary-foreground" />,
    features: [
      "Sin cuota anual",
      "Cashback en compras",
      "Seguro de compra gratis",
    ],
  },
  {
    title: "Banca Móvil",
    description: "Tu banco en tu bolsillo",
    icon: <Smartphone className="h-6 w-6 text-primary-foreground" />,
    features: [
      "App intuitiva y segura",
      "Pagos móviles",
      "Notificaciones instantáneas",
    ],
  },
];

export default function ProductsPages() {
  return (
    <div className="container px-4 md:px-6">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
            Nuestros Productos
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl">
            Descubre todas las soluciones financieras que tenemos para ti
          </p>
        </div>
      </div>
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
        {products.map((product, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }} // Animación inicial
            animate={{ opacity: 1, y: 0 }} // Animación final
            transition={{ delay: index * 0.2, duration: 0.5 }} // Retraso para que las tarjetas aparezcan una por una
            className="transform transition duration-300 hover:scale-105 hover:shadow-lg" // Efecto de hover
          >
            <Card>
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
                  {product.icon}
                </div>
                <CardTitle className="mt-4">{product.title}</CardTitle>
                <CardDescription>{product.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="grid gap-2 text-sm">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
