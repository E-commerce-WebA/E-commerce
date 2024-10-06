import React from 'react'
import { RatingBar} from "../../components/RatingBar/RatingBar"
import { Text } from "../../components/Text/Text";
import {Img} from "../../components/Img/Img"


interface Props {
className?: string;
productimage1?: string;
productname1?: React.ReactNode;
productprice1?: React. ReactNode;
productimage2?: string;
productname2?: React. ReactNode;
productprice2?: React. ReactNode;
productimage3?: string;
productname3?: React. ReactNode;
productprice3?: React. ReactNode;
}
export default function ProductList11({
productimage1 = "images/img_placeholder_174x224.png",
productname1 = "Checkered Jacket",
productprice1 = "$299",
productimage2 = "images/img_placeholder_7.png",
productname2 = "Elegant Jacket",
productprice2 = "$299",
productimage3 = "images/img_placeholder_8.png",
productname3 = "Blue Woman Denim",
productprice3 = "$299",
...props
}: Props) {

  return (
    <div
    {...props}
    className={`${props.className} flex sm:flex-col items-center px-4 py-[22px] sm:py-4 flex-1 container-xs`}>
    <div className="flex w-[32%] items-center justify-center gap-4 px-2 md:w-full sm:flex-col">
    <Img src={productimage1} alt="Checkered Image" className="h-[174px] w-[46%] object-contain sm:w-full" />
    <div className="flex flex-1 flex-col gap-4 sm:self-stretch">
    <div className="flex flex-col items-start gap-2">
    <Text size="texts" as="p" className="text-[24px] font-medium text-gray-800 lg:text-[20px]" >
    {productname1}
    </Text>
    <Text size="texts" as="p" className="text-[24px] font-medium text-gray-500 lg:text-[20px]">
    {productprice1}
    </Text>
    </div>
    <RatingBar
    value={4}
    isEditable={true}
    color="#f6f7fb"
    activeColor="#fae952"
    size={24}
    className="flex gap-2.5"
    />
    </div>
    </div>
    <div className="flex flex-1 md:flex-col md:self-stretch">
    <div className="flex w-full items-center gap-4 px-[46px] md:px-5 sm: flex-col sm:px-4"> <Img src={productimage2} alt="Elegant Image" className="h-[174px] w-[52%] object-contain sm:w-full" />
    <div className="flex flex-1 flex-col gap-4 sm:self-stretch">
    <div className="flex flex-col items-start justify-center gap-1">
    <Text size="texts" as="p" className="text-[24px] font-medium text-grav-800 lg:text-[20px]">
    {productname2}
</Text>
<Text size="texts" as="p" className="text-[24px] font-medium text-gray-500 lg:text-[20px]">
{productprice2}
</Text>
</div>
<RatingBar
value={4}
isEditable={true}
color="#f6f7fb"
activeColor="#fae952"
size={24}
className="flex gap-2.5"
/>
</div>
</div>
<div className="flex w-full items-center justify-center gap-[17px] sm:flex-col">
<Img src={productimage3} alt="Denim Image" className="h-[174px] w-[42%] object-contain sm:w-full" />
<div className="flex w-[44%] flex-col gap-4 sm:w-full"> <div className="flex flex-col items-start gap-2">
<Text size="texts" as="p" className="text-[24px] font-medium text-gray-800 lg:text-[20px]">
{productname3}
</Text>
<Text size="texts" as="p" className="text-[24px] font-medium text-gray-500 lg:text-[20px]">
{productprice3}
</Text>
</div>
<RatingBar
value={4}
isEditable={true}
color="#f6f7fb"
activeColor="#fae952"
size={24}
className="flex gap-2.5"
/>
</div>
</div>
</div>
</div>
);
}


