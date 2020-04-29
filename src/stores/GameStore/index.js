//GameStore
import { observable, action, computed } from "mobx";
import jsonData from "./GridData";
import Cell from "../models/GridModel/";

class GameStore {
    @observable level
    @observable topLevel
    @observable currentLevelGridCells
    @observable selectedCellsCount
    @observable isGameCompleted

    constructor() {
        this.init();
    }

    @action.bound
    init() {
        this.topLevel = this.selectedCellsCount = this.level = 0;
        this.currentLevelGridCells = [];
        this.isGameCompleted = false;
        this.finalLevel = 7;
    }

    @action.bound
    onCellClick(isHidden) {
        if (isHidden) {
            this.incrementSelectedCellsCount();
        }
        else {
            this.goToInitialLevelUpdateCells;
        }
    }

    @action.bound
    setGridCells() {
        const { gridSize, hiddenCellCount } = jsonData[this.level];
        const gridsArray = [...Array(gridSize * gridSize).keys()];
        const shuffledArray = [...gridsArray].sort(() => Math.random() - 0.5);
        const hiddenCellsArray = shuffledArray.slice(0, hiddenCellCount);

        this.currentLevelGridCells = gridsArray.map(grid => {
            const cellData = {
                id: Math.random().toString(),
                isHidden: hiddenCellsArray.includes(grid)
            };
            return new Cell(cellData);
        });
    }

    @action.bound
    goToNextLevelUpdateCells() {
        this.level++;
        if (this.level === this.finalLevel) {
            this.isGameCompleted = true;
        }
        else {
            this.setGridCells();
            this.resetSelectedCellsCount();
        }

    }

    @action.bound
    goToInitialLevelUpdateCells() {
        this.setTopLevel();
        this.level = 0;
        this.resetSelectedCellsCount();
        this.setGridCells();
    }

    @action.bound
    resetSelectedCellsCount() {
        this.selectedCellsCount = 0;
    }

    @action.bound
    incrementSelectedCellsCount() {
        this.selectedCellsCount++;
        const { hiddenCellCount } = jsonData[this.level];
        if (this.selectedCellsCount === hiddenCellCount)
            this.goToNextLevelUpdateCells();
    }

    @action.bound
    setTopLevel() {
        this.topLevel = this.topLevel < this.level ? this.level : this.topLevel;
    }

    @action.bound
    resetGame() {
        this.goToInitialLevelUpdateCells();
        this.isGameCompleted = false;
    }

    @action.bound
    onPlayAgainClick() {
        this.setTopLevel();
        this.resetGame();

    }

    @computed get gridFieldWidth() {
        const { gridWidth } = jsonData[this.level];
        return gridWidth;
    }

    @computed get eachGridWith() {
        const { eachGridWith } = jsonData[this.level];
        return eachGridWith;
    }
}

export default new GameStore();
