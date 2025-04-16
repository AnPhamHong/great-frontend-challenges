import { Loader2 } from "lucide-react";
import { ButtonProps, ButtonSize, ButtonVariant } from "@/types/button";
import { cn } from "@/utils/utils";

export default function Button({
  variant = "primary",
  size = "md",
  icon,
  iconRight,
  iconPosition = "left",
  disabled,
  loading = false,
  children,
  className,
  ariaLabel,
  type = "button",
  ...props
}: ButtonProps) {
  const isIconOnly = iconPosition === "only" && !children;

  const baseStyles =
    "inline-flex items-center justify-center rounded-md font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const variantStyles: Record<ButtonVariant, string> = {
    primary: "bg-[#4338CA] text-white hover:bg-[#5a4cff]",
    secondary:
      "bg-white text-[#4338CA] border border-[#4338CA] hover:bg-[#edeaff]",
    tertiary:
      "dark:text-[#f0f4f6] dark:bg-[#2f354b] bg-transparent text-[#121212] border dark:hover:bg-[#525868]",
    destructive:
      "dark:text-[#1e0d29] dark:bg-[#f35c55] bg-red-600 text-white hover:bg-red-700 dark:hover:bg-[#de4840]",
    link: "text-[#4338CA] underline hover:text-[#5a4cff]",
  };

  const sizeStyles: Record<ButtonSize, string> = {
    md: "text-sm px-4 py-2",
    lg: "text-base px-5 py-2.5",
    xl: "text-base px-6 py-3",
    "2xl": "text-lg px-8 py-4",
  };

  return (
    <button
      type={type}
      className={cn(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        isIconOnly && "p-2 w-10 h-10",
        className
      )}
      disabled={disabled || loading}
      aria-label={isIconOnly ? ariaLabel : undefined}
      {...props}
    >
      {loading && <Loader2 className="animate-spin w-4 h-4 mr-2" />}

      {/* Icon Left */}
      {!isIconOnly &&
        icon &&
        (iconPosition === "left" || iconPosition === "both") && (
          <span className="mr-2">{icon}</span>
        )}

      {/* Text */}
      {!isIconOnly && children}

      {/* Icon Right */}
      {!isIconOnly &&
        iconRight &&
        (iconPosition === "right" || iconPosition === "both") && (
          <span className="ml-2">{iconRight}</span>
        )}
      {/* Only Icon */}
      {isIconOnly && icon}
    </button>
  );
}
