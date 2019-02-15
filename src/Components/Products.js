import React, { Component } from 'react'

class Products extends Component {
  render() {
    return (
        <div>

            <div className="row products_row">
              {/* Product */}
              <div className="col-xl-4 col-md-6">
                <div className="product">
                  <div className="product_image"><img src="images/iphone6splus.jpg" /></div>
                  <div className="product_content">
                    <div className="product_info d-flex flex-row align-items-start justify-content-start">
                      <div>
                        <div>
                          <div className="product_name"><a href="product.html">Cool Clothing with Brown Stripes</a></div>
                          <div className="product_category">In <a href="category.html">Category</a></div>
                        </div>
                      </div>
                      <div className="ml-auto text-right">
                        <div className="rating_r rating_r_4 home_item_rating"><i /><i /><i /><i /><i /></div>
                        <div className="product_price text-right">$3<span>.99</span></div>
                      </div>
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
              {/* Product */}
              <div className="col-xl-4 col-md-6">
                <div className="product">
                  <div className="product_image"><img src="images/iphone7.jpg" alt /></div>
                  <div className="product_content">
                    <div className="product_info d-flex flex-row align-items-start justify-content-start">
                      <div>
                        <div>
                          <div className="product_name"><a href="product.html">Cool Clothing with Brown Stripes</a></div>
                          <div className="product_category">In <a href="category.html">Category</a></div>
                        </div>
                      </div>
                      <div className="ml-auto text-right">
                        <div className="rating_r rating_r_4 home_item_rating"><i /><i /><i /><i /><i /></div>
                        <div className="product_price text-right">$3<span>.99</span></div>
                      </div>
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
              {/* Product */}
              <div className="col-xl-4 col-md-6">
                <div className="product">
                  <div className="product_image"><img src="images/iphoneXs.jpg" alt /></div>
                  <div className="product_content">
                    <div className="product_info d-flex flex-row align-items-start justify-content-start">
                      <div>
                        <div>
                          <div className="product_name"><a href="product.html">Cool Clothing with Brown Stripes</a></div>
                          <div className="product_category">In <a href="category.html">Category</a></div>
                        </div>
                      </div>
                      <div className="ml-auto text-right">
                        <div className="rating_r rating_r_4 home_item_rating"><i /><i /><i /><i /><i /></div>
                        <div className="product_price text-right">$3<span>.99</span></div>
                      </div>
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
          
       
    );
  }
}

export default Products;
