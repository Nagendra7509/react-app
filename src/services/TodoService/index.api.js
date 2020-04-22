import { create } from "apisauce";
import { networkCallWithApisauce } from "../../utils/APIUtils";
import { apiMethods } from "../../constants/APIConstants";
import { observable } from "mobx";

class TodoService {

    @observable api

    constructor() {
        this.api = create({
            baseURL: "https://jsonplaceholder.typicode.com"
        });
    }

    getTodos() {
        return networkCallWithApisauce(
            this.api,
            "/todos", {},
            apiMethods.get
        );
    }
}

export default TodoService;
