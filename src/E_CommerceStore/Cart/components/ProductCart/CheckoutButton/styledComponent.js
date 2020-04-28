import styled from "@emotion/styled";
import tw from "tailwind.macro";

const CheckoutBtn = styled.button `
    ${tw `bg-black w-full py-2 text-white my-4 rounded focus:outline-none`}
    opacity:${props=>props.opacity}`;

export { CheckoutBtn };
