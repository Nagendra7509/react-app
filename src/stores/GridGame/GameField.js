import React from "react";
import Cell from "./Cell.js";
import { observer } from "mobx-react";
import { Cells } from "./GridGameStyles.js";

let counter = 0;

@observer
class GameField extends React.Component {

    componentDidMount() {
        counter = 0;
        const timerId = setInterval(() => this.shuffleArray(this.props.cells, timerId), ((this.props.level + 10) * 1000));
    }

    shuffleArray(array, timerId) {
        console.log(timerId);
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        setTimeout(() => clearInterval(timerId), 1000);
    }

    render() {
        console.log(counter++);
        return (
            <Cells>
                {this.props.cells.map(cell => <Cell key={Math.random()} cell={cell} selectedTheme={this.props.selectedTheme} 
                onCellClick={this.props.onCellClick} level={this.props.level}></Cell>)}
            </Cells>);
    }
}

export default GameField;
