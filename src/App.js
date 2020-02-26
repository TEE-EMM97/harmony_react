import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import { Provider }from 'react-redux';
import store from './store';
import ProductPage from './components/ProductPage';
import Basket from './components/Basket';
import Header from './components/layout/navs/Header';
import Products from './components/Products';
import Footer from './components/layout/navs/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <Router>
            <Header />
            <Switch>
            <Route exact path="/" render={() => {return <Redirect to={'/products'}/>}}/>
            <Route exact path="/products" component={Products}/> 
            <Route exact path="/products/:itemId" component={ProductPage} />
            <Route exact path="/basket" component={Basket}/> 

            </Switch>
            <Footer />
          </Router>
      </Provider>
    );
  }
}

export default App;
