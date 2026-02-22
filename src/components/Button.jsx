
const Button = ({
  href = "https://typebot.co/form-qualification",
  children,
  className = "",
  ...props
}) => {
  return (
    <a
      href={href}
      target="_blank"
      className={[
        "inline-flex items-center justify-center",
        "bg-green-gradient",
        "hover:from-green-500 hover:to-green-400",
        "text-white-custom",
        "font-semibold",
        "px-8 py-4",
        "rounded-2xl",
        "shadow-lg",
        "hover:scale-105",
        "transition-all duration-300",
        "btn-personalizado",
        className,
      ].join(" ")}
      {...props}
    >
      {children}
    </a>
  );
}

export default Button
