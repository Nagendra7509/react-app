import { EnvironmentConstants } from "../../../../Common/constants/environmentConstants";
import { networkCallWithApisauce } from "../../utils/APIUtils";
import { apiMethods } from "../../../../Common/constants/apiConstants/APIConstants";
import { create } from "apisauce";
import { endPoints } from "../endPoints";


class AuthService {

    api

    constructor() {
        this.api = create({
            baseURL: EnvironmentConstants.BASE_URL
        });
    }

    signInAPI = () => {
        return networkCallWithApisauce(
            this.api,
            endPoints.Sign_In_Endpoint, {},
            apiMethods.get
        );
    }

}

export default AuthService;
