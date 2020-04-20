import React from "react";
import styled from "@emotion/styled";
import tw from "tailwind.macro";
import { observable, action } from "mobx";
import { observer } from "mobx-react";


const InputTag = styled.input `
${tw `w-4/5 h-10`}
border:2px solid red`;
const SubmitBtn = styled.button `
${tw `w-1/3`}
border:2px solid blue;
background-color:green`;

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
        return (<div className="text-center">
                    <InputTag type="text" placeholder="Enter Todo" onKeyUp={this.onChangeInput}></InputTag>
                    {/*<SubmitBtn onClick={this.onAddTodo}>Add Todo</SubmitBtn>*/}
                </div>);
    }
}
export default AddTodo;
