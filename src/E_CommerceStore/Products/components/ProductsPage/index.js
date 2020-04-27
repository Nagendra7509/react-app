import React from "react";
import { inject, observer } from "mobx-react";
import ProductCart from "../../../Cart/components/ProductCart/index";
import SizeFilter from "./SizeFilter/index";
import Header from "./Header/index";
import ProductList from "./ProductList";


import { E_CommerceStore_App, HeaderPart, FilterAndProducts, SortFilterAndProducts, SignOutBtn } from "./styledComponent";


@inject("authStore")
@inject("productStore")


@observer
class ProductsPage extends React.Component {

    componentDidMount() {
        this.doNetworkCall();
    }

    doNetworkCall = () => {
        this.props.productStore.getProductList();
    }

    onClickSignout = () => {
        this.props.authStore.userSignOut();
        const { history } = this.props;
        history.replace('/signIn');
    }
    render() {
        const {
            products,
            getProductListAPIStatus,
            getProductListAPIError,
            productsAPIService,
            sizeFilter,
            sortBy,
            onChangeSortBy,
            onSelectSize,
            totalNoOfProductsDisplayed
        } = this.props.productStore;
        return <E_CommerceStore_App>
                    <HeaderPart>
                        <SignOutBtn onClick={this.onClickSignout}>sigout</SignOutBtn>
                        <ProductCart/>
                    </HeaderPart>
                    <FilterAndProducts>
                        <SizeFilter onSelectSize={onSelectSize} sizeFilter={sizeFilter}/>
                        <SortFilterAndProducts>
                              <Header totalNoOfProductsDisplayed={totalNoOfProductsDisplayed} onChangeSortBy={onChangeSortBy}/>
                              <ProductList products={products}  />
                        </SortFilterAndProducts>
                    </FilterAndProducts>
                </E_CommerceStore_App>;
    }
}

export default ProductsPage;
