//GridGameHeader

import React from "react";
import { observable } from "mobx";
import { observer } from "mobx-react";
import { HeaderPart, Level, ThemeBtn, TopLevel, LevelAndTheme } from "./styledIndex";

@observer
class Header extends React.Component {



    render() {
        const {
            onChangeSelectedTheme,
            selectedTheme,
            level,
            topLevel
        } = this.props;
        console.log(selectedTheme);
        return (
            <HeaderPart selectedTheme={selectedTheme}>
                <TopLevel>Top Level: {topLevel}</TopLevel>
                <LevelAndTheme>
                    <Level>Level: {level}</Level>
                    <ThemeBtn border={selectedTheme} onClick={onChangeSelectedTheme}>Mode:{selectedTheme.name}</ThemeBtn>
                </LevelAndTheme>
            </HeaderPart>
        );
    }
}

export default Header;
