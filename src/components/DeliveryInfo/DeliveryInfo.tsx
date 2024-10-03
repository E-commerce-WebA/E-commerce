import { Img } from "../Img/Img.tsx";
import { Text } from "../Text/Text.tsx";
import { Heading } from "../Heading/Heading.tsx";
import React from "react";
interface Props {
className?: string;
truckImage?: string;
headingText?: React.ReactNode;
descriptionText?: React.ReactNode;
}
export default function DeliveryInfo({
truckImage = "images/img_truck.svg", headingText = "Free Delivery",
descriptionText = (
<>
This free shipping
<br />
only for selected region
</>
),
...props
}: Props) {
return (
<div {...props} className={ `${props.className} flex flex-col items-center md:w-full gap-8`}> 
<div className="mx-11 self-stretch rounded-[60px] border-2 border-solid border-gray-500 p-[26px] sm:p-5"> <Img src={truckImage} alt="Truck Image" className="h-[64px] w-[64px]" />
</div>
<div className="flex flex-col items-center justify-center gap-3.5 self-stretch">
<Heading size="headings" as="h4" className="text-[24px] font-bold text-gray-800">
{headingText}
</Heading>
<Text as="p" className="text-center text-[18px] font-normal leading-[27px] text-gray-500">
{descriptionText}
</Text>
</div>
</div>
);
}