//GridCell

import React from "react";
import { observable } from "mobx";
import { observer } from "mobx-react";
import { Grid } from './styledIndex';

@observer
class Cell extends React.Component {

    @observable shouldShowHiddenCell = true;
    @observable isClickedOnCell = false;

    componentDidMount() {
        const { level } = this.props;
        setTimeout(() => this.shouldShowHiddenCell = false, (level + 3) * 1000);
        //setTimeout()
    }

    onCellClick = () => {
        const { onCellClick, cell: { isHidden } } = this.props, { isClickedOnCell } = this;
        if (!isClickedOnCell) {
            this.isClickedOnCell = true;
            onCellClick(isHidden);
        }
    }


    render() {

        const {
            cell: { isHidden },
            selectedTheme,
            //onCellClick,
            level,
            eachGridWith
        } = this.props;
        const { isClickedOnCell, shouldShowHiddenCell } = this;
        //if (cell.isHidden)
        //console.log(this.shouldShowHiddenCell)
        let background = ((shouldShowHiddenCell || isClickedOnCell) && isHidden) ? selectedTheme.name == "Dark" ? "green" : "blue" :
            (isClickedOnCell && !isHidden) ? "red" : `gray`;

        return (<Grid
            background={background}
            disabled = {shouldShowHiddenCell}
            onClick={this.onCellClick}
            eachGridWith={eachGridWith}
            >{isHidden?"Y":""}
        </Grid>);
    }
}

export default Cell;
