import { LinkProps } from "react-router-dom";

export type ButtonOrLinkProps = {
    href?: string;
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
  } & React.HTMLAttributes<HTMLElement> &
    Partial<LinkProps>;