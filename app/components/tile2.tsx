import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface Tile2Props {
  title: string;
  description: string;
  Icon: LucideIcon;
  variant?: "default" | "filled";
  className?: string;
}

export default function Tile2({
  title,
  description,
  Icon,
  variant = "default",
  className,
}: Tile2Props) {
  return (
    <div
      className={cn(
        "w-full h-full flex flex-col gap-4 p-6 border-l",
        "transition-all duration-300 ease-in-out",
        variant === "filled"
          ? "bg-indigo-100 border-l-indigo-500"
          : "border-l-gray-200 hover:bg-purple-50 hover:border-l-purple-500 hover:cursor-pointer",
        className
      )}
    >
      <div className="inline-flex p-3 rounded-xl bg-indigo-200/50 w-10 h-10 items-center justify-center">
        <Icon
          className={cn(
            "w-full h-full",
            variant === "filled" 
              ? "text-indigo-600" 
              : "text-indigo-500 group-hover:text-purple-600",
            "transition-colors duration-300"
          )}
        />
      </div>

      <h3 className={cn(
        " font-medium text-indigo-500 transition-colors duration-300 group-hover:text-purple-600",
        variant === "filled" 
          ? "text-indigo-600" 
          : "text-indigo-500 group-hover:text-purple-600"
      )}>
        {title}
      </h3>

      <p className="text-black">{description}</p>
    </div>
  );
}