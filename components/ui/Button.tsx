import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant =
  | "primary"
  | "achievement"
  | "secondary"
  | "ghost"
  | "danger";

type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
};

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-indigo-600 text-white shadow-sm hover:bg-indigo-700 focus:ring-indigo-500/20",

  achievement:
    "bg-amber-500 text-slate-950 shadow-sm hover:bg-amber-400 focus:ring-amber-500/20",

  secondary:
    "border border-slate-300 bg-white text-slate-700 shadow-sm hover:bg-slate-50 hover:text-slate-950 focus:ring-slate-500/10",

  ghost:
    "bg-transparent text-indigo-600 hover:bg-indigo-50 hover:text-indigo-800 focus:ring-indigo-500/10",

  danger:
    "bg-rose-600 text-white shadow-sm hover:bg-rose-700 focus:ring-rose-500/20",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "rounded-lg px-3 py-2 text-sm",
  md: "rounded-xl px-5 py-3 text-sm",
  lg: "rounded-xl px-6 py-3.5 text-base",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`inline-flex items-center justify-center font-semibold transition focus:outline-none focus:ring-4 disabled:cursor-not-allowed disabled:opacity-50 ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}