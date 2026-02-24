import { Link } from "react-router-dom";

const Button = ({
  href = "/lead-qualification",
  children,
  className = "",
  ...props
}) => {
  return (
    <Link
      to={href}
      className={[
        "inline-flex items-center justify-center",
        "bg-green-gradient",
        "hover:from-green-500 hover:to-green-400",
        "text-white-custom",
        "font-semibold",
        "px-8 py-5",
        "rounded-2xl",
        "shadow-lg",
        "hover:scale-105",
        "transition-all duration-300",
        "btn-personalizado",
        "w-full max-w-87.5",
        className,
      ].join(" ")}
      {...props}
    >
      {children}
    </Link>
  );
}

export default Button
