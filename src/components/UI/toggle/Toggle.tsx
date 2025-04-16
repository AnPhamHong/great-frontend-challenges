import { PropsToggle, SizeToggle } from "../../../types/toggle";
import { cn } from "../../../utils/utils";

const sizeMap: Record<SizeToggle, string> = {
  small: "w-9 h-5 after:h-4 after:w-4",
  default: "w-11 h-6 after:h-5 after:w-5",
  large: "w-14 h-7 after:h-6 after:w-6",
};

export default function Toggle({
  id,
  checked,
  disabled,
  text,
  onChange,
  size,
  classNameToggle,
  classNameText,
  mainColor = "#2563EB",
  circleColor = "#FFFFFF",
  baseColor = "#E5E7EB",
}: PropsToggle) {
  return (
    <label className="inline-flex items-center cursor-pointer" htmlFor={id}>
      <input
        id={id}
        type="checkbox"
        className="sr-only peer"
        disabled={disabled}
        checked={checked}
        readOnly
        onClick={(e: React.MouseEvent<HTMLInputElement>) =>
          onChange((e.target as HTMLInputElement).checked)
        }
      />
      <div
        className={cn(
          "relative rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:rounded-full after:transition-all",
          sizeMap[size],
          classNameToggle
        )}
        style={{
          backgroundColor: checked ? mainColor : baseColor,
        }}
      >
        <div
          className="absolute rounded-full border border-gray-300 dark:border-gray-600"
          style={{
            top: "2px",
            left: checked ? "calc(100% - 22px)" : "2px",
            width:
              size === "large" ? "24px" : size === "small" ? "16px" : "20px",
            height:
              size === "large" ? "24px" : size === "small" ? "16px" : "20px",
            backgroundColor: circleColor,
            transition: "all 0.3s",
          }}
        />
      </div>
      {text && (
        <span
          className={cn(
            "ms-3 text-sm font-medium text-gray-400 dark:text-gray-500",
            classNameText
          )}
        >
          {text}
        </span>
      )}
    </label>
  );
}
