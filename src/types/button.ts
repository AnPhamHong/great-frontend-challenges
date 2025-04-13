import React, { ButtonHTMLAttributes, ReactNode } from "react";
import { LinkProps } from "react-router-dom";

export type ButtonOrLinkProps = {
  href?: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
} & React.HTMLAttributes<HTMLElement> &
  Partial<LinkProps>;

  export type ButtonVariant =
  | "primary"
  | "secondary"
  | "tertiary"
  | "destructive"
  | "link";
  export type ButtonSize = "md" | "lg" | "xl" | "2xl";
  export type IconPosition = "left" | "right" | "both" | "only";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: ReactNode;
  iconRight?: ReactNode;
  iconPosition?: IconPosition;
  loading?: boolean;
  children?: ReactNode;
  ariaLabel?: string;
}
