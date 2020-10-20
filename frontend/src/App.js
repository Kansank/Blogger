import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/navbar.js';
import Home from './Screens/HomeScreens.js';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import addpost from './Screens/AddPostScreens';
import PostScreens from './Screens/PostScreens';

const App = (props) => {
 
    return (
      <Router>
        <div className="App">
          <Navbar/>
          <Route path="/" exact component={Home}></Route> 
          <Route path="/addpost" exact component={addpost}></Route> 
          <Route path="/post/:id" exact component={PostScreens}></Route> 

          
        </div>
      </Router>
    );
  
}

export default App;
