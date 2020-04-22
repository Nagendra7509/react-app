import styled from "@emotion/styled";
import tw from "tailwind.macro";

const CheckBox = styled.input `
${tw ``}
border:2px solid red`;

const InputTag = styled.input `
${tw `w-1/3 text-center`} ${props=>({textDecoration:props.linethrough})}`;

const Delete = styled.span `
${tw `text-red-500 text-right`}
font-size:20px`;

const OneTodo = styled.div `
${tw `flex w-4/5 mx-16 items-baseline justify-around`}`;

export { CheckBox, InputTag, Delete, OneTodo };
