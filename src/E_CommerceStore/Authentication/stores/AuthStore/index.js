import { observable, action } from "mobx";
import { API_INITIAL, API_FETCHING, API_SUCCESS, API_FAILED } from "@ib/api-constants";
import { bindPromiseWithOnSuccess } from "@ib/mobx-promise";
import { setAccessToken, clearUserSession } from "../../utils/StorageUtils";


class AuthStore {

    @observable getUserSignInAPIStatus
    @observable getUserSignInAPIError
    @observable authAPIService

    constructor(authAPIService) {
        this.authAPIService = authAPIService;
        this.init();
    }

    init() {
        this.getUserSignInAPIStatus = API_INITIAL;
        this.getUserSignInAPIError = null;
    }

    @action.bound
    userSignIn() {

        const userPromise = this.authAPIService.signInAPI();

        return bindPromiseWithOnSuccess(userPromise)
            .to(this.setGetUserSignInAPIStatus, this.setUserSignInAPIResponse)
            .catch(this.setGetUserSignInAPIError);

    }

    @action.bound
    setGetUserSignInAPIStatus(apiStatus) {
        this.getUserSignInAPIStatus = apiStatus;
    }

    @action.bound
    setUserSignInAPIResponse(response) {
        response.map(obj => setAccessToken(obj.access_token));
    }

    @action.bound
    setGetUserSignInAPIError(error) {
        this.getUserSignInAPIError = error;
    }

    @action.bound
    userSignOut() {
        clearUserSession();
        this.init();
    }
}

export default AuthStore;
