import React from 'react';
import {Switch, Route} from "react-router-dom";
import './App.css';
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInSignUp from "./pages/signin-signup/signin-signup.component";
import Header from "./component/header/header.component";

import {auth} from './firebase/firebase.utils';



class App extends React.Component {
    constructor() {
        super();

        this.state = {
            currentUser: null
        }
    }

    unsubscribeFromAuth = null;

    componentDidMount() {
        auth.onAuthStateChanged(user => {
            this.setState({currentUser: user});

            console.log(user);
        })
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
      return (
          <div>
              <Header currentUser={this.state.currentUser}/>
              <Switch>
                  <Route exact path='/' component={HomePage}/>
                  <Route path='/shop' component={ShopPage}/>
                  <Route path='/signin' component={SignInSignUp}/>
              </Switch>
          </div>
      );
  }
}

export default App;
