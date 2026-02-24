import Typography from "./Typography";

const MethodCard = ({ before, strong, after, icon, alt }) => {
  return (
    <div className="
      bg-white/5 
      border-t-4
      border-blue-custom
      rounded-2xl
      py-12
      p-6
      backdrop-blur-sm
      hover:scale-[1.02]
      transition-all
      duration-300
      shadow-sm
    ">

      {/* Ícone mockado */}
      <div className="flex items-center justify-center w-28 h-28 bg-blue-custom rounded-xl mb-6 mx-auto ">
        <img src={`${icon}.png`} alt={alt} width={"56"} height={"56"} loading="lazy" decoding="async"/>
      </div>

      <Typography as="p" className="text-gray-dark text-2xl">
        {before}{" "}
        <strong className="text-gray-dark font-bold">{strong}</strong>{" "}
        {after}
      </Typography>

    </div>
  );
};

export default MethodCard;
