
const FAQItem = ({ title, text, isOpen, onToggle }) => {
  return (
    <li>
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
      >
        <span className="font-medium text-slate-900">
          {title}
        </span>

        <span className="text-xl font-semibold text-slate-500">
          {isOpen ? "–" : "+"}
        </span>
      </button>

      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-sm leading-relaxed text-slate-600">
            {text}
          </p>
        </div>
      </div>
    </li>
  );
}

export default FAQItem