import { observable } from "mobx";

class Todo {
    @observable id;
    @observable title = "";
    @observable isCompleted = false;

    constructor() {
        this.id = Math.random();
        this.title = "";
        this.isCompleted = false;
    }

    onCompleteTodo = () => {
        this.isCompleted = !this.isCompleted;
    }

    onUpdateTodoTitle = (updatedTitle) => {
        this.title = updatedTitle;
    }
}

export default Todo;
