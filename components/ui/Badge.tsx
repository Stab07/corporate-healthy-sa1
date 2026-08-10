interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "light" | "outline";
}

export function Badge({ children, variant = "default" }: BadgeProps) {
  const variants = {
    default:
      "bg-primary/10 text-primary",
    light:
      "border border-white/20 bg-white/10 text-white backdrop-blur",
    outline:
      "border border-primary/30 text-primary",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full px-4 py-2 text-sm font-medium ${variants[variant]}`}
    >
      {children}
    </span>
  );
}
