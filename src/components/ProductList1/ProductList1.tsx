import React from "react";
import {Img} from "../Img/Img.tsx";
import  {Text} from "../Text/Text.tsx";


interface Props {
    className?: string;
    productImageOne?: string;
    productNameOne?: React. ReactNode;
    productPriceOne?: React. ReactNode;
    productImageTwo?: string;
    productNameTwo?: React. ReactNode;
    productPriceTwo?: React. ReactNode;
}

export default function ProductList1({
     productImageOne = "images/img_placeholder_176x176.png",
     productNameOne = "Blue Grey Warm Jacket",
     productPriceOne = "$299",
     productImageTwo = "images/img_placeholder_1.png",
     productNameTwo = "Black Jacket",
     productPriceTwo = "$299",
     ...props
}: Props) {
        return (
            <div {...props} className={`${props.className} flex flex-col items-center w-[48%] md:w-full gap-8`}>
                <div className="flex flex-col items-center gap-4 self-stretch bg-gray-50 p-8 sm:p-5">
                    <Img src={productImageOne} alt="Placeholder Image" className="h-[176px] w-[176px] object-cover" />
                    <div className="flex flex-col items-center justify-center gap-1.5">
                        <Text size="texts" as="p" className="text-[24px] font-medium text-gray-800">
                            {productNameOne}
                        </Text>
                        <Text as="p" className="text-[18px] font-medium text-gray-500">
                            {productPriceOne}
                        </Text>
                    </div>
                    <div className="flex flex-col items-center gap-3.5 self-stretch bg-gray-50 p-[30px] sm:p-5">
                    </div>
                    <Img src={productImageTwo} alt="Product Image" className="h-[176px] w-[176px] object-cover" />
                    <div className="flex flex-col items-center gap-2">
                        <Text size="texts" as="p" className="text-[24px] font-medium text-gray-800">
                            {productNameTwo}
                        </Text>
                        <Text as="p" className="text-[18px] font-medium text-gray-500">
                            {productPriceTwo}
                        </Text>
                </div>
            </div>
        </div>
        );
    }