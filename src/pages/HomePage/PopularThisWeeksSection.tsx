import { Text } from "../../components/Text/Text";
import { Heading } from "../../components/Heading/Heading";
import ProductList11 from "../../components/ProductList11/ProductList11";
import { Suspense } from "react";
const fashionItemsList = [
{
productImage1: "images/img_placeholder_174x224.png",
productName1: "Checkered Jacket",
productPrice1: "$299",
productImage2: "images/img_placeholder_7.png",
productName2: "Elegant Jacket",
productPrice2: "$299",
productImage3: "images/img_placeholder_8.png",
productName3: "Blue Woman Denim",
productPrice3: "$299",
},
{
productImage1: "images/img_placeholder_174x224.png",
productName1: "Checkered Jacket",
productPrice1: "$299",
productImage2: "images/img_placeholder_7.png",
productName2: "Elegant Jacket",
productPrice2: "$299",
productImage3: "images/img_placeholder_8.png",
productName3: "Blue Woman Denim",
productPrice3: "$299",
},
{
productImage1: "images/img_placeholder_174x224.png",
productName1: "Checkered Jacket",
productPrice1: "$299",
productImage2: "images/img_placeholder_7.png",
productName2: "Elegant Jacket",
productPrice2: "$299",
productImage3: "images/img_placeholder_8.png",
productName3: "Blue Woman Denim",
productPrice3: "$299",
productimage1: "images/img_placeholder_12.png",
productname1: "Black Sport Jacket",
productprice1: "$299",
productimage2: "images/img_placeholder_13.png",
productname2: "Wristwatch",
productprice2: "$299",
productimage3: "images/img_placeholder_14.png",
productname3: "Classic Watch",
productprice3: "$299",
},
];
export default function PopularThisWeekSection() {
return (
<>
{/* popular this week section  */}
<div className="mt-[102px] flex flex-col items-center self-stretch" id="Popular">
<div className="container-xs flex flex-col gap-7 1g:px-5 md:px-5"> 
<div className="flex flex-wrap items-start justify-between gap-5">
<Heading
as="h2"
className="self-center text-[36px] font-bold text-gray-800 lg:text-[30px] md:text-[30px] sm:text-[28px]">
Popular This Week
</Heading>
<a href="#" className="mt-2 1g:text-[15px]">
<Text as="p" className="text-[18px] font-medium text-gray-800">
View all
</Text>
</a>
</div>
<div className="flex flex-col gap-8">
<Suspense fallback={<div>Loading feed...</div>}>
{fashionItemsList.map((d, index) => (
<ProductList11 {...d} key={"checkeredList" + index} />
))}
</Suspense>
</div>
</div>
</div>
</>
);
}