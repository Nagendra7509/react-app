import React from "react";
import { observer } from "mobx-react";

@observer
class ProductSort extends React.Component {
    onChangeSortBy = (event) => {
        const { onChangeSortBy } = this.props;
        onChangeSortBy(event.target.value);
    }

    render() {
        return (
            <div className="text-center">Sort price by:  
                    <select className="rounded-md bg-white border border-gray-400" onChange={this.onChangeSortBy}>
                        <option hidden="">Select</option>
                        <option value="ASCENDING" className="focus:outline-none">Lowest to highest</option>
                        <option value="DESCENDING" className="focus:outline-none">Highest to lowest</option>
                    </select>
                </div>
        );
    }
}

export default ProductSort;
