import React from "react";

import { observable } from "mobx";
import { observer } from "mobx-react";

import MouseCoordinates from "../MouseCoordinates";

import RenderElement from "./styledComponent";



@observer
class DisplayMouseCoordinates extends React.Component {

        render() {
                return <MouseCoordinates render={(mouse,move)=>(<RenderElement onMouseMove={move}>The mouse position is ({mouse.x}, {mouse.y})</RenderElement>)}/>;

    }
}


export default DisplayMouseCoordinates;
