import React from "react";

const variants = {
primary: "border-blue_gray-100 border-[3px] border-solid"
} as const;
const sizes = {
xs: "h-[24px] w-[24px]",
} as const;
type CheckboxProps = Omit<
React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
"size" | "prefix" | "type" | "onChange"
> &
Partial<{
className: string;
name: string;
label: string;
id: string;
onChange: Function;
variant: keyof typeof variants;
size: keyof typeof sizes;
onClick: () => void;
}>;
const CheckBox = React.forwardRef<HTMLInputElement, CheckboxProps>(
(
{
className = "",
name = "",
label = "",
id = "checkbox_id",
onChange,
variant = "primary",
size = "xs",
...restProps
},
ref,
) => {
const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
};
if (onChange) { onChange(e?.target?.checked);
};
return (
    <>
    <div className={className + "flex items-center gap-[5px] cursor-pointer"}>
    <input
    className={ `${(size && sizes [size]) || ""} ${(variant && variants [variant]) || ""}`}
    ref={ref}
    type="checkbox"
    name={name}
    onChange={handleChange}
    id={id}
    {...restProps}
    />
    {!!label && <label htmlFor={id}>{label}</label>}
    </div>
    </>
    );
    },
    );
    export { CheckBox };
