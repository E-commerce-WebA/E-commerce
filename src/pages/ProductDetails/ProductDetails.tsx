import { Helmet } from "react-helmet";
import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";
import { Text } from "../../components/Text/Text";
import { Heading } from "../../components/Heading/Heading";
import { Img } from "../../components/Img/Img";
import SimilarProductsSection from "./SimilarProductsSection";
import React, { Suspense } from "react";

const productDetailsList = [
{ thumbnailImage: "images/img_placeholder_136x138.png"},
{ thumbnailImage: "images/img_placeholder_28.png"},
{ thumbnailImage: "images/img_placeholder_29.png"},
];
export default function ProductDetailsPage() {
const [quantity, setQuantity] = React.useState<number>(1);
return (
<>
<Helmet>
<title>Purple Warm Jacket Product Details at Elliye</title>
<meta
name="description"
content="Get details on the Purple Warm Zip Jacket for just $299. Quality materials, stylish design, and comfort all in one. Shop now at Elliye."
/>
</Helmet>
<div className="flex w-full flex-col gap-[180px] bg-white-a700 1g:gap-[135px] md:gap-[135px] sm:gap-[90px]">
<div className="flex flex-col items-center gap-[38px]">
{/* navigation bar section */}
{/* <Header className="self-stretch" /> */}
{/* product overview section */}
<div className="container-xs 1g:px-5 md:px-5">
{/* product details section */}
<div className="flex items-center gap-8 md:flex-col">
<div className="flex w-full flex-col gap-8">
<Img src="images/img_placeholder_16.png" alt="Main Image" className="h-[522px] object-cover" />
<div className="mx-40 flex gap-8 md:mx-8 md:flex-col">
<Suspense fallback={<div>Loading feed...</div>}>
{productDetailsList.map((d, index) => (
<img
key={"productThumbnails" + index}
src={d.thumbnailImage}
alt="Thumbnail Image"
className="h-[136px] w-[28%] object-contain md:w-full"
/>
))}
</Suspense>
</div>
</div>
{/* product purchase section */}
<div className="flex w-full flex-col items-start gap-14 sm:gap-7">
<div className="flex flex-col gap-7 self-stretch">
<div className="flex flex-wrap">
<Text as="p" className="text-[18px] font-medium text-gray-500 1g:text-[15px]">
Featured
</Text>
<Text as="p" className="ml-4 text-[18px] font-medium text-blue_gray-100 lg:text-[15px]">
&gt;
</Text>
<Text as="p" className="ml-4 text-[18px] font-medium text-gray-500 1g:text-[15px]">
Purple Warm Jacket
</Text>
</div>
<div className="flex flex-col items-start gap-[38px]">
<Heading
size="headinglg"
as="h1"
className="text-[56px] font-bold leading-[84px] text-gray-800 lg:text-[47px] md:text-[36px] sm:text-[30px]">
<>
Purple Warm <br />
Zip Jacket
</>
</Heading>
<Text
size="textmd"
as="p"
className="text-[36px] font-normal text-gray-500 lg:text-[30px] md:text-[30px] sm:text-[28px]">
$299
</Text>
<div className="h-px w-full self-stretch bg-blue_gray-100" />
<Text
size="texts"
as="p"
className="w-full text-[18px] font-normal leading-8 text-gray-500 1g:text-[15px]">
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
nisi ut aliquip ex ea commodo consequat.
</Text>
</div>
</div>
<div className="flex items-center self-stretch md:flex-col">
<Text
as="p"
className="lg:text-[15px] text-[18px] mb-2 self-end font-medium text-gray-800 md:self-auto undefined">
Quantity
</Text>
<div className="flex-1 px-6 md:self-stretch sm:px-4">
<div className="flex flex-col items-start">
    <label className="z-[1] pr-[34px] w-[24%] relative !border font-medium sm:pr-4 flex items-center justify-center cursor-text  rounded-[0px] border-blue_gray-100 border-solid text-gray-800 h-[48px] pl-8 text-[18px]">

<Input
size="xs"
shape="square"
name="Quantity Input"
placeholder={'1'}
type="number"
step="1"
min="0"
value={quantity}
onChange={(e) => setQuantity(e.target.valueAsNumber)}
className="relative z-[1] w-[24%] !border pr-[34px] font-medium sm:pr-4"
/>
    </label>
<div className="relative mt-[-48px] flex gap-[75px] self-stretch">
<div
onClick={(event) => {
event.stopPropagation();
setQuantity((quantity) => (quantity <1 ? 0: quantity - 1));
}}
className="w-[8%] cursor-pointer bg-gray-50 px-[18px] py-[22px] sm:py-4">
<div className="h-[2px] w-[8px] bg-gray-500" />
</div>
<div
onClick={(event) => {
event.stopPropagation();
setQuantity((quantity) => quantity + 1);
}}
className="flex cursor-pointer flex-col items-center bg-gray-800 p-4">
<Img src="images/img_grid.svg" alt="Increment View" className="h-[16px] w-[16px]" />
</div>
</div>
</div>
</div>
</div>
<a href="https://www.youtube.com/embed/bv8Fxk@sz7I" target="_blank">
<Button
size="5xl"
shape="square"
rightIcon={<img src="images/img_cart_white_a700.svg" alt="Cart" className="h-[32px] w-[32px]" />}
className="min-w-[244px] px-[34px] gap-4 font-bold sm:px-4 flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap rounded-[0px] h-[64px] text-[18px] bg-gray-800 text-white-a700">
Add to Cart
</Button>
</a>
</div>
</div>
</div>
</div>

{/* {Similar products section} */}
<SimilarProductsSection/>

{/* footer section */}
{/* <Footer/> */}
</div>
</>
);
}