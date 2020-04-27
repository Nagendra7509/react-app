import styled from "@emotion/styled";
import tw from "tailwind.macro";

const NoofProductsAndProductSort = styled.div `
      ${tw `flex justify-between items-center my-4`}`;
const TotalNofProducts = styled.p `
      ${tw `hidden sm:flex`}`;

export { NoofProductsAndProductSort, TotalNofProducts };
