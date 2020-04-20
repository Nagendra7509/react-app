import React from "react";
import Todo from "./Todo.js";
import { observer } from "mobx-react";
import styled from "@emotion/styled";
import tw from "tailwind.macro";

const LoadingImg = styled.img `${tw `w-1/2 m-auto`}`;

const NoDataFound = styled.div `
    ${tw ``}
    margin:100px;
    padding-left:300px`;

@observer
class TodoList extends React.Component {
    render() {
        const url = "https://tap.ibhubs.in/react/assignments/assignment-10/preview/loading-view.png";
        console.log(this.props.dataFetched);
        return (
            <ul>
                {(this.props.todoArray.length>0 )
                    ?this.props.todos.map(todo=>
                    <Todo onRemoveTodo={this.props.onRemoveTodo} todo={todo} key={Math.random()}></Todo>)
                    :(this.props.dataFetched ?(!this.props.notFound)?<LoadingImg src={url}/>:<NoDataFound>No Data Found!</NoDataFound>:null)}
            </ul>
        );
    }
}

export default TodoList;
