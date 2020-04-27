import styled from "@emotion/styled";
import tw from "tailwind.macro";

const SizesButtons = styled.div `
      ${tw `w-1/4 px-4`}`;
const SizesLabel = styled.p `
      ${tw `my-4 font-bold`}`;
const SizeBtn = styled.button `
      ${tw `rounded-full h-10 w-10 m-1 border focus:outline-none`}
      background:${props=>props.isClicked?"black":"#edf2f7"};
      color:${props=>props.isClicked?"white":"black"}`;
export { SizesButtons, SizesLabel, SizeBtn };
