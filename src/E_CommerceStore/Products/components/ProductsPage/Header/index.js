import React from "react";
import { observer } from "mobx-react";
import ProductSort from "../ProductSort";


@observer
class Header extends React.Component {


    render() {
        const { totalNoOfProductsDisplayed, onChangeSortBy } = this.props;
        return (
            <div className="flex justify-between items-center my-4">
                <p className="hidden sm:flex">{totalNoOfProductsDisplayed} Product(s) found.</p>
                <ProductSort onChangeSortBy={onChangeSortBy}/>
                
            </div>
        );
    }
}

export default Header;
