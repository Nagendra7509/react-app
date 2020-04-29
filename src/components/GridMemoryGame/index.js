//GridMemoryGame

import React from "react";
import { observable, reaction } from "mobx";
import { observer } from "mobx-react";
import gameStore from "../../stores/GameStore";
import themeStore from "../../stores/ThemeStore";
import Header from "./Header";
import GameField from "./GameField";
import GameResult from "./GameResult";
import { GridGame } from "./styledIndex";


@observer
class GridApp extends React.Component {

    constructor(props) {
        super(props);
        setTimeout(gameStore.setGridCells, 1000);
        this.timeIntervalId = 0;
        this.timeInterval();
    }

    reaction1 = reaction(() => gameStore.level, (level) => this.timeInterval());

    timeInterval = () => {
        clearInterval(this.timeIntervalId);
        this.timeIntervalId = setInterval(gameStore.onPlayAgainClick, (gameStore.level + 4) * 2000);
    }

    render() {
        const {
            level,
            topLevel,
            currentLevelGridCells,
            isGameCompleted,
            onCellClick,
            onPlayAgainClick,
            gridFieldWidth,
            eachGridWith
        } = gameStore;

        const {
            selectedTheme: { gridStyles },
            onChangeSelectedTheme
        } = themeStore;

        //console.log(griFieldWidth);
        //console.log(typeof gridStyles);
        return (
            <GridGame background={gridStyles.background} color={gridStyles.textColor}>
                <Header
                    onChangeSelectedTheme={onChangeSelectedTheme}
                    selectedTheme={gridStyles}
                    level={level}
                    topLevel={topLevel}
                />
                {isGameCompleted?<GameResult
                    onPlayAgainClick={onPlayAgainClick}
                    level={level}
                    selectedTheme={gridStyles}
                />:<GameField
                    cells={currentLevelGridCells}
                    onCellClick={onCellClick}
                    level={level}
                    selectedTheme={gridStyles}
                    gridFieldWidth={gridFieldWidth}
                    eachGridWith={eachGridWith}
                />}
                
            </GridGame>
        );
    }
}

export default GridApp;
