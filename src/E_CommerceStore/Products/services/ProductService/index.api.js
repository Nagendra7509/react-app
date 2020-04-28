import { EnvironmentConstants } from "../../../../Common/constants/environmentConstants";
import { networkCallWithApisauce } from "../../utils/APIUtils";
import { apiMethods } from "../../../../Common/constants/apiConstants/APIConstants";
import { create } from "apisauce";
import { endPoints } from "../endPoints";


class ProductService {

    api

    constructor() {
        this.api = create({
            baseURL: EnvironmentConstants.BASE_URL
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
