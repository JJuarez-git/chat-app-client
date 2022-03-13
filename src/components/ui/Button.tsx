import React from "react";

interface ButtonProps {
  children: any;
  className?: string;
  disabled?: boolean;
}

const Button = (props: ButtonProps) => {
  const { children, className, disabled } = props;
  return <button {...{ className, disabled }}>{children}</button>;
};

export default Button;
