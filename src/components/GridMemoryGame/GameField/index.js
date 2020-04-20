//GridGameField

import React from "react";
import { observable } from "mobx";
import { observer } from "mobx-react";
import Cell from "../Cell";
import { GridCells } from "./styledIndex";

@observer
class GameField extends React.Component {


    renderCells = () => {
        const {
            cells,
            selectedTheme,
            onCellClick,
            level,
            eachGridWith
        } = this.props;

        return cells.map((gridCell) => {
            return <Cell 
                key={gridCell.id} 
                cell={gridCell} 
                selectedTheme = { selectedTheme }
                onCellClick={onCellClick}
                level={level}
                eachGridWith={eachGridWith}
            />
        });
    }

    render() {
        const { gridFieldWidth } = this.props;
        //console.log('width:', gridFieldWidth);
        return (
            <GridCells width={gridFieldWidth}>
                {this.renderCells()}
            </GridCells>
        );
    }
}

export default GameField;
