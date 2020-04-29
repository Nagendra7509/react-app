import styled from "@emotion/styled";
import tw from "tailwind.macro";


const ProductCard = styled.div `
    ${tw `flex flex-col justify-between hover:border-gray-500 border border-transparent border-solid md:w-46% lg:w-30% xl:w-23% m-2 items-center p-2 relative`}`;
const FreeShipping = styled.p `
    ${tw `absolute top-10 right-0 bg-black p-1 text-xs text-white`}`;
const ProductImg = styled.img `
    ${tw `w-4/5 object-contain mb-2`}`;
const ProductTitle = styled.p `
    ${tw `h-45px text-center text-sm`}`;
const YelloWDash = styled.div `
    ${tw `w-4 border-t-2 rounded border-yellow-600 mt-2px mb-4`}`;
const Price = styled.p `
    ${tw `text-sm`}`;
const CurrencyFormat = styled.span `
    ${tw `text-xs mr-1`}`;
const PriceValue = styled.span `
    ${tw `text-xl`}`;
const Installments = styled.p `
    ${tw `text-sm text-gray-700 mb-4 h-5`}`;
const AddToCartBtn = styled.button `
    ${tw `w-full py-3 text-white bg-black text-center rounded text-sm focus:outline-none`}`;
const Toaster = styled.div `
    ${tw `flex justify-center`}`;
const ToastMessage = styled.span `
    ${tw `pt-1`}`;

export {
    ProductCard,
    FreeShipping,
    ProductImg,
    ProductTitle,
    YelloWDash,
    Price,
    CurrencyFormat,
    PriceValue,
    Installments,
    AddToCartBtn,
    Toaster,
    ToastMessage
};
