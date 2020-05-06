import React from "react";
import { observable, action } from "mobx";
import { Redirect } from "react-router-dom";
import { observer, inject } from "mobx-react";
import { getAccessToken } from "../../utils/StorageUtils";
import { API_FAILED, API_FETCHING, API_SUCCESS, API_INITIAL } from "@ib/api-constants";
import {
    SignInPageDiv,
    SignInForm,
    SignInText,
    UserName,
    Password,
    SignInBtn,
    ErrorMessage
}
from "./styledComponent";


// @inject("authStore")
@observer
class SignInPage extends React.Component {

    // @observable username = "";
    // @observable password = "";
    // @observable errorMessage = "";
    // @observable isClicked = false



    // @action.bound
    // onChangeUsername(event) {
    //     this.username = event.target.value;
    // }

    // @action.bound
    // onChangePassword(event) {
    //     this.password = event.target.value;
    // }

    // @action.bound
    // onClickSignIn() {
    //     if (this.username != "" && this.password != "") {
    //         this.isClicked = true;
    //         this.props.authStore.userSignIn();
    //         setTimeout(() => {
    //             if (getAccessToken()) {
    //                 const { history } = this.props;
    //                 history.push('/ecommerce-store/products/');
    //             }
    //         }, 1000);

    //     }
    //     else if (this.username === "") {
    //         this.errorMessage = "Please enter username";
    //     }
    //     else {
    //         this.errorMessage = "Please enter password";
    //     }

    // }
    render() {
        if (getAccessToken()) {
            return <Redirect to ={{pathname:'/ecommerce-store/products/'}}/>;
        }
        const {
            username,
            onChangeUsername,
            password,
            onChangePassword,
            onClickSignIn,
            errorMessage,
            isClicked,
            getUserSignInAPIStatus
        } = this.props;
        return (<SignInPageDiv>
                    <SignInForm>
                        <SignInText>Sign in</SignInText>
                        <UserName 
                            onChange={onChangeUsername} 
                            value={username} 
                            type="text" 
                            placeholder="Username"
                        />
                        <Password 
                            onChange={onChangePassword} 
                            value={password} 
                            type="password" 
                            placeholder="Password"
                        />
                        <SignInBtn 
                            type="button" 
                            onClick={onClickSignIn} 
                            data-testid='sign-in-button'
                            disabled={getUserSignInAPIStatus==API_FETCHING}
                            opacityValue={getUserSignInAPIStatus==API_FETCHING}
                            >{getUserSignInAPIStatus==API_FETCHING?"Loading....":"Sign in"}
                        </SignInBtn>
                        <ErrorMessage>{errorMessage}</ErrorMessage>
                    </SignInForm>
                </SignInPageDiv>);

    }

}

export default SignInPage;
