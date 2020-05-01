import Cookie from "js-cookie";
import { API_FAILED, API_FETCHING, API_SUCCESS, API_INITIAL } from "@ib/api-constants";
import AuthAPI from "../../services/AuthService/index.api";
import getUserSignInResponse from "../../fixtures/getUserSignInResponse.json";
import AuthStore from ".";

/*global jest*/
/*global expect*/

let mockSetCookie = jest.fn();
let mockRemoveCookie = jest.fn();

Cookie.set = mockSetCookie;
Cookie.remove = mockRemoveCookie;

describe('AuthStore Tests', () => {

    let authAPI;
    let authStore;

    beforeEach(() => {
        authAPI = new AuthAPI();
        authStore = new AuthStore(authAPI);
    });

    it('should test initialising auth store', () => {
        expect(authStore.getUserSignInAPIStatus).toBe(API_INITIAL);
        expect(authStore.getUserSignInAPIError).toBe(null);
    });

    it('should test userSignIn data fetching state', () => {

        const mockLoadingPromise = new Promise(function(resolve, reject) {});
        const mockSignInAPI = jest.fn();
        mockSignInAPI.mockReturnValue(mockLoadingPromise);
        authAPI.signInAPI = mockSignInAPI;

        authStore.userSignIn();
        expect(authStore.getUserSignInAPIStatus).toBe(API_FETCHING);

    });

    it('should test userSignInAPI success state', async() => {

        const mockSuccessPromise = new Promise(function(resolve, reject) {
            resolve(getUserSignInResponse);
        });
        const mockSignInAPI = jest.fn();
        mockSignInAPI.mockReturnValue(mockSuccessPromise);
        authAPI.signInAPI = mockSignInAPI;


        await authStore.userSignIn();
        expect(authStore.getUserSignInAPIStatus).toBe(API_SUCCESS);
        expect(mockSetCookie).toBeCalled();

    });

    it('should test userSignInAPI failure state', async() => {
        const mockFailurePromise = new Promise(function(resolve, reject) {
            reject(new Error('failure'));
        });
        const mockSignInAPI = jest.fn();
        mockSignInAPI.mockReturnValue(mockFailurePromise);
        authAPI.signInAPI = mockSignInAPI;

        await authStore.userSignIn();
        expect(authStore.getUserSignInAPIStatus).toBe(API_FAILED);

    });

    it('should test user sign out', () => {
        authStore.userSignOut();
        expect(mockRemoveCookie).toBeCalled();
        expect(authStore.getUserSignInAPIStatus).toBe(API_INITIAL);
        expect(authStore.getUserSignInAPIError).toBe(null);
    });

});
