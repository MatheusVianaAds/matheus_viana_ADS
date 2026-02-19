const variants = {
  h1: "text-4xl/7 md:text-[65px]/13 font-bold font-Darker",
  h2: "text-4xl/8 md:text-[65px]/13 font-bold font-Darker",
  h3: "text-2xl/7 font-semibold font-Darker",
  h4: "text-xl/7 font-medium font-Darker",
  p: "text-base/4 md:text-[20px]/5 font-Manrope",
  small: "text-sm/6 font-Manrope",
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
