import { observable } from "mobx";


class CartItem {
    @observable cartItemId
    @observable productId
    @observable quantity

    constructor(product) {
        this.cartItemId = Math.random();
        this.productId = product.productId;
        this.quantity = 1;
    }

    incrementQuantity = () => {
        this.quantity++;
    }
}

export default CartItem;
