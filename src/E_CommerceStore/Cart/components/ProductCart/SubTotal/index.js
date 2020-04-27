import React from "react";
import { observer } from "mobx-react";


@observer
class SubTotal extends React.Component {

    render() {
        const { totalCartAmount } = this.props;
        return (
            <div class="flex justify-between mt-4">
                        <h3 class="text-gray-500">SUBTOTAL</h3>
                        <p class="text-yellow-600">₹ {totalCartAmount}</p>
                  </div>
        );
    }
}


export default SubTotal;
