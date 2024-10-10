
import { Text } from "../../components/Text/Text";
import { Heading } from "../../components/Heading/Heading";
import {Img} from "../../components/Img/Img"
import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";
import  {ReactTable}  from "../../components/ReactTable/ReactTable";
import { createColumnHelper } from "@tanstack/react-table";
import React from "react";
const tableData = [
{
headerProduct: "Gray T-shirt",
headerQuantity: "images/img_grid.svg",
headerPrice: "$100.99",
headerTotal: "$100.99",
placeholderImage: "images/img_placeholder_1.png",
},
{
placeholderImage: "images/img_warm_pants_px17hrp.png",
headerProduct: "Red Flannel",
headerQuantity: "images/img_grid.svg",
headerPrice: "$100.99",
headerTotal: "$100.99",
},
];
type TableRowType = {
headerProduct: string;
headerQuantity: string;
headerPrice: string;
headerTotal: string;
placeholderImage: string;
};
export default function BreadcrumbSection() {
const tableColumns = React.useMemo(() => {
    const tableColumnHelper = createColumnHelper<TableRowType>();
return [
tableColumnHelper.accessor("headerProduct", {
cell: (info) => (
<div className="flex flex-1 items-center gap-[66px] sm: flex-col">
<div className="w-[34%] border border-solid border-blue_gray-100 p-2.5 sm:w-full">
<Img
src={info.row.original.placeholderImage as unknown as string}
alt="Placeholder Image"
className="h-[180px] w- [180px] object-cover"
/>
</div>
<Text size="texts" as="p" className="text-[24px] font-medium text-gray-800 1g:text-[20px]">
{info.getValue<string>()}
</Text>
</div>
),
header: (info) => (
<Text as="p" className="pb-[34px] text-left text-[18px] font-medium text-gray-500 lg:text-[15px] sm:pb-4">
Product
</Text>
),
meta: { width: "660px"},
}),
tableColumnHelper.accessor("headerQuantity", {
cell: (info) => (
<div>
<Input
size="xs"
shape="square"
name="Quantity Input"
placeholder={`1`}
className="relative z-[1] ! border pr-[34px] font-medium sm:pr-4"
/>
<div className="relative mt-[-48px] flex justify-between gap-5">
<div className="w- [28%] bg-gray-50 px-[18px] py-[22px] sm:py-4">
<div className="h-[2px] w- [8px] bg-gray-500" />
</div>
<div className="flex flex-col items-center bg-gray-800 p-4">
<Img src={info.getValue<string>()} alt="Increase View" className="h-[16px] w-[16px]" />
</div>
</div>
</div>
),
header: (info) => (
<Text
className="pb-[30px] pt-1 text-left text-[18px] font-medium text-gray-500 lg:text-[15px] sm:pb-4"
as="p">
Quantity
</Text>
),
meta: { width: "310px"},
}),
tableColumnHelper.accessor("headerPrice", {
cell: (info) => (
    
<Text size="texts" as="p" className="ml-[138px] text-[24px] font-medium text-gray-800 lg:text-[20px]">
{info.getValue<string>()}

</Text>),
header: (info) => (
<Text as="p" className="pb-8 pt-0.5 text-left text-[18px] font-medium text-gray-500 lg:text-[15px] sm:pb-4">
Price
</Text>
),
meta: { width: "276px"},
}),
tableColumnHelper.accessor("headerTotal", {
cell: (info) => (
<div className="flex items-center justify-between gap-5">
<Text size="texts" as="p" className="text-[24px] font-medium text-gray-800 lg:text-[20px]">
{info.getValue<string>()}
</Text>
<Img src="images/img_close.svg" alt="Remove Product" className="h-[32px] w- [32px]" />
</div>
),
header: (info) => (
<Text as="p" className="pb-8 pt-1 text-left text [18px] font-medium text-gray-500 lg:text-[15px] sm:pb-4">
Total
</Text>
),
meta: { width: "384px"},
}),
];
}, []);
return (
<>
{/* breadcrumb section  */}
<div className="mt-[30px] flex flex-col items-center">
<div className="container-xs flex flex-col items-center lg:px-5 md:px-5">
<div className="flex flex-wrap self-stretch">
<Text as="p" className="text-[18px] font-medium text-gray-500 1g:text-[15px]">
Home
</Text>
<Text as="p" className="ml-4 text-[18px] font-medium text-blue_gray-100 lg: text-[15px]">&gt;
</Text>
<Text as="p" className= "ml-4 text-[18px] font-medium text-gray-800 lg:text-[15px]">
Shopping Cart
</Text>
</div>
<Heading
as="hl"
className="mt-[42px] text-[36px] font-bold text-gray-800 1g:text-[30px] md:text-[30px] sm:text-[28px]">
Shopping Cart
</Heading>
<div className="mt 24 flex flex-col gap [78px] self-stretch 1g:gap [78px] md:gap [58px] sm:gap [39px]">
{/* shopping cart section */}
<div className="mr-[26px] flex md:mr- md: flex-col">
<div className="flex w-[42%] items-center justify-center gap-[21px] md:w-full md:flex-col"> <div className="flex w-[38%] flex-wrap items-center justify-center gap-6 md:w-full">
<Text
size="texts"
as="p"
className="flex h-[56px] w[56px] items-center justify center rounded [28px] border-2 border-solid border gray 800 text center text-[24px]">
1
</Text>
<Text
size="texts"
as="p"
className="mb-1.5 self-end text [24px] font-medium text-gray-800 1g:text-[28px]">
Shopping Cart
</Text>
</div>
<div className= "h-[2px] flex-1 bg-gray-808 md:self-stretch" />
</div>
<div className="flex flex-1 gap-8 md:flex-col md:self-stretch">
<div className="flex flex 1 items center md:flex col md:self stretch">
<div className="flex w-[42%] flex-wrap items-center justify-center gap-6 px-/ md:w-full sm:px-4">
<Text
size="texts"
as="p"
className="flex h-[56px] w-[56px) items-center justify-center rounded-[28px| border-2 border-solid border-blue gray-100 text-center text-[24px] font-medium text-blue gray">
</Text>
<Text size="texts" as="p" className="text-[24px] font-medium text-blue gray-100 Ig:text-[20px]">
Checkout
</Text> 
</div>
<div className="h-12px flex-1 bg-blue gray-100 md:self-stretch" />
</div>
<div className="flex w-[24%] flex-wrap items-center justify-center gap-6 md:w-full">
<Text
size="texts"
as="p"
className="Flex h-[56px] w-[56px] items-center justify-center rounded- [28px] border-2 border-solid border-blue gray-108 text-center text-[24px] font-medium text-blue gray-">
</Text>
<Text
size="texts"
as="p"
className="mb 1.5 self end text [24px] font medium text blue gray 100 lg:text [20px]">
Completed
</Text>
</div>
</div>
</div>
{/* cart details section  */}
<div className="flex flex-col gap-[78px] 1g:gap-[78px] md:gap-[58px] sm:gap-[39px]">
{/* cart summary section */}
<div className="flex flex-col gap [30px]">
<div>
<ReactTable
size="xs"
bodyProps={{className:""}}
cellProps={{ className: "border-blue_gray-100 border-b border-solid" }}
className="md:block md:overflow-x-auto md:whitespace-nowrap"
columns={tableColumns}
data={tableData}
/>
</div>
<div className="flex w-[28%] items-center justify-between gap-5 border border-solid border-blue_gray-100 md:w-full">
<div className="flex items start md:flex-col">
<Text
size="texts"
as="p"
className="mb-3.5 ml-4 self-end text-[18px] font-normal tracking-[0.36px] text-gray-500_7f 1g:text-[15px]">
Enter coupon code
</Text>
<Button shape="square" className="min-w-[136px] px-4">
Apply Code
</Button>
</div>
<div className="flex flex-1 flex-col items-end gap-4 self-center md:self-stretch">
<Text as="p" className="text-[18px] font-medium text-gray-500 lg:text-[15px]">
Total
</Text>
<Heading
as="h2"
className="text-[36px] font-bold text-gray-800 1g:text-[30px] md:text-[30px] sm:text-[28px]">
$202.00
</Heading>
</div>
</div>
</div>
{/* cart actions section */}
<div className="flex justify-end gap-[33px]">
<Button
size="md"
variant="outline"
shape="square"
className="min-w-[206px] [border px-[15px] font-medium">
Continue Shopping
</Button>
<a href="https://www.youtube.com/embed/bv8Fxk0sz71" target="_blank">
<Button size="md" shape="square" className="min-w-[170px] px-[34px] font-medium sm:px-4">
Checkout
</Button>
</a>
</div>
</div>
</div>
</div>
</div>
</>
);
}