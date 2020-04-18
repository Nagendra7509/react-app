import React from "react";

import { observable, action, computed } from "mobx";

import { observer } from "mobx-react";

import TodoModel from "../models/TodoModel.js";

import AddTodo from "./AddTodo.js";

import "./TodoList.css";

@observer
class TodoApp extends React.Component {
    @observable todos = [];
    @observable selectedFilter = "ALL";

    @action.bound
    onAddTodo() {
        //const todoInstance = new TodoModel();
        console.log('called');
    }

    @action.bound
    onRemoveTodo() {

    }

    @action.bound
    onCompleteTodo() {

    }

    @action.bound
    onUpdateTodoTitle() {

    }

    @action.bound
    onChangeSelectedFilter() {

    }

    @action.bound
    onClearCompleted() {

    }

    @action.bound
    getActiveTodosCount() {

    }

    @action.bound
    getFilteredTodos() {

    }

    render() {
        return (
            <div>
                <AddTodo></AddTodo>
            </div>
        );
    }
}

export default TodoApp;





















/*let id = 0;
//let selectedTodo = 0;
let countofItems = 0;

@observer
class TodoList extends React.Component {
    temporaryArray = [];
    @observable todolist = [];
    @observable text = "";



    createTodo(obj) {
        const addClass = obj.check ? "checked" : "";
        console.log()
        return (<li id={obj.id} key={obj.id} className="listitem">
                    <input type="checkbox" onClick={this.selectedTodo} checked={obj.check} id="tickMark"/>
                    <input type="text" onChange={this.textChanged} defaultValue={obj.todotext} id="textField" className={`inputTextFromInputField ${addClass}`} disabled={obj.check}/>
                    <span onClick={this.deleting} id="crossMark">X</span>
                </li>);
    }

    //@action.bound
    textChanged(event) {
        const id = event.target.parentNode.id;
        console.log(this.temporaryArray);
        //  console.log(event.target.value);
        // console.log(id);
        // this.temporaryArray = this.todolist;
        // this.temporaryArray = this.temporaryArray.map(todo => todo.id == id ? todo.todotext = event.target.value : null);
    }


    @action.bound
    addToTodoList(event) {
        if (event.keyCode === 13) {
            if (event.target.value !== "") {
                const obj = {
                    todotext: event.target.value,
                    id: ++id,
                    check: false,
                };
                this.text = event.target.value;
                this.todolist = [...this.todolist, obj];
                this.temporaryArray = [...this.temporaryArray, obj];
                countofItems++;
                event.target.value = "";
            }
        }
    }


    @action.bound
    selectedTodo(event) {
        if (event.target.checked) {
            countofItems--;
        }
        else {
            countofItems++;
        }
        const id = event.target.parentElement.id;
        this.todolist = this.todolist.map((obj) => {
            if (obj.id == id) { obj.check = (obj.check) ? false : true; }
            return obj;
        });
        this.temporaryArray = this.todolist;
    }

    @action.bound
    deleting(event) {
        const deleteElement = event.target.parentNode.id;
        this.temporaryArray = this.temporaryArray.filter(obj => (deleteElement != obj.id));
        this.todolist = this.temporaryArray;
        if (!(event.target.parentNode.children[0].checked)) {
            countofItems--;
        }

    }

    @action.bound
    allTodos() {
        this.todolist = this.temporaryArray;
    }

    @action.bound
    activeTodos() {
        const activeTodoList = this.temporaryArray.filter(obj => {
            return (!obj.check);
        });
        this.todolist = activeTodoList;
    }

    @action.bound
    completedTodos() {
        const completedTodoList = this.temporaryArray.filter(obj => obj.check);
        this.todolist = completedTodoList;

    }

    @action.bound
    clearCompletedTodos() {
        let clearCompletedTodoList = this.temporaryArray.filter(obj => !obj.check);
        this.temporaryArray = this.temporaryArray.filter(obj => !obj.check);
        this.todolist = clearCompletedTodoList;
    }


    @computed get checkingSelectedCount() {
        let selectedTodosCount = 0;
        this.todolist.forEach(obj => {
            if (obj.check) {
                selectedTodosCount++;
            }
        });
        return selectedTodosCount;
    }

    render() {
        return (
            <div className="todoAppStyles">
                <span className="todosHeading">todos</span>
                <div className="header">
                    <input type="text" onKeyDown={this.addToTodoList}  id="inputField" placeholder="What needs to be done?" />
                </div>
                <ul className="TodoListStyles">{this.todolist.map((obj)=>(this.createTodo(obj)))}</ul>
                {this.temporaryArray.length>0?
                
                    (<div id="bottomComponent">
                    <span id="itemsLeft">itemsLeft:{countofItems}</span>
                    <div>
                        <button id="allTodos" onClick={this.allTodos}>All</button>
                        <button id="activeTodos" onClick={this.activeTodos}>Active</button>
                        <button id="completedTodos" onClick={this.completedTodos}>Completed</button>
                    </div>
                    {this.checkingSelectedCount>0?<button id="clearCompletedTodos" onClick={this.clearCompletedTodos} >Clear Completed</button>:""}
                </div>):""}
            </div>
        );
    }
}




export default TodoList;*/
