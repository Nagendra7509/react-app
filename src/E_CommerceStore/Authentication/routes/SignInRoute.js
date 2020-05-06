import React from "react";
import SignInPage from "../components/SignInPage/index";
import { observer, inject } from "mobx-react";
import { Redirect } from "react-router-dom";
import { observable, action } from "mobx";
import { getAccessToken } from "../utils/StorageUtils";

@inject("authStore")
@observer
class SignInRoute extends React.Component {

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


    onClickSignIn = async() => {
        if (this.username != "" && this.password != "") {

            await this.props.authStore.userSignIn();

            if (getAccessToken()) {
                const { history } = this.props;
                history.push('/ecommerce-store/products/');
            }
            else {
                this.errorMessage = "server-error";
            }

        }
        else if (this.username === "") {
            this.errorMessage = "Please enter username";
        }
        else {
            this.errorMessage = "Please enter password";
        }

    }


    render() {
        const { getUserSignInAPIStatus } = this.props.authStore;
        if (getAccessToken()) {
            return <Redirect to ={{pathname:'/ecommerce-store/products/'}}/>;
        }
        return <SignInPage
                username={this.username}
                onChangeUsername={this.onChangeUsername}
                password={this.password}
                onChangePassword={this.onChangePassword}
                onClickSignIn={this.onClickSignIn}
                errorMessage={this.errorMessage}
                isClicked={this.isClicked}
                getUserSignInAPIStatus={getUserSignInAPIStatus}
        />;
    }


}

export { SignInRoute };
