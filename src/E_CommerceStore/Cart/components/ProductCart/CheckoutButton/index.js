import React from "react";

import { observer } from "mobx-react";


@observer
class CheckoutButton extends React.Component {

    render() {
        const { clearCart, cartProductList } = this.props;
        return (
            <button onClick={clearCart} disabled={cartProductList.length>0?false:true} class="bg-black w-full py-2 text-white my-4 rounded  focus:outline-none">CHECKOUT</button>
        );
    }
}

export default CheckoutButton;
