import React, {Component} from 'react';
import { connect } from "react-redux";
import { addToCart } from "../actions/cartActions";
import {getItem } from '../actions/productActions';
import {Col, Container} from 'react-bootstrap';
 
class ProductPage extends Component {
    componentDidMount() {
        this.props.fetchProducts();
    }
    componentWillReceiveProps(nextState) {
        console.log(nextState);
    }
    render(){
      const { products } = this.props
      return (
        <Container>
          <Col>
            <div><h1>{products.id}</h1></div>
          </Col>
        </Container>
      )
            
    }
}

const mapStateToProps = state => ({
  products: state.products.filteredItems,
  cartItems: state.cart.items
});

// const product = this.props.products.find(product => product.id === )
export default connect(mapStateToProps, {getItem, addToCart})(ProductPage);