import {Heading} from "../../components/Heading/Heading.tsx";
import {Text} from "../../components/Text/Text.tsx";
import ProductDetails4 from "../../components/ProductDetails4/ProductDetails4.tsx";
import ProductCard from "../../components/ProductCard/ProductCard.tsx";
import {Suspense} from "react";
import {Img} from "../../components/Img/Img.tsx";
import {Button} from "../../components/Button/Button.tsx";


const featuredProductsGrid = [
    {productImage: "images/img_placeholder_3.png", productName: "Black Highheels", productPrice: "$299"},
    {productImage: "images/img_placeholder_630x384.png", productName: "Casual Grey Shoes", productPrice: "$299"},
    {productImage: "images/img_shoes_isolated_pk7npbk.png", productName: "Brown Shoes", productPrice: "$299"},
    {productImage: "images/img_business_shirt_ptnj9lv.png", productName: "Business Shirt", productPrice: "$299"},
    {productImage: "images/img_warm_pants_px17hrp.png", productName: "Grey Warm Pants", productPrice:"$299"},
    {productImage: "images/img_sport_j9bzxuy.png", productName:"Green Sport Jacket", productPrice:"$299"},
    {productImage: "images/img_business_jacket_1.png", productName:"Blue Business Jacket", productPrice:"$299"},
    {productImage: "images/img_travel_8v7cnke.png", productName:"Purple Warm Jacket", productPrice: "$299"},
    {productImage: "images/img_placeholder_2.png", productName:"Woman Denim Skirt", productPrice:"$299"},
];
const casualWear = [
    {productImage: "images/img_placeholder_4.png", productName: "Pink Shirt", productPrice: "$299"},
    {productImage: "images/img_placeholder_5.png", productName: "Gray T-shirt", productPrice: "$299"},
    {productImage: "images/img_placeholder_6.png", productName: "Red Flannel", productPrice: "$299"},
];

const FeaturedSection = () => {
    return (
        <>
        {/* featured section */}
        <div className="mt-[98px] flex flex-col items-center self-stretch">
            <div className="container-xs flex flex-col gap-8 lg:px-5 md:px-5">
                <div className="flex flex-wrap items-center justify-between gap-5">
                    <Heading
                        as="h2"
                        className="text-[36px] font-bold text-gray-800 lg:text-[30px] md:text-[30px] sm:text-[28px]"
                    >
                        Featured
                    </Heading>
                    <a href="#" className="1g: text-[15px]">
                        <Text as="p" className="text-[18px] font-medium text-gray-800">
                            View all
                        </Text>
                    </a>
                </div>
                <div className="flex items-center justify-between gap-5 md:flex-col">
                <div className="flex w-[26%] flex-col items-center gap-3.5 border-2 border-solid border-gray-800 p-[42px] md:w-full md:p-5 sm:p-4">
                <Img
                    src="images/img_placeholder_250x250.png"
                    alt="Placeholder Image"
                    className="h-[250px] w-[250px] object-cover"
                />
                <div className="flex flex-col items-center gap-2">
                <Text size="texts" as="p" className="text-[24px] font-medium text-gray-800 lg:text-[28px]">
                    Black Briefcase
                </Text>
                <Text as="p" className="text-[18px] font-medium text-gray-500 lg:text-[15px]">
                    $299
                </Text>
                </div>
                <Button shape="square" className="mx-6 min-w-[200px] px-[34px] font-bold md:mx-0 sm:px-4">
                    Add to Cart
                </Button>
            </div>
            <div className="ml-[98px] mr-16 flex w-[74%] gap-[166px] md:mx-0 md:w-full md:flex-col">
                <Suspense fallback={<div>Loading feed...</div>}>
                    {casualWear.map((d, index) => (
                        <ProductDetails4 {...d} key={"listPlaceholder" + index} />
                    ))}
                </Suspense>
            </div>
        </div>
            <div className="grid grid-cols-4 justify-center gap-[166px] gap-y-8 px-16 py-20 lg:grid-cols-3 lg:p-8 md:grid-cols-2 md:p-5 sm:grid-cols-1 sm:p-4">
            <Suspense fallback={<div>Loading feed...</div>}>
                {featuredProductsGrid.map((d, index) => (
                    <ProductCard {...d} key={"homepageGrid" + index} />
                    ))}
            </Suspense>
            </div>
        </div>
    </div>
    </>
);
}

export default FeaturedSection;