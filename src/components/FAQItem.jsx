const FAQItem = ({ title, text, isOpen, onToggle }) => {
  return (
    <li
      className={`
        rounded-lg
        transition-all duration-300 ease-in-out transform
        hover:scale-105 hover:shadow-lg
        
      `}
    >
      {/* Botão do título */}
      <button
        type="button"
        onClick={onToggle}
        className={`
          flex w-full items-center justify-between gap-4
          py-5 px-4 text-left cursor-pointer
          ${isOpen? "rounded-t-lg" : "rounded-lg"}
          transition-colors duration-300 
          bg-blue-custom text-white-custom
          
        `}
      >
        <span className="font-medium text-[20px]">
          {title}
        </span>
        <span className="text-[1.4rem] font-semibold">
          {isOpen ? "–" : "+"}
        </span>
      </button>

      {/* Conteúdo interno */}
      <div
        className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          }`}
      >
        <div
          className={`
            overflow-hidden bg-white rounded-b-lg
          
          `}
        >
          {/* Padding interno do conteúdo */}
          <div className={`p-6`}>
            <p
              className={`
                 ${isOpen ? "border-l-2 border-black" : ""}
                 px-6
                leading-relaxed text-black transition-colors duration-300
                ${isOpen ? "block" : "hidden"}
              `}
            >
              {text}
            </p>
          </div>
        </div>
      </div>
    </li>
  );
};

export default FAQItem;