import React from "react";
import { observer } from "mobx-react";
import { CheckBox, InputTag, Delete, OneTodo } from "./styledIndex";



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
