import React from "react";
import ProductStore from "../../../Products/stores/ProductStore/index";
import CartStore from ".";

/*global jest*/
/*global expect*/

describe('CartStore test cases', () => {
    let productStore, cartStore;

    beforeEach(() => {
        productStore = new ProductStore();
        cartStore = new CartStore(productStore);
    });

    afterEach(() => {
        jest.resetAllMocks();
    });

    it('should test initialization', () => {
        expect(cartStore.cartProductList).toStrictEqual([]);
        expect(cartStore.productStore).toBe(productStore);
        expect(cartStore.productIdList).toStrictEqual([]);
    });

    it('should test add to cart', () => {

    });

});
