import React from "react";
import { observable } from "mobx";
import { observer } from "mobx-react";
import withScreenSizeDetectors from "../../hocs/withScreenSizeDetectors";
import {
    DeviceType,
    Title,
    Label
}
from "./styledComponent";


class DeviceTypeText extends React.Component {


    render() {
        const { isMobile, isTablet } = this.props;
        return (
            <DeviceType>
                    <Title>DeviceTypeText</Title>
                    <Label>Device Type:{isMobile?"Mobile":isTablet?"Tablet":"Desktop"}</Label>
                </DeviceType>
        );

    }


}


export default withScreenSizeDetectors(DeviceTypeText);
