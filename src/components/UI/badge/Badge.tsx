import { CheckCircle, Clock, PauseCircle } from "lucide-react";
import { BadgeProps, BadgeVariant } from "@/types/badge";
import { JSX } from "react";
import { cn } from "@/utils/utils";

const iconMap: Record<BadgeVariant, JSX.Element> = {
  success: <CheckCircle className="w-3.5 h-3.5 mr-1" />,
  warning: <Clock className="w-3.5 h-3.5 mr-1" />,
  neutral: <PauseCircle className="w-3.5 h-3.5 mr-1" />,
};

const colorMap: Record<BadgeVariant, string> = {
  success: "bg-green-200 text-success dark:bg-green-800 dark:text-green-200",
  warning:
    "bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-200",
  neutral: "bg-zinc-200 text-zinc-800 dark:bg-zinc-700 dark:text-zinc-300",
};

export default function Badge({
  text,
  variant = "neutral",
  className,
  withIcon = false,
}: BadgeProps) {
  return (
    <span className={cn(colorMap[variant], className)}>
      {withIcon && iconMap[variant]}
      {text}
    </span>
  );
}
