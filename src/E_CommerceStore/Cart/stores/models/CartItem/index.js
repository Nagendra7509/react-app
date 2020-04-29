import { observable } from "mobx";


class CartItem {

    @observable cartItemId
    @observable productId
    @observable quantity

    constructor(productId) {
        this.cartItemId = Math.random();
        this.productId = productId;
        this.quantity = 1;
    }

    incrementQuantity = () => {
        this.quantity++;
    }
}

export default CartItem;
