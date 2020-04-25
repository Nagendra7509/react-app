import React from "react";
import { inject, observer } from "mobx-react";
import SizeFilter from "./SizeFilter/index";
import Header from "./Header/index";
import ProductList from "./ProductList";

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
            productList,
            getProductListAPIStatus,
            getProductListAPIError,
            productsAPIService,
            sizeFilter,
            sortBy,
            onChangeSortBy,
            onSelectSize,
            totalNoOfProductsDisplayed
        } = this.props.productStore;
        return <div>
                    <button onClick={this.onClickSignout}>sigout</button>
                    <SizeFilter onSelectSize={onSelectSize}/>
                    <Header totalNoOfProductsDisplayed={totalNoOfProductsDisplayed} onChangeSortBy={onChangeSortBy}/>
                    <ProductList productList={productList} />
                </div>;
    }
}

export default ProductsPage;
