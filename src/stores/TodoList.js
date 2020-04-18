import React from "react";
import Todo from "./Todo.js";
import { observer } from "mobx-react";

@observer
class TodoList extends React.Component {
    render() {
        return (
            <ul>
                {this.props.todos.length>0?this.props.todos.map(todo=><Todo onRemoveTodo={this.props.onRemoveTodo} todo={todo} key={Math.random()}></Todo>):null}
            </ul>
        );
    }
}

export default TodoList;
