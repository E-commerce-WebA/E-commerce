import { Img } from "../Img/Img.tsx";
import { Button } from "../Button/Button.tsx";
import { Text } from "../Text/Text.tsx";
import { Heading } from "../Heading/Heading.tsx";

interface Props {
  className?: string;
}

export default function Footer({ ...props }: Props) {
  return (
    <footer
      {...props}
      className={`${props.className} flex justify-center items-end py-[30px] sm:py-4 bg-gray-800`}
    >
      <div className="container-xs mt-[30px] flex justify-center lg:px-5 md:px-5">
        <div className="flex w-full flex-col items-center gap-24 lg:gap-24 md:gap-[72px] sm:gap-12">
          {" "}
          <div className="flex items-start justify-between gap-5 self-stretch md:flex-col">
            <div className="flex w-[24%] flex-col justify-center gap-[30px] md:w-full">
              <Img
                src="images/img_footer_logo_1.png"
                alt="Footer Logo"
                className="h-[36px] w-[112px] object-contain"
              />
              <Text
                size="texts"
                as="p"
                className="w-[92%] text-[18px] font-normal leading-8 text-gray-500 lg:w-full 1g:text-[15px] md:w-full"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </Text>
              <div className="flex flex-col justify-center gap-[18px]">
                <div className="flex items-center gap-2">
                  <Img
                    src="images/img_call.svg"
                    alt="Call Icon"
                    className="h-[24px] w-[24px]"
                  />
                  <Text
                    size="texts"
                    as="p"
                    className="text-[18px] font-normal text-white-a700 1g:text-[15px]"
                  >
                    +1234567890
                  </Text>
                </div>
                <div className="flex items-center gap-2">
                  <Img
                    src="images/img_email_white_a700.svg"
                    alt="Email Icon"
                    className="h-[24px] w-[24px]"
                  />
                  <Text
                    size="texts"
                    as="p"
                    className="text-[18px] font-normal text-white-a700 1g:text-[15px]"
                  >
                    elliye@support.com
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex w-[56%] items-start justify-between gap-5 self-center md:w-full md:flex-col">
              <div className="flex w-[44%] items-start justify-between gap-5 self-center md:w-full sm:flex-col">
                <div className="flex w- [64%] flex-col items-start gap-7 sm:w-full">
                  <Heading
                    size="headings"
                    as="h4"
                    className="text-[24px] font-bold text-white-a700 lg:text-[20px]"
                  >
                    Product Links
                  </Heading>
                  <ul className="flex flex-col items-start gap-3.5">
                    <li>
                      <a
                        href="Categories"
                        target="_blank"
                        rel="noreferrer"
                        className="1g:text-[15px]"
                      >
                        <Text
                          as="p"
                          className="text-[18px] font-normal text-gray-500"
                        >
                          Categories
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="lg:text-[15px]">
                        <Text
                          as="p"
                          className="text-[18px] font-normal text-gray-500"
                        >
                          New Arrival
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="Features"
                        target="_blank"
                        rel="noreferrer"
                        className="1g:text-[15px]"
                      >
                        {" "}
                        <Text
                          as="p"
                          className="text-[18px] font-normal text-gray-500"
                        >
                          Features
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="Collections"
                        target="_blank"
                        rel="noreferrer"
                        className="lg:text-[15px]"
                      >
                        {" "}
                        <Text
                          as="p"
                          className="text-[18px] font-normal text-gray-500"
                        >
                          Collections
                        </Text>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col items-start gap-7 self-center">
                  <Heading
                    size="headings"
                    as="h4"
                    className="text-[24px] font-bold text-white-a700 1g:text-[20px]"
                  >
                    Company
                  </Heading>
                  <ul className="flex flex-col items-start">
                    <li>
                      <a
                        href="About"
                        target="_blank"
                        rel="noreferrer"
                        className="lg:text-[15px]"
                      >
                        <Text
                          as="p"
                          className="text-[18px] font-normal text-gray-500"
                        >
                          About
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="Blog"
                        target="_blank"
                        rel="noreferrer"
                        className="mt-3 lg:text-[15px]"
                      >
                        <Text
                          as="p"
                          className="text-[18px] font-normal text-gray-500"
                        >
                          Blog
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="Careers"
                        target="_blank"
                        rel="noreferrer"
                        className="mt-1.5 lg:text-[15px]"
                      >
                        <Text
                          as="p"
                          className="text-[18px] font-normal text-gray-500"
                        >
                          Careers
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="Services"
                        target="_blank"
                        rel="noreferrer"
                        className="mt-2 1g:text-[15px]"
                      >
                        <Text
                          as="p"
                          className="text-[18px] font-normal text-gray-500"
                        >
                          Services
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="mt-3 lg:text-[15px]">
                        <Text
                          as="p"
                          className="text-[18px] font-normal text-gray-500"
                        >
                          Privacy Policy
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="mt-1.5 lg:text-[15px]">
                        <Text
                          as="p"
                          className="text-[18px] font-normal text-gray-500"
                        >
                          Terms of service
                        </Text>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex w-[40%] flex-col items-start gap-[30px] md:w-full">
                <Heading
                  size="headings"
                  as="h4"
                  className="text-[24px] font-bold text-white-a700 1g:text-[20px]"
                >
                  Join our Newsletter
                </Heading>
                <Text
                  as="p"
                  className="w-full text-[18px] font-normal leading-[27px] text-gray-500 1g:text-[15px]"
                >
                  Drop your email below to get update, promotions, coupons, and
                  more!
                </Text>
                <div className="flex items-center justify-between gap-5 self-stretch border border-solid border-white-a700 bg-gray-808">
                  <Text
                    size="texts"
                    as="p"
                    className="ml-6 text-[18px] font-normal tracking-[8.36px] text-blue_gray-100_7f lg:text-[15px]"
                  >
                    Enter your email
                  </Text>
                  <Button
                    color="white_a700"
                    size="2xl"
                    shape="square"
                    className="w-[60px] px-3.5"
                  >
                    <Img src="images/img_arrow_gray_800.svg" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <Text as="p" className="text-[14px] font-normal text-blue_gray-100">
            Copyright © 2024 Elliye. All Right Reseved
          </Text>
        </div>
      </div>
    </footer>
  );
}
