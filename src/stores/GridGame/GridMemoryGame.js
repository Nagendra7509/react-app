import React from "react";
import { observer } from "mobx-react";
import gameStore from "./GameStore.js";
import themeStore from './ThemeStore.js';
import Header from "./Header.js";
import GameField from "./GameField.js";



@observer
class GridMemoryGame extends React.Component {

    componentDidMount() {
        gameStore.setGridCells();
    }

    render() {
        return (<div>
                    <Header level={gameStore.level} topLevel={gameStore.topLevel}
                            onChangeSelectedTheme={themeStore.onChangeSelectedTheme} 
                            selectedTheme={themeStore.selectedTheme}></Header>
                    <GameField cells={gameStore.currentLevelGridCells} onCellClick={gameStore.onCellClick}
                    level={gameStore.level} selectedTheme={themeStore.selectedTheme}></GameField>
                </div>);
    }
}

export default GridMemoryGame;
