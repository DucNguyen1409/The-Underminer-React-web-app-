import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div>

            {/* Footer */}
            <footer className="footer">
              <div className="footer_content">
                <div className="container">
                  <div className="row">
                    {/* About */}
                    <div className="col-lg-4 footer_col">
                      <div className="footer_about">
                        <div className="footer_logo">
                          <a href="#">
                            <div className="d-flex flex-row align-items-center justify-content-start">
                              <div className="footer_logo_icon"><img src="images/logo_2.png" alt /></div>
                              <div>Underminer</div>
                            </div>
                          </a>		
                        </div>
                        <div className="footer_about_text">
                          <p>Whether you’re looking for a waterproof phone, the longest battery life or a low-light camera, there’s phone for you.</p>
                        </div>
                      </div>
                    </div>
                    {/* Footer Links */}
                    <div className="col-lg-4 footer_col">
                      <div className="footer_menu">
                        <div className="footer_title">Support</div>
                        <ul className="footer_list">
                          <li>
                            <a href="#"><div>Customer Service<div className="footer_tag_1">online now</div></div></a>
                          </li>
                          <li>
                            <a href="#"><div>Return Policy</div></a>
                          </li>
                          <li>
                            <a href="#"><div>Size Guide<div className="footer_tag_2">recommended</div></div></a>
                          </li>
                          <li>
                            <a href="#"><div>Terms and Conditions</div></a>
                          </li>
                          <li>
                            <a href="#"><div>Contact</div></a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* Footer Contact */}
                    <div className="col-lg-4 footer_col">
                      <div className="footer_contact">
                        <div className="footer_title">Stay in Touch</div>
                        <div className="newsletter">
                          <form action="#" id="newsletter_form" className="newsletter_form">
                            <input type="email" className="newsletter_input" placeholder="Subscribe to our Newsletter" required="required" />
                            <button className="newsletter_button">+</button>
                          </form>
                        </div>
                        <div className="footer_social">
                          <div className="footer_title">Social</div>
                          <ul className="footer_social_list d-flex flex-row align-items-start justify-content-start">
                            <li><a href="#"><i className="fa fa-facebook" aria-hidden="true" /></a></li>
                            <li><a href="#"><i className="fa fa-youtube-play" aria-hidden="true" /></a></li>
                            <li><a href="#"><i className="fa fa-google-plus" aria-hidden="true" /></a></li>
                            <li><a href="#"><i className="fa fa-instagram" aria-hidden="true" /></a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="footer_bar">
                <div className="container">
                  <div className="row">
                    <div className="col">
                      <div className="footer_bar_content d-flex flex-md-row flex-column align-items-center justify-content-start">
                        <div className="copyright order-md-1 order-2">{/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                          Copyright © All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true" /> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                          {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}</div>
                        <nav className="footer_nav ml-md-auto order-md-2 order-1">
                          <ul className="d-flex flex-row align-items-center justify-content-start">
                            <li><a href="#">iPhone</a></li>
                            <li><a href="#">Samsung</a></li>
                            <li><a href="#">Sony</a></li>
                            <li><a href="#">LG</a></li>
                            <li><a href="#">Contact</a></li>
                          </ul>
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </footer>

      </div>
    );
  }
}

export default Footer;
