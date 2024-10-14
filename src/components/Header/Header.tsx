import React from "react";
import { Img } from "../Img/Img.tsx";
import { Input } from "../Input/Input.tsx";
import { CloseSVG } from "../Input/Close.tsx";
import { Button } from "../Button/Button.tsx";

interface Props {
  className?: string;
}

const Header = ({ ...props }: Props) => {
  const [searchBarValue, setSearchBarValue] = React.useState("");

  return (
    <header
      {...props}
      className={`${props.className} flex items-center justify-center py-6 sm:py-4 bg-white-a700`}
    >
      <div className="container-xs flex justify-center lg:px-5 md:px-5">
        <div className="flex w-full items-center justify-between gap-5 md:flex-col">
          <Img

            src="images/img_header_logo_2.png"
            alt="Header Logo"
            className="h-[36px] w-[112px] self-end object-contain md:self-auto"
          
          />

          {/* Label wrapping the input */}
          <label
            htmlFor="search"
            className="flex w-[52%] border-2 border-solid border-gray-50 text-gray-500_7f md:w-full items-center justify-center cursor-text rounded-[0px] bg-white-a700 h-[48px] pl-8 text-[18px]"
          >
            <Input
              id="search"
              color="white_a700"
              size="xs"
              variant="fill"
              shape="square"
              name="Search Field"
              placeholder="Search here"
              value={searchBarValue}
              onChange={(e) => setSearchBarValue(e.target.value)}
              suffix={
                <div className="flex w-[48px] h-[48px] items-center justify-center bg-gray-800">
                  {searchBarValue?.length > 0 ? (
                    <CloseSVG
                      onClick={() => setSearchBarValue("")}
                      height={18}
                      width={18}
                    />
                  ) : (
                    <Img
                      src="images/img_search.svg"
                      alt="Search"
                      className="h-[18px] w-[18px] p-3.5"
                    />
                  )}
                </div>
              }
              className="w-full text-gray-500_7f"
            />
          </label>

          {/* Icons and Button */}
          <div className="flex w-[12%] items-center justify-between gap-5 md:w-full">
            <div className="flex w-[36%] justify-between gap-5">
              <a href="#">
                <Img
                  src="images/img_cart.svg"
                  alt="Cart Icon"
                  className="h-[24px] w-[24px]"
                />
              </a>
              <a href="#">
                <Img
                  src="images/img_email.svg"
                  alt="Email Icon"
                  className="h-[24px] w-[24px]"
                />
              </a>
            </div>
            <Button
              size="xs"
              shape="square"
              className=" min-w-[106px] px-[34px] self-center font-bold sm:px-4 flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap rounded-[0px] h-[52px] text-[14px] bg-gray-800 text-white-a700"
            >
              Login
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
