import React from "react";
import { Route } from "react-router-dom";
import { YOUR_ORDERS_PAGE } from "../constants/routeConstants/RouteConstants";
import YourOrders from "../components/MenuPage/YourOrders/index";

export const yourPageRoute = <Route path={YOUR_ORDERS_PAGE} component={YourOrders}/>;
