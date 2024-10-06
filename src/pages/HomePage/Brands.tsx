import {Img} from "../../components/Img/Img.tsx";

const Brands = () => {
  return (
// brands section
    <div className="container-xs mt-[100px] flex flex-col items-center px-14 lg:px-5 md:px-5">
      <div className="flex w-[64%] items-center justify-center lg:w-full md:w-full md:flex-col">
          <div className="flex flex-1 items-start justify-between gap-5 md:self-stretch sm:flex-col">
              <Img
                  src="images/img_bajuu.svg" alt="Bajuu Brand Image" className="h-[68px] w-[24%] self-center object-contain sm:w-full"
              />
              <Img
                  src="images/img_kathoc.svg" alt="Kathoc Brand Image" className="h-[50px] w-[28%] object-contain sm:w-full"
              />
              <Img
                  src="images/img_pernik.svg" alt="Pernik Brand Image" className="h-[48px] w-[24%] object-contain sm:w-full"
              />
              <Img
                  src="images/img_spatu.svg" alt="Spatu Brand Image" className="h-[62px] w-[16%] object-contain sm:w-full"
              />
            </div>
      </div>
    </div>
  )
}

export default Brands;