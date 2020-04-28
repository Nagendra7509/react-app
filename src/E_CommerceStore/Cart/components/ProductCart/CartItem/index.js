import React from "react";
import { observer } from "mobx-react";

import {
    CartItemDiv,
    RemoveCartItemBtn,
    ProductImg,
    ProductDetailsDiv,
    ProductTitle,
    ProductPrintStyle,
    ProductQuantity,
    Price
}
from "./styledComponent";

@observer
class CartItem extends React.Component {

    onRemoveCartItem = (event) => {
        const { onRemoveCartItem } = this.props;
        onRemoveCartItem(event.target.id);

    }


    render() {
        const { cartProductItem, getProductDetailsById } = this.props;
        const productDetails = getProductDetailsById(cartProductItem.productId);

        return (<CartItemDiv>
                        <RemoveCartItemBtn data-testid='remove-cart-item' onClick={this.onRemoveCartItem} id={cartProductItem.cartItemId}>x</RemoveCartItemBtn>
                        <ProductImg src={productDetails.imageURL} alt="Cat Tee Black T-Shirt"/>
                        <ProductDetailsDiv>
                              <ProductTitle>{productDetails.title}</ProductTitle>
                              <ProductPrintStyle>{productDetails.printStyle}</ProductPrintStyle>
                              <ProductQuantity>Quantity: {cartProductItem.quantity}</ProductQuantity>
                        </ProductDetailsDiv>
                        <Price>₹ {productDetails.price}</Price>
                </CartItemDiv>);

    }
}

export default CartItem;
