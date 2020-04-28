import React from "react";
import { observer } from "mobx-react";
import { CheckoutBtn } from "./styledComponent";


@observer
class CheckoutButton extends React.Component {

    render() {
        const { clearCart, cartProductList } = this.props;
        console.log(cartProductList);
        return (
            <CheckoutBtn onClick={clearCart} opacity={cartProductList.length>0?1:0.4} disabled={cartProductList.length>0?false:true} >CHECKOUT</CheckoutBtn>
        );
    }
}

export default CheckoutButton;
