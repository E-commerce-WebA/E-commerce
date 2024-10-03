import React from "react";
const sizes = {
  texts: "text-[24px] font-medium 1g:text-[20px] md:text-[22px]",
  headingxs: "text-[18px] font-bold lg:text-[15px]",
  headings: "text-[24px] font-bold lg:text-[20px] md:text-[22px]",
  headingmd:
    "text-[36px] font-bold lg:text-[30px] md:text-[34px] sm:text-[32px]",
  headinglg:
    "text-[56px] font-bold lg:text-[47px] md:text-[48px] sm:text-[42px]",
  headingxl: "text-[64px] font-bold lg:text-[64px] md:text-[48px]",
  heading2xl: "text-[72px] font-bold 1g:text-[72px] md:text-[48px]",
  heading3xl: "text-[128px] font-bold lg:text-[128px] md:text-[48px]",
  textmd: "text-[24px] font-medium 1g:text-[20px] md:text-[22px]",
};
export type HeadingProps = Partial<{
  className: string;
  as: any;
  size: keyof typeof sizes;
}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;
const Heading: React.FC<React.PropsWithChildren<HeadingProps>> = ({
  children,
  className = "",
  size = "headingmd",
  as,
  ...restProps
}) => {
  const Component = as || "h6";
  return (
    <Component
      className={`text-gray-800 font-poppins ${className} ${sizes[size]}`}
      {...restProps}
    >
      {children}{" "}
    </Component>
  );
};
export { Heading };
