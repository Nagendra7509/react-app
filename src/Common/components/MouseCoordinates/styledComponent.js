import styled from "@emotion/styled";
import tw from "tailwind.macro";

const MouseCoordinate = styled.div `
    ${tw `py-4 flex flex-col items-center bg-gray-300 w-full px-2`}`;

const Title = styled.h2 `
    ${tw `text-xl font-bold`}`;

export { MouseCoordinate, Title };
