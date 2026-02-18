import React from 'react'

const Button = ({ children, onClick, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`
        bg-gradient-to-r 
        from-green-600 
        to-green-500 
        hover:from-green-500 
        hover:to-green-400
        text-white 
        font-semibold 
        px-8 
        py-4 
        rounded-2xl 
        transition-all 
        duration-300 
        shadow-lg 
        hover:scale-105
        ${className}
      `}
    >
      {children}
    </button>
  );
}

export default Button