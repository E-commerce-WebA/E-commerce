import React from "react";
import { Img } from "../Img/Img.tsx";
import { Text } from "../Text/Text.tsx";
import { Button } from "../Button/Button.tsx";

interface Props {
  className?: string;
  productImage?: string;
  productName?: React.ReactNode;
  productPrice?: React.ReactNode;
}

const ProductCard = ({
  productImage = "images/img_placeholder_3.png",
  productName = "Black Highheels",
  productPrice = "$299",
  ...props
}: Props) => {
  return (
    <div
      {...props}
      className={`${props.className} product-card relative flex flex-col items-center w-full gap-4 
    shadow shadow-white md:shadow-indigo-500/40
     p-[20px]`}
    >
      <div className="relative w-full">
        <Img
          src={productImage}
          alt="Product Image"
          className="h-[250px] w-full object-cover"
        />
        
      </div>
      <div className="mx-7 flex flex-col items-center justify-center gap-1.5 self-stretch">
        <Text
          size="texts"
          as="p"
          className="text-[24px] font-medium text-gray-800"
        >
          {productName}
        </Text>
        <Text as="p" className="text-[18px] font-medium text-gray-500">
          {productPrice}
        </Text>
      </div>
      <Button shape="square" className=" add_to_cart min-w-[200px] px-[34px] mx-6 font-bold md:mx-0 sm:px-4 flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap rounded-[0px] h-[60px] text-[18px] bg-gray-800 text-white-a700">
                    Add to Cart
     </Button>
    </div>
  );
};

export default ProductCard;
