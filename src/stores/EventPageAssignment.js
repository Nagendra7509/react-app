import React from 'react';
import { observable, computed, action } from "mobx";
import { observer } from 'mobx-react';



@observer
class EventPage extends React.Component {
    @observable count = 0;

    @action
    handleIncrement = () => {
        this.count = this.count + 1;
    }

    @action
    handleDecrement = () => {
        this.count = this.count - 1;
    }

    render() {
        return (
            <div>
                <button onClick={this.handleIncrement}>+</button>
                <input type="text" value={this.count}/>
                <button onClick={this.handleDecrement}>-</button>
            </div>
        );
    }



}

export default EventPage;
