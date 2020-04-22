import React from "react";
import TodoFilter from "../TodoFilter";
import { observer } from "mobx-react";
import { ItemsCount, Footer } from "./styledIndex";


@observer
class TodoFooter extends React.Component {
    render() {

        return (
            <Footer>
                <ItemsCount>Items {this.props.activeTodosCount}</ItemsCount>
                <TodoFilter totalTodos={this.props.todos} activeTodosCount={this.props.activeTodosCount} onChangeSelectedFilter={this.props.onChangeSelectedFilter} onClearCompleted={this.props.onClearCompleted}></TodoFilter>
            </Footer>

        );
    }

}

export default TodoFooter;
