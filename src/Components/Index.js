import React, { Component } from 'react';
import Products from './Products';
import Header from './Header';
import Footer from './Footer';

class Index extends Component {

  render() {
    return (
      <div>
        <Header />
          {/* Products */}
          <div className="products">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 offset-lg-3">
                  <div className="section_title text-center">Be together. Not the same.</div>
                </div>
              </div>
              <div className="row page_nav_row">
                <div className="col">
                  <div className="page_nav">
                    <ul className="d-flex flex-row align-items-start justify-content-center">
                      <li className="active"><a href="#">iPhone</a></li>
                      <li><a href="#">Samsung</a></li>
                      <li><a href="#">Sony</a></li>
                      <li><a href="#">LG</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="row products_row">
                {/* Product */}
                  
                  <Products />
                  <Products />
                  <Products />
                  
                {/* Product */}                
              </div>
              <div className="row load_more_row">
                <div className="col">
                  <div className="button load_more ml-auto mr-auto"><a href="#">load more</a></div>
                </div>
              </div>
            </div>
          </div>
        <Footer />
      </div>
    );
  }
}

export default Index;
