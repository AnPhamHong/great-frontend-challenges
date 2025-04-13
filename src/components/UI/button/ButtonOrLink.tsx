import { forwardRef } from "react";
import { Link } from "react-router-dom";
import { cn } from "../../../utils/utils";
import { ButtonOrLinkProps } from "../../../types/button";

const ButtonOrLink = forwardRef<HTMLElement, ButtonOrLinkProps>(
  ({ href, children, className, ...props }, ref) => {
    const isLink = typeof href === "string";

    if (isLink) {
      return (
        <Link
          to={href}
          className={cn("inline-flex items-center", className)}
          ref={ref as any}
          {...props}
        >
          {children}
        </Link>
      );
    }

    return (
      <button
        type={props.type || "button"}
        className={cn("inline-flex items-center", className)}
        onClick={props.onClick}
        ref={ref as any}
        {...props}
      >
        {children}
      </button>
    );
  }
);

ButtonOrLink.displayName = "ButtonOrLink";

export default ButtonOrLink;
