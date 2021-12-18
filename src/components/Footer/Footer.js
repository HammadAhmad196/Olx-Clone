import React from "react";
import appstore from "../../images/appstore.png";
import playstore from "../../images/playstore.png";

function Footer() {
  return (
    <div>
      <div className="footer fluid-container no-gutters">
        <div className="container">
          <div className="row no-gutters">
            <div className="footer_phoneapp col-sm-4">
              <img className="img-fluid" src="https://www.olx.com.pk/assets/olxMobileApp.f5579f77e849b600ad60857e46165516.webp" alt="olxMobileApp" />
            </div>
            <div className="footer_phoneapp_text col-sm-5">
              <h1>TRY THE OLX APP</h1>
              <p>
                Buy, sell and find just about anything using the app <br /> on
                your mobile.
              </p>
            </div>
            <div className="footer_apps col-sm-3">
              <div>
                <h5>GET YOUR APP TODAY</h5>
                <img src={appstore} alt="app_store" />
                <img src={playstore} alt="app_store" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-main">
        <div className="container">
          <div className="row">
            <div className="col sub-category">
              <h3>Popular Categories</h3>
              <ul>
                <li>
                  <a>Cars </a>
                </li>
                <li>
                  <a>Flats for rent </a>
                </li>
                <li>
                  <a>Jobs </a>
                </li>
                <li>
                  <a>Mobile Phones </a>
                </li>
              </ul>
            </div>
            <div className="col sub-category">
              <h3>Trending Searches</h3>
              <ul>
                <li>
                  <a>Bikes </a>
                </li>
                <li>
                  <a>Watches </a>
                </li>
                <li>
                  <a>Books </a>
                </li>
                <li>
                  <a>Dogs </a>
                </li>
              </ul>
            </div>
            <div className="col sub-category">
              <h3>About Us</h3>
              <ul>
                <li>
                  <a>About OLX Group</a>
                </li>
                <li>
                  <a>OLX Blog</a>
                </li>
                <li>
                  <a>Contact Us </a>
                </li>
                <li>
                  <a>OLX for Businesses</a>
                </li>
              </ul>
            </div>
            <div>
              <h3>OLX</h3>
              <ul>
                <li>
                  <a>Help </a>
                </li>
                <li>
                  <a>Sitemap </a>
                </li>
                <li>
                  <a>Legal & Privacy Info </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="fluid-container footer-end">
        <section className="footer__othercountries">
          <small>Other Countries </small>
          <small>India - South Africa - Indonesia</small>
        </section>
        <section className="footer__copyright">
          <span>Free Classifieds in Pakistan</span>
          <span>.</span>
          <span>&copy; 2022 OLX</span>
        </section>
      </div>
    </div>
  );
}

export default Footer;