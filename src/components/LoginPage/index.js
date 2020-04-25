import React from "react";
import { observable, action } from "mobx";
import { observer } from "mobx-react";

import { Login, UserName, SubmitBtn, Password } from "./styledComponent";

@observer
class LoginPage extends React.Component {
    name = "nagendra";
    passCode = "123456";
    @observable userName = "";
    @observable passWord = "";
    @observable status = false;

    @action.bound
    handleOnChangeUserName(event) {
        this.userName = event.target.value;
    }


    @action.bound
    handleOnChangePassWord(event) {
        this.passWord = event.target.value;
    }




    @action.bound
    handleOnClick() {
        if (this.userName === this.name && this.passWord === this.passCode) {
            this.status = true;
        }
        if (this.status) {
            const { history } = this.props;
            console.log("history", history);
            history.replace('/');
        }
    }

    render() {
        return (<Login>
            <UserName type="text" placeholder="Enter Name" onChange={this.handleOnChangeUserName}/>
            <Password type="password" placeholder="Enter Password"  onChange={this.handleOnChangePassWord}/>
            <SubmitBtn onClick={this.handleOnClick}>Submit</SubmitBtn>
        </Login>);
    }
}

export default LoginPage;
