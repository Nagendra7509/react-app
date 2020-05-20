import React from "react";
import { observer } from "mobx-react";
import { observable } from "mobx";

import {
    PracticeAdvancedConcepts,
    Hocs,
    RenderProps,
    TitleHoc,
    TitleRenderProps
}
from "./styledComponent";


import ViewEditToggle from "../../components/ViewEditToggle";
import CollapseExpand from "../../components/CollapseExpand";
import DeviceTypeText from "../../components/DeviceTypeText";
import DisplayMouseCoordinates from "../../components/DisplayMouseCoordinates";



@observer
class PracticeAdvancedConceptsRoute extends React.Component {
    @observable toggleStatus;

    render() {

        return <PracticeAdvancedConcepts>
                    <Hocs>
                        <TitleHoc>HOC's Usage</TitleHoc>
                        <ViewEditToggle/>
                        <CollapseExpand/>
                        <DeviceTypeText/>
                    </Hocs>
                    <RenderProps>
                          <TitleRenderProps>Render Props Usage</TitleRenderProps>  
                        <DisplayMouseCoordinates/>
                    </RenderProps>
                </PracticeAdvancedConcepts>

    }

}


export default PracticeAdvancedConceptsRoute;
