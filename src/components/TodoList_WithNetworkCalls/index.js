import React from "react";
import { observer, inject } from "mobx-react";
import { action, autorun } from "mobx";
import LoadingWrapperWithFailure from "../common/LoadingWrapperWithFailure/index.js";
import NoDataView from "../common/NoDataView/index.js";
import AddTodo from './AddTodo';
import TodoList from "./TodoList";
import TodoFooter from "./TodoFooter";
import { TodoTitle, TodosListApp } from "./styledIndex";





@inject("todoStore")
@observer
class TodoAppNetworkCalls extends React.Component {


    componentDidMount() {
        this.doNetWorkCalls();
    }


    @action.bound
    getTodoStore() {
        return this.props.todoStore;
    }

    @action.bound
    doNetWorkCalls() {
        this.getTodoStore().getTodoList();
    }

    renderUserList = observer(() => {
        //console.log('called');
        const {
            todos,
            todoArray,
            onRemoveTodo
        } = this.getTodoStore();
        if (todos.length === 0) {
            return <NoDataView/>;
        }
        return (<TodoList  todos={todos} todoArray={todoArray} onRemoveTodo={onRemoveTodo} ></TodoList>);
    })


    render() {
        const {
            getTodoListAPIStatus,
            getTodoListAPIError,
            onAddTodo,
            todos,
            todoArray,
            onClearCompleted,
            activeTodosCount,
            selectedFilter,
            onChangeSelectedFilter
        } = this.getTodoStore();
        console.log(getTodoListAPIStatus);

        return (
            <TodosListApp>
                <TodoTitle>todo</TodoTitle>
                <AddTodo onAddTodo={onAddTodo}></AddTodo>
                <LoadingWrapperWithFailure
                    //{...{selectedFilter,todos,todoArray,activeTodosCount}}
                    apiError={getTodoListAPIError}
                    apiStatus={getTodoListAPIStatus}
                    onRetryClick={this.doNetWorkCalls}
                    renderSuccessUI={this.renderUserList}
                />
                {todoArray.length>0?<TodoFooter 
                        onClearCompleted={onClearCompleted} 
                        activeTodosCount={activeTodosCount} 
                        todos={todoArray}  selectedFilter={selectedFilter} 
                        onChangeSelectedFilter={onChangeSelectedFilter}>
                    </TodoFooter>:null}
            </TodosListApp>
        );

    }
}

export default TodoAppNetworkCalls;
//
//{...{selectedFilter,todos,todoArray,activeTodosCount}}
