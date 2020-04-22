import styled from "@emotion/styled";
import tw from "tailwind.macro";

const TodoTitle = styled.div `
${tw `text-pink-400 text-center`}
font-size:40px`;


const TodosListApp = styled.div `
    ${tw `shadow-lg`}
    border:2px solid lightgrey;`;

export { TodoTitle, TodosListApp };
