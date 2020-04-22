import React from "react";
import todoStore from "./TodoStore";
import AddTodo from './AddTodo.js';
import TodoList from "./TodoList.js";
import TodoFooter from "./TodoFooter.js";
import { observer } from "mobx-react";
import { observable } from "mobx";
import styled from "@emotion/styled";
import tw from "tailwind.macro";

/*global fetch*/
/*global GET*/



const TodoTitle = styled.div `
${tw `text-pink-400 text-center`}
font-size:40px`;

const DisconnectedPage = styled.div `
    ${tw `text-center`}`;

const RetryBtn = styled.button `
    ${tw `bg-blue-800`}`;



@observer
class TodoApp extends React.Component {

    @observable notFound = false;
    @observable dataFetched = true;
    @observable isDisconnected = false;

    componentDidMount() {
        //this.handleConnectionChange();
        window.addEventListener('online', this.handleConnectionChange);
        window.addEventListener('offline', this.handleConnectionChange);

        fetch(`https://jsonplaceholder.typicode.com/todos`)
            .then(response => response.json())
            .then(json => {
                if (json.length && this.dataFetched)
                    json.map(obj => todoStore.onAddTodo(obj.id, obj.title, obj.completed));
                else
                    this.notFound = true;

            }).catch(error => console.log("error", error.message));

    }



    componentWillUnmount() {
        window.removeEventListener('online', this.handleConnectionChange);
        window.removeEventListener('offline', this.handleConnectionChange);
    }

    handleConnectionChange = () => {
        const condition = navigator.onLine ? 'online' : 'offline';
        if (condition === 'online') {
            this.isDisconnected = false;
        }
        else {
            this.isDisconnected = true;
        }
    }

    render() {
        return (
            <div>{ this.isDisconnected ? <DisconnectedPage>
                                            Network Error
                                            <RetryBtn onClick={this.fetchData}>Retry</RetryBtn>
                                        </DisconnectedPage>
                            :
                            <div>
                                <TodoTitle>todo</TodoTitle>
                                <AddTodo onAddTodo={todoStore.onAddTodo}></AddTodo>
                                <TodoList notFound={this.notFound} dataFetched={this.dataFetched} todos={todoStore.todos} todoArray={todoStore.todoArray} onRemoveTodo={todoStore.onRemoveTodo} ></TodoList>
                                {todoStore.todoArray.length>0?<TodoFooter onClearCompleted={todoStore.onClearCompleted} activeTodosCount={todoStore.activeTodosCount} todos={todoStore.todoArray}  selectedFilter={todoStore.selectedFilter} onChangeSelectedFilter={todoStore.onChangeSelectedFilter}></TodoFooter>:null}
            </div>
            } 
            </div>);
    }
}

export default TodoApp;
