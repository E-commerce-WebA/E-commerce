import { Helmet } from "react-helmet";
import { Img } from "../../components/Img/Img";
import { Button } from "../../components/Button/Button";
import { Text } from "../../components/Text/Text";
import { CheckBox } from "../../components/CheckBox/CheckBox";
import { Heading } from "../../components/Heading/Heading";
import ProductDetails1 from "../../components/ProductDetails1/ProductDetails1.tsx";
import UserRating from "../../components/UserRating/UserRating.tsx";
import { Suspense } from "react";


const productCatalogGrid = [
    {
        productImage: "images/img_placeholder_19.png",
        productName: (
            <>
                Green <br />
                Warm Jacket
            </>
        ),
        productPrice: "$299",
    },
    {
        productImage: "images/img_placeholder_18.png",
        productName: (
            <>
                Black
                <br />
                Warm Jacket
            </>
        ),
        productPrice: "$299",
    },
    {
        productImage: "images/img_placeholder_16.png",
        productName: (
            <>
                Blue Grey <br />
                Warm Jacket
            </>
        ),
        productPrice: "$299",
    },
    {
        productImage: "images/img_placeholder_22.png",
        productName: (
            <>
                Blue <br />
                Denim Jacket
            </>
        ),
        productPrice: "$299",
    },
    {
        productImage: "images/img_placeholder_244x244.png",
        productName: (
            <>
                Purple
                <br />
                Warm Jacket
            </>
        ),
        productPrice: "$299",
    },
    {
        productImage: "images/img_placeholder_1.png",
        productName: (
            <>
                Casual <br />
                Pink Shirt
            </>
        ),
        productPrice: "$299",
    },
    {
        productImage: "images/img_placeholder_23.png",
        productName: "Gray T-shirt",
         productPrice: "$299",
    },
    {
        productImage: "images/img_placeholder_17.png",
        productName: "Red Flannel",
        productPrice: "$299",
    },
    {
        productImage: "images/img_placeholder_630x384.png",
        productName: (
            <>
                Casual <br />
                Grey Shoes
            </>
        ),
        productPrice: "$299",
    },
    {
        productImage: "images/img_placeholder_106x106.png",
        productName: "Pink Jacket",
        productPrice: "$299",
    },
    {
        productImage: "images/img_placeholder_20.png",
        productName: (
            <>
                Black
                <br />
                Warm Jacket
            </>
        ),
        productPrice: "$299",
    },
    {
        productImage: "images/img_placeholder_24.png",
        productName: (
            <>
                Black<br />
                Brief Case
            </>
        ),
        productPrice: "$299",
    },
    {
        productImage: "images/img_placeholder_23.png",
        productName: (
            <>
                Modern Classic <br />
                Watch
            </>
        ),
        productPrice: "$299",
    },
    {
        productImage: "images/img_placeholder_176x176.png",
        productName: (
            <>
                Blue Denim
                <br />
                Skirt
            </>
        ),
        productPrice: "$299",
    },
    {
        productImage: "images/img_placeholder_25.png",
        productName: (
            <>
                Casual <br />
                Classic Watch
            </>
        ),
        productPrice: "$299",
    },
    {
        productImage: "images/img_placeholder_26.png",
        productName: (
            <>
                Black Adventure <br />
                Boots
            </>
        ),
        productPrice: "$299",
    },
    {
        productImage: "images/img_placeholder_18.png",
        productName: (
            <>
                Black Formal
                <br />
                High heels
            </>
        ),
        productPrice: "$299",
    },
    {
        productImage: "images/img_placeholder_26.png",
        productName: (
            <>
                Brown <br />
                Casual Shoes
            </>
        ),
        productPrice: "$299",
    },
    {
        productImage: "images/img_placeholder_19.png",
        productName: (
            <>
                Gray <br />
                Long pants
            </>
        ),
        productPrice: "$299",
    },
    {
        productImage: "images/img_placeholder_27.png",
        productName: (
            <>
                Green <br />
                Sport Jacket
            </>
        ),
        productPrice: "$299",
    },
];

