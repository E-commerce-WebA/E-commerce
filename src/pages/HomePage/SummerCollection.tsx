import React from 'react'
// import { Helmet } from "react-helmet";
import { Text } from "../../components/Text/Text";
import { Heading } from "../../components/Heading/Heading";
import {Img} from "../../components/Img/Img"
import AliceCarousel, {EventObject} from "react-alice-carousel";
import { Slider } from '../../components/Slider/Slider';

function SummerCollection() {
const [sliderState, setsliderState] = React.useState(0);
const sliderRef = React.useRef<AliceCarousel>(null);
  return (
    <div>

<div className="relative mt-[74px] h-[544px] self-stretch" id='Collections'>
<div className="absolute left-0 right-0 top-0 m-auto flex flex-1 justify-center bg-gray-800 py-[42px] md:py-5 sm:py-4">
<div className="container-xs mb-[284px] flex 1g:px-5 md:px-5 ">
<Heading as="h2"
className = "text-[36px] font-bold text-white-a700 lg:text-[30px] md:text-[30px] sm:text-[28px]">
Summer Collections
</Heading>
</div>
</div>
<div className="absolute bottom-0 left-e right-0 m-auto flex w-full items-center justify-center md:relative md:flex-col"> 
<div className="container-xs mx-auto flex w-full gap-8 lg:px-5 md:mx-0 md:flex-col md:px-5">
<Slider
autoPlay
autoPlayInterval={2000}
responsive={{"0": { items: 1}, "551": { items: 1 }, "1051": { items: 2 }, "1441": { items: 3}}}
disableDotsControls
activeIndex={sliderState}
onslideChanged={(e: EventObject) => {
setsliderState(e?.item);
}}
ref={sliderRef}
items={[...Array(9)].map(() => (
<React.Fragment key={Math.random()}>
<div className="px-4">
<div className="relative h-[400px] content-center bg-blue gray-100 lg:h-auto md:h-auto">
<Img
src="images/img_image_2.png"
alt="Image One"
className="mx-auto h-[400px] w-full flex-1 object-cover"
/>
<Text size="textlg"
as="p"
className="absolute bottom-0 left-[11%] top-0 my-auto h-max w-[36%] text-[36px] font-normal leading-[54px] text-gray-800 lg:text-[30px]">
<span>
<>
Summer <br />
</>
</span>
<span className="font-bold">Collection</span>
</Text>
</div>
</div>
</React.Fragment>
))}
/>
</div>
<div className="flex flex-col items-center bg-white-a700 p-2.5 md:px-5">
<img src="images/img_arrow_gray_800.svg" alt="Arrow Image" className="h-[38px]" />
</div>
</div>


    </div>
    </div>
  )
}

export default SummerCollection