import { Helmet } from "react-helmet";
import { Button } from "../../components/Button/Button";
import { SelectBox } from "../../components/SelectBox/SelectBox.tsx";
import { Img } from "../../components/Img/Img";
import { Text } from "../../components/Text/Text";
import { Input } from "../../components/Input/Input";
import { Heading } from "../../components/Heading/Heading";



const dropDownOptions = [
  { label: "option1", value: "option1" },
  { label: "option2", value: "option2" },
  { label: "Option3", value: "options" },
];

const CheckoutPage = () => {
  return (
    <>
      <Helmet>
        <title>Checkout - Secure Payment and Buyer Info | 4Fashion</title>
        <meta
          name="description"
          content="Enter your Buyer Info and choose a secure Payment Method for a seamless Checkout experience.
            Complete your purchase with Credit Card, Bank Transfer, or Paypal."
        />
      </Helmet>
      <div className="flex w-full flex-col items-center bg-white-a700">
        {/* header section */}
        {/* <Header className="self-stretch" /> */}

        {/* breadcrumb section */}
        <div className="container-xs mt-[30px] lg:px-5 md:px-5">
          <div className="flex flex-col items-center">
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

            <Heading
              as="h1"
              className="mt-[38px] text-[36px] font-bold test-gray-888 lg:text-[50px] md:text-[30px] sm:text-[28px]"
            >
              Checkout
            </Heading>

            {/*checkout section*/}
            <div className="mt-[100px] self-stretch">
              <div className="flex flex-col gap-20 lg:gap-20 md:gap-[60px] sm:gap-10">
                <div className="mr-[26px] flex md:mr-0 md:flex-col">
                  <div className="flex w-[42%] items-center justify-center gap-[21px] md:w-full md:flex-col">
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
                        className="mb-1.5 self-end text-[24px] font-medium text-gray-800 lg:text-[28px]"
                      >
                        Shopping Cart
                      </Text>
                    </div>
                    <div className="h-[2px] flex-1 bg-gray-800 md:self-stretch" />
                  </div>
                  <div className="flex flex-1 gap-8 md:flex-col md:self-stretch">
                    <div className="flex flex-1 items-center md:flex-col md:self-stretch">
                      <div className="flex w-[42%] flex-wrap items-center justify-center gap-6 px-7 md:w-full sm:px-4">
                        <Text
                          size="texts"
                          as="p"
                          className="text-gray-500 font-poppins flex h-[56px] w-[56px] items-center justify-center rounded-[28px] border-2 border-solid border-blue_gray-100 text-center text-[24px] font-medium lg:text-[20px]]"
                        >
                          2
                        </Text>
                        <Text
                          size="texts"
                          as="p"
                          className="text-[24px] font-medium text-blue_gray-100 lg:text-[20px]"
                        >
                          Checkout
                        </Text>
                      </div>
                      <div className="h-[2px] flex-1 bg-blue_gray-100 md:self-stretch" />
                    </div>
                    <div className="flex w-[24%] flex-wrap items-center justify-center gap-6 md:w-full">
                      <Text
                        size="texts"
                        as="p"
                        className="flex h-[56px] w-[56px] items-center justify-center rounded-[28px] border-2 border-solid border-blue_gray-100 text-center text-[24px] font-medium text-blue_gray-100 lg:text-[20px]"
                      >
                        3
                      </Text>
                      <Text
                        size="texts"
                        as="p"
                        className="mb-1.5 self-end text-[24px] font-medium text-blue_gray-100 lg:text-[20px]"
                      >
                        Completed
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex items-center md:flex-col">
                  <div className="flех w-[46%] flex-col gap-8 md:w-full">
                    <Input
                      size="md"
                      variant="underline"
                      shape="square"
                      name="Buyer Info Title"
                      placeholder={`Buyer Info`}
                      className="w-[88%] !border-b font-medium"
                    />
                    <div className="flex flex-col items-start gap-4">
                      <Text
                        as="p"
                        className="text-[18px] font-normal text-gray-500 lg:text-[15px]"
                      >
                        Full Name
                      </Text>
                      <Input
                        shape="square"
                        name="Full Name Input"
                        className="w-[88%] !border"
                      />
                    </div>
                    <div className="flex flex-col items-start gap-4">
                      <Text
                        as="p"
                        className="text-[18px] font-normal text-gray-508 lg:text-[15px]"
                      >
                        Address
                      </Text>
                      <Input
                        shape="square"
                        name="Address Input"
                        className="w-[88%] !border"
                      />
                    </div>
                    <div className="flex flex-col items-start gap-3.5">
                      <Text
                        as="p"
                        className="text-[18px] font-normal text-gray-500 lg:text-[15px]"
                      >
                        Contact
                      </Text>
                      <Input
                        shape="square"
                        name="Contact Input"
                        className="w-[88%] !border"
                      />
                    </div>
                    <div className="flex flex-col items-start gap-3.5">
                      <Text
                        as="p"
                        className="text-[18px] font-normal text-gray-500 lg:text-[15px]"
                      >
                        City
                      </Text>
                      <Input
                        shape="square"
                        name="City Input"
                        className="w-[88%] !border"
                      />
                    </div>
                    <div className="flex items-center gap-8 md:flex-col">
                      <div className="flex flex-1 flex-col items-start gap-3.5 md:self-stretch">
                        <Text
                          as="p"
                          className="text-[18px] font-normal text-gray-500 lg:text-[15px]"
                        >
                          State
                        </Text>
                        <SelectBox
                          shape="square"
                          indicator={
                            <Img
                              src="images/img_arrow_down_gray_500.svg"
                              alt="Arrow Down"
                              className="h-[24px] w-[24px]"
                            />
                          }
                          name="State Dropdown"
                          placeholder={`Select State`}
                          options={dropDownOptions}
                          className="self-stretch !border px-8 sm:px-4"
                        />
                      </div>
                      <div className="flex w-[46%] flex-col items-start gap-3.5 md:w-full">
                        <Text
                          as="p"
                          className="text-[18px] font-normal text-gray-500 lg:text-[15px]"
                        >
                          Zip Code
                        </Text>
                        <Input
                          shape="square"
                          name="Zip Code Input"
                          className="w-[74%] !border"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col items-end md:self-stretch">
                    <Input
                      size="sm"
                      variant="underline"
                      shape="square"
                      name="Payment Title"
                      placeholder={`Payment Method`}
                      className="w-[90%] !border-b font-medium"
                    />
                    <div className="mt-[30px] flex justify-end self-stretch md:flex-col">
                      <div className="flex items-center gap-4 border border-solid border-blue_gray-100 p-[30px] sm:p-4">
                        <Img
                          src="images/img_card.svg"
                          alt="Card Image"
                          className="h-[40px] w-[40px]"
                        />
                        <Text
                          as="p"
                          className="text-[18px] font-normal text-gray-800 1g:text-[15px]"
                        >
                          Credit Card
                        </Text>
                      </div>
                      <Button
                        size="6xl"
                        shape="square"
                        leftIcon={
                          <div className="flex h-[40px] w-[40px] items-center justify-center bg-gray-800">
                            <Img
                              src="images/img_television.svg"
                              alt="Television"
                              className="h-[32px] w-[32px] p-0.5"
                            />
                          </div>
                        }
                        className="min-w-[244px] px-[31px] ml-8 gap-4 border border-solid border-blue_gray-100 md:ml-0 sm:px-4 flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap rounded-[0px] h-[102px] text-[18px] bg-gray-800 text-white-a700"
                      >
                        Bank Transfer
                      </Button>
                      <Button
                        color="blue_gray_100"
                        size="6xl"
                        variant="outline"
                        shape="square"
                        leftIcon={
                          <Img
                            src="images/img_paypal.svg"
                            alt="Paypal"
                            className="h-[48px] w-[40px]"
                          />
                        }
                        className="ml-8 min-w-[244px] gap-4 !border px-[31px] md:ml-0 sm:px-4"
                      >
                        Paypal
                      </Button>
                    </div>
                    <div className="mt-[30px] flex w-[90%] flex-col items-start gap-4 lg:w-full md:w-full">
                      <Text
                        as="p"
                        className="text-[18px] font-normal text-gray-500 lg:text-[15px]"
                      >
                        Name on Card
                      </Text>
                      <Input
                        shape="square"
                        name="Card Name Input"
                        className="self-stretch !border"
                      />
                    </div>
                    <div className="mt-[30px] flex justify-end gap-[33px] self-stretch md:flex-col">
                      <div className="flex w-[60%] flex-col items-start gap-4 md:w-full">
                        <Text
                          as="p"
                          className="text-[18px] font-normal text-gray-500 lg:text-[15px]"
                        >
                          Card Number
                        </Text>
                        <Input
                          shape="square"
                          name="Card Number Input"
                          className="self-stretch !border"
                        />
                      </div>
                      <div className="flex w-[28%] flex-col items-start gap-3.5 md:w-full">
                        <Text
                          as="p"
                          className="text-[18px] font-normal text-gray-500 lg:text-[15px]"
                        >
                          CVV
                        </Text>
                        <Input
                          shape="square"
                          name="CVV Input"
                          className="self-stretch !border"
                        />
                      </div>
                    </div>
                    <div className="mt-[30px] flex justify-end gap-8 self-stretch md:flex-col">
                      <div className="flex w-[44%] flex-col items-start gap-4 md:w-full">
                        <Text
                          as="p"
                          className="text-[18px] font-normal text-gray-500 lg:text-[15px]"
                        >
                          Month
                        </Text>
                        <SelectBox
                          shape="square"
                          indicator={
                            <Img
                              src="images/img_arrow_down_gray_500.svg"
                              alt="Arrow Down"
                              className="h-[24px] w-[24px]"
                            />
                          }
                          name="Month Dropdown"
                          placeholder={`Select Month`}
                          options={dropDownOptions}
                          className="self-stretch !border px-8 sm:px-4"
                        />
                      </div>
                      <div className="flex w-[44%] flex-col items-start gap-3.5 md:w-full">
                        <Text
                          as="p"
                          className="text-[18px] font-normal text-gray-500 lg:text-[15px]"
                        >
                          Year
                        </Text>
                        <SelectBox
                          shape="square"
                          indicator={
                            <Img
                              src="images/img_arrow_down_gray_500.svg"
                              alt="Arrow Down"
                              className="h-[24px] w-[24px]"
                            />
                          }
                          name="Year Dropdown"
                          placeholder={`Select Year`}
                          options={dropDownOptions}
                          className="self-stretch !border px-8 sm:px-4"
                        />
                      </div>
                    </div>
                    <Button
                      shape="square"
                      className="min-w-[244px] px-[34px] mt-[74px] font-medium sm:px-4 flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap rounded-[0px] h-[60px] text-[18px] bg-gray-800 text-white-a700"
                    >
                      Checkout
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* footer section */}
        {/* <Footer className="mt-[100px] self-stretch" /> */}
      </div>
    </>
  );
};

export default CheckoutPage;
