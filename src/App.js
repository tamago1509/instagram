import React, { Component } from "react";
import "./App.css";

import Post from "./components/Post";
import Register from "./components/Register";
import ChangePass from "./components/ChangePass";
import CommentPage from './components/CommentPage'
import Login from "./components/Login";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {UserProvider} from './components/context/UserProvider';

import AuthRoute from './components/AuthRoute'

class App extends Component {
  constructor(props) {
    super();
    this.state = {};
  }

  render() {
    return (
      <UserProvider>
        <div className="App">
         <Router>
            <Switch>
              {/*
               public route : login va register
               private route : rest
              */ }
              <Route exact path="/">
                <Register />
              </Route>
              <Route exact path="/login">
                <Login />
              </Route>
              <Route exact path="/forgetpass">
                <ChangePass />
              </Route>
              <AuthRoute exact path="/post">
                <Post />
              </AuthRoute>
              <Route exact path="/comment">
                <CommentPage />
              </Route>
              
            </Switch>
        </Router>
       
      </div>
      </UserProvider>
      
    );
  }
}
export default App;

