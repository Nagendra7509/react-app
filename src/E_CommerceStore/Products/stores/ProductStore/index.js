import { observable, action, computed } from "mobx";
import { API_INITIAL, API_FETCHING, API_SUCCESS, API_FAILED } from "@ib/api-constants";
import { bindPromiseWithOnSuccess } from "@ib/mobx-promise";
import Product from "../models/Product/index";

class ProductStore {
    @observable productList
    @observable getProductListAPIStatus
    @observable getProductListAPIError
    @observable productsAPIService
    @observable sizeFilter
    @observable sortBy

    constructor(productsAPIService) {
        this.init();
        this.productsAPIService = productsAPIService;
    }

    init() {
        this.productList = [];
        this.getProductListAPIStatus = API_INITIAL;
        this.getProductListAPIError = null;
        this.sizeFilter = [];
        this.sortBy = "SELECT";
    }

    @action.bound
    getProductList() {
        const productPromise = this.productsAPIService.getProductsAPI();

        return bindPromiseWithOnSuccess(productPromise)
            .to(this.setGetProductListAPIStatus, this.setProductListResponse)
            .catch(this.setGetProductListAPIError);
    }

    @action.bound
    setGetProductListAPIStatus(apiStatus) {
        this.getProductListAPIStatus = apiStatus;
    }

    @action.bound
    setProductListResponse(response) {

        response.map(eachProduct => {
            const product = new Product(eachProduct);
            this.productList.push(product);
        });
    }

    @action.bound
    setGetProductListAPIError(error) {
        this.getProductListAPIError = error;
    }

    @action.bound
    onChangeSortBy(filterType) {
        console.log(filterType);
        this.sortBy = filterType;
    }

    @action.bound
    onSelectSize(sizeType) {
        if (!this.sizeFilter.includes(sizeType)) {
            this.sizeFilter.push(sizeType);
        }
        else {
            this.sizeFilter = this.sizeFilter.filter(type => type != sizeType);
        }

    }

    /*@computed products() {

    }

    @computed sortedAndFilteredProducts() {

    }*/

    @computed get totalNoOfProductsDisplayed() {
        console.log(this.productList);
        return this.productList.length;
    }
}

export default ProductStore;
