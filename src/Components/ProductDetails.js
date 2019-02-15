import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';

class ProductDetails extends Component {
  render() {
    return (      
      <div>
          <Header />

             {/* Home */}

             <div class="super_container_inner">
		            <div class="super_overlay"></div>
                  <div className="home">
                    <div className="home_container d-flex flex-column align-items-center justify-content-end">
                      <div className="home_content text-center">
                        <div className="home_title">Product Page</div>
                        <div className="breadcrumbs d-flex flex-column align-items-center justify-content-center">
                          <ul className="d-flex flex-row align-items-start justify-content-start text-center">
                            <li><a href="#">Home</a></li>
                            <li><a href="category.html">Woman</a></li>
                            <li>New Products</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Product */}
                  <div className="product">
                    <div className="container">
                      <div className="row">
                        {/* Product Image */}
                        <div className="col-lg-6">
                          <div className="product_image_slider_container">
                            <div id="slider" className="flexslider">
                              <ul className="slides">
                                <li>
                                  <img src="images/product_image_1.jpg" />
                                </li>
                                <li>
                                  <img src="images/product_image_1.jpg" />
                                </li>
                                <li>
                                  <img src="images/product_image_1.jpg" />
                                </li>
                                <li>
                                  <img src="images/product_image_1.jpg" />
                                </li>
                                <li>
                                  <img src="images/product_image_1.jpg" />
                                </li>
                                <li>
                                  <img src="images/product_image_1.jpg" />
                                </li>
                                <li>
                                  <img src="images/product_image_1.jpg" />
                                </li>
                                <li>
                                  <img src="images/product_image_1.jpg" />
                                </li>
                              </ul>
                            </div>
                            <div className="carousel_container">
                              <div id="carousel" className="flexslider">
                                <ul className="slides">
                                  <li>
                                    <div><img src="images/product_1.jpg" /></div>
                                  </li>
                                  <li>
                                    <div><img src="images/product_2.jpg" /></div>
                                  </li>
                                  <li>
                                    <div><img src="images/product_3.jpg" /></div>
                                  </li>
                                  <li>
                                    <div><img src="images/product_4.jpg" /></div>
                                  </li>
                                  <li>
                                    <div><img src="images/product_5.jpg" /></div>
                                  </li>
                                  <li>
                                    <div><img src="images/product_6.jpg" /></div>
                                  </li>
                                  <li>
                                    <div><img src="images/product_7.jpg" /></div>
                                  </li>
                                  <li>
                                    <div><img src="images/product_8.jpg" /></div>
                                  </li>
                                </ul>
                              </div>
                              <div className="fs_prev fs_nav disabled"><i className="fa fa-chevron-up" aria-hidden="true" /></div>
                              <div className="fs_next fs_nav"><i className="fa fa-chevron-down" aria-hidden="true" /></div>
                            </div>
                          </div>
                        </div>
                        {/* Product Info */}
                        <div className="col-lg-6 product_col">
                          <div className="product_info">
                            <div className="product_name">Iphone 6s</div>
                            <div className="product_category">In <a href="category.html">Category</a></div>
                            <div className="product_rating_container d-flex flex-row align-items-center justify-content-start">
                              <div className="rating_r rating_r_4 product_rating"><i /><i /><i /><i /><i /></div>
                              <div className="product_reviews">4.7 out of (3514)</div>
                              <div className="product_reviews_link"><a href="#">Reviews</a></div>
                            </div>
                            <div className="product_price">$3<span>.99</span></div>
                            <div className="product_size">
                              <div className="product_size_title">Select Size</div>
                              <ul className="d-flex flex-row align-items-start justify-content-start">
                                <li>
                                  <input type="radio" id="radio_1" disabled name="product_radio" className="regular_radio radio_1" />
                                  <label htmlFor="radio_1">XS</label>
                                </li>
                                <li>
                                  <input type="radio" id="radio_2" name="product_radio" className="regular_radio radio_2" defaultChecked />
                                  <label htmlFor="radio_2">S</label>
                                </li>
                                <li>
                                  <input type="radio" id="radio_3" name="product_radio" className="regular_radio radio_3" />
                                  <label htmlFor="radio_3">M</label>
                                </li>
                                <li>
                                  <input type="radio" id="radio_4" name="product_radio" className="regular_radio radio_4" />
                                  <label htmlFor="radio_4">L</label>
                                </li>
                                <li>
                                  <input type="radio" id="radio_5" name="product_radio" className="regular_radio radio_5" />
                                  <label htmlFor="radio_5">XL</label>
                                </li>
                                <li>
                                  <input type="radio" id="radio_6" disabled name="product_radio" className="regular_radio radio_6" />
                                  <label htmlFor="radio_6">XXL</label>
                                </li>
                              </ul>
                            </div>
                            <div className="product_text">
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec consequat lorem. Maecenas elementum at diam consequat bibendum. Mauris iaculis fringilla ex, sit amet semper libero facilisis sit amet. Nunc ut aliquet metus. Praesent pulvinar justo sed velit tempus bibendum. Quisque dictum lorem id mi viverra, in auctor justo laoreet. Nam at massa malesuada, ullamcorper metus vel, consequat risus. Phasellus ultricies velit vel accumsan porta.</p>
                            </div>
                            <div className="product_buttons">
                              <div className="text-right d-flex flex-row align-items-start justify-content-start">
                                <div className="product_button product_fav text-center d-flex flex-column align-items-center justify-content-center">
                                  <div><div><img src="images/heart_2.svg" className="svg" alt /><div>+</div></div></div>
                                </div>
                                <div className="product_button product_cart text-center d-flex flex-column align-items-center justify-content-center">
                                  <div><div><img src="images/cart.svg" className="svg" alt /><div>+</div></div></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

          <Footer />
      </div>
    );
  }
}

export default ProductDetails;
