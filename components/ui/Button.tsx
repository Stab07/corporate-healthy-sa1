"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "accent" | "secondary" | "light" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
  showArrow?: boolean;
}

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  type = "button",
  disabled,
  showArrow = true,
}: ButtonProps) {
  const base =
    "group relative inline-flex items-center gap-2.5 rounded-full font-medium transition-all duration-200 active:scale-[0.97]";

  const sizes = {
    sm: "px-5 py-3 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const variants = {
    primary:
      "bg-primary text-white hover:bg-primary-light shadow-[inset_0_1px_1px_rgba(255,255,255,0.25)]",
    accent:
      "bg-accent text-primary-dark hover:brightness-[0.96] hover:shadow-[0_8px_24px_rgba(242,166,90,0.4)] shadow-[inset_0_1px_1px_rgba(255,255,255,0.35)]",
    secondary:
      "border-2 border-primary text-primary hover:bg-primary hover:text-white",
    light:
      "border-2 border-white/60 text-white hover:bg-white hover:text-primary-dark",
    ghost: "text-primary hover:bg-primary/5",
  };

  const arrowClasses: Record<string, string> = {
    primary: "bg-white/15 text-white",
    accent: "bg-primary-dark/10 text-primary-dark",
    secondary: "bg-primary/10 text-primary group-hover:bg-white/20 group-hover:text-white",
    light: "bg-white/15 text-white group-hover:bg-primary-dark/10 group-hover:text-primary-dark",
    ghost: "bg-primary/10 text-primary",
  };

  const content = (
    <>
      <span>{children}</span>
      {showArrow && (
        <span
          className={`w-7 h-7 rounded-full flex items-center justify-center transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-[1px] group-hover:scale-105 ${arrowClasses[variant]}`}
        >
          <ArrowRight size={14} strokeWidth={2.5} />
        </span>
      )}
    </>
  );

  const cls = `${base} ${sizes[size]} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <motion.span
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className="inline-block"
      >
        <Link href={href} className={cls}>
          {content}
        </Link>
      </motion.span>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: disabled ? 1 : 1.03 }}
      whileTap={{ scale: disabled ? 1 : 0.97 }}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${cls} ${disabled ? "opacity-60 cursor-not-allowed" : ""}`}
    >
      {content}
    </motion.button>
  );
}
