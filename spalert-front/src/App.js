import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Banner from './Components/Banner';
import NewAlert from './Components/NewAlert';
import EditAlert from './Components/EditAlert';
import ListAlerts from './Components/ListAlerts';
import BrigadeAlerts from './Components/BrigadeAlerts';
import NewBrigade from './Components/NewBrigade';
import Success from './Components/Sucess';
import HomeMenu from './Components/HomeMenu';

import './App.css';

function Menu(){
  return(
    <div>
      <HomeMenu></HomeMenu>
    </div>
  );
}

class App extends Component {

  render() {
    return (
      <div>
        <Banner/>
        <Router>
          <div>
            <Route exact path="/" component={Menu}/>
            <Route path="/newAlert" component={NewAlert}/>
            <Route path="/newBrigade" component={NewBrigade}/>
            <Route path="/alerts" component={ListAlerts}/>
            <Route path="/brigades/:id" component={BrigadeAlerts}/>
            <Route path="/success" component={Success}/>
            <Route path="/edit/:id" component={EditAlert}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
