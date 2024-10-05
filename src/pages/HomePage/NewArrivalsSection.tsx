import { Button } from "../../components/Button/Button"
import {Img} from "../../components/Img/Img.tsx";
import {Heading} from "../../components/Heading/Heading.tsx";
import {Text} from "../../components/Text/Text.tsx";
import ProductList1 from "../../components/ProductList1/ProductList1.tsx";



const NewArrivalsSection = () => {
    return (
        <>
            <div className="mt-[98px] flex justify-center self-stretch">
                <div className="max-w-[1630px] mx-auto flex w-full justify-center 1g:px-5 md:px-5">
                    <div className="flex w-full flex-col gap-8">
                        <div className="flex flex-wrap items-center justify-between gap-5">
                            <Heading
                                as="h2"
                                className="text-[36px] font-bold text-gray-800 lg:text-[30px] md:text-[30px] sm:text-[28px]"
                            >
                                New Arrivals
                            </Heading>
                            <a href="#" className="lg:text-[15px]">
                                <Text as="p" className="text-[18px] font-medium text-gray-800">
                                    View all
                                </Text>
                            </a>
                    </div>
                    <div className="flex gap-8 md:flex-col">
                        <div className="flex w-full items-center justify-center gap-12 bg-gray-50 p-7 md:flex-col sm:p-4">
                            <Img
                                src="images/img_placeholder_630x384.png"
                                alt="Product Image"
                                className="h-[630px] w-[54%] object-contain md:w-full"
                            />
                        <div className="flex w-[34%] flex-col gap-6 md:w-full">
                        <div className="flex flex-col items-center justify-center gap-1">
                            <Text size="texts" as="p" className="text-[23px] font-medium text-gray-800 lg:text-[20px]">
                                Purple Warm Jacket
                            </Text>
                            <Text as="p" className="text-[18px] font-medium text-gray-500 1g:text-[15px]">
                                $299
                            </Text>
                        </div>
                        <Button shape="square" className="mx-[22px] self-stretch px-[34px] font-bold md:mx-0 sm:px-4 flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap rounded-[0px] h-[60px] text-[18px] bg-gray-800 text-white-a700 ">
                            Add to Cart
                        </Button>
                    </div>
                </div>
                <div className="w-full">
                    <div className="flex gap-8 md:flex-col">
                        <ProductList1 />
                        <ProductList1
                            productImageOne="images/img_placeholder_18.png"
                            productNameOne="Denim Jacket"
                            productPriceOne="$299"
                            productImageTwo="images/img_placeholder_19.png"
                            productNameTwo="Green Polar Jacket"
                            productPriceTwo="$299"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
        </>
    );
}

export default NewArrivalsSection;