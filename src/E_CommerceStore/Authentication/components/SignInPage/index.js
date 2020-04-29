import React from "react";
import { observable, action } from "mobx";
import { Redirect } from "react-router-dom";
import { observer, inject } from "mobx-react";
import { getAccessToken } from "../../utils/StorageUtils";
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


@inject("authStore")
@observer
class SignInPage extends React.Component {

    @observable username = "";
    @observable password = "";
    @observable errorMessage = "";
    @observable isClicked = false



    @action.bound
    onChangeUsername(event) {
        this.username = event.target.value;
    }

    @action.bound
    onChangePassword(event) {
        this.password = event.target.value;
    }

    @action.bound
    onClickSignIn() {
        if (this.username != "" && this.password != "") {
            this.isClicked = true;
            this.props.authStore.userSignIn();
            setTimeout(() => {
                if (getAccessToken()) {
                    const { history } = this.props;
                    history.push('/ecommerce-store/products/');
                }
            }, 1000);

        }
        else if (this.username === "") {
            this.errorMessage = "please Enter Username";
        }
        else {
            this.errorMessage = "please Enter Password";
        }

    }

    render() {
        if (getAccessToken()) {
            return <Redirect to ={{pathname:'/ecommerce-store/products/'}}/>
        }
        return (<SignInPageDiv>
                    <SignInForm>
                        <SignInText>Sign in</SignInText>
                        <UserName onChange={this.onChangeUsername} type="text" placeholder="Username" />
                        <Password onChange={this.onChangePassword} type="password" placeholder="Password"/>
                        <SignInBtn type="button" onClick={this.onClickSignIn} data-testid='sign-in-button' >
                                {this.isClicked?"Loading....":"Sign in"}
                        </SignInBtn>
                        <ErrorMessage>{this.errorMessage}</ErrorMessage>
                    </SignInForm>
                </SignInPageDiv>);


    }

}

export default SignInPage;
