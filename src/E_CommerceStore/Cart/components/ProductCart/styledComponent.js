import styled from "@emotion/styled";
import tw from "tailwind.macro";


const CartContainer = styled.div `
    ${tw `flex  fixed  top-0 right-0 z-10 sm:w-2/3 md:w-1/3  overflow-x-hidden h-full flex-1`}
    transition:right 2s ease-out;`;
const CloseBtn = styled.button `
    ${tw `h-10 p-3 text-white bg-gray-800 focus:outline-none active:outline-none leading-none`}`;
const CartItemsAndBill = styled.div `
    ${tw ` p-4 bg-gray-800 flex flex-col justify-between w-full`}`;
const CartIconWithTitle = styled.div `
    ${tw `flex items-center justify-center`}`;
const Icon = styled.div `
    ${tw `h-10 mr-4`}`;
const NoofProducts = styled.p `
    ${tw `-mt-8 pl-2 text-center text-sm text-yellow-600 relative`}`;
const Title = styled.h1 `
    ${tw `text-white font-bold text-xl`}`;
const CartListItems = styled.div `
    ${tw `mt-8 flex-1 overflow-y-auto`}`;
const BillAndPayments = styled.div `
    ${tw `bottom-0 right-0  bg-gray-800 shadow-inner w-11/12`}`;
const CartIconDiv = styled.div `
    ${tw `bg-black text-white fixed top-0 right-0 cursor-pointer`}
    height:60px;
     width:60px`;


export {
    CartContainer,
    CloseBtn,
    CartItemsAndBill,
    CartIconWithTitle,
    Icon,
    NoofProducts,
    Title,
    CartListItems,
    BillAndPayments,
    CartIconDiv
};
