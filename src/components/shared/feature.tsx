import { CheckCircle2 } from "lucide-react";

interface FeatureProps {
  text: string;
}

export function Feature({ text }: FeatureProps) {
  return (
    <div className="flex items-center gap-1">
      <CheckCircle2 className="h-4 w-4 text-primary" />
      <span>{text}</span>
    </div>
  );
}
