import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Page1 from "./components/Page1";
import TodosList from './components/TodosList/index.js';
import CountriesStatus from './components/CountriesStatus/index.js';
import CountriesDashboardApp from './components/CountriesDashboardApp/index.js';
import TodoApp from "./stores/TodoApp.js";
import "./App.css";
import GridMemoryGame from "./components/GridMemoryGame";



const App = () => {
  return (
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
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
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
