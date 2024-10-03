import React from "react";

const shapes = {
  square: "rounded-p-[0px]",
} as const;

const variants = {
  fill: {
    white_a700: "bg-white_a700",
  },
  underline: {
    blue_gray_100: "text-gray-800 border-2 border-blue_gray-100 border-solid",
  },
  outline: {
    blue_gray_700: "border-blue_gray-800 border border-solid text-gray-800",
  },
} as const;

const sizes = {
  sm: "h-[56px] pr-[34px] text-[18px]",
  md: "h-[60px] pl-6 pr-4 text-[18px]",
  xs: "h-[48px] pl-8 text-[18px]",
  lg: "h-[60px] pl-6 pr-4",
} as const;

type InputProps = Omit<
  React.ComponentPropsWithRef<"input">,
  "prefix" | "size"
> &
  Partial<{
    label: string;
    prefix: React.ReactNode;
    suffix: React.ReactNode;
    shape: keyof typeof shapes;
    variant: keyof typeof variants | null;
    size: keyof typeof sizes;
    color: string;
  }>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className = "",
      name = "",
      placeholder = "",
      type = "text",
      label = "",
      prefix,
      suffix,
      onChange,
      shape,
      variant = "outline",
      size = "lg",
      color = "blue_gray_100",
      ...restProps
    },
    ref
  ) => {
    return (
        <label
        className={`
          ${className} 
          flex items-center justify-center cursor-text 
          ${shape && shapes[shape]} 
          ${variant ? variants[variant]?.[color as keyof typeof variants[typeof variant]] ?? '' : ''} 
          ${size && sizes[size]}
        `}
      >
      
      
        {!!label && label}
        {!!prefix && prefix}
        <input
          ref={ref}
          type={type}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          {...restProps}
        />
        {!!suffix && suffix}
      </label>
    );
  }
);

export { Input };
