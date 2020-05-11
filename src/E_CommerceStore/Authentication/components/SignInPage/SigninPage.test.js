import React from "react";
import { render } from "@testing-library/react";
import SignInPage from ".";
//import { Router, Route, withRouter } from "react-router-dom";

/*global expect*/

// const LocationDisplay = withRouter(({ location }) => (
//     <div data-testid="location-display">{location.pathname}</div>
// ));

describe("SignInPage testCases", () => {

    it("should render typed username", () => {
        const username = "test-user";
        const { getByPlaceholderText } = render(
            <SignInPage username={username} onChangeUsername={()=>{}}/>
        );
        const userNameField = getByPlaceholderText("Username");
        expect(userNameField.value).toBe(username);

    });

    it('should render typed password', () => {
        const password = "test-password";
        const { getByPlaceholderText } = render(
            <SignInPage password={password} onChangePassword={()=>{}}/>
        );
        const passwordField = getByPlaceholderText("Password");
        expect(passwordField.value).toBe(password);

    });

    it("should render errorMessage", () => {
        const { getByText } = render(<SignInPage errorMessage="Invalid username"/>);
        getByText(/invalid username/i);

    });

    it('should navigate to another if token present', () => {

    });
});
