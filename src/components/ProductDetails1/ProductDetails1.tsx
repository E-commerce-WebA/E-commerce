import { Text } from "../Text/Text.tsx";
import { Img } from "../Img/Img.tsx";
import React from "react";

interface Props {
    className?: string;
    productImage?: string;
    productName?: React.ReactNode;
    productPrice?: React.ReactNode;
}

const ProductDetails1 = ({
    productImage = "images/img_mask_group.png",
    productName = (
        <>
            Green <br />
            Warm Jacket
        </>
    ),
    productPrice = "$299",
    ...props
    }: Props) => {
  return (
      <div {...props} className={`${props.className} flex flex-col items-center w-full gap-4`}>
        <Img src={productImage} alt="Product Image" className="h-[244px] w-full object-cover" />
        <div className="mx-10 flex flex-col items-center gap-2 self-stretch">
            <Text size="texts" as="p" className="text-center text-[24px] font-medium leading-9 text-gray-800">
                {productName}
            </Text>
            <Text as="p" className="text-[18px] font-medium text-gray-500">
                {productPrice}
            </Text>
        </div>
    </div>
  );
}

export default ProductDetails1;