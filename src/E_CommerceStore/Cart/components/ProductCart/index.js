import React from "react";
import { observable, action } from "mobx";
import { observer, inject } from "mobx-react";
import CartList from "./CartList/index";
import SubTotal from "./SubTotal/index";
import CheckoutButton from "./CheckoutButton/index";
import {
    CartContainer,
    CloseBtn,
    CartItemsAndBill,
    CartIconWithTitle,
    Icon,
    NoofProducts,
    Title,
    CartListItems,
    BillAndPayments,
    CartIconDiv
}
from "./styledComponent";


@inject('cartStore')


@observer
class ProductCart extends React.Component {

    @observable shouldDisplayCart = false;

    @action.bound
    showCart() {
        this.shouldDisplayCart = true;
    }

    @action.bound
    hideCart() {
        this.shouldDisplayCart = false;
    }


    render() {
        const {
            onRemoveCartItem,
            cartProductList,
            getProductDetailsById,
            clearCart,
            totalCartAmount,
            noOfProductsInCart
        } = this.props.cartStore;

        return (
            <div>
                        {this.shouldDisplayCart?
                              <CartContainer>
                                    <CloseBtn onClick={this.hideCart} data-testid='cart-close-button' >X</CloseBtn>
                                    <CartItemsAndBill>
                                          <CartIconWithTitle>
                                                <Icon>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-shopping-cart">
                                                            <circle cx="9" cy="21" r="1"></circle>
                                                            <circle cx="20" cy="21" r="1"></circle>
                                                            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                                                        </svg>
                                                      <NoofProducts>{noOfProductsInCart}</NoofProducts>
                                                </Icon>
                                                <Title>Cart</Title>
                                          </CartIconWithTitle>
                                          <CartListItems>
                                                <CartList onRemoveCartItem={onRemoveCartItem} cartProductList={cartProductList} getProductDetailsById={getProductDetailsById}/>
                                                {cartProductList.length>0?null:<p class=" pt-64 text-white text-sm my-auto h-3/4 flex items-center justify-center">Add some products in the cart</p>}
                                          </CartListItems>
                                          <BillAndPayments>
                                                <SubTotal totalCartAmount={totalCartAmount}/>
                                                <CheckoutButton clearCart={clearCart} cartProductList={cartProductList}/>
                                          </BillAndPayments>
                                    </CartItemsAndBill>
                                </CartContainer>
                              :
                              <CartIconDiv  onClick={this.showCart} data-testid='cart-open-button'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className=" feather feather-shopping-cart pt-2">
                                        <circle cx="9" cy="21" r="1"></circle>
                                        <circle cx="20" cy="21" r="1"></circle>
                                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                                    </svg>
                                    <NoofProducts>{noOfProductsInCart}</NoofProducts>
                              </CartIconDiv>
                        }
                  </div>

        );

    }
}

export default ProductCart;
