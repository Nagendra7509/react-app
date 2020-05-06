import React from "react";
import ProductStore from "../../../Products/stores/ProductStore/index";
//import ProductService from "../../../Products/services/ProductService/index.api";
import productsData from "../../../Products/fixtures/getProductsResponse.json";
import CartStore from ".";

/*global jest*/
/*global expect*/

describe('CartStore test cases', () => {
    let productStore, cartStore, productAPI;

    beforeEach(() => {
        //productAPI = new ProductService();
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
        cartStore.onClickAddToCart(13);
        expect(cartStore.cartProductList.length).toBe(1);
        cartStore.onClickAddToCart(13);
        expect(cartStore.cartProductList.length).toBe(1);
        expect(cartStore.cartProductList[0].quantity).toBe(2);
        cartStore.onClickAddToCart(12);
        expect(cartStore.cartProductList.length).toBe(2);
    });

    it('should test onRemoveCartItem', () => {
        cartStore.onClickAddToCart(12);
        cartStore.onClickAddToCart(13);
        cartStore.cartProductList[0].cartItemId = 1;
        cartStore.cartProductList[1].cartItemId = 2;
        cartStore.onRemoveCartItem(2);
        expect(cartStore.cartProductList.length).toBe(1);
        expect(cartStore.productIdList.length).toBe(1);
    });

    it('should test clearCart', () => {
        window.alert = jest.fn();
        cartStore.clearCart();
        expect(cartStore.cartProductList).toStrictEqual([]);
        expect(cartStore.productIdList).toStrictEqual([]);
        expect(window.alert).toHaveBeenCalledWith('Thank you for shopping with Us.\nYour Products will be delivered in 3 days to the address mentioned in your profile.');

    });

    it('should test getProductDetailsById', () => {
        productStore.setProductListResponse(productsData);
        const productData = {
            productId: 12,
            availableSizes: ['S', 'XS'],
            currencyFormat: "₹",
            currencyId: "USD",
            description: "4 MSL",
            installmentsCount: 9,
            isFreeShipping: true,
            price: 845.24,
            printStyle: "Black with custom print",
            title: "Cat Tee Black T-Shirt",
            imageURL: "https://react-shopping-cart-67954.firebaseapp.com/static/media/12064273040195392_1.2995d79a.jpg"
        };
        expect(cartStore.getProductDetailsById(12)).toEqual(productData);
    });

    it('should test totalCartAmount', () => {
        productStore.setProductListResponse(productsData);
        cartStore.onClickAddToCart(12);
        cartStore.onClickAddToCart(13);
        cartStore.onClickAddToCart(12);

        expect(cartStore.totalCartAmount).toBe("3957.54");

    });

    it('should test noOfProductsInCart', () => {
        productStore.setProductListResponse(productsData);
        cartStore.onClickAddToCart(12);
        cartStore.onClickAddToCart(13);
        cartStore.onClickAddToCart(12);
        cartStore.onClickAddToCart(14);
        expect(cartStore.noOfProductsInCart).toBe(4);
    })



});
