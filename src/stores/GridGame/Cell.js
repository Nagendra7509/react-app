import React from "react";
import { observable, action } from "mobx";
import { EachCell } from "./GridGameStyles.js";
import { observer } from "mobx-react";

@observer
class Cell extends React.Component {

    @observable isClickedOnCell = false;
    @observable shouldShowHiddenCells = true;

    componentDidMount() {

    }

    @action.bound
    onCellClick(event) {
        //console.log('logged');
        this.props.onCellClick(event.target.id);
        this.isClickedOnCell = true;
    }

    render() {
        //console.log('logged');
        return <EachCell onClick={this.onCellClick} id={this.props.cell.id}></EachCell>;

    }
}

export default Cell;
