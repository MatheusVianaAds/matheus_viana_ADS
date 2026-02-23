const FAQItem = ({ title, text, isOpen, onToggle }) => {
  return (
    <li >
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 py-5 text-left cursor-pointer"
      >
        <span className="font-medium text-[20px] text-gray-dark">
          {title}
        </span>

        <span className="text-[1.4rem] font-semibold text-gray-dark">
          {isOpen ? "–" : "+"}
        </span>
      </button>

      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className="leading-relaxed text-gray-dark">
            {text}
          </p>
        </div>
      </div>
    </li>
  );
}

export default FAQItem