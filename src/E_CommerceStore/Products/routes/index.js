import React from "react";
import { Route } from "react-router-dom";
import { PRODUCT_PAGE_PATH } from "../constants/routeConstants/RouteConstants";
import { ProductPageRoute } from "./ProductPageRoute";
import { ProtectedRoute } from "../../../Common/ProtectedRoute/index";

//export const productsRoutes = <Route path={PRODUCT_PAGE_PATH} component={ProductPageRoute}/>;


export const productsRoutes = <ProtectedRoute path={PRODUCT_PAGE_PATH} component={ProductPageRoute}/>;
