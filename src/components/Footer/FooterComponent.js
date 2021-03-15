import React from 'react';
import logo from "../../images/footer-brand-logo.png";
import GooglePlay from "../../images/google-play.png";
import AppStore from "../../images/app-store.png";
import "./FooterComponent.css";

const FooterComponent = () => {
  return (
    <div className="mt-4" className="footer-container">
      <div className="container pb-5">
        <div className="row">
          <div className="col-lg-3 footer-brand-section mt-5">
            <div className="brand">
              <img src={logo} />
            </div>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
            </p>
          </div>
          <div className="col-lg-3 footer-contact-us-section mt-5">
            <h3>Contact Us</h3>
            <div className="contact-us-icons">
              <div className="contact-icon-contaienr">
                <i className="fas fa-phone-alt mr-2"></i>
                <span>+91-9655549604</span>
              </div>
              <div className="contact-icon-contaienr">
                <i className="fas fa-envelope mr-3"></i>
                <span>hello@findby.in</span>
              </div>
            </div>
            <div className="social-media-icon-container mt-3">
              <i class="fab fa-facebook social-icons mr-3"></i>
              <i class="fab fa-twitter social-icons mr-3"></i>
              <i class="fab fa-instagram social-icons mr-3"></i>
            </div>
          </div>
          <div className="col-lg-3 footer-company-section mt-5">
            <h3>Company</h3>
            <div className="footer-company">
              <ul>
                <li>About Us</li>
                <li>Blog</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 footer-download-container mt-5">
            <h3>Download the app</h3>
            <div className="row footer-download">
              <div className="col-lg-6 mt-2">
                <h6>Google Play</h6>
                <img src={GooglePlay} className="google-play-image" alt="Google Play" />
              </div>
              <div className="col-lg-6 mt-2">
                <h6>App Store</h6>
                <img src={AppStore} className="app-store-image" alt="App Store" />
              </div>
            </div>
          </div>
        </div>
        <p className="text-center mt-4">Copyright @ 2021</p>
      </div>
    </div>
  );
};

export default FooterComponent;
