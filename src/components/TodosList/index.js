import React from 'react';
import "./index.css";
let id = 0;
//let selectedTodo = 0;
let countofItems = 0;
class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.temporaryArray = [];
        this.state = { todolist: [], text: "", };
    }


    createTodo = (obj) => {
        const addClass = obj.check ? "checked" : "";
        return (<li id={obj.id} key={obj.id} className="listitem">
                    <input type="checkbox" onClick={this.selectedTodo} checked={obj.check} id="tickMark"/>
                    <input type="text" defaultValue={obj.todotext} id="textField" className={`inputTextFromInputField ${addClass}`} disabled={obj.check}/>
                    <span onClick={this.deleting} id="crossMark">X</span>
                </li>);
    }

    addToTodoList = (event) => {
        if (event.keyCode === 13) {
            if (event.target.value !== "") {
                const obj = {
                    todotext: event.target.value,
                    id: ++id,
                    check: false,
                };
                this.setState({ text: event.target.value });
                this.setState(state => {
                    const todolist = [...state.todolist, obj];
                    return {
                        todolist,
                    };
                });
                this.temporaryArray = [...this.temporaryArray, obj];
                countofItems++;
            }
            event.target.value = "";

        }
    }
    selectedTodo = (event) => {
        if (event.target.checked) {
            countofItems--;
        }
        else {
            countofItems++;
        }
        //alert(selectedTodo);
        const id = event.target.parentElement.id;
        this.setState(state => {
            const todolist = state.todolist.map((obj) => {
                if (obj.id == id) { obj.check = (obj.check) ? false : true; }
                return obj;
            });
            return (todolist);
        });
        this.temporaryArray = this.state.todolist;
    }

    deleting = (event) => {
        const deleteElement = event.target.parentNode.id;
        this.temporaryArray = this.temporaryArray.filter(obj => (deleteElement != obj.id));
        this.setState({ todolist: this.temporaryArray });
        if (!(event.target.parentNode.children[0].checked)) {
            countofItems--;
        }

    }
    allTodos = () => {
        //let c=0;
        this.setState({ todolist: this.temporaryArray });

    }
    activeTodos = () => {
        const activeTodoList = this.temporaryArray.filter(obj => {
            return (!obj.check);
        });
        this.setState({ todolist: activeTodoList });
    }
    completedTodos = () => {
        const completedTodoList = this.temporaryArray.filter(obj => obj.check);
        this.setState({ todolist: completedTodoList });

    }
    clearCompletedTodos = () => {
        let clearCompletedTodoList = this.temporaryArray.filter(obj => !obj.check);
        this.temporaryArray = this.temporaryArray.filter(obj => !obj.check);
        this.setState({ todolist: clearCompletedTodoList });
    }
    checkingSelectedCount = () => {
        let selectedTodosCount = 0;
        this.state.todolist.forEach(obj => {
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
                <ul className="TodoListStyles">{this.state.todolist.map((obj)=>(this.createTodo(obj)))}</ul>
                {/*this.state.todolist.map((id)=> <Todos key={id} id={id} deleting={this.deleting} selecting={this.selectedTodo} text={this.state.text} adding={this.addToTodoList}/>)*/}
                {this.temporaryArray.length>0?
                
                    (<div id="bottomComponent">
                    <span id="itemsLeft">itemsLeft:{countofItems}</span>
                    <div>
                        <button id="allTodos" onClick={this.allTodos}>All</button>
                        <button id="activeTodos" onClick={this.activeTodos}>Active</button>
                        <button id="completedTodos" onClick={this.completedTodos}>Completed</button>
                    </div>
                    {this.checkingSelectedCount()>0?<button id="clearCompletedTodos" onClick={this.clearCompletedTodos} >Clear Completed</button>:""}
                </div>):""}
            </div>
        );
    }
}



function TodosListAPP() {
    return <TodoList />;
}

export default TodosListAPP;
