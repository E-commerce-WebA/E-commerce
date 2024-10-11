import React from "react";
import Select, { Props } from "react-select";

const shapes = {
  square: "rounded-[0px]",
} as const;
const variants = {
  outline: {
  }, blue_gray_100: "border-blue_gray-100 border border-solid text-gray-500",
} as const;
const sizes = {
  xs: "h-[60px] px-8 text-[18px]",
} as const;

type selectOptionType = { value: string; label: string };
type SelectProps = Omit<Props, "getOptionLabel"> &
    Partial<{
      className: string;
      options: selectOptionType[];
      isSearchable: boolean;
      isMulti: boolean;
      onChange: (option: any) => void;
      value: string;
      indicator: React.ReactElement;
      getOptionLabel: (e: any) => string;
      [x: string]: any;
      shape: keyof typeof shapes;
      variant: keyof typeof variants | null;
      size: keyof typeof sizes;
      color: keyof (typeof variants) [keyof typeof variants];
    }>;

const SelectBox = React.forwardRef<any, SelectProps>(
    (
        {
        children,
        className = "",
        options = [],
        isSearchable = false,
        isMulti = false,
        indicator,
        shape,
        variant = "outline",
        size = "xs",
        color = "blue_gray_100",
    ...restProps
    },
ref,
) => {
  // @ts-ignore
        return (
      <>
        <Select
            ref={ref}
            options={options}
            className={`${className} flex 
  ${shape ? shapes[shape as keyof typeof shapes] : ''} 
  ${size ? sizes[size as keyof typeof sizes] : ''} 
  ${variant && color ? variants[variant as keyof typeof variants][color as keyof (typeof variants)[typeof variant]] : ''}`}

            isSearchable={isSearchable}
                isMulti={isMulti}
                components={{
                    IndicatorSeparator: () => null,
                    ...(indicator && {DropdownIndicator: () => indicator }),
                }}
                styles={{
                indicatorsContainer: (provided) => ({
                ...provided,
                padding: undefined,
                flexShrink: undefined,
                width: "max-content",
                "& > div": { padding: 0},
                }),
                container: (provided) => ({
                ...provided,
                zIndex: 0,
                alignItems: "center",
                }),
                control: (provided) => ({
                    ...provided,
                backgroundColor: "transparent",
                border: "0 !important",
                boxShadow: "none !important",
                minHeight: "auto",
                width: "100%",
                flexWrap: undefined,
                "&:hover": {
                border: "0 !important",
                },
            }),
                input: (provided) => ({
                ...provided,
                color: "inherit",
            }),
                option: (provided, state) => ({
                ...provided,
                display: "flex",
                minWidth: "max-content",
                width: "100%",
                backgroundColor: state.isSelected? "#393d46": "transparent",
                color: state.isSelected ? "#ffffff": "inherit",
                "&:hover": {
                    backgroundColor: "#393d46",
                    color: "#ffffff",
                },
               }),
                singleValue: (provided) => ({
                ...provided,
                display: "flex",
                marginLeft: undefined,
                marginRight: undefined,
            }),
                    valueContainer: (provided) => ({
                        ...provided,
                        padding: 0,
                        display: "flex",
                        flexWrap: undefined,
                    }),
                    placeholder: (provided) => ({
                        ...provided,
                        margin: 0,
                    }),
                    menuPortal: (base) => ({ ...base, zIndex: 999999 }),
                    menu: (base) => ({ ...base, minWidth: "max-content", width: "max-content" }),
                }}
            menuPortalTarget={document.body}
            closeMenuOnScroll={(event: any) => {
                return event.target.id === "scrollContainer";
            }}
            {...restProps}
        />
          {children}
              </>
              );
          },
          );


export { SelectBox };
