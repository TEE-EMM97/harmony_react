import React, { Component } from 'react';
import { connect } from "react-redux";
import { Row, Col } from "react-bootstrap";
import { filterProducts, sortProducts } from '../actions/productActions';

class Filter extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col md={4}>{this.props.filteredProducts.length} Products Found.</Col>
          <Col md={4}>
            <label>
              Order by
              <select
                className="form-control"
                value={this.props.sort}
                onChange={e =>
                  this.props.sortProducts(
                    this.props.filteredProducts,
                    e.target.value
                  )
                }
              >
                <option value="">Select</option>
                <option value="lowest">lowest to highest</option>
                <option value="highest">highest to lowest</option>
              </select>
            </label>
          </Col>
          <Col md={4}></Col>
        </Row>

        <Row>
          <Col md={4}>
            <label>
              Filter By
              <select
                className="form-control"
                value={this.props.size}
                onChange={e =>
                  this.props.filterProducts(this.props.products, e.target.value)
                }
              >
                <option value="">All</option>
                <option value="xs">XS</option>
                <option value="s">S</option>
                <option value="m">M</option>
                <option value="l">L</option>
                <option value="xl">XL</option>
                <option value="xxl">XXL</option>
              </select>
            </label>
          </Col>
          <Col md={4}></Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products.items,
  filteredProducts: state.products.filteredItems,
  size: state.products.size,
  sort: state.products.sort
});
export default connect(mapStateToProps, {filterProducts, sortProducts})(Filter);