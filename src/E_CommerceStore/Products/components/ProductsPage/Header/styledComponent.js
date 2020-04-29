import styled from "@emotion/styled";
import tw from "tailwind.macro";

const NoofProductsAndProductSort = styled.div `
      ${tw `flex justify-between items-center my-4`}`;
const TotalNofProducts = styled.p `
      ${tw `hidden sm:flex`}`;
const SearchBar = styled.input `
      ${tw `border border-gray-400 mb-3 w-48 h-10 pl-2 focus:outline-none rounded`}`;

export { NoofProductsAndProductSort, TotalNofProducts, SearchBar };
