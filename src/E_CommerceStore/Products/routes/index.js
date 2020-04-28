import React from "react";
import { Route } from "react-router-dom";
import { PRODUCT_PAGE_PATH } from "../constants/routeConstants/RouteConstants";
import ProductsPage from "../components/ProductsPage/index";

export const productsRoutes = <Route path={PRODUCT_PAGE_PATH} component={ProductsPage}/>;
