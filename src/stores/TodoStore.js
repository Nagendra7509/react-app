import { observable, action, computed } from "mobx";
import Todo from "./models/Todo.js";

class TodoStore {
    @observable todos = [];
    @observable selectedFilter = "ALL";
    @observable todoArray = [];

    @action.bound
    onAddTodo(id, title, isCompleted) {
        const todoInstance = new Todo();
        todoInstance.title = title;
        todoInstance.id = id;
        todoInstance.isCompleted = isCompleted;
        this.todos.push(todoInstance);
        this.todoArray.push(todoInstance);
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

const todoStore = new TodoStore;

export default todoStore;
