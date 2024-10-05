import React from "react";
import {Img} from "../Img/Img.tsx";
import {Text} from "../Text/Text.tsx";


interface Props {
    className?: string;
    productImage?: string;
    productName?: React.ReactNode;
    productPrice?: React.ReactNode;
}

const ProductCard = ({
       productImage="images/img_placeholder_3.png",
       productName="Black Highheels",
       productPrice="$299",
       ...props
}: Props) => {
    return (
        <div {...props} className={`${props.className} flex flex-col items-center w-full gap-4`}>
            <Img src={productImage} alt="Product Image" className="h-[250px] w-full object-cover"/>
            <div className="mx-7 flex flex-col items-center justify-center gap-1.5 self-stretch">
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

export default ProductCard;