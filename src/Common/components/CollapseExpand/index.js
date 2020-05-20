import React from "react";

import { observable } from "mobx";
import { observer } from "mobx-react";
import withToggle from "../../hocs/withToggle";

import {
    CollapseExpandPart,
    Title,
    Label,
    Button,
    ListOfItems,
    Item,
    ButtonAndList
}
from "./styledComponent";

@observer
class CollapseExpand extends React.Component {

    render() {
        const { onToggle, toggleStatus, list } = this.props;
        return <CollapseExpandPart>
                    <Title>CollapseExpand</Title>
                    <Label>
                        Sample Shopping List:
                            <ButtonAndList>
                                <Button onClick={onToggle}>{toggleStatus?"Collapse":"Expand"}</Button>
                                {toggleStatus?<ListOfItems>
                                                {list.map(item=><Item key={item}>{item}</Item>)}
                                            </ListOfItems>:null}
                            </ButtonAndList>
                        
                    </Label>
                </CollapseExpandPart>;
    }

}

export default withToggle(CollapseExpand);
