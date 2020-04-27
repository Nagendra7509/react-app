import { observable, action, computed, toJS } from "mobx";
import CartItem from "../models/CartItem/index";

class CartStore {
    @observable cartProductList
    @observable productStore

    constructor(productStore) {
        this.cartProductList = [];
        this.productStore = productStore;
        this.productIdList = [];
    }

    @action.bound
    onClickAddToCart(id) {
        if (this.productIdList.includes(id)) {
            this.cartProductList.map(cartItem => {
                if (cartItem.productId == id) {
                    cartItem.incrementQuantity();
                }
            });
        }
        else {
            const product = this.getProductDetailsById(id);
            this.productIdList.push(product.productId);
            this.cartProductList.push(new CartItem(product));
        }

    }

    @action.bound
    onRemoveCartItem(id) {
        this.cartProductList = this.cartProductList.filter(cartItem => cartItem.cartItemId != id);
    }

    @action.bound
    clearCart() {
        this.cartProductList = [];
        this.productIdList = [];

    }

    @action.bound
    getProductDetailsById(id) {
        let productsList = this.productStore.products;
        return productsList.find(product => product.productId == id);
    }

    @computed get totalCartAmount() {
        let totalCartAmount = 0;
        this.cartProductList.forEach(cartItem => {
            totalCartAmount += parseInt(cartItem.quantity, 10) * parseFloat(this.getProductDetailsById(cartItem.productId).price, 10);
        });
        return totalCartAmount.toFixed(2);
    }

    @computed get noOfProductsInCart() {
        let noOfProductsInCart = 0;
        this.cartProductList.forEach(cartItem => {
            noOfProductsInCart += cartItem.quantity;
        });
        return noOfProductsInCart;
    }
}

export default CartStore;
