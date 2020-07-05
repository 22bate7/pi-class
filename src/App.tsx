import React, { Fragment } from "react";
import "./assets/main.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Layout/Navbar";
import Dashboard from "./components/Dashboard/Dashboard";
import DisplayDetails from "./components/Homework/DisplayDetails";
import ShowHomework from "./components/Homework/ShowHomework";

const App: React.FunctionComponent = () => {

  return (
    <Router>
      <Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/homeworks/:catagory/:name" component={DisplayDetails} />
          <Route path="/homework/:id" component={ShowHomework} />
        </Switch>
      </Fragment>
    </Router>
  );
};

export default App;
