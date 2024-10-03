import { Img } from "../Img/Img.tsx";
import { Text } from "../Text/Text.tsx";
import { Heading } from "../Heading/Heading.tsx";
import React from "react";

interface Props {
className?: string;
jacketImage?: string;
jacketTitle?: React. ReactNode;
collectionDescription?: React. ReactNode;
}

export default function JacketCollection({
jacketImage = "images/img_sweater_gray_800.svg",
jacketTitle = "Jacket",
collectionDescription = "Collection",
...props
}: Props) {
return (
<div
{...props}
className={`${props.className} flex justify-center items-center w-full gap-4 p-[42px] md:p-5 sm:p-4 bg-gray-50`}>
<Img src={jacketImage} alt="Jacket Image" className="h-[160px] w-[160px]" />
<div className="flex flex-col items-start justify-center">
<Heading as="hl" className="text-[36px] font-bold text-gray-800 sm:text-[30px]">
{jacketTitle}
</Heading>
<Text size="textlg" as="p" className="text-[36px] font-normal text-gray-500 sm:text-[30px]">
{collectionDescription}
</Text>
</div>
</div>
);
}