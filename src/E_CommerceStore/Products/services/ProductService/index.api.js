import { networkCallWithApisauce } from "../../utils/APIUtils";
import { apiMethods } from "../../constants/APIConstants";
import { create } from "apisauce";
import { observable } from "mobx";
import { endPoints } from "../endPoints";


class ProductService {

    api

    constructor() {
        this.api = create({
            baseURL: "https://5ea1a14db9f5ca00166c1f27.mockapi.io/api/"
        });
    }

    getProductsAPI = () => {
        return networkCallWithApisauce(
            this.api,
            endPoints.Product_List_Endpoint, {},
            apiMethods.get
        );
    }

}

export default ProductService;
