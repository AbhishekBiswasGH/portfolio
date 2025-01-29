"use client";

// libraries
import React from "react";

// types
interface ButtonProps {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children }) => {
  return <button data-testid="button">{children}</button>;
};

export default Button;
