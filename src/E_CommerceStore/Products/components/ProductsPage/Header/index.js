import React from "react";
import { observer } from "mobx-react";
import ProductSort from "../ProductSort";
import { NoofProductsAndProductSort, TotalNofProducts } from "./styledComponent";



@observer
class Header extends React.Component {


    render() {
        const { totalNoOfProductsDisplayed, onChangeSortBy } = this.props;
        return (
            <NoofProductsAndProductSort>
                        <TotalNofProducts>{totalNoOfProductsDisplayed} Product(s) found.</TotalNofProducts>
                        <ProductSort onChangeSortBy={onChangeSortBy}/>
                
                  </NoofProductsAndProductSort>
        );
    }
}

export default Header;
