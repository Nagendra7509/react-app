import React from "react";

import { observable, action } from "mobx";
import { observer } from "mobx-react";
import { InputTag, InputTagDiv } from "./styledIndex";



@observer
class AddTodo extends React.Component {
    @observable todoTitle = "";

    @action.bound
    onChangeInput(event) {
        this.todoTitle = event.target.value;
        if (event.key === "Enter") {
            if (event.target.value != "") {
                this.props.onAddTodo(Math.random(), this.todoTitle, false);
                event.target.value = "";
            }
            else {
                alert('you have to add something');
            }
        }
    }
    render() {
        return (<InputTagDiv>
                    <InputTag type="text" placeholder="Enter Todo" onKeyUp={this.onChangeInput}></InputTag>
                </InputTagDiv>);
    }
}
export default AddTodo;
