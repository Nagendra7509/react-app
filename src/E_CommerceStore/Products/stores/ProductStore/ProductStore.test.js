import Cookie from "js-cookie";
import React from "react";
import { API_FAILED, API_FETCHING, API_SUCCESS, API_INITIAL } from "@ib/api-constants";
import ProductService from "../../services/ProductService/index.api";
import getProductsResponse from "../../fixtures/getProductsResponse.json";

import ProductStore from ".";

/*global jest*/
/*global expect*/

let mockSetCookie = jest.fn();
let mockRemoveCookie = jest.fn();

Cookie.set = mockSetCookie;
Cookie.remove = mockRemoveCookie;

describe('productStore Tests', () => {
    let productStore, productServiceAPI;

    beforeEach(() => {
        productServiceAPI = new ProductService();
        productStore = new ProductStore(productServiceAPI);
    });

    it('should test initialising product store', () => {
        expect(productStore.productList).toStrictEqual([]);
        expect(productStore.sizeFilter).toStrictEqual([]);
        expect(productStore.sortBy).toBe("SELECT");
        expect(productStore.searchText).toBe("");
        expect(productStore.getProductListAPIStatus).toBe(API_INITIAL);
        expect(productStore.getProductListAPIError).toBe(null);

    });

    it('should test fetching product store', () => {
        const mockLoadingPromise = new Promise((resolve, reject) => {});
        const mockProductAPI = jest.fn();
        mockProductAPI.mockReturnValue(mockLoadingPromise);
        productServiceAPI.getProductsAPI = mockProductAPI;

        productStore.getProductList();
        expect(productStore.getProductListAPIStatus).toBe(API_FETCHING);
    });

    it('should test getProductList success state', async() => {

        const mockSuccessPromise = new Promise((resolve, reject) => {
            resolve(getProductsResponse);
        });

        const mockProductAPI = jest.fn();
        mockProductAPI.mockReturnValue(mockSuccessPromise);
        productServiceAPI.getProductsAPI = mockProductAPI;

        await productStore.getProductList();
        expect(productStore.getProductListAPIStatus).toBe(API_SUCCESS);

        expect(productStore.productList.length).toBe(getProductsResponse.length);
    });

    it('should test getProductList failure state', async() => {

        const mockFailurePromise = new Promise((resolve, reject) => {
            reject(
                new Error('failure'));
        });

        const mockProductAPI = jest.fn();
        mockProductAPI.mockReturnValue(mockFailurePromise);
        productServiceAPI.getProductsAPI = mockProductAPI;

        await productStore.getProductList();
        expect(productStore.getProductListAPIStatus).toBe(API_FAILED);
        expect(productStore.getProductListAPIError).toBe('failure');
    });

    it('should test onChangeSortBy', () => {
        const filterType = "ASCENDING";
        productStore.onChangeSortBy(filterType);
        expect(productStore.sortBy).toBe(filterType);
    });

    it('should test onSelectSize', () => {
        productStore.onSelectSize('S');
        expect(productStore.sizeFilter).toStrictEqual(Array('S'));
        productStore.onSelectSize('XS');
        expect(productStore.sizeFilter).toStrictEqual(Array('S', 'XS'));
        productStore.onSelectSize('S');
        expect(productStore.sizeFilter).toStrictEqual(Array('XS'));
    });

    it('should test onSearchText', () => {
        const searchText = 'black';
        productStore.onChangeSearchText(searchText);
        expect(productStore.searchText).toBe(searchText);
    });

    it('should test products function', () => {

        const myProducts = [{
                availableSizes: ['M'],
                price: 420,
                title: "black T-shirt",
            },
            {
                availableSizes: ['XL', 'S'],
                price: 730,
                title: "black shirt",
            },
            {
                availableSizes: ['M', 'S', 'XL'],
                price: 200,
                title: "white shirt",
            }
        ];

        productStore.setProductListResponse(myProducts);
        expect(productStore.products).toEqual(myProducts);

    });


    it('should test sortedAndFilteredProducts function', () => {
        const myProducts = [{
                availableSizes: ['M'],
                price: 420,
                title: "black T-shirt",
            },
            {
                availableSizes: ['XL', 'S'],
                price: 730,
                title: "black shirt",
            },
            {
                availableSizes: ['M', 'S', 'XL'],
                price: 200,
                title: "white shirt",
            }
        ];

        productStore.setProductListResponse(myProducts);
        productStore.onSelectSize('M');
        productStore.onSelectSize('XL');
        expect(productStore.sizeFilter).toStrictEqual(Array('M', 'XL'));
        productStore.onChangeSearchText('black');
        productStore.onChangeSortBy('DESCENDING');

        const filteredList = [{
            availableSizes: ['XL', 'S'],
            price: 730,
            title: "black shirt",
        }, {
            availableSizes: ['M'],
            price: 420,
            title: "black T-shirt",
        }];

        expect(productStore.sortedAndFilteredProducts).toEqual(filteredList);
    });



    it('should test totalNoOfProductsDisplayed', () => {
        const myProducts = [{
                availableSizes: ['M'],
                price: 420,
                title: "black T-shirt",
            },
            {
                availableSizes: ['XL', 'S'],
                price: 730,
                title: "black shirt",
            },
            {
                availableSizes: ['M', 'S', 'XL'],
                price: 200,
                title: "white shirt",
            }
        ];

        productStore.setProductListResponse(myProducts);
        expect(productStore.totalNoOfProductsDisplayed).toBe(3);
    });
});
