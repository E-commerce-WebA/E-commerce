import { Slider } from "../../components/Slider/Slider";
import {Button} from "../../components/Button/Button"
import {Img} from "../../components/Img/Img"
import {Text} from "../../components/Text/Text"
import {Heading} from "../../components/Heading/Heading"
import React from "react";
import AliceCarousel, { EventObject } from "react-alice-carousel";


export default function HeroSection() {
const [sliderState, setSliderState] = React.useState(0);
const sliderRef = React.useRef<AliceCarousel>(null);
return (
<>
{/* hero section */}
<div className="self-stretch">
<div className="flex items-center justify-end bg-gray-50 md:flex-col">
<div className="relative z-[4] flex w-[28%] flex-col items-center gap-0.5 md:w-full md:px-5">
<Text
size="textxl"
as="p"
className="font-playfairdisplay text-[96px] font-normal text-gray-800 1g:text-[48px] md:text-[48px]">
Summer Sale
</Text>
<div className="flex flex-col items-start self-stretch">
<Heading
size="headingxl"
as="hi"
className="text-[64px] font-bold text-gray-800 1g:text-[48px] md:text-[48px]">
50% off
</Heading>
<Text
size="texts"
as="p"
className="mt-[34px] w-[92%] text-[18px] font-normal leading-8 text-gray-800 lg:w-full lg:text-[15px] md:w-full">
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
</Text>
<Button
size="3xl"
shape="square"
rightIcon={<img src="images/img_arrow.svg" alt="Arrow" className="h-[48px] w-[48px]" />}
className="min-w-[244px] mt-14 gap-2.5 px-8 font-medium sm:px-4 flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap rounded-[0px] h-[60px]  text-[24px] bg-gray-800 text-white-a700">
Shop Now
</Button>
</div>
</div>
<div className="relative ml-[-14px] w-[62%] md:ml-e md:w-full md:px-5">
<div className="relative z-[1] h-[700px] content-center lg:h-auto md:h-auto">
<div className="mx-auto flex w-full md:flex-col">
<Slider
autoPlay
autoPlayInterval={2000}
responsive={{ "8": { items: 1}, "551": { items: 1 }, "1051": { items: 3 }, "1441": { items: 5 }}}
disableDotsControls
activeIndex={sliderState}
onSlideChanged={(e: EventObject) => {
    setSliderState(e?.item);
}}

ref={sliderRef}
items={[...Array(15)].map(() => (
<React.Fragment key={Math.random()}>
<Img
src="images/img_placeholder.png"
alt="Placeholder Image"
className="h-[336px] object-contain md:w-full"
/>
</React.Fragment>
))}
/>
<div className="absolute bottom-[5%] left-0 right-0 2-[3] m-auto flex w-[66%] gap-2">
</div>
<div className="h-[12px] w-[12px] rounded-md bg-gray-see" />
<div className="h-[12px] w-[12px] rounded-md bg-white-a700" /> <div className="h-[12px] w-[12px] rounded-md bg-white-a700" />
<div className="h-[12px] w-[12px] rounded-md bg-white-a700" />
<div className="h-[12px] w-[12px] rounded-md bg-white-a700" />
<div className="h-[12px] w-[12px] rounded-md bg-white-a700" />
</div>
</div>
<div className="relative mx-36 mt-[-48px] flex justify-end md:mx-0 sm:flex-col">
<Button
size="sm"
shape="square"
onClick={() => {
sliderRef?.current?.slidePrev();
}}
className="w-[80px]">
<img src="images/img_prev.svg"/>
</Button>
<Button
size="sm"
shape="square"
onClick={() => {
sliderRef?.current?.slideNext();
}}
className="w-[sepx]">
<img src="images/img_next.svg"/>
</Button>
</div>
</div>
</div>
</div>
</>
);
}