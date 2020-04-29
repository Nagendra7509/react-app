import React from "react";
import { observable } from "mobx";
import { observer } from "mobx-react";
import styled from "@emotion/styled";
import tw from "tailwind.macro";

const NavBar = styled.div `
    ${tw `bg-gray-800 fixed flex justify-between top-0 left-0 z-10 sm:w-2/3 md:w-1/4  overflow-x-hidden h-full flex-1`}`;
const Span = styled.span `
    ${tw `text-white text-xl pt-2 cursor-pointer`}`;

const Button = styled.button `
    ${tw `text-white text-xl pt-2`}`;
const CloseButton = styled.button `
    ${tw `text-4xl absolute right-0 top-0 text-white`}`;
const NavIcon = styled.span `
    ${tw `text-xl cursor-pointer`}`;
const ItemsInNav = styled.div `
    ${tw `flex flex-col flex-1 text-center pt-20`}`;

@observer
class MenuPage extends React.Component {

    @observable isClicked = false;

    handleClick = () => {
        this.isClicked = !this.isClicked;
    }

    onClickYourOrders = () => {
        const { history } = this.props;
        history.replace('/ecommerce-store/your-orders/');
    }

    render() {
        const { onClickSignout } = this.props;
        return (
            <div>
            {this.isClicked?
                    <NavBar>
                        <ItemsInNav>
                            <Span >Home</Span>
                            <Span onClick={this.onClickYourOrders} >Your Orders</Span>
                            <Span >Your Wishlist</Span>
                            <Span >Your Account</Span>
                            <Button onClick={onClickSignout} >Signout</Button>
                            <Button>Contact us</Button>
                        </ItemsInNav>
                        <CloseButton onClick={this.handleClick}>&times;</CloseButton>
                        
                    </NavBar>
                    :
                    <NavIcon onClick={this.handleClick} >&#9776;</NavIcon>}
        </div>);

    }
}


export default MenuPage;
