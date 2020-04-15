import React from 'react';
import { observable, action } from "mobx";

class EventPage {
    @observable name = "";
    @observable locationName = "";

    @action
    handleOnChangeName = (event) => {
        this.name = event.target.value;
    }

    @action
    handleOnChangeLocation = (event) => {
        this.locationName = event.target.value;
    }

    render() {
        return (
            <div>
                <input type="text" placeholder="Enter Name" onChange={this.handleOnChangeName}/>
                <input type="text" placeholder="location" onChange={this.handleOnChangeLocation}/>
                <button>ADD</button>
            </div>
        );
    }
}

export default EventPage;
