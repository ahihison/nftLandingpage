import React from "react";

const Button = ({ children, className, link = "", ...props }) => {
  if (link.length > 0)
    return (
      <a
        href={link}
        className={`justify-center rounded-2xl flex items-center gap-x-3 px-8 text-white ${
          className || ""
        }`}
        {...props}
      >
        {children}
      </a>
    );
  return (
    <button
      className={`justify-center rounded-2xl flex items-center gap-x-3 px-8 text-white ${
        className || ""
      }`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
