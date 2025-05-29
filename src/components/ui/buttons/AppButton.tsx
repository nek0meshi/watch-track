import clsx from "clsx";
import type { ButtonHTMLAttributes } from "react";

interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export const AppButton = ({
  children,
  className,
  ...props
}: AppButtonProps) => {
  return (
    <button className={clsx("btn btn-primary", className)} {...props}>
      {children}
    </button>
  );
};

export default AppButton;
