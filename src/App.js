import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Provider }from 'react-redux';
import store from './store';
// import ProductPage from './components/pages/ProductPage';
import Basket from './components/layout/Basket';
import Header from './components/layout/navs/Header';
import Filter from './components/Filter';
import Products from './components/Products';
import Footer from './components/layout/navs/Footer';
import './App.css';

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   //Default values
  //   this.state = { products: [], filteredProducts: [], cartItems: [] };
  //   //Binds function with the syntax
  //   this.handleChangeSort = this.handleChangeSort.bind(this);
  //   this.handleChangeSize = this.handleChangeSize.bind(this);
  //   this.handleAddToCart = this.handleAddToCart.bind(this);
  //   this.handleRemoveFromCart = this.handleRemoveFromCart.bind(this);
  // }

  //Sort now handled by redux
  
  // handleChangeSort(e) {
    //   this.setState({ sort: e.target.value });
    //   this.listProducts();
    // }
    
    // handleChangeSize(e) {
      //   this.setState({ size: e.target.value });
      //   this.listProducts();
      // }
      
      //   handleAddToCart(e, product) {
        //     this.setState(state => {
          //       const cartItems = state.cartItems;
          //       let productAlreadyInCart = false;
          //       cartItems.forEach(item => {
            //         if (item.id === product.id) {
              //           productAlreadyInCart = true;
              //           item.count++;
              //         }
              //       });
              //       if (!productAlreadyInCart) {
                //         cartItems.push({ ...product, count: 1 });
                //       }
                //       localStorage.setItem("cartItems", JSON.stringify(cartItems));
                //       return cartItems;
                //     });
                //   }
                
                //   handleRemoveFromCart(e, product) {
                  // this.setState(state => {
                    //   const cartItems = state.cartItems.filter(a => a.id !== product.id);
                    //   localStorage.setItem("cartItems", JSON.stringify(cartItems));
                    //   return { cartItems: cartItems };
                    // });
                    //   }
                    
                    /*Shows products by using redux */
                    
                    // listProducts() {
                      //   this.setState(state => {
                        //     //Checks the value of sort e.g lowest, highest
                        //     if (state.size !== "") {
                          //       //If it is not empty return an object
                          //       // Which contains the filtered products
                          //       // Then filter at the index of the selected Size
                          //       return {
                            //         filteredProducts: state.products.filter(
                              //           a => a.availableSizes.indexOf(state.size.toUpperCase()) >= 0
                              //         )
                              //       };
                              //     }
                              //     return { filteredProducts: state.products };
                              //   });
                              // }
                              
  // componentWillMount() {
  //     //Save items to local storage on refresh w cart
  //       if (localStorage.getItem("cartItems")) {
  //         this.setState({
  //           cartItems: JSON.parse(localStorage.getItem("cartItems"))
  //         });
  //       }
  // }
  render() {
    return (
      <React.Fragment>
        <Provider store={store}>
          <Router>
            <Header />
            <Route exact path="/" render={props => (
                <React.Fragment>
                
                  <div className="container">
                    <div className="col-md-7">
                      <Filter
                        // size={this.state.size}
                        // sort={this.state.sort}
                        // handleChangeSize={this.handleChangeSize}
                        // handleChangeSort={this.handleChangeSort}
                      />
                      <Products
                        // products={this.state.filteredProducts}
                        // handleAddToCart={this.handleAddToCart}
                      />
                    </div>
                    <div className="col-md-4">
                      <Basket
                        // cartItems={this.state.cartItems}
                        // handleRemoveFromCart={this.handleRemoveFromCart}
                      />
                    </div>
                  </div>
                </React.Fragment>
              )}
            />
            {/* <Route exact path="/productPage" component={ProductPage} /> */}
            {/* <Route exact path="/basket" component={Basket}/>  */}
            <Footer />
          </Router>
      </Provider>
        </React.Fragment>
    );
  }
}

export default App;
