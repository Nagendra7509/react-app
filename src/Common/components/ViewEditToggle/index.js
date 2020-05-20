import React from "react";
import { observable } from "mobx";
import { observer } from "mobx-react";

import withToggle from "../../hocs/withToggle";
import {
    EditToggle,
    Title,
    InputTag,
    Button,
    ButtonAndInputTag
}
from "./styledComponent";
class ViewEditToggle extends React.Component {

    @observable inputText = "Click on the edit button to start editing";

    onChangeText = (event) => {
        this.inputText = event.target.value;
    }

    render() {
        const { toggleStatus, onToggle } = this.props;
        return (<EditToggle>
                    <Title>ViewEditToggle</Title>
                    <ButtonAndInputTag>
                    {toggleStatus?<InputTag onChange={this.onChangeText} type="text" defaultValue={this.inputText}/>:<p>{this.inputText}</p>}
                    <Button onClick={onToggle}>{toggleStatus?"Cancel":"Edit"}</Button>
                    </ButtonAndInputTag>
                </EditToggle>);
    }
}


export default withToggle(ViewEditToggle);
