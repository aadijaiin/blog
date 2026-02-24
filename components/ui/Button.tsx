import React from "react";

type ButtonProps = React.PropsWithChildren<{
  className?: string;
}>;

const Button = ({ children, className = "" }: ButtonProps) => {
  return (
    <button
      className={`premium-btn px-12 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold rounded-2xl shadow-lg ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
