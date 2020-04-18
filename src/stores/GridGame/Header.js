import React from "react";
import { observer } from "mobx-react";
import { Level, ThemeBtn, HeaderPart } from "./GridGameStyles.js";




@observer
class Header extends React.Component {

    onChangeSelectedTheme = () => {
        this.props.onChangeSelectedTheme();
    }

    render() {
        return (<HeaderPart>
            topLevel:{this.props.topLevel}
            <div className="flex justify-between">
                <Level>Level:{this.props.level}</Level>
                <ThemeBtn border={this.props.selectedTheme} onClick={this.onChangeSelectedTheme}>Mode: {this.props.selectedTheme}</ThemeBtn>
            </div>
        </HeaderPart>);
    }
}

export default Header;
