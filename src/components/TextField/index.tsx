import React from "react";

export type TextFieldProps = {
  className?: string;
  inputClassName?: string;
  placeholder?: string;
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
} & (
  | {
      id: string;
      label?: string;
    }
  | {
      id?: undefined;
      label?: undefined;
    }
);
export const TextField: React.FC<TextFieldProps> = ({
  id,
  className,
  inputClassName,
  label = "",
  placeholder = "",
  type = "text",
  value = "",
  onChange,
}) => {
  return (
    <div className={className}>
      {label ? <label htmlFor={id}>{label}</label> : ""}

      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className={inputClassName}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
