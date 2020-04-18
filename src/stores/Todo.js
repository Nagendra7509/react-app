import React from "react";
import styled from "@emotion/styled";
import tw from "tailwind.macro";
import { observer } from "mobx-react";

const CheckBox = styled.input `
${tw ``}
border:2px solid red`;

const InputTag = styled.input `
${tw `w-1/3 text-center`} ${props=>({textDecoration:props.linethrough})}`;

const Delete = styled.span `
${tw `text-red-500 text-right`}
font-size:20px`;

const OneTodo = styled.div `
${tw `flex w-4/5 mx-16 items-baseline justify-around`}`;


@observer
class Todo extends React.Component {

    onCompleteTodo = () => {
        this.props.todo.onCompleteTodo();
    }

    onRemoveTodo = (event) => {
        const id = event.target.id;
        this.props.onRemoveTodo(id);
    }

    onUpdateTodoTitle = (event) => {
        this.props.todo.onUpdateTodoTitle(event.target.value);
    }

    render() {
        return (
            <OneTodo>
                <CheckBox type="checkbox" onClick={this.onCompleteTodo} defaultChecked={this.props.todo.isCompleted}></CheckBox>
                <InputTag type="text" linethrough={this.props.todo.isCompleted?"line-through":"none"} disabled={this.props.todo.isCompleted} defaultValue={this.props.todo.title} onChange={this.onUpdateTodoTitle}></InputTag>
                <Delete id={this.props.todo.id} onClick={this.onRemoveTodo}>X</Delete>
            </OneTodo>
        );
    }
}

export default Todo;
