import React from "react";
import {Img} from "../Img/Img.tsx";
import {Text} from "../Text/Text.tsx";


interface Props {
    className?: string;
    productImage?: string;
    productName?: React.ReactNode;
    productPrice?: React.ReactNode;
}

const ProductDetails4 = ({
     productImage="images/img_placeholder_4.png",
     productName="Pink Shirt",
     productPrice="$299",
     ...props
 }: Props) => {
    return (
        <div {...props} className={`${props.className} flex flex-col items-center w-[22%] gap-3.5`}>
            <Img src={productImage} alt="Placeholder Image" className="h-[250px] w-full object-cover"/>
            <div className="flex flex-col items-center gap-2">
                <Text size="texts" as="p" className="text-[24px] font-medium text-gray-800">
                    {productName}
                </Text>
                <Text as="p" className="text-[18px] font-medium text-gray-500">
                    {productPrice}
                </Text>
            </div>
        </div>
    );
}

export default ProductDetails4;