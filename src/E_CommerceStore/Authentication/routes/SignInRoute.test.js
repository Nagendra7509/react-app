import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import { Router, Route, withRouter } from "react-router-dom";
import { Provider } from "mobx-react";
import { createMemoryHistory } from "history";

import { API_FAILED, API_FETCHING, API_SUCCESS, API_INITIAL } from "@ib/api-constants";

import { SIGN_IN_PATH } from "../constants/routeConstants/RouteConstants";
import { PRODUCT_PAGE_PATH } from "../../Products/constants/routeConstants/RouteConstants";

import AuthAPI from "../services/AuthService/index.api";
import AuthStore from "../stores/AuthStore/index";
import getUserSignInResponse from "../fixtures/getUserSignInResponse.json";
import { SignInRoute } from "./SignInRoute.js";


/*global jest*/
/*global expect*/

const LocationDisplay = withRouter(({ location }) => (
    <div data-testid="location-display">{location.pathname}</div>
));

describe("SignInRoute Tests", () => {

    let authAPI, authStore;

    beforeEach(() => {
        authAPI = new AuthAPI();
        authStore = new AuthStore(authAPI);
    });

    afterEach(() => {
        jest.resetAllMocks();
    });

    it('should render username empty error message', () => {

        const { getByText, getByRole } = render(
            <Router history={createMemoryHistory()}>
                <SignInRoute authStore={authStore} />
            </Router>
        );
        const signInButton = getByRole("button", { name: "Sign in" });
        fireEvent.click(signInButton);
        getByText(/Please enter username/i);


    });

    it('should render password empty error message', () => {

        const { getByText, getByRole, getByPlaceholderText } = render(
            <Router history={createMemoryHistory()}>
                <SignInRoute authStore={authStore} />
            </Router>
        );

        const username = "test-user";
        const userNameField = getByPlaceholderText('Username');
        const signInButton = getByRole('button', { name: "Sign in" });

        fireEvent.change(userNameField, { target: { value: username } });
        fireEvent.click(signInButton);
        getByText(/Please enter password/i);
    });

    it('should submit sign-in on press enter', () => {
        const { getByLabelText, getByRole, getByPlaceholderText } = render(
            <Router history={createMemoryHistory()}>
                <SignInRoute authStore={authStore}/>
            </Router>
        );

        const username = "test-user";
        const password = "test-password";
        const userNameField = getByPlaceholderText("Username");
        const passwordField = getByPlaceholderText("Password");
        const signInButton = getByRole("button", { name: "Sign in" });

        fireEvent.change(userNameField, { target: { value: username } });
        fireEvent.change(passwordField, { target: { value: password } });
        fireEvent.keyPress(signInButton, { key: "Enter", code: "Enter" });

        waitFor(() => getByRole("button", { name: "Loading...." }));
    });

    it('should render signInRoute loading state', () => {
        const { getByLabelText, getByRole, getByPlaceholderText } = render(
            <Router history={createMemoryHistory()}>
                <SignInRoute authStore={authStore}/>
            </Router>
        );

        const username = "test-user";
        const password = "test-password";
        const userNameField = getByPlaceholderText("Username");
        const passwordField = getByPlaceholderText("Password");
        const signInButton = getByRole("button", { name: "Sign in" });

        const mockLoadingPromise = new Promise(function(resolve, reject) {});
        const mockSignInAPI = jest.fn();
        mockSignInAPI.mockReturnValue(mockLoadingPromise);
        authAPI.signInAPI = mockSignInAPI;

        fireEvent.change(userNameField, { target: { value: username } });
        fireEvent.change(passwordField, { target: { value: password } });
        fireEvent.click(signInButton);


        authStore.userSignIn();
        expect(authStore.getUserSignInAPIStatus).toBe(API_FETCHING);
        getByRole('button', { disabled: true });


    });


    it("should render signInRoute success state", async() => {
        const history = createMemoryHistory();
        const route = SIGN_IN_PATH;
        history.push(route);

        const {
            getByPlaceholderText,
            getByRole,
            queryByRole,
            queryByLabelText,
            getByTestId,
            debug
        } = render(
            <Provider authStore={authStore}>
                <Router history={history}>
                    <Route path={SIGN_IN_PATH}>
                        <SignInRoute />
                    </Route>
                    <Route path={PRODUCT_PAGE_PATH}>
                        <LocationDisplay />
                    </Route>
                </Router>
            </Provider>
        );

        const username = "test-user";
        const password = "test-password";

        const usernameField = getByPlaceholderText("Username");
        //const passwordField = getByPlaceholderText("Password");
        const signInButton = getByRole("button", { name: "Sign in" });

        const mockSuccessPromise = new Promise(function(resolve, reject) {
            resolve(getUserSignInResponse);
        });
        const mockSignInAPI = jest.fn();
        mockSignInAPI.mockReturnValue(mockSuccessPromise);
        authAPI.signInAPI = mockSignInAPI;

        fireEvent.change(usernameField, { target: { value: username } });
        //fireEvent.change(passwordField, { target: { value: password } });
        fireEvent.click(signInButton);

        waitFor(() => {
            expect(
                queryByRole("button", { name: "Sign in" })
            ).not.toBeInTheDocument();
            expect(getByTestId("location-display")).toHaveTextContent(
                PRODUCT_PAGE_PATH
            );
        });
    });

    it("should render signInRoute failure state", () => {
        const { getByText, getByPlaceholderText, getByRole } = render(
            <Router history={createMemoryHistory()}>
                <SignInRoute authStore={authStore} />
            </Router>
        );

        const username = "test-user";
        const password = "test-password";

        const usernameField = getByPlaceholderText("Username");
        const passwordField = getByPlaceholderText("Password");
        const signInButton = getByRole("button", { name: "Sign in" });

        const mockFailurePromise = new Promise(function(resolve, reject) {
            reject(new Error("error"));
        }).catch(() => {});
        const mockSignInAPI = jest.fn();
        mockSignInAPI.mockReturnValue(mockFailurePromise);
        authAPI.signInAPI = mockSignInAPI;



        fireEvent.change(usernameField, { target: { value: username } });
        fireEvent.change(passwordField, { target: { value: password } });
        fireEvent.click(signInButton);
        authStore.userSignIn();
        waitFor(() => {
            getByText(/server-error/i);
        });
    });



});
