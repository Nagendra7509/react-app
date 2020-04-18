import React from "react";
import styled from "@emotion/styled";
import tw from "tailwind.macro";
import { observer } from "mobx-react";

const AllBtn = styled.button `
${tw `text-blue-600 mr-2 px-4 py-1 rounded`}
border:1px solid red`;

const ActiveBtn = styled.button `
${tw `text-blue-600 mr-2 px-4 py-1 rounded`}
border:1px solid red`;

const CompletedBtn = styled.button `
${tw `text-blue-600 mr-2 px-4 py-1 rounded`}
border:1px solid red`;

const ClearCompleted = styled.button `
${tw `text-blue-600 mr-2 px-4 py-1 rounded`}
border:1px solid red`;

const Filters = styled.div `
${tw `flex justify-around`}`;

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
