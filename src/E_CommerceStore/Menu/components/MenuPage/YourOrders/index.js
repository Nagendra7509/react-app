import React from "react";
import { inject, observer } from "mobx-react";

@inject('productStore')
@observer
class YourOrders extends React.Component {

    render() {
        console.log(this.props.products);
        return (
            <h1>Hello</h1>
        );

    }
}

export default YourOrders;
