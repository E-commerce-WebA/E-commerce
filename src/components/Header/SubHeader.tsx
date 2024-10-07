import { Text } from "../Text/Text.tsx";

const SubHeader = () => {
  return (
    <div className="flex flex-col items-center gap-[22px]">
      <div className="h-px self-stretch bg-gray-50" />
      <ul className="flex flex-wrap gap-20 1g:gap-5 md:gap-5">
        <li>
          <a href="#Categories" className="lg:text-[15px]">
            <Text as="p" className="text-[18px] font-normal text-gray-800">
              Categories
            </Text>
          </a>
        </li>
        <li>
          <a href="#NewArrival" className="lg:text-[15px]">
            <Text as="p" className="text-[18px] font-normal text-gray-800">
              New Arrival
            </Text>
          </a>
        </li>
        <li>
          <a href="#Features" className="1g:text-[15px]">
            <Text as="p" className="text-[18px] font-normal text-gray-800">
              Features
            </Text>
          </a>
        </li>
        <li>
          <a href="#Collections" className="lg:text-[15px]">
            <Text as="p" className="text-[18px] font-normal text-gray-800">
              Collections
            </Text>
          </a>
        </li>
        <li>
          <a href="#Popular" className="lg:text-[15px]">
            <Text as="p" className="text-[18px] font-normal text-gray-800">
            Popular This Week
            </Text>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SubHeader;
