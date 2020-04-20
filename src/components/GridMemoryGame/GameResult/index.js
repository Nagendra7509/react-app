//GridMemoryGame

import React from "react";
import { observable } from "mobx";
import { observer } from "mobx-react";
import { GameResultPage, Congratulation, PlayAgainBtn } from "./styledIndex";

@observer
class GameResult extends React.Component {
    render() {
        const {
            onPlayAgainClick,
            level,
            selectedTheme
        } = this.props;

        return (
            <GameResultPage>
                
                <Congratulation>
                        Congratulations! you completed all the levels.
                </Congratulation>
                <PlayAgainBtn onClick={onPlayAgainClick}>
                    Play Again
                </PlayAgainBtn>
            </GameResultPage>
        );
    }
}

export default GameResult;
