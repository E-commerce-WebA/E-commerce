import { Text } from "../../components/Text/Text";
import { Heading } from "../../components/Heading/Heading";
import { Img } from "../../components/Img/Img";
import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";
import { ReactTable } from "../../components/ReactTable/ReactTable";
import { createColumnHelper } from "@tanstack/react-table";
import React from "react";
const tableData = [
  {
    headerProduct: "Gray T-shirt",
    headerQuantity: "images/img_grid.svg",
    headerPrice: "$100.99",
    headerTotal: "$100.99",
    placeholderImage: "images/img_placeholder_1.png",
  },
  {
    placeholderImage: "images/img_placeholder_19.png",
    headerProduct: "Red Flannel",
    headerQuantity: "images/img_grid.svg",
    headerPrice: "$100.99",
    headerTotal: "$100.99",
  },
];
type TableRowType = {
  headerProduct: string;
  headerQuantity: string;
  headerPrice: string;
  headerTotal: string;
  placeholderImage: string;
};
export default function BreadcrumbSection() {
  const tableColumns = React.useMemo(() => {
    const tableColumnHelper = createColumnHelper<TableRowType>();
    return [
      tableColumnHelper.accessor("headerProduct", {
        cell: (info) => (
          <div className="flex flex-1 items-center gap-[66px] sm:flex-col">
            <div className="w-[34%] border border-solid border-blue_gray-100 p-2.5 sm:w-full">
              <Img
                src={info.row.original.placeholderImage as unknown as string}
                alt="Placeholder Image"
                className="h-[180px] w-[180px] object-cover"
              />
            </div>
            <Text
              size="texts"
              as="p"
              className="text-[24px] font-medium text-gray-800 lg:text-[20px]"
            >
              {info.getValue<string>()}
            </Text>
          </div>
        ),
        header: (info) => (
          <Text
            as="p"
            className="pb-[34px] text-left text-[18px] font-medium text-gray-500 lg:text-[15px] sm:pb-4"
          >
            Product
          </Text>
        ),
        meta: { width: "660px" },
      }),
      tableColumnHelper.accessor("headerQuantity", {
        cell: (info) => (
          <div>
            <Input
              size="xs"
              shape="square"
              name="Quantity Input"
              placeholder={`1`}
              className="relative z-[1] !border pr-[34px] font-medium sm:pr-4"
            />
            <div className="relative mt-[-48px] flex justify-between gap-5">
              <div className="w- [28%] bg-gray-50 px-[18px] py-[22px] sm:py-4">
                <div className="h-[2px] w- [8px] bg-gray-500" />
              </div>
              <div className="flex flex-col items-center bg-gray-800 p-4">
                <Img
                  src={info.getValue<string>()}
                  alt="Increase View"
                  className="h-[16px] w-[16px]"
                />
              </div>
            </div>
          </div>
        ),
        header: (info) => (
          <Text
            className="pb-[30px] pt-1 text-left text-[18px] font-medium text-gray-500 lg:text-[15px] sm:pb-4"
            as="p"
          >
            Quantity
          </Text>
        ),
        meta: { width: "310px" },
      }),
      tableColumnHelper.accessor("headerPrice", {
        cell: (info) => (
          <Text
            size="texts"
            as="p"
            className="ml-[138px] text-[24px] font-medium text-gray-800 lg:text-[20px]"
          >
            {info.getValue<string>()}
          </Text>
        ),
        header: (info) => (
          <Text
            as="p"
            className="pb-8 pt-0.5 text-left text-[18px] font-medium text-gray-500 lg:text-[15px] sm:pb-4"
          >
            Price
          </Text>
        ),
        meta: { width: "276px" },
      }),
      tableColumnHelper.accessor("headerTotal", {
        cell: (info) => (
          <div className="flex items-center justify-between gap-5">
            <Text
              size="texts"
              as="p"
              className="text-[24px] font-medium text-gray-800 lg:text-[20px]"
            >
              {info.getValue<string>()}
            </Text>
            <Img
              src="images/img_close.svg"
              alt="Remove Product"
              className="h-[32px] w-[32px]"
            />
          </div>
        ),
        header: (info) => (
          <Text
            as="p"
            className="pb-8 pt-1 text-left text-[18px] font-medium text-gray-500 lg:text-[15px] sm:pb-4"
          >
            Total
          </Text>
        ),
        meta: { width: "384px" },
      }),
    ];
  }, []);
  return (
    <>
      {/* breadcrumb section  */}
      <div className="mt-[30px] flex flex-col items-center">
        <div className="container-xs flex flex-col items-center lg:px-5 md:px-5">
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
              className="ml-4 text-[18px] font-medium text-gray-800 lg:text-[15px]"
            >
              Shopping Cart
            </Text>
          </div>
          <Heading
            as="h1"
            className="mt-[42px] text-[36px] font-bold text-gray-800 lg:text-[30px] md:text-[30px] sm:text-[28px]"
          >
            Shopping Cart
          </Heading>
          {/* shopping cart section */}

          <div className="mt-24 flex flex-col gap-[78px] self-stretch lg:gap-[78px] md:gap-[58px] sm:gap-[39px]">
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
            {/* cart details section  */}
            <div className="flex flex-col gap-[78px] 1g:gap-[78px] md:gap-[58px] sm:gap-[39px]">
              {/* cart summary section */}
              <div className="flex flex-col gap-[30px]">
                <div>
                  <ReactTable
                    size="xs"
                    bodyProps={{ className: "" }}
                    cellProps={{
                      className: "border-blue_gray-100 border-b border-solid",
                    }}
                    className="md:block md:overflow-x-auto md:whitespace-nowrap"
                    columns={tableColumns}
                    data={tableData}
                  />
                </div>
                <div className="flex items-start md:flex-col">
                  <div className="w-[28%] flex items-center justify-between gap-5 border border-solid border-blue_gray-100 md:w-full">
                    <Text
                      size="texts"
                      as="p"
                      className=" lg:text-[15px] text-[18px] tracking-[0.36px] mb-3.5 ml-4 self-end font-normal text-gray-500_7f undefined"
                    >
                      Enter coupon code
                    </Text>
                    <Button shape="square" className="min-w-[136px] flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap rounded-[0px] h-[60px] px-7 text-[18px] bg-gray-800 text-white-a700 undefined">
                      Apply Code
                    </Button>
                  </div>
                  <div className="flex flex-1 flex-col items-end gap-4 self-center md:self-stretch">
                    <Text
                      as="p"
                      className="text-[18px] font-medium text-gray-500 lg:text-[15px]"
                    >
                      Total
                    </Text>
                    <Heading
                      as="h2"
                      className="text-[36px] font-bold text-gray-800 lg:text-[30px] md:text-[30px] sm:text-[28px]"
                    >
                      $202.00
                    </Heading>
                  </div>
                </div>
              </div>
              {/* cart actions section */}
              <div className="flex justify-end gap-[33px]">
                <Button
                  size="md"
                  variant="outline"
                  shape="square"
                  className="min-w-[206px] !border px-[15px] font-medium"
                >
                  Continue Shopping
                </Button>

                <Button
                  size="md"
                  shape="square"
                  className="min-w-[170px] px-[34px] font-medium sm:px-4 flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap rounded-[0px] h-[50px] text-[18px] bg-gray-800 text-white-a700"
                >
                  Checkout
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
