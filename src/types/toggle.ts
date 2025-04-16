export type PropsToggle = {
  id: string;
  checked?: boolean;
  disabled?: boolean;
  text?: string;
  onChange: (value: boolean) => void;
  size: "small" | "default" | "large";
  classNameToggle?: string;
  classNameText?: string;
  mainColor?: string;
  circleColor?: string;
  baseColor?: string;
};

export type SizeToggle = "small" | "default" | "large";
