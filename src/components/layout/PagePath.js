import React from 'react';
// import {Breadcrumb, Row} from 'react-bootstrap';

function PagePath() {
    return (
      <div>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/#">Home</a>
            </li>
            <li className="breadcrumb-item">
              <a href="/#">Library</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Data
            </li>
          </ol>
        </nav>
      </div>
    );
}

export default PagePath;