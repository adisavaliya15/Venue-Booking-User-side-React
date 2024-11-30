import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <section className="w3l-banner-7">
        <div className="banner">
          <div className="layer-vjm">
            <Header />
            <div className="wrapper">
              <div className="csslider infinity" id="slider1">
                <input
                  type="radio"
                  name="slides"
                  defaultChecked="checked"
                  id="slides_1"
                />
                <input type="radio" name="slides" id="slides_2" />
                <input type="radio" name="slides" id="slides_3" />
                <input type="radio" name="slides" id="slides_4" />
                <ul className="banner_slide_bg">
                  <li>
                    <div className="banner-info">
                      <h3>Magnific Resort</h3>
                      <div className="banner-info-top">
                        <div className="banner-info_left">
                          <h5>Excellent</h5>
                          <h4>
                            Satisfying people’s hunger for life’s pleasures
                          </h4>
                          <Link
                            to="../venues?city=Ahmedabad"
                            className="read-more btn"
                          >
                            Reserve Now{" "}
                            <span
                              className="fa fa-angle-double-right"
                              aria-hidden="true"
                            />
                          </Link>
                        </div>
                        <div className="banner-info_right">
                          <div className="banner-info_middle">
                            <a href="rooms.html">
                              <img
                                src="assets/images/3.jpg"
                                className="img-responsive"
                                alt=""
                              />
                            </a>
                            <h6> A dreamy hotel on a magnificent island.</h6>
                          </div>
                          <div className="banner-info_middle">
                            <a href="rooms.html">
                              <img
                                src="assets/images/2.jpg"
                                className="img-responsive"
                                alt=""
                              />
                            </a>
                            <h6>Luxury Living suites with exclusive offers</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="banner-info">
                      <h3>Luxury Rooms</h3>
                      <div className="banner-info-top">
                        <div className="banner-info_left">
                          <h5>Comfortable</h5>
                          <h4>
                            Satisfying people’s hunger for life’s pleasures
                          </h4>
                          <Link
                            to="../venues?city=Ahmedabad"
                            className="read-more btn"
                          >
                            Reserve Now{" "}
                            <span
                              className="fa fa-angle-double-right"
                              aria-hidden="true"
                            />
                          </Link>
                        </div>
                        <div className="banner-info_right">
                          <div className="banner-info_middle">
                            <a href="rooms.html">
                              <img
                                src="assets/images/1.jpg"
                                className="img-responsive"
                                alt=""
                              />
                            </a>
                            <h6> A dreamy hotel on a magnificent island.</h6>
                          </div>
                          <div className="banner-info_middle">
                            <a href="rooms.html">
                              <img
                                src="assets/images/4.jpg"
                                className="img-responsive"
                                alt=""
                              />
                            </a>
                            <h6>Luxury Living suites with exclusive offers</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="banner-info">
                      <h3>Tasty Food</h3>
                      <div className="banner-info-top">
                        <div className="banner-info_left">
                          <h5>Relaxing</h5>
                          <h4>
                            Satisfying people’s hunger for life’s pleasures
                          </h4>
                          <Link
                            to="../venues?city=Ahmedabad"
                            className="read-more btn"
                          >
                            Reserve Now{" "}
                            <span
                              className="fa fa-angle-double-right"
                              aria-hidden="true"
                            />
                          </Link>
                        </div>
                        <div className="banner-info_right">
                          <div className="banner-info_middle">
                            <a href="rooms.html"> </a>
                            <a href="/">
                              <img
                                src="assets/images/1.jpg"
                                className="img-responsive"
                                alt=""
                              />
                            </a>
                            <h6> A dreamy hotel on a magnificent island.</h6>
                          </div>
                          <div className="banner-info_middle">
                            <a href="rooms.html">
                              <img
                                src="assets/images/2.jpg"
                                className="img-responsive"
                                alt=""
                              />
                            </a>
                            <h6>Luxury Living suites with exclusive offers</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="banner-info">
                      <h3>Highlights</h3>
                      <div className="banner-info-top">
                        <div className="banner-info_left">
                          <h5>Amazing</h5>
                          <h4>
                            Satisfying people’s hunger for life’s pleasures
                          </h4>
                          <Link
                            to="../venues?city=Ahmedabad"
                            className="read-more btn"
                          >
                            Reserve Now{" "}
                            <span
                              className="fa fa-angle-double-right"
                              aria-hidden="true"
                            />
                          </Link>
                        </div>
                        <div className="banner-info_right">
                          <div className="banner-info_middle">
                            <a href="rooms.html">
                              <img
                                src="assets/images/7.jpg"
                                className="img-responsive"
                                alt=""
                              />
                            </a>
                            <h6> A dreamy hotel on a magnificent island.</h6>
                          </div>
                          <div className="banner-info_middle">
                            <a href="rooms.html">
                              <img
                                src="assets/images/6.jpg"
                                className="img-responsive"
                                alt=""
                              />
                            </a>
                            <h6>Luxury Living suites with exclusive offers</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
                <div className="arrows">
                  <label htmlFor="slides_1" />
                  <label htmlFor="slides_2" />
                  <label htmlFor="slides_3" />
                  <label htmlFor="slides_4" />
                </div>
                <div className="navigation">
                  <div>
                    <label htmlFor="slides_1" />
                    <label htmlFor="slides_2" />
                    <label htmlFor="slides_3" />
                    <label htmlFor="slides_4" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w3l-content-6">
        {/* /content-6-section */}
        <div className="content-6-mian">
          <div className="wrapper">
            <h3 className="hny-title">
              Special
              <br />
              Viewpoint
            </h3>
            <div className="content-info-in">
              <div className="content-gd">
                <p>
                  When it comes to hosting an event, finding the perfect venue
                  sets the stage for success. At Venue Vista, we understand the
                  importance of creating memorable experiences, and that starts
                  with the right space. Our diverse portfolio of venues offers
                  something for every occasion, whether it's a corporate
                  conference, wedding celebration, or community gathering.
                </p>
              </div>
              <div className="content-gd">
                <p>
                  Discover unparalleled elegance and sophistication in our
                  collection of upscale venues, perfect for black-tie affairs
                  and formal events. From lavish ballrooms adorned with crystal
                  chandeliers to sleek, modern spaces with panoramic city views,
                  we have the ideal setting to elevate any occasion. Our team of
                  experienced event planners is dedicated to bringing your
                  vision to life, ensuring every detail is meticulously executed
                  to exceed your expectations.
                </p>
              </div>
            </div>
            <div className="discover">
              <a href="/" className="read-more black btn">
                Discover More{" "}
                <span className="fa fa-angle-double-right" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* //content-6-section */}
      {/* Covers-14 */}
      <section className="w3l-covers-14">
        <div id="covers14-block">
          <div className="wrapper">
            <div className="covers14-text">
              <h3 className="hny-title two">
                The Spa Introduces the New Fusion Massage
              </h3>
              <a href="/" className="read-more black btn">
                Reserve Now{" "}
                <span className="fa fa-angle-double-right" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Covers-14 */}
      {/* <section className="w3l-gallery-25-top">
                
                <div className="gallery-25" id="room-gallery">
                    <div className="wrapper">
                        <h3 className="hny-title text-center">Rooms &amp; Suits </h3>
                        <div className="gallery-25-content">
                            <div className="d-grid grid-columns">
                                <div className="column gd-rm1">
                                    <div className="box13">
                                        <a href="/"><img className="side-img" src="assets/images/1.jpg" alt="" /></a>
                                    </div>
                                </div>
                                <div className="column two gd-rm2">
                                    <div className="box13">
                                        <h3><a href="/">Presidential Suite</a></h3>
                                        <ul className="book-room-info">
                                            <li className="room-meta-adults"><span className="fa fa-user" />
                                                <p className="meta-text">7</p>
                                                <p className="meta-label">People</p>
                                            </li>
                                            <li className="room-meta-bed"><span className="fa fa fa-hotel" />
                                                <p className="meta-text">5</p>
                                                <p className="meta-label">Bed</p>
                                            </li>
                                            <li className="room-meta-size"><span className="fa fa-arrows" />
                                                <p className="meta-text">17</p>
                                                <p className="meta-label">Room Size</p>
                                            </li>
                                        </ul>
                                        <p>Lorem ipsum dolor sit amet,Ea consequuntur illum facere aperiam sequi
                                            consectetur.</p>
                                        <h4>200$ <span>Per Night</span></h4>
                                        <a href="#rooms" className="read-more black btn">Room Details <span className="fa fa-angle-double-right" aria-hidden="true" /></a>
                                    </div>
                                </div>
                                <div className="column two col1 gd-rm3">
                                    <div className="box13">
                                        <h3><a href="/">Deluxe Suite</a></h3>
                                        <ul className="book-room-info">
                                            <li className="room-meta-adults"><span className="fa fa-user" />
                                                <p className="meta-text">4</p>
                                                <p className="meta-label">People</p>
                                            </li>
                                            <li className="room-meta-bed"><span className="fa fa fa-hotel" />
                                                <p className="meta-text">6</p>
                                                <p className="meta-label">Bed</p>
                                            </li>
                                            <li className="room-meta-size"><span className="fa fa-arrows" />
                                                <p className="meta-text">27</p>
                                                <p className="meta-label">Room Size</p>
                                            </li>
                                        </ul>
                                        <p>Lorem ipsum dolor sit amet,Ea consequuntur illum facere aperiam sequi
                                            consectetur.</p>
                                        <h4>500$ <span>Per Night</span></h4>
                                        <a href="#rooms" className="read-more black btn">Room Details <span className="fa fa-angle-double-right" aria-hidden="true" /></a>
                                    </div>
                                </div>
                                <div className="column col2 gd-rm4">
                                    <div className="box13">
                                        <a href="/"><img className="side-img" src="assets/images/2.jpg" alt="" /></a>
                                    </div>
                                </div>
                                <div className="column gd-rm5">
                                    <div className="box13">
                                        <a href="/"><img className="side-img" src="assets/images/3.jpg" alt="" /></a>
                                    </div>
                                </div>
                                <div className="column two gd-rm6">
                                    <div className="box13">
                                        <h3><a href="/">Executive Suite </a></h3>
                                        <ul className="book-room-info">
                                            <li className="room-meta-adults"><span className="fa fa-user" />
                                                <p className="meta-text">7</p>
                                                <p className="meta-label">People</p>
                                            </li>
                                            <li className="room-meta-bed"><span className="fa fa fa-hotel" />
                                                <p className="meta-text">5</p>
                                                <p className="meta-label">Bed</p>
                                            </li>
                                            <li className="room-meta-size"><span className="fa fa-arrows" />
                                                <p className="meta-text">17</p>
                                                <p className="meta-label">Room Size</p>
                                            </li>
                                        </ul>
                                        <p>Lorem ipsum dolor sit amet,Ea consequuntur illum facere aperiam sequi
                                            consectetur.</p>
                                        <h4>600$ <span>Per Night</span></h4>
                                        <a href="#rooms" className="read-more black btn">Room Details <span className="fa fa-angle-double-right" aria-hidden="true" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="rooms" className="room-gallery-pop-overlay">
                        <div className="room-gallery-popup">
                            <img className="side-img" src="assets/images/2.jpg" alt="" />
                            <h5>Exclusive Optional Packages</h5>
                            <p>BEST RATES GUARANTEED</p>
                            <div className="d-grid room-sub-con">
                                <div className="room-gd-pop-content">
                                    <h6>Room Services</h6>
                                    <p>$5.0 / Package</p>
                                </div>
                                <div className="room-gd-pop-content">
                                    <h6>Breakfast include</h6>
                                    <p>$8.0 / Package</p>
                                </div>
                                <div className="room-gd-pop-content">
                                    <h6>Airport Pickup</h6>
                                    <p>$8.0 / Package</p>
                                </div>
                                <div className="room-gd-pop-content">
                                    <h6>Free Wifi</h6>
                                    <p>$8.0 / Package</p>
                                </div>
                            </div>
                            <a className="close" href="#room-gallery">×</a>
                        </div>
                    </div>
                </div>
            </section> */}
      {/* //grids */}
      {/* cover1 */}
      <section className="w3l-covers-1">
        <div className="cover">
          <div className="wrapper">
            <div className="cover-content">
              <h3>GET 15% OFF TODAY</h3>
              <p>
                HOLIDAY LIGHTS 2024 PACKAGE – Available
                <br />
                {new Date().toLocaleDateString("en-IN")}
              </p>
              <Link
                to="../venues?city=Ahmedabad"
                className="read-more black btn"
              >
                Book Now{" "}
                <span className="fa fa-angle-double-right" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* //cover1 */}
      {/* customers 1 */}
      <section className="w3l-customers-1">
        <div className="customers1">
          <div className="wrapper">
            <div className="customers1-content">
              <div className="d-grid">
                <div className="display-col-1">
                  <div className="d-grid-inner">
                    <div className="display-columns">
                      <img
                        src="assets/images/aditya.jpg"
                        className="img-responsive"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="display-col-2">
                  <h5>Aditya Savaliya</h5>
                  <p>Customer-Experience : Amazing</p>
                  <h3>
                    <span className="fa fa-quote-left" /> At Venue Vista, we
                    believe that every event deserves a venue that inspires,
                    delights, and leaves a lasting impression. With our diverse
                    portfolio of venues and personalized service, we're
                    committed to helping you create unforgettable moments that
                    will be cherished for years to come. Let us help you find
                    the perfect venue for your next event and turn your vision
                    into reality.
                    <span className="fa fa-quote-right" />{" "}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* //customers 1 */}
      {/* footer-61 block */}
      <Footer />
    </>
  );
}

export default Home;
