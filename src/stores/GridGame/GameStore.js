import { observable, action, computed } from "mobx";
import Cell from "../models/Cell.js";
import Grids from "./Grids.json";

class GameStore {

    @observable level = 0;
    @observable topLevel = 0;
    @observable currentLevelGridCells = [];
    @observable selectedCellsCount = 0;
    @observable isGameCompleted = false;

    @action.bound
    onCellClick(id) {
        //console.log(id);
    }

    setGridCells() {
        for (let cell = 0; cell < (3 + this.level) * (Grids[this.level].gridSize); cell++) {
            const cellInstance = new Cell();
            this.currentLevelGridCells.push(cellInstance);
        }
    }

    @action.bound
    goToNextLevelAndUpdateCells() {

    }

    @action.bound
    goToInitialLevelAndUpdateCells() {

    }

    @action.bound
    resetSelectedCellsCount() {

    }

    @action.bound
    incrementSelectedCellsCount() {

    }

    @action.bound
    onPlayAgainClick() {

    }

    @action.bound
    resetGame() {

    }

}

const gameStore = new GameStore();
export default gameStore;
