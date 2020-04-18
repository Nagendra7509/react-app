import React from "react";
import todoStore from "./TodoStore";
import AddTodo from './AddTodo.js';
import TodoList from "./TodoList.js";
import TodoFooter from "./TodoFooter.js";
import { observer } from "mobx-react";
import styled from "@emotion/styled";
import tw from "tailwind.macro";

const TodoTitle = styled.div `
${tw `text-pink-400 text-center`}
font-size:40px`;

@observer
class TodoApp extends React.Component {

    render() {
        return (
            <div>
                <TodoTitle>todo</TodoTitle>
                <AddTodo onAddTodo={todoStore.onAddTodo}></AddTodo>
                <TodoList todos={todoStore.todos} onRemoveTodo={todoStore.onRemoveTodo} ></TodoList>
                {todoStore.todoArray.length>0?<TodoFooter onClearCompleted={todoStore.onClearCompleted} activeTodosCount={todoStore.activeTodosCount} todos={todoStore.todoArray}  selectedFilter={todoStore.selectedFilter} onChangeSelectedFilter={todoStore.onChangeSelectedFilter}></TodoFooter>:null}
            </div>
        );
    }
}

export default TodoApp;
