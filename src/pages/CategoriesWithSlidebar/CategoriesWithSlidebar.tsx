import { Helmet } from "react-helmet";
import { Img } from "../../components/Img/Img";
import { Text } from "../../components/Text/Text";
import { CheckBox } from "../../components/CheckBox/CheckBox";
import { Heading } from "../../components/Heading/Heading";
import JacketCollection from "../../components/JacketCollection/JacketCollection.tsx";
import UserRating from "../../components/UserRating/UserRating";
import { Suspense } from "react";

const clothingGrid = [
  {
    jacketImage: "images/img_sweater.svg",
    jacketTitle: "Jacket",
    collectionDescription: "Collection",
  },
  {
    jacketImage: "images/img_tshirt.svg",
    jacketTitle: "Shirt",
    collectionDescription: "Collection",
  },
  {
    jacketImage: "images/img_pants.svg",
    jacketTitle: "Pants",
    collectionDescription: "Collection",
  },
  {
    jacketImage: "images/img_skirt.svg",
    jacketTitle: "Skirt",
    collectionDescription: "Collection",
  },
  {
    jacketImage: "images/img_sweater.svg",
    jacketTitle: "Jacket",
    collectionDescription: "Collection",
  },
  {
    jacketImage: "images/img_dress.svg",
    jacketTitle: "Dress",
    collectionDescription: "Collection",
  },
  {
    jacketImage: "images/img_sweater.svg",
    jacketTitle: "Jacket",
    collectionDescription: "Collection",
  },
  {
    jacketImage: "images/img_sweater.svg",
    jacketTitle: "Jacket",
    collectionDescription: "Collection",
  },
];
export default function CategoriesWithSidebarPage() {
  return (
    <>
      <Helmet>
        <title>Shop by Category with Sidebar 4Fashion</title>
        <meta
          name="description"
          content="Explore our collections and filter by price, rating, or brand. Find jackets, shirts, pants, and more. Shop the latest trends in fashion with 4Fashion."
        />
      </Helmet>
      <div className="flex w-full flex-col items-center bg-white-a700">
        {/*header section */}
        {/* <Header className="self-stretch" /> */}

        {/* breadcrumb section */}
        <div className="container-xs mt-8 1g:px-5 md:px-5">
          <div className="flex flex-col gap-[42px]">
            <div className="flex items-center justify-center">
              <Text
                as="p"
                className="text-[18px] font-medium text-gray-500 1g:text-[15px]"
              >
                Home
              </Text>
              <div className="flex flex-1 flex-wrap gap-[17px] px-4">
                <Text
                  as="p"
                  className="text-[18px] font-medium text-blue_gray-100 1g:text-[15px]"
                >
                  &gt;{" "}
                </Text>
                <Text
                  as="p"
                  className="text-[18px] font-medium text-gray-800 lg:text-[15px]"
                >
                  Categories
                </Text>
              </div>
            </div>

            {/* sidebar section */}
            <div className="flex flex-col items-center gap-[70px] 1g:gap-[70px] md:gap-[52px] sm:gap-[35px]">
              <Heading
                as="hl"
                className="text-[36px] font-bold text-gray-800 lg:text-[30px] md:text-[30px] sm:text-[28px]"
              >
                Categories
              </Heading>
              <div className="flex items-start gap-8 self-stretch md:flex-col">
                <div className="flex w-[14%] flex-col gap-8 md:w-full">
                  <div className="flex flex-col gap-7">
                    <div className="flex items-center justify-between gap-5">
                      <Text
                        as="p"
                        className="text-[18px] font-medium text-gray-800 lg:text-[15px]"
                      >
                        Filter by Price
                      </Text>
                      <Img
                        src="images/img_arrow_down.svg"
                        alt="Price Dropdown"
                        className="h-[24px] w-[24px]"
                      />
                    </div>
                    <div className="flex flex-col items-start gap-6">
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
                        className="gap-4 text-[18px] text-gray-800"
                      />
                      <CheckBox
                        name="High Price Checkbox"
                        label="$250 - $500"
                        id="HighPriceCheckbox"
                        className="gap-4 text-[18px] text-gray-500"
                      />

                      <CheckBox
                        name="Premium Price Checkbox"
                        label="$750 - $1,000"
                        id="PremiumPriceCheckbox"
                        className="gap-4 text-[18px] text-gray-500"
                      />
                      <CheckBox
                        name="Luxury Price Checkbox"
                        label="$1000 - $1,500"
                        id="LuxuryPriceCheckbox"
                        className="gap-4 text-[18px] text-gray-500"
                      />
                    </div>
                  </div>

                  <div className="h-px bg-blue_gray-100" />
                  <div className="flex flex-col gap-7">
                    <div className="flex items-center justify-between gap-5">
                      <Text
                        as="p"
                        className="text-[18px] font-medium text-gray-800 lg:text-[15px]"
                      >
                        Filter by Rating
                      </Text>
                      <Img
                        src="images/img_arrow_down.svg"
                        alt="Rating Dropdown"
                        className="h-[24px] w-[24px]"
                      />
                    </div>
                    <div className="flex flex-col gap-4">
                      <div className="flex gap-4">
                        <div className="h-[24px] w-[24px] border-[3px] border-solid border-blue_gray-100" />
                        <Img
                          src="images/img_star.svg"
                          alt="One Star Image"
                          className="h-[24px] w-[24px]"
                        />
                      </div>
                      <div className="flex">
                        <div className="h-[24px] w-[24px] border-[3px] border-solid border-blue_gray-100" />
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
                        <div className="h-[24px] w-[24px] border-[3px] border-solid border-blue_gray-100" />
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
                        <UserRating className="mr-8 md:mr-0" />
                        <UserRating />
                      </div>
                    </div>
                  </div>
                  <div className="h-px bg-blue_gray-100" />
                  <div className="flex items-center justify-between gap-5">
                    <Text
                      as="p"
                      className="text-[18px] font-medium text-gray-800 lg:text-[15px]"
                    >
                      Filter by Brand
                    </Text>
                    <Img
                      src="images/img_arrow_down.svg"
                      alt="Brand Dropdown"
                      className="h-[24px] w-[24px]"
                    />
                  </div>
                  <div className="flex items-center justify-between gap-5">
                    <Text
                      as="p"
                      className="text-[18px] font-medium text-gray-800 lg:text-[15px]"
                    >
                      Filter by Size
                    </Text>
                    <Img
                      src="images/img_arrow_down.svg"
                      alt="Size Dropdown"
                      className="h-[24px] w-[24px]"
                    />
                  </div>
                </div>
                {/* main content section */}
                <div className="flex-1 self-center md:self-stretch">
                  <div className="grid grid-cols-2 gap-8 lg:grid-cols-2 md:grid-cols-1">
                    <Suspense fallback={<div>Loading feed...</div>}>
                      {" "}
                      {clothingGrid.map((d, index) => (
                        <JacketCollection {...d} key={"productsGrid" + index} />
                      ))}
                    </Suspense>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* footer section */}
        {/* <Footer className="mt-[84px] self-stretch" /> */}
      </div>
    </>
  );
}
