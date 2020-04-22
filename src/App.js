import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
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


const App = () => {
  return (
    <Provider {...stores}>
    <Router basename={process.env.PUBLIC_URL}>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
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


/*<Router basename={process.env.PUBLIC_URL}>
  <Switch>
    <Route exact path="/page-1">
      <Page1 />
    </Route>
    <Route path="/">
      <HomePage />
    </Route>
  </Switch>
</Router>*/
