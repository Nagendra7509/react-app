import { observable } from "mobx";

class Todo {
    @observable id;
    @observable title = "";
    @observable isCompleted;

    constructor() {
        //this.id = Math.random();
        this.id;
        this.title = "";
        //this.isCompleted = false;
        this.computed;
    }

    onCompleteTodo = () => {
        this.isCompleted = !this.isCompleted;
    }

    onUpdateTodoTitle = (updatedTitle) => {
        this.title = updatedTitle;
    }
}

export default Todo;
