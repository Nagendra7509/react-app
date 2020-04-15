import React from 'react';
import { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import "./index.css";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
}
from 'recharts';



/*global covid19*/
class CovidGraph extends PureComponent {
    static jsfiddleUrl = 'https://jsfiddle.net/alidingling/xqjtetw0/';

    constructor(props) {
        super(props);
        this.state = { data: [] };
    }
    componentDidMount() {
        const data = covid19.data().filter(x => x.country_iso3 == this.props.countryCode).groupByDate();
        this.setState({ data: data });
        console.log(data);
    }
    render() {
        return (
            <div className={this.props.mode=="Light Mode"?"covid19-Division-white":"covid19-Division-black"}> Covid-19 Status
            <LineChart
        width={500}
        height={300}
        data={this.state.data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="confirmed" stroke="red" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="deaths" stroke="#82ca9d" />
        <Line type="monotone" dataKey="recovered" stroke="blue" />
      </LineChart>
      </div>
        );
    }
}

export default withRouter(CovidGraph);
