import React from "react";
import ProductsPage from ".";
import ProductStore from "../../stores/ProductStore/index";
import CartStore from "../../../Cart/stores/CartStore/index";
import { render, fireEvent } from "@testing-library/react";
import { Provider } from "mobx-react";
import LoadingWrapperWithFailure from "../../../../Common/LoadingWrapper/LoadingWrapperWithFailure/index";

import ProductService from "../../services/ProductService/index.api";
import productsData from "../../fixtures/getProductsResponse.json";


/*global expect*/



describe("ProductsPage test cases", () => {
    let productStore, cartStore, productService;
    beforeEach(() => {
        productService = new ProductService();
        productStore = new ProductStore(productService);
        cartStore = new CartStore(productStore);
    });


    it('should test signout button', () => {
        const { getByRole } = render(
            <Provider productStore={productStore} cartStore={cartStore}>
                    <ProductsPage/>
                </Provider>);
        getByRole('button', { name: "sigout" });
    });


    it('should test cart', () => {
        const { getByTestId } = render(
            <Provider productStore={productStore} cartStore={cartStore}>
                    <ProductsPage/>
                </Provider>
        );
        getByTestId('cart-open-button');
    });

    it('should test sizeFilters', () => {
        const { getByRole } = render(
            <Provider productStore={productStore} cartStore={cartStore}>
                    <ProductsPage>
                        
                    </ProductsPage>
                </Provider>);
        getByRole('button', { name: "XS" });
        getByRole('button', { name: "S" });
        getByRole('button', { name: "M" });
        getByRole('button', { name: "L" });
        getByRole('button', { name: "XL" });
        getByRole('button', { name: "XXL" });


    });

    it('should test Header(No of Products,searchBar,Dropdown)', () => {
        productStore.setProductListResponse(productsData);
        const { getByText, getByPlaceholderText, getByLabelText } = render(
            <Provider productStore={productStore} cartStore={cartStore}>
                    <ProductsPage/>
                </Provider>);
        getByText("16 Product(s) found.");
        productStore.onSelectSize('S');
        getByText(`${productStore.totalNoOfProductsDisplayed} Product(s) found.`);
        getByPlaceholderText('search for products');
        getByLabelText('Sort price by:');
    });

    it('should test cookies', () => {
        const { getByText } = render(
            <Provider productStore={productStore} cartStore={cartStore}>
                    <ProductsPage/>
                </Provider>);
        getByText('This website uses cookies to enhance the user experience.');
    });

    it('should test product list', () => {


    });


});
