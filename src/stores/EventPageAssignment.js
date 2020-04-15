import React from 'react';


import { observer } from 'mobx-react';

import EventPage from './models/EventPage.js'

class EventPageApp {
    render() {
        return (
            <div><EventPage/></div>
        );
    }
}

export default EventPageApp;
