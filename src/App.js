import React from 'react';
import Consultant from "./Consultant"
import Form from "./Form"
import Service from "./Service"
import Landing from "./Landing"
import Navbar from "./Navbar"
import Footer from "./Footer"
import 'bootstrap/dist/css/bootstrap.min.css'


import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/Services/:id" component={Service} />
          <Route exact path="/Consultants/:id" component={Consultant} />
          <Route exact path="/Contact" component={Form} />          
        </Switch>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
