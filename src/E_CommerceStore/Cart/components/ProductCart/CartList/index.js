import React from "react";
import { observer } from "mobx-react";
import CartItem from "../CartItem/index";


@observer
class CartList extends React.Component {

    render() {
        const { onRemoveCartItem, cartProductList, getProductDetailsById } = this.props;
        return cartProductList.map(cartProductItem => <CartItem key={cartProductItem.cartItemId.toString()}  getProductDetailsById={getProductDetailsById} cartProductItem={cartProductItem} onRemoveCartItem={onRemoveCartItem}/>);
    }
}

export default CartList;