const ProductList = () => {
    return (
        <>
            <Helmet>
                <title>Discover Fashionable Products 4Fashion&#39;s Product List</title>
                <meta
                    name="description"
                    content="Browse our product list featuring jackets, shirts, pants, and shoes. View more and find your perfect style with 4Fashion's diverse collections."
                />
            </Helmet>

            {/* product list page section */}
            <div className="flex w-full flex-col items-center bg-white-a700">
                {/* navigation bar section */}
                <div className="flex flex-col items-center gap-[30px] self-stretch">
                    {/* <Header className="self-stretch" /> */}

                        {/* breadcrumb section */}
                    <div className="container-xs lg:px-5 md:px-5">
                        <div className="flex flex-wrap">
                            <Text as="p" className="text-[18px] font-medium text-gray-500 lg:text-[15px]">
                                Home
                            </Text>
                            <Text as="p" className="ml-4 text-[18px] font-medium text-blue_gray-100 lg:text-[15px]">
                                &gt;
                            </Text>
                            <Text as="p" className="ml-4 text-[18px] font-medium text-gray-800 lg:text-[15px]">
                                Product List
                            </Text>
                        </div>
                    </div>
                </div>

                {/* main content section */}
                <div className="container-xs mt-[38px] flex flex-col items-center gap-[62px] lg:px-5 md:px-5 sm:gap-[31px]">
                    <Heading as="h1" className="text-[36px] font-bold text-gray-800 lg:text-[38px] md:text-[30px] sm:text-[28px]">
                        Product List
                    </Heading>

                    {/* category filter section */}
                    <div className="flex items-start gap-8 self-stretch md:flex-col">
                        {/* price filter section */}
                        <div className="flex w-[14%] flex-col gap-8 md:w-full">
                            <div className="flex flex-col gap-8">
                                <div className="flex flex-col gap-[30px]">
                                    <div className="flex flex-col items-start gap-7">
                                        <Text as="p" className="text-[18px] font-medium text-gray-800 lg:text-[15px]">
                                            Categories
                                        </Text>
                                        <div className="h-px w-full self-stretch bg-blue_gray-100"/>
                                    </div>
                                    <div className="flex flex-col gap-[22px]">
                                        <div className="flex items-center gap-4">
                                            <Img src="images/img_sweater_gray_500.svg" alt="Sweater Image"
                                                 className="h-[32px] w-[32px]"/>
                                            <Text as="p"
                                                  className="self-start text-[18px] font-normal text-gray-500 lg:text-[15px]">
                                                Jacket
                                            </Text>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <Img src="images/img_tshirt.svg" alt="Tshirt Image"
                                                 className="h-[32px] w-[32px]"/>
                                            <Text as="p"
                                                  className="self-start text-[18px] font-normal text-gray-800 lg:text-[15px]">
                                                Shirt
                                            </Text>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <Img src="images/img_pants_gray_500.svg" alt="Pants Image"
                                                 className="h-[32px] w-[32px]"/>
                                            <Text as="p"
                                                  className="text-[18px] font-normal text-gray-500 lg:text-[15px]">
                                                Pants
                                            </Text>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <Img src="images/img_boot_gray_500.svg" alt="Boot Image"
                                                 className="h-[32px] w-[32px]"/>
                                            <Text as="p"
                                                  className="self-start text-[18px] font-normal text-gray-500 lg:text-[15px]">
                                                Shoes
                                            </Text>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <Img src="images/img_dress_gray_500.svg" alt="Dress Image"
                                                 className="h-[32px] w-[32px]"/>
                                            <Text as="p"
                                                  className="text-[18px] font-normal text-gray-500 lg:text-[15px]">
                                                Dress
                                            </Text>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <Img src="images/img_belt_gray_500.svg" alt="Belt Image"
                                                 className="h-[32px] w-[32px]"/>
                                            <Text as="p"
                                                  className="self-start text-[18px] font-normal text-gray-500 lg:text-[15px]">
                                                Accessories
                                            </Text>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <Img src="images/img_skirt_gray_500.svg" alt="Skirt Image"
                                                 className="h-[32px] w-[32px]"/>
                                            <Text as="p"
                                                  className="self-start text-[18px] font-normal text-gray-500 lg:text-[15px]">
                                                Skirt
                                            </Text>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <Img
                                                src="images/img_arrow_down_gray_500.svg"
                                                alt="Arrow Down Image"
                                                className="h-[24px] w-[24px]"
                                            />
                                            <a href="#" className="lg:text-[15px]">
                                                <Text as="p" className="text-[18px] font-normal text-gray-500">
                                                    View more
                                                </Text>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="h-px bg-blue_gray-100"/>
                            </div>
                            <div className="flex flex-col items-start gap-7">
                                <Text as="p" className="text-[18px] font-medium text-gray-800 lg:text-[15px]">
                                    Filter by Price
                                </Text>
                                <div className="flex flex-col items-start gap-6 self-stretch">
                                    <CheckBox
                                        name="All Price Checkbox"
                                        label="All Price"
                                        id="AllPriceCheckbox"
                                        className="gap-4 text-[18px] text-gray-500"
                                    />
                                    <CheckBox
                                        name="Mid Price Checkbox"
                                        label="$100 - $250"
                                        id="MidPriceCheckbox"
                                        className="gap-4 text-[18px] text-gray-500"
                                    />
                                    <CheckBox
                                        name="High Price Checkbox"
                                        label="$250 - $500"
                                        id="HighPriceCheckbox"
                                        className="gap-4 text-[18px] text-gray-500"
                                    />
                                    <CheckBox
                                        name="Premium Price Checkbox"
                                        label="$500 - $1,000"
                                        id="PremiumPriceCheckbox"
                                        className="gap-4 text-[18px] text-gray-500"
                                    />
                                    <CheckBox
                                        name="Luxury Price Checkbox"
                                        label="$1,000+"
                                        id="LuxuryPriceCheckbox"
                                        className="gap-4 text-[18px] text-gray-500"
                                    />
                                </div>
                            </div>
                            <div className="h-px bg-blue_gray-100"/>

                            {/* Filter by Rating */}
                            <div className="flex flex-col items-start gap-7">
                                <Text as="p" className="text-[18px] font-medium text-gray-800 lg:text-[15px]">
                                        Filter by Rating
                                </Text>
                                    <div className="flex flex-col gap-4 self-stretch">
                                    <div className="flex gap-4">
                                        <div className="h-[24px] w-[24px] border-[3px] border-solid border-blue_gray-100"/>
                                        <Img
                                            src="images/img_star.svg"
                                            alt="One Star Image"
                                            className="h-[24px] w-[24px]"
                                        />
                                    </div>
                                    <div className="flex">
                                        <div className="h-[24px] w-[24px] border-[3px] border-solid border-blue_gray-100"/>
                                        <div className="flex flex-1 gap-2 px-4">
                                            <Img
                                                src="images/img_star.svg"
                                                alt="First Star Image"
                                                className="h-[24px] w-[24px]"
                                            />
                                            <Img
                                                src="images/img_star.svg"
                                                alt="Second Star Image"
                                                className="h-[24px] w-[24px]"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex">
                                        <div
                                            className="h-[24px] w-[24px] border-[3px] border-solid border-blue_gray-100"/>
                                        <div className="flex flex-1 gap-2 px-4">
                                            {" "}
                                            <Img
                                                src="images/img_star.svg"
                                                alt="First Star Image"
                                                className="h-[24px] w-[24px]"
                                            />
                                            <Img
                                                src="images/img_star.svg"
                                                alt="Second Star Image"
                                                className="h-[24px] w-[24px]"
                                            />
                                            <Img
                                                src="images/img_star.svg"
                                                alt="Third Star Image"
                                                className="h-[24px] w-[24px]"
                                            />
                                        </div>
                                    </div>
                                    <div className="mr-[52px] flex flex-col gap-4 md:mr-0 md:flex-row sm:flex-col">
                                        <UserRating className="mr-8 md:mr-0"/>
                                        <UserRating />
                                    </div>
                                </div>
                            </div>
                       </div>

                        {/* product display section */}
                        <div className="flex flex-1 flex-col gap-7 self-center md:self-stretch">
                            <div className="flex justify-center sm:flex-col">
                                <Text as="p" className="text-[18px] font-medium text-gray-500 lg:text-[15px]">
                                    <span className="text-gray-500">Viewing&nbsp;</span>
                                    <span className="text-gray-800">20</span>
                                    <span className="text-gray-500">&nbsp;of&nbsp;</span>
                                    <span className="text-gray-800">160 product</span>
                                </Text>
                                <div className="flex flex-1 items-center justify-end gap-4 sm:self-stretch">
                                    <Text as="p" className="text-[18px] font-normal text-gray-500 lg:text-[15px]">
                                    <span className="text-gray-500">Sort by:&nbsp;</span>
                                    <span className="text-gray-800">Newest Items</span>
                                    </Text>
                                    <Img src="images/img_arrow_down.svg" alt="Sort Arrow" className="h-[24px] w-[24px]" />
                                </div>
                            </div>

                                <div className="flex flex-col items-center gap-[54px] sm:gap-[27px]">
                                    <div className="grid grid-cols-5 justify-center gap-8 self-stretch lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1">
                                        <Suspense fallback={<div>Loading feed...</div>}>
                                            {productCatalogGrid.map((d, index) => (
                                                <ProductDetails1 {...d} key={"productListGrid" + index}/>
                                            ))}
                                        </Suspense>
                                    </div>
                                    <div className="flex w-[22%] items-center justify-between gap-5 lg:w-full md:w-full">
                                        <Img src="images/img_arrow_left.svg" alt="Arrow Left Image"
                                             className="h-[24px] w-[24px]"/>
                                        <Button size="md" shape="square" className="min-w-[50px] px-[22px] sm:px-4 flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap rounded-[0px] h-[50px] text-[18px] bg-gray-800 text-white-a700">
                                            1
                                        </Button>
                                        <Button color="gray_500" variant="outline" shape="square" className="min-w-[50px] px-[18px] !border-2 flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap rounded-[0px] h-[50px] text-[18px] border-gray-500 border-solid text-gray-500">
                                            2
                                        </Button>
                                        <Button color="gray_500" variant="outline" shape="square" className="min-w-[50px] px-[18px] !border-2 flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap rounded-[0px] h-[50px] text-[18px] border-gray-500 border-solid text-gray-500">
                                            3
                                        </Button>
                                        <Img src="images/img_arrow_right.svg" alt="Arrow Right Image"
                                             className="h-[24px] w-[24px]"/>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>

                {/*footer section*/}
                {/* <Footer className="mt-[100px] self-stretch"/> */}
            </div>
        </>
    );
}

export default ProductList;

