import React from "react";
import { observer } from "mobx-react";
import { observable } from "mobx";
import { MouseCoordinate, Title } from "./styledComponent";

@observer
class MouseCoordinates extends React.Component {

    @observable x = 0;
    @observable y = 0;


    handleOnMouseMove = (event) => {
        this.x = event.clientX;
        this.y = event.clientY;

    }

    render() {
        const mouse = { x: this.x, y: this.y };
        return (
            <MouseCoordinate >
                    <Title>DisplayMouseCoordinates</Title>
                    {this.props.render(mouse,this.handleOnMouseMove)}
                </MouseCoordinate>
        );


    }

}


export default MouseCoordinates;
