import React from "react";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Provider } from "mobx-react";
import Home from "./components/Home";
//import Page1 from "./components/Page1";
import TodosList from './components/TodosList/index.js';
import CountriesStatus from './components/CountriesStatus/index.js';
import CountriesDashboardApp from './components/CountriesDashboardApp/index.js';
import TodoApp from "./stores/TodoApp.js";
import "./App.css";
import GridMemoryGame from "./components/GridMemoryGame";
import UserPage from "./components/UserPage/index.js";
import stores from "./stores";
import TodoAppNetworkCalls from "./components/TodoList_WithNetworkCalls";
import LoginPage from "./components/LoginPage";
import SignInPage from "./E_CommerceStore/Authentication/components/SignInPage/index";
import storesFromAuth from "./Common/stores/index";
import ProductsPage from "./E_CommerceStore/Products/components/ProductsPage/index";
import { authenticationRoutes } from "./E_CommerceStore/Authentication/routes/index";
import { productsRoutes } from "./E_CommerceStore/Products/routes/index";
import Practice from "./components/Practice";

import { ThemeContext } from "./context/EcommerceAppContext";


const App = () => {
  return (
    <Provider {...stores} {...storesFromAuth} >
    <Router basename={process.env.PUBLIC_URL}>
      <div>
        <Switch>
          <Route path="/todoslist">
            <TodosList />
          </Route>
          <Route path="/countriesList">
            <CountriesStatus />
          </Route>
          <Route path="/contriesDashboardApp">
              <CountriesDashboardApp/>
          </Route>
          <Route path="/mobx-todo-app">
            <TodoApp/>
          </Route>
          <Route path="/grid-game">
            <GridMemoryGame/>
          </Route>
          <Route exact path="/practice" component={UserPage}>
          </Route>
          <Route exact path="/todoListNetworkCalls" component={TodoAppNetworkCalls}>
          </Route>
          <Route exact path="/login" component={LoginPage}></Route>
          <Route path="/practicePage">
            <Practice/>
          </Route>
          {/*<Route exact path="/ecommerce-store/sign-in/" component={SignInPage}></Route>
          <Route exact path="/ecommerce-store/products/" component={ProductsPage}></Route>*/}
          
          {authenticationRoutes}
          {productsRoutes}
          
          
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    </Provider>
  );
};

export default App;
