import React from "react";
import { observer } from "mobx-react";

@observer
class CartItem extends React.Component {

    onRemoveCartItem = (event) => {
        const { onRemoveCartItem } = this.props;
        onRemoveCartItem(event.target.id);

    }


    render() {
        const { cartProductItem, getProductDetailsById } = this.props;
        const productDetails = getProductDetailsById(cartProductItem.productId);

        return (
            <div class="flex text-sm my-2 items-center relative">
                        <button onClick={this.onRemoveCartItem} id={cartProductItem.cartItemId} class="font-bold absolute top-0 right-0">x</button>
                        <img src={productDetails.imageURL} alt="Cat Tee Black T-Shirt" class="w-12 object-contain"/>
                        <div class="ml-2 flex-1">
                              <h3 class="text-white">{productDetails.title}</h3>
                              <p class="text-gray-500 text-xs">{productDetails.printStyle}</p>
                              <p class="text-gray-500 text-xs">Quantity: {cartProductItem.quantity}</p>
                        </div>
                        <p class="text-yellow-600 ml-auto">₹ {productDetails.price}</p>
                  </div>
        );

    }
}

export default CartItem;
