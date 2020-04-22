import { observable, action, computed } from "mobx";
import Todo from "../models/TodoModel_NetworkCalls";

import { API_INITIAL, API_FETCHING, API_SUCCESS, API_FAILED } from "@ib/api-constants";
import { bindPromiseWithOnSuccess } from "@ib/mobx-promise";


class TodoStore {
    @observable todos
    @observable selectedFilter
    @observable todoArray

    @observable getTodoListAPIStatus;
    @observable getTodoListAPIError;
    @observable todosAPIService;



    constructor(todoService) {
        this.todosAPIService = todoService;
        this.init();
    }

    init() {
        this.getTodoListAPIStatus = API_INITIAL;
        this.getTodoListAPIError = null;
        this.todosAPIService;

        this.todos = [];
        this.selectedFilter = "ALL";
        this.todoArray = [];
    }

    @action.bound
    getTodoList() {
        const usersPromise = this.todosAPIService.getTodos();

        return bindPromiseWithOnSuccess(usersPromise)
            .to(this.setGetTodoListAPIStatus, this.setTodoListResponse)
            .catch(this.setGetTodoListAPIError);


    }

    @action.bound
    setGetTodoListAPIStatus(apiStatus) {
        this.getTodoListAPIStatus = apiStatus;
        console.log(apiStatus);
    }

    @action.bound
    setTodoListResponse(usersResponse) {
        usersResponse.map(todo => this.onAddTodo(todo.id, todo.title, todo.completed));
    }

    @action.bound
    setGetTodoListAPIError(error) {
        this.getTodoListAPIError = error;
    }

    @action.bound
    onAddTodo(id, title, isCompleted) {

        const todoInstance = new Todo(id, title, isCompleted);
        this.todos.push(todoInstance);
        this.todoArray.push(todoInstance);
        console.log(this.todos.length);

    }

    @action.bound
    onRemoveTodo(id) {

        this.todos = this.todos.filter(todo => todo.id != id);
        this.todoArray = this.todoArray.filter(todo => todo.id != id);

    }

    @action.bound
    onChangeSelectedFilter(filterType) {

        this.selectedFilter = filterType;
        this.getFilteredTodos();

    }

    @action.bound
    onClearCompleted() {

        this.todos = this.todos.filter(todo => !todo.isCompleted);
        this.todoArray = this.todoArray.filter(todo => !todo.isCompleted);

    }

    @computed get activeTodosCount() {

        const activeTodos = this.todoArray.filter(todo => todo.isCompleted == false);
        return activeTodos.length;

    }

    @action.bound
    getFilteredTodos() {

        switch (this.selectedFilter) {
            case 'ALL':
                this.todos = this.todoArray;
                break;
            case 'ACTIVE':
                this.todos = this.todoArray.filter(todo => !todo.isCompleted);
                break;
            case 'COMPLETED':
                this.todos = this.todoArray.filter(todo => todo.isCompleted);
                break;
        }

    }

}


export default TodoStore;
