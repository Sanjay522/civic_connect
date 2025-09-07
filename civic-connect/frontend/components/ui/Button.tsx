"use client";

import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "default" | "destructive" | "outline";
  size?: "default" | "icon";
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "default",
  size = "default",
  className,
  ...props
}) => {
  const baseStyles = "rounded-lg font-medium focus:outline-none focus:ring-2 focus:ring-blue-500";
  const variantStyles = {
    default: "bg-blue-600 text-white hover:bg-blue-700 px-4 py-2",
    destructive: "bg-red-600 text-white hover:bg-red-700 px-4 py-2",
    outline: "border border-gray-300 text-gray-700 hover:bg-gray-100 px-4 py-2",
  };
  const sizeStyles = {
    default: "",
    icon: "p-2",
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
