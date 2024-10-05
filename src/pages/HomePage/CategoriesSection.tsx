import { Text } from "../../components/Text/Text";
import { Heading } from "../../components/Heading/Heading";
import JacketProfile from "../../components/JacketProfile/JacketProfile";
import { Suspense } from "react";

const clothingItems = [
{ jacketImage: "images/img_sweater.svg", jacketDescription: "Jacket" },
{ jacketImage: "images/img_tshirt.svg", jacketDescription: "Shirt" },
{ jacketImage: "images/img_pants.svg", jacketDescription: "Pants" }, 
{ jacketImage: "images/img_boot.svg", jacketDescription: "Shoes" },
{ jacketImage: "images/img_dress.svg", jacketDescription: "Dress" },
{ jacketImage: "images/img_belt.svg", jacketDescription: "Accessories" },
];
export default function CategoriesSection() {
return (
<>
{/* categories section */}
<div className="mt-[102px] flex flex-col items-center self-stretch">
<div className="container-xs flex flex-col gap-7 lg:px-5 md:px-5">
<div className="flex flex-wrap items-start justify-between gap-5">
<Heading
className="self-center text-[36px] font-bold text-gray-800 lg:text-[30px] md:text-[30px] sm:text-[28px]"
as="h2">
Categories
</Heading>
<a href="#" className="mt-2 lg:text-[15px]">
<Text as="p" className="text-[18px] font-medium text-gray-800">
View all
</Text>
</a>
</div>
<div className="flex gap-8 md:flex-col">
<Suspense fallback={<div>Loading feed...</div>}>
{clothingItems.map((d, index) => (
<JacketProfile {...d} key={"productList" + index} className="bg-gray-50"/>
))}
</Suspense>
</div>
</div>
</div>
</>
);
}