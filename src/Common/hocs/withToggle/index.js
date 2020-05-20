import React from "react";

import { observable } from "mobx";
import { observer } from "mobx-react";


const withToggle = (WrappedComponent) => {

    @observer
    class newComponent extends React.Component {

        @observable toggleStatus = false;
        @observable list = ['Egg', 'Bread'];

        onToggle = () => {

            this.toggleStatus = !this.toggleStatus;
        }

        render() {
            return <WrappedComponent 
                        onToggle={this.onToggle} 
                        toggleStatus={this.toggleStatus}
                        list={this.list}
                    />;
        }
    }

    return newComponent;
}

export default withToggle;
