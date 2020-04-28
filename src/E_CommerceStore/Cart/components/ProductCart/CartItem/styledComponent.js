import styled from "@emotion/styled";
import tw from "tailwind.macro";

const CartItemDiv = styled.div `
    ${tw `flex text-sm my-2 items-center relative`}`;
const RemoveCartItemBtn = styled.button `
    ${tw `font-bold absolute top-0 right-0 text-xl`}`;
const ProductImg = styled.img `
    ${tw `w-12 object-contain`}`;
const ProductDetailsDiv = styled.div `
    ${tw `ml-2 flex-1 `}`;
const ProductTitle = styled.h3 `
    ${tw `text-white`}`;
const ProductPrintStyle = styled.p `
    ${tw `text-gray-500 text-xs`}`;
const ProductQuantity = styled.p `
    ${tw `text-gray-500 text-xs`}`;
const Price = styled.p `
    ${tw `text-yellow-600 ml-auto`}`;


export {
    CartItemDiv,
    RemoveCartItemBtn,
    ProductImg,
    ProductDetailsDiv,
    ProductTitle,
    ProductPrintStyle,
    ProductQuantity,
    Price
}
