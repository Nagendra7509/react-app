import styled from "@emotion/styled";
import tw from "tailwind.macro";

const E_CommerceStore_App = styled.div `
      ${tw `m-6 relative `}`;
const HeaderPart = styled.div `
      ${tw ``}`;
const FilterAndProducts = styled.div `
      ${tw `flex`}`;
const SortFilterAndProducts = styled.div `
      ${tw `flex flex-col flex-1 mr-10`}`;
const SignOutBtn = styled.button `
      ${tw `border border-gray-800 p-1 rounded text-sm`}`;


export { E_CommerceStore_App, HeaderPart, FilterAndProducts, SortFilterAndProducts, SignOutBtn };
