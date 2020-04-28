import styled from "@emotion/styled";
import tw from "tailwind.macro";


const SignInPageDiv = styled.div `
    ${tw `flex justify-center items-center h-screen bg-gray-200`}`;
const SignInForm = styled.form `
    ${tw `flex flex-col p-10 bg-white`}`;
const SignInText = styled.h2 `
    ${tw `font-bold mb-4`}`;
const UserName = styled.input `
    ${tw `border border-gray-400 mb-3 w-48 h-10 pl-2 focus:outline-none rounded`}`;
const Password = styled.input `
    ${tw `border border-gray-400 mb-3 w-48 h-10 pl-2 focus:outline-none rounded`}`;
const SignInBtn = styled.button `
    ${tw `flex justify-center w-48 h-10 rounded bg-gray-900 text-white focus:outline-none cursor-pointer`}`;
const ErrorMessage = styled.p `
    ${tw `text-red-700 pt-2 text-sm`}`;


export {
    SignInPageDiv,
    SignInForm,
    SignInText,
    UserName,
    Password,
    SignInBtn,
    ErrorMessage
};
