import React from 'react';
import Consultant from "./Consultant"
import Form from "./Form"
import Service from "./Service"
import Landing from "./Landing"
import Navbar from "./Navbar"
import Footer from "./Footer"


import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/Services" component={Service} />
          <Route exact path="/Consultants" component={Consultant} />
          <Route exact path="/Contact" component={Form} />          
        </Switch>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
