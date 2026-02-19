
const Button = ({
  href = "https://api.whatsapp.com/send/?phone=5511975099618&text&type=phone_number&app_absent=0",
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