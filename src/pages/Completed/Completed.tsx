import { Helmet } from "react-helmet";
import { Button } from "../../components/Button/Button";
import { Text } from "../../components/Text/Text";
import { Heading } from "../../components/Heading/Heading";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

export default function CompletedPage() {
  return (
    <>
      <Helmet>
        <title>Order Complete - Thank You for Shopping with 4Fashion</title>
        <meta
          name="description"
          content="Your order is completel Thank you for shopping with 4Fashion. Explore more products, update your wardrobe, and enjoy our latest collections."
        />
      </Helmet>
      <div className="flex w-full flex-col items-center bg-white-a700">
        {/*navigation bar section"*/}
        {/* <Header className="self-stretch" /> */}

        {/* breadcrumb progress checkout section */}
        <div className="container-xs mt-[30px] lg:px-5 md:px-5">
          <div className="mr-[26px] flex flex-col items-center md:mr-0">
            <div className="flex flex-wrap self-stretch">
              <Text
                as="p"
                className="text-[18px] font-medium text-gray-500 lg:text-[15px]"
              >
                Home
              </Text>
              <Text
                as="p"
                className="ml-4 text-[18px] font-medium text-blue_gray-100 lg:text-[15px]"
              >
                &gt;
              </Text>
              <Text
                as="p"
                className="ml-4 text-[18px] font-medium text-gray-500 lg:text-[15px]"
              >
                Shopping Cart
                
              </Text>
              <Text
                  as="p"
                  className="ml-4 text-[18px] font-medium text-blue_gray-100 lg:text-[15px]"
                >
                  &gt;
                </Text>
              <Text
                as="p"
                className="ml-4 text-[18px] font-medium text-gray-800 lg:text-[15px]"
              >
                Checkout
              </Text>
            </div>
            <div className="mt-24 flex self-stretch md:flex-col">
              <div className="gap-[21px] w-[42%] flex items-center justify-center md:w-full md:flex-col">
                <div className="flex w-[38%] flex-wrap items-center justify-center gap-6 md:w-full">
                  <Text
                    size="texts"
                    as="p"
                    className=" lg:text-[20px] rounded-[28px] text-[24px] h-[56px] w-[56px] flex items-center justify-center border-2 border-solid border-gray-800 text-center font-medium text-gray-800 undefined"
                  >
                    1
                  </Text>
                  <Text
                    size="texts"
                    as="p"
                    className=" lg:text-[20px] text-[24px] mb-1.5 self-end font-medium text-gray-800 undefined"
                  >
                    Shopping Cart
                  </Text>
                </div>
                <div className="h-[2px] flex-1 bg-gray-800 md:self-stretch" />
              </div>
              <div className="flex flex-1 items-center md:flex-col md:self-stretch">
                <div className="flex flex-1 flex-wrap items-center justify-center gap-6 px-6 md:self-stretch sw:px-4">
                  <Text
                  size = "texts"
                    as= "p"
                    className=" lg:text-[20px] rounded-[28px] text-[24px] h-[56px] w-[56px] flex items-center justify-center border-2 border-solid border-gray-800 text-center font-medium text-gray-800 undefined"
                  >
                    2 
                  </Text>
                  <Text
                    size="texts"
                    as="p"
                    className="text-[24px] font-medium text-gray-800 lg:text-[20px]"
                  >
                    Checkout
                  </Text>
                </div>
                <div className="h-[2px] flex-1 bg-gray-800 md:self-stretch" />
                <div className="flex flex-1 flex-wrap items-center justify-end gap-6 md:self-stretch">
                  <Text
                    size="texts"
                    as="p"
                    className="flex h-[56px] w-[56px] items-center justify-center rounded-[28px] border-2 border-solid border-gray-800 text-center text-[24px] font-medium text-gray-800 lg:text-[20px]"
                  >
                    3
                  </Text>
                  <Text
                    size="texts"
                    as="p"
                    className="mb-1.5 self-end text-[24px] font-medium text-gray-800 lg:text-[20px]"
                  >
                    Completed
                  </Text>
                </div>
              </div>
            </div>

            <div className="mt-[206px] flex w-[42%] flex-col items-center lg:w-full md:w-full">
              <Heading
                size="headingxl"
                as="h1"
                className="text-[64px] font-bold text-gray-800 lg:text-[48px] md:text-[48px]"
              >
                Checkout Complete!
              </Heading>
              <Text
                size="texts"
                as="p"
                className="mt-2 self-stretch text-center text-[18px] font-normal leading-8 text-gray-800 lg:text-[15px]"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
              </Text>
              <Button
                shape="square"
                className="min-w-[244px] px-[34px] mt-16 font-medium sm:px-4 flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap rounded-[0px] h-[60px] px-7 text-[18px] bg-gray-800 text-white-a700"
              >
                Go Shopping Again
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
