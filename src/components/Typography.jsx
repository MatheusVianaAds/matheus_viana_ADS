const variants = {
  h1: "text-4xl md:text-5xl font-bold leading-tight",
  h2: "text-3xl md:text-4xl font-semibold",
  h3: "text-2xl font-semibold",
  h4: "text-xl font-medium",
  p: "text-base md:text-lg text-gray-300",
  small: "text-sm text-gray-400",
  span: "",
};

export default function Typography({
  as = "p",
  children,
  className = "",
}) {
    
  const Component = as;

  return (
    <Component className={`${variants[as] || ""} ${className}`}>
      {children}
    </Component>
  );
}
