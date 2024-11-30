import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

function Contacts() {
    return (
        <>
            <section className="w3l-banner-7 inner-banner-main">
                <div className="about-inner">
                    <Header />
                    {/* //header */}
                    <div className="wrapper-full">
                        <ul className="breadcrumbs-custom-path">
                            <li>
                                <Link to="/">
                                    Home <span className="fa fa-angle-right" aria-hidden="true" />
                                </Link>
                            </li>
                            <li className="active">Contact</li>
                        </ul>
                    </div>
                </div>
            </section>
            {/* //covers */}
            <section className="w3l-contact-61">
                {/* /contact-61-section */}
                <div className="contact-61-mian">
                    <div className="contact-full">
                        <div className="contact-info-info-in">
                            <div className="contact-info-gd contact-address-info">
                                <h3 className="hny-title">Contact Us</h3>
                                <address>
                                    <h4>
                                        Ahmedabad,
                                        <br />
                                        Narangpura, 380015
                                    </h4>
                                </address>
                                <div className="gds-cont-text">
                                    <div className="con-ad-61-grid">
                                        <h5>Email</h5>
                                        <p>
                                            <a href="https://p.w3layouts.com/cdn-cgi/l/email-protection#e68f888089a6839e878b968a83c885898b">
                                                <span
                                                    className="__cf_email__"
                                                    data-cfemail="b0d9ded6dff0d5c8d1ddc0dcd59ed3dfdd"
                                                >
                                                    venue@info.com
                                                </span>
                                            </a>
                                        </p>
                                        <p>
                                            <a href="https://p.w3layouts.com/cdn-cgi/l/email-protection#0e676068614e6b766f637e626b206d6163">
                                                <span
                                                    className="__cf_email__"
                                                    data-cfemail="90f3fffde0f1fee9d0f5e8f1fde0fcf5bef3fffd"
                                                >
                                                   venue2024@gmail.com
                                                </span>
                                            </a>
                                        </p>
                                    </div>
                                    <div className="con-ad-61-grid">
                                        <h5>Call any time</h5>
                                        <p>Tel: +1-800-999-800</p>
                                        <p>Tel: +1-800-999-800</p>
                                    </div>
                                    <div className="con-ad-61-grid">
                                        <h5>Book</h5>
                                        <p>Tel: +1-800-999-800</p>
                                        <p>Tel: +1-800-999-800</p>
                                    </div>
                                    {/* <div className="con-ad-61-grid">
                                        <h5>Social Media</h5>
                                        <div className="social-media-contact-61">
                                            <a href="/#" title="Facebook" className="footer-fb">
                                                <span className="fa fa-facebook" aria-hidden="true" />
                                            </a>
                                            <a href="/#" title="Twitter" className="footer-tw">
                                                <span className="fa fa-twitter" aria-hidden="true" />
                                            </a>
                                            <a href="/#" title="Google Plus" className="footer-gg">
                                                <span
                                                    className="fa fa-google-plus"
                                                    aria-hidden="true"
                                                />
                                            </a>
                                            <a href="/#" title="Linkedin" className="footer-lin">
                                                <span className="fa fa-linkedin" aria-hidden="true" />
                                            </a>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* //contact-61-section */}
            {/* footer-61 block */}
            <Footer/>
        </>
    );
}

export default Contacts;
