"use client";

import { Shield, Lock, Phone } from "lucide-react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function SecurityPages() {
  const securityFeatures = [
    {
      icon: Shield,
      title: "Autenticación Segura",
      description: "Verificación en dos pasos y biometría",
    },
    {
      icon: Lock,
      title: "Encriptación Avanzada",
      description: "Tus datos siempre protegidos",
    },
    {
      icon: Phone,
      title: "Monitoreo 24/7",
      description: "Alertas de actividad sospechosa",
    },
  ];

  return (
    <div className="container px-4 md:px-6">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
            Seguridad Garantizada
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl">
            Tu seguridad es nuestra prioridad. Implementamos las últimas
            tecnologías en seguridad bancaria.
          </p>
        </div>
      </div>
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
        {securityFeatures.map(({ icon: Icon, title, description }, index) => (
          <div
            key={index}
            className="transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
          >
            <Card className="p-4">
              <CardHeader>
                <Icon className="h-12 w-12 text-primary" />
                <CardTitle className="mt-4">{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
              </CardHeader>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
