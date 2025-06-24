import { cn } from "@/lib/utils";

interface DescriptionProps {
  maindescription: string;
  className?: string; // optional className prop
}

export default function Description({
  maindescription,
  className,
}: DescriptionProps) {
  return (
    <div className={cn("w-full", className)}>
      <div className="text-stone-700 text-center lg:text-left">
        {maindescription}
      </div>
    </div>
  );
}
