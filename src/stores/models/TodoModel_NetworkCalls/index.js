import { observable } from "mobx";

class Todo {
    @observable id;
    @observable title = "";
    @observable isCompleted;

    constructor(id, title, isCompleted) {

        this.id = id;
        this.title = title;
        this.isCompleted = isCompleted;
    }

    onCompleteTodo = () => {
        this.isCompleted = !this.isCompleted;
    }

    onUpdateTodoTitle = (updatedTitle) => {
        this.title = updatedTitle;
    }
}

export default Todo;
