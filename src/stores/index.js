import CounterStore from './CounterStore';
import UserStore from "./UserStore";
import UserService from "../services/UserService/index.api";
import TodoStore from "./TodoStore_NetworkCalls";
import TodoService from "../services/TodoService/index.api";

const userService = new UserService();
const userStore = new UserStore(userService);

const todoService = new TodoService();
const todoStore = new TodoStore(todoService);


const counterStore = new CounterStore();

export default {
    counterStore,
    userStore,
    todoStore,
};
