import React from "react";

interface SectionsProps {
  id: string;
  className: string;
  children: React.ReactNode;
}

export default function Sections({ id, className, children }: SectionsProps) {
  return (
    <section id={id} className={className}>
      {children}
    </section>
  );
}
