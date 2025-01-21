import { ReactElement } from "react";

export interface ButtonProps {
  variant: "primary" | "secondary";
  size: "sm" | "md" | "lg" | "xl";
  text: string;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  onClick: () => void;
}

const variantStyle = {
  primary: "bg-purple-600 text-white",
  secondary: "bg-purple-300 text-purple-600",
};

const defaultStyle = "flex items-center text-light";

const sizeStyle = {
  sm: "py-1 px-2 rounded-sm text-sm",
  md: "py-2 px-4 rounded-md text-md",
  lg: "py-4 px-6 rounded-lg text-lg",
  xl: "py-6 px-8 rounded-xl text-xl",
};

export const Button = (props: ButtonProps) => {
  return (
    <button
      className={`${variantStyle[props.variant]} ${defaultStyle} ${
        sizeStyle[props.size]
      }`}
    >
      {props.startIcon ? <div className="pr-2">{ props.startIcon }</div> : null}
      {props.text} {props.endIcon}
      { props.endIcon ? <div className="pl-2">{ props.endIcon }</div> : null}
    </button>
  );
};
