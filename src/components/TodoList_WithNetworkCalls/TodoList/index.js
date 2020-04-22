import React from "react";
import Todo from "../Todo";
import { observer } from "mobx-react";


@observer
class TodoList extends React.Component {
    render() {

        return (
            <ul>
                {this.props.todos.map(todo=>
                    <Todo onRemoveTodo={this.props.onRemoveTodo} todo={todo} key={Math.random()}></Todo>)}
            </ul>
        );
    }
}

export default TodoList;
