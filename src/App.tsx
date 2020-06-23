import React,{ Fragment } from 'react';
import './assets/main.css';
import Navbar from './components/layout/Navbar';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Fragment>
        <Navbar />
      </Fragment>
    </Router>
  );
}

export default App;
