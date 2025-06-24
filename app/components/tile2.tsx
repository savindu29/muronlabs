import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface Tile2Props {
  title: string;
  description: string;
  Icon: LucideIcon;
  variant?: "default" | "filled";
}

export default function Tile2({
  title,
  description,
  Icon,
  variant = "default",
}: Tile2Props) {
  return (
    <div
      className={cn(
        "w-full p-6 rounded-xl border",
        "flex flex-col gap-4",
        variant === "filled"
          ? "bg-indigo-200 border-indigo-500 text-black"
          : "bg-white border-gray-200 text-gray-800"
      )}
    >
      <div
        className={cn(
          "w-12 h-12 rounded-lg flex items-center justify-center",
          variant === "filled" ? "bg-white/20" : "bg-indigo-50"
        )}
      >
        <Icon
          className={cn(
            "w-6 h-6",
            variant === "filled" ? "text-white" : "text-indigo-500"
          )}
        />
      </div>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-base">{description}</p>
    </div>
  );
}
