import styled from "@emotion/styled";
import tw from "tailwind.macro";

const Login = styled.div `
    ${tw `flex flex-col items-center justify-center min-h-screen`}`;

const UserName = styled.input `
    ${tw ``}`;

const Password = styled.input `
    ${tw ``}`;
const SubmitBtn = styled.button `
    ${tw `bg-blue-800`}`;


export { Login, UserName, Password, SubmitBtn };
