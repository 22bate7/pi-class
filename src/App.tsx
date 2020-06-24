import React,{ Fragment } from 'react';
import './assets/main.css';
import './assets/app.scss';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/dashboard';
import AddHomework from './components/addHomework/AddHomework';
import { PlusIcon } from '@primer/octicons-react';
import { showPopup } from './actions/actions';

interface Props {
  showPopup : any
}

const App:React.FC<Props> = ({ showPopup }) =>{

  const showAddHomework = ()=>{
    showPopup();
  }

  return (
      <Router>
        <Fragment>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Dashboard} />
          </Switch>
          <button className="addHomework-btn" onClick={showAddHomework}>
                <PlusIcon size={30} />
          </button>
          <AddHomework />
        </Fragment>
      </Router>
  );
}

export default connect(null,{
  showPopup
})(App);
