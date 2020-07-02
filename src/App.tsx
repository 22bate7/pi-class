import React, { Fragment } from "react";
import "./assets/main.css";
import styles from "./assets/theme/button.module.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import Navbar from "./components/Layout/Navbar";
import Dashboard from "./components/Dashboard/Dashboard";
import AddHomework from "./components/AddHomework/AddHomework";
import { PlusIcon } from "@primer/octicons-react";
import { showPopup } from "./actions/actions";
import DisplayDetails from "./components/Layout/DisplayDetails";
import ShowHomework from "./components/Layout/ShowHomework";
import classNames from "classnames";

interface Props {
  showPopup: any;
  catagory: any;
}

const App: React.FC<Props> = ({
  showPopup,
  catagory: { selectedCatagory },
}) => {
  const showAddHomework = () => {
    showPopup();
  };

  return (
    <Router>
      <Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/homeworks/:catagory/:name" component={DisplayDetails} />
          <Route path="/homework/:id" component={ShowHomework} />
        </Switch>
        <button
          className={classNames(styles["btn-floating"], "btn-floating")}
          onClick={showAddHomework}
        >
          <PlusIcon size={30} />
        </button>
        <AddHomework />
      </Fragment>
    </Router>
  );
};

const mapStateToProps = (state: { catagory: Object }) => {
  return {
    catagory: state.catagory,
  };
};

export default connect(mapStateToProps, {
  showPopup,
})(App);
