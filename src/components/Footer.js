import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <section className="w3l-footer-61-main">
        <div className="footer-61">
          <div className="wrapper">
            <div className="footer-destinations text-center">
              <h5>&nbsp;&nbsp;&nbsp; Our Destinations </h5>
              <ul>
                <li>
                  <a href="destinations.html">Ahmedabad</a>
                </li>
                <li>
                  <a href="destinations.html">Surat</a>
                </li>
                <li>
                  <a href="destinations.html">Vadodara</a>
                </li>
                <li>
                  <a href="destinations.html">Gandhinagar</a>
                </li>
                <li>
                  <a href="destinations.html">Rajkot</a>
                </li>
              </ul>
            </div>
            <div className="bottom-logo">
              <h2 className="logo">
                <Link to="/" title="Logo" className="footer-logo">
                  VenueVista
                </Link>
                {/* if logo is image enable this   
                                          <a class="brand-logo" href="index.html">
                                              <img src="image-path" alt=''="Your logo" title="Your logo" style="height:35px;" />
                                          </a> */}
              </h2>
            </div>
            <div className="d-grid grid-col-3 footer-top-61">
              {/* <div class="footer-list-61">
              <h6 class="footer-title-61">Services</h6>
              <ul>
                  <li><a href="about.html">About</a></li>
                  
              </ul>
          </div> */}
              <div className="footer-list-61">
                <h6 className="footer-title-61">
                  Reserve Your Spot By Calling
                </h6>
                <ul className="phone-numbers">
                  <li>+ 098765421234</li>
                  <li>+ 098765421234</li>
                </ul>
                {/* <h6 className="footer-title-61">Connect with us</h6>
                <div className="main-social-footer-61">
                  <a href="/#" title="Facebook" className="footer-fb">
                    <span className="fa fa-facebook" aria-hidden="true" />
                  </a>
                  <a href="/#" title="Twitter" className="footer-tw">
                    <span className="fa fa-twitter" aria-hidden="true" />
                  </a>
                  <a href="/#" title="Google Plus" className="footer-gg">
                    <span className="fa fa-google-plus" aria-hidden="true" />
                  </a>
                  <a href="/#" title="Linkedin" className="footer-lin">
                    <span className="fa fa-linkedin" aria-hidden="true" />
                  </a>
                  <a href="/#" title="Pinterest" className="footer-pin">
                    <span className="fa fa-pinterest" aria-hidden="true" />
                  </a>
                </div> */}
              </div>
              <div className="footer-list-61">
                <h6 className="footer-title-61">Email US</h6>
                <ul className="phone-numbers">
                  <li>venue2024@gmail.com</li>
                  <li>venue@info.com</li>
                </ul>
              </div>
              <div className="footer-list-61">
                <h6 className="footer-title-61">Address</h6>
                <ul className="phone-numbers">
                  <li>Narangpura, Ahmedabad - 380015</li>
                </ul>
              </div>
            </div>
            <div className="copy-right-hny text-center">
              <p className="copy-footer-61">
                © 2019 VenueVista. All rights reserved | Design by
                <a href="https://w3layouts.com/">VenueVista</a>
              </p>
            </div>
          </div>
          {/* move top */}
          <button id="movetop" title="Go to top">
            <span className="fa fa-long-arrow-up"> </span>
          </button>
          {/* /move top */}
        </div>
      </section>
    </>
  );
}

export default Footer;
