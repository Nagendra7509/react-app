import React from "react";
import { observer } from "mobx-react";
import { Sortlabel, Select, Option } from "./styledComponent";

@observer
class ProductSort extends React.Component {

    onChangeSortBy = (event) => {
        const { onChangeSortBy } = this.props;
        onChangeSortBy(event.target.value);
    }

    render() {
        return (
            <Sortlabel>Sort price by:  
                    <Select onChange={this.onChangeSortBy}>
                        <Option hidden={true}>Select</Option>
                        <Option value="ASCENDING" >Lowest to highest</Option>
                        <Option value="DESCENDING">Highest to lowest</Option>
                    </Select>
                </Sortlabel>
        );
    }
}

export default ProductSort;
