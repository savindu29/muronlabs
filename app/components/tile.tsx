import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface Tile1Props {
  Icon: LucideIcon;
  topic?: string;
  description: string;
  points: string[];
  className?: string;
}

export default function Tile1({
  Icon,
  topic,
  description,
  points,
  className,
}: Tile1Props) {
  return (
    <div
      className={cn(
        "w-full h-full flex flex-col gap-2 p-6 border-l  border-l-gray-200",
        "transition-all duration-300 ease-in-out",
        "hover:bg-purple-50 hover:border-l-purple-500 hover:cursor-pointer hover:border-l-2",
        className
      )}
    >
      <div className="flex flex-col  gap-4 ">
        <div className="inline-flex p-3 rounded-xl bg-indigo-200/50 w-10 h-10 items-center justify-center">
          <Icon
            className={cn(
              "w-full h-full text-indigo-500", // Use full width/height of parent
              "transition-colors duration-300",
              "group-hover:text-purple-600"
            )}
          />
        </div>
        {topic && (
          <div
            className={cn(
              " font-medium text-indigo-500",
              "transition-colors duration-300",
              "group-hover:text-purple-600"
            )}
          >
            {topic}
          </div>
        )}
      </div>

      <div className=" font-medium  mt-2">{description}</div>

      <ul className="list-disc pl-6  mt-3 space-y-2">
        {points.map((point, index) => (
          <li key={index} className=" text-sm">
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
}
