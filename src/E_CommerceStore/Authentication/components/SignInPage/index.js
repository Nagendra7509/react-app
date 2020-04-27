import React from "react";
import { observable, action } from "mobx";
import { observer, inject } from "mobx-react";

import { getAccessToken, clearUserSession } from "../../utils/StorageUtils";
import styled from "@emotion/styled";
import tw from "tailwind.macro";

@inject("authStore")

@observer
class SignInPage extends React.Component {

    @observable username = "";
    @observable password = "";
    @observable errorMessage = "";


    @action.bound
    onChangeUsername(event) {
        this.username = event.target.value;
        //console.log(this.username);
    }

    @action.bound
    onChangePassword(event) {
        this.password = event.target.value;
    }

    @action.bound
    onClickSignIn() {
        if (this.username != "" && this.password != "") {
            this.props.authStore.userSignIn();
            setTimeout(() => {
                if (getAccessToken()) {
                    const { history } = this.props;
                    history.push('/productPage');
                }
            }, 1000);

        }

    }

    render() {
        return (<div className="flex justify-center items-center h-screen bg-gray-200">
                        <form className="flex flex-col p-8 bg-white">
                            <h2 className="font-bold mb-4">Sign in</h2>
                            <input onChange={this.onChangeUsername} type="text" className="border border-gray-400 mb-3 w-48 h-10 pl-2 focus:outline-none rounded" placeholder="Username" />
                            <input onChange={this.onChangePassword} type="password" className="border border-gray-400 mb-3 w-48 h-10 pl-2 focus:outline-none rounded" placeholder="Password"/>
                            <button className="flex justify-center w-48 h-10 rounded bg-gray-900 text-white focus:outline-none cursor-pointer" type="button" onClick={this.onClickSignIn}>
                                <span className="">Sign in</span>
                            </button>
                        </form>
                    </div>);


    }

}

export default SignInPage;
