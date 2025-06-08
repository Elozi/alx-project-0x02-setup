import React from "react";
import { ButtonProps } from "@/interfaces";

const sizeClasses = {
  small: "px-2 py-1 text-sm",
  medium: "px-4 py-2",
  large: "px-6 py-3 text-lg",
};

const Button: React.FC<ButtonProps> = ({ size, shape, label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-blue-500 text-white ${sizeClasses[size]} ${shape} hover:bg-blue-600`}
    >
      {label}
    </button>
  );
};

export default Button;
