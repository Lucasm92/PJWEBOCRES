
import './App.css';

import React, { Component,useState } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Main from './main';
import Signup from './Signup';


function App() {



    return (

     <Router>

      <Switch>

      <Route exact path="/" component={Main} />
      <Route path="/admin" component={Signup} />
        </Switch>

        </Router>

    );
  }

export default App;