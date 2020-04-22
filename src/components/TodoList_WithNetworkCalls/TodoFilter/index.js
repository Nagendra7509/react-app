import React from "react";
import { observer } from "mobx-react";
import { AllBtn, ActiveBtn, CompletedBtn, ClearCompleted, Filters } from "./styledIndex";


@observer
class TodoFilter extends React.Component {

    onChangeSelectedFilter = (event) => {
        this.props.onChangeSelectedFilter(event.target.value);
    }
    render() {
        return (
            <Filters >
                <AllBtn onClick={this.onChangeSelectedFilter} value="ALL">ALL</AllBtn>
                <ActiveBtn onClick={this.onChangeSelectedFilter} value="ACTIVE">ACTIVE</ActiveBtn>
                <CompletedBtn onClick={this.onChangeSelectedFilter} value="COMPLETED">COMPLETED</CompletedBtn>
                {(this.props.totalTodos.length-this.props.activeTodosCount) ? <ClearCompleted onClick={this.props.onClearCompleted} >CLEAR_COMPLETED</ClearCompleted>:null}
            </Filters>
        );
    }
}

export default TodoFilter;
