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
    @observable searchText

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
        this.searchText = "";

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
        this.productList = response.map(eachProduct => (new Product(eachProduct)));
    }

    @action.bound
    setGetProductListAPIError(error) {
        this.getProductListAPIError = error;
    }

    @action.bound
    onChangeSortBy(filterType) {
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

    @action.bound
    onChangeSearchText(value) {
        this.searchText = value;
    }


    @computed get products() {
        return this.sortedAndFilteredProducts;
    }

    @computed get sortedAndFilteredProducts() {


        let filteredSizesList = [];
        if (this.sizeFilter.length !== 0)
            this.sizeFilter.forEach(size => {
                this.productList.map(product => {
                    if (product.availableSizes.includes(size)) {
                        filteredSizesList.push(product);
                    }
                });
            });
        else filteredSizesList = [...this.productList];
        filteredSizesList = [...new Set(filteredSizesList.map(x => x))];

        if (this.searchText != "") {
            filteredSizesList = filteredSizesList.filter(obj => obj.title.toLowerCase().includes(this.searchText.toLowerCase()));
        }


        switch (this.sortBy) {
            case "ASCENDING":
                let ascending = filteredSizesList.sort((a, b) => a.price - b.price);
                return ascending;
            case "DESCENDING":
                let descending = filteredSizesList.sort((a, b) => a.price - b.price);
                return descending.reverse();
            default:
                //console.log(filteredSizesList);
                return filteredSizesList;
        }

    }

    @computed get totalNoOfProductsDisplayed() {
        return this.products.length;
    }
}

export default ProductStore;
