import {Suspense} from "react";
import {Heading} from "../../components/Heading/Heading.tsx";
import DeliveryInfo from "../../components/DeliveryInfo/DeliveryInfo.tsx";

const serviceOptionsList = [
    {
        truckImage: "images/img_truck.svg",
        headingText: "Free Delivery",
        descriptionText: (
            <>
                This free shipping
                <br />
                only for selected region
            </>
        ),
    },
    {
        truckImage: "images/img_card.svg",
        headingText: "Payment Method",
        descriptionText: (
            <>
                This free shipping
                <br />
                only for selected region
            </>
        ),
    },
    {
        truckImage: "images/img_broken.svg",
        headingText: "Warranty",
        descriptionText: (
            <>
                This free shipping
                <br />
                only for selected region
            </>
        ),
    },
    {
        truckImage: "images/img_support.svg",
        headingText: "Customer Support",
        descriptionText: (
            <>
                This free shipping
                <br />
                only for selected region
            </>
        ),
    },
];

const WhyChooseUsSection = () => {
    return (
        <>
            <div className="mt-[104px] flex flex-col items-center gap-[26px] self-stretch">
                <div className="container-xs flex flex-col items-start lg:px-5 md:px-5">
                    <Heading as="h2" className="text-[36px] font-bold text-gray-800 lg:text-[30px] md:text-[30px] sm:text-[28px]">
                        Why Choose Us
                    </Heading>
                </div>
                <div className="flex gap-[204px] self-stretch bg-gray-50 py-[62px] pl-[222px] pr-14 lg:py-8 lg:pl-8 md:flex-col md:p-5 sm:p-4">
                    <Suspense fallback={<div>Loading feed...</div>}>
                        {serviceOptionsList.map((d, index) => (
                            <DeliveryInfo {...d} key={"content" + index} className="w-[12%]" />
                        ))}
                    </Suspense>
                </div>
            </div>
        </>
    );
}

export default WhyChooseUsSection;