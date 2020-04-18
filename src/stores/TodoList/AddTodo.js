import React from "react";

import { observable, action } from "mobx";
import styled from "@emotion/styled";
import tw from "tailwind.macro";

import TodoApp from "./TodoApp.js";

const TodoAppInstance = new TodoApp();

const TodoInputTag = styled.input `
${tw `w-2/3`}
border:2px solid red`;

const SubmitButton = styled.button `
${tw `w-1/3`}
border:2px solid blue,
background-color:green`;

class AddTodo extends React.Component {

    @observable todoTitle = "";

    @action.bound
    onChangeInput(event) {
        this.todoTitle = event.target.value;
    }


    render() {
        return (
            <div>
                <TodoInputTag type="text" placeHolder="Enter Todo" onChange={this.onChangeInput}></TodoInputTag>
                <SubmitButton onClick={TodoAppInstance.onAddTodo}>Submit Todo</SubmitButton>
            </div>
        );
    }
}

export default AddTodo;
