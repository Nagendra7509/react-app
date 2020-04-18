import React from "react";
import TodoFilter from "./TodoFilter";
import styled from "@emotion/styled";
import tw from "tailwind.macro";
import { observer } from "mobx-react";


const ItemsCount = styled.span `
${tw `text-red-700`}
font-size:20px`;

const Footer = styled.div `
${tw `flex justify-around m-5`}`;

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
