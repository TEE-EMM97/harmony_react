import React, { Component } from 'react';
import Filter from "../components/Filter";
import {Col, Row, Container} from 'react-bootstrap';
import {connect} from 'react-redux';
import {addToCart} from '../actions/cartActions';
import {fetchProducts} from '../actions/productActions';
import util from '../util';
import {Link} from "react-router-dom";

class Products extends Component {
  componentDidMount(){
    this.props.fetchProducts();
  }
  
  componentWillReceiveProps(nextState){
    console.log(nextState);
  }
  render() {
    const productItems = this.props.products.map(product => (
      <Col md={4} key={product.id}>
              <div className="thumbnail text-center">
        <Link to={`/products/${product.id}`}>
                <a href={`${product.id}`}>
                  <img
                    src={`/products/${product.sku}_1.jpg`}
                    alt={product.title}
                    />
                  <p>{product.title}</p>
                </a>
              </Link>
                <div>
                  <b>{util.formatCurrency(product.price)}</b>
                </div>
              </div>
         
              <button
                className="btn btn-default"
                onClick={() =>
                  this.props.addToCart(this.props.cartItems, product)
                }
                >
                {" "}
                Add to Cart{" "}
              </button>
          </Col>
        ));
        return (
          <Container>
            <Col md={3}>
              <Filter />
            </Col>
            <Row>{productItems}</Row>
          </Container>
        );
    }
}
const mapStateToProps = state => ({
    products: state.products.filteredItems,
    cartItems: state.cart.items
})
export default connect(mapStateToProps, {fetchProducts, addToCart})(Products);
