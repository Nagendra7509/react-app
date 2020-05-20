import React from "react";

import { observable, computed } from "mobx";
import { observer } from "mobx-react";


const withScreenSizeDetectors = (WrappedComponent) => {

    @observer
    class newComponent extends React.Component {

        @observable resizeWidth = window.innerWidth;

        componentDidMount() {
            window.addEventListener('resize', this.updateDimensions);
        }


        updateDimensions = () => {
            this.resizeWidth = window.innerWidth;
        }


        @computed get isMobile() {
            return this.resizeWidth < 576;
        }

        @computed get isTablet() {
            return (this.resizeWidth >= 576 && this.resizeWidth < 992);
        }

        @computed get isDesktop() {
            return (this.resizeWidth >= 992);
        }


        render() {
            return <WrappedComponent 
                       isMobile={this.isMobile}
                       isTablet={this.isTablet}
                       isDesktop={this.isDesktop}
                    />;
        }
    }

    return newComponent;
}

export default withScreenSizeDetectors;
