import React from "react";
import { observer } from "mobx-react";
import { observable } from "mobx";
import ProductSort from "../ProductSort";
import { NoofProductsAndProductSort, TotalNofProducts, SearchBar } from "./styledComponent";



@observer
class Header extends React.Component {

    @observable searchText;

    handleOnchange = (event) => {

        this.searchText = event.target.value;
        const { onChangeSearchText } = this.props;
        onChangeSearchText(this.searchText);
    }


    render() {
        const { totalNoOfProductsDisplayed, onChangeSortBy } = this.props;
        return (
            <NoofProductsAndProductSort>
                <TotalNofProducts>{ totalNoOfProductsDisplayed } Product(s) found.</TotalNofProducts>
                <SearchBar 
                    type="text" 
                    placeholder="search for products" 
                    onChange={this.handleOnchange}
                />
                <ProductSort onChangeSortBy={onChangeSortBy}/>
            </NoofProductsAndProductSort>
        );
    }
}

export default Header;
