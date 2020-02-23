import React, { Component } from 'react';
import {Col, Row} from 'react-bootstrap';
import {connect} from 'react-redux';
import {addToCart} from '../actions/cartActions';
import {fetchProducts} from '../actions/productActions';
import {Link} from "react-router-dom";
import util from '../util';

class Products extends Component {
    UNSAFE_componentWillMount(){
        this.props.fetchProducts();
    }

    componentWillReceiveProps(nextState){
        console.log(nextState);
    }
    render() {
        const productItems = this.props.products.map(product => (
          <Col md={4} key={product.id}>
            <Link to="/ProductPage">
                </Link>
              <div className="thumbnail text-center">
                <a
                  href={`#${product.id}`}
                  onClick={() =>
                    this.props.addToCart(this.props.cartItems, product)
                  }
                >
                  <img
                    src={`/products/${product.sku}_1.jpg`}
                    alt={product.title}
                  />
                  <p>{product.title}</p>
                </a>
                <div>
                  <b>{util.formatCurrency(product.price)}</b>
                  <button
                    className="btn btn-default"
                    onClick={() =>
                      this.props.addToCart(this.props.cartItems, product)
                    }
                    >
                    {" "}
                    Add to Cart{" "}
                  </button>
                </div>
              </div>
          </Col>
        ));
        return (
          <Row>
                {productItems}
          </Row>
        );
    }
}
const mapStateToProps = state => ({
    products: state.products.filteredItems,
    cartItems: state.cart.items
})
export default connect(mapStateToProps, {fetchProducts, addToCart})(Products);
