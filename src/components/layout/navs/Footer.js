import React from 'react';
import {Row, Col} from 'react-bootstrap';

function Footer() {
    return (
      <React.Fragment>
        <footer className="pt-4 my-md-5 pt-md-5 border-top" style={{ backgroundColor: '#bdc3c7'}}>
          <div className="container">

          <Row>
            <Col md>
              <img
                className="mb-2"
                src="/docs/4.4/assets/brand/bootstrap-solid.svg"
                alt=""
                width="24"
                height="24"
              />
              <small className="d-block mb-3 text-muted">
                &copy; 2016-2020
              </small>
            </Col>
            <Col md={6}>
              <ul className="list-unstyled text-small">
                <li>
                    Return
                </li>
                <li>
                    Shipping
                </li>
              </ul>
            </Col>
            <Col md={6}>
              <ul className="list-unstyled text-small">
                <li>
                    Get Newsletter
                </li>
              </ul>
            </Col>
            <Col md={6}>
              <input type="text" />
            </Col>
          </Row>
          </div>
        </footer>
      </React.Fragment>
    );
}

export default Footer;