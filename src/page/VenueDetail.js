import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from "axios";

function VenueDetail() {
  const location = useLocation();
  const [decoration, setDecoration] = useState([]);
  const [selectedDecoration, setSelectedDecoration] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const fetchDecorationData = async () => {
      try {
        if (!location.state || !location.state.destination) {
          throw new Error("Invalid destination");
        }

        setTotalPrice(location.state.destination.pricePerDay);

        const response = await axios.post(
          "http://localhost:8000/api/user/view_decorations",
          { venueId: location.state.destination._id }
        );

        setDecoration(response.data.decorations.Decorations);
        console.log("response: ", response);
      } catch (error) {
        console.error("An error occurred:", error.message);
        setDecoration([]);
      }
    };

    fetchDecorationData();
  }, [location.state]);

  const handleDecorationClick = (decoration) => {
    if (selectedDecoration && selectedDecoration._id === decoration._id) {
      setSelectedDecoration(null);
      setTotalPrice(location.state.destination.pricePerDay);
    } else {
      setSelectedDecoration(decoration);
      setTotalPrice(
        (prevTotalPrice) =>
          parseInt(prevTotalPrice) + parseInt(decoration.price)
      );
    }
  };

  if (!location.state || !location.state.destination) {
    return (
      <>
        <section className="w3l-banner-7 inner-banner-main">
          <div className="about-inner">
            <Header />
            <div className="wrapper-full">
              <ul className="breadcrumbs-custom-path">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li className="active">Venue</li>
              </ul>
            </div>
          </div>
        </section>
        <section className="w3l-gallery-25-top">
          <div className="gallery-25 inn-gallery-rooms">
            <div className="wrapper">
              <h3 className="hny-title text-center">No venue Found</h3>
            </div>
          </div>
        </section>
      </>
    );
  }

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
              <li className="active">Venue</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="w3l-gallery-25-top">
        <div className="gallery-25 inn-gallery-rooms">
          <div className="wrapper">
            <h3 className="hny-title text-center">Venue Details</h3>
            <div className="gallery-25-content">
              <div className="d-grid grid-columns grid-columns2">
                <div className="column gd-rm1">
                  <div className="box13">
                    <a href="/#">
                      <img
                        className="side-img"
                        src={`http://localhost:8000/images/${location.state.destination.images[0]}`}
                        alt=""
                      />
                    </a>
                  </div>
                </div>
                <div className="column two gd-rm2">
                  <div className="box13">
                    <h3>
                      <a href="/#">{location.state.destination.name}</a>
                    </h3>
                    <ul className="book-room-info">
                      <li className="room-meta-adults">
                        <span className="fa fa-user" />
                        <p className="meta-text">
                          <span>{location.state.destination.capacity}</span>
                        </p>
                        <p className="meta-label"> People</p>
                      </li>
                    </ul>
                    <p>{location.state.destination.about}</p>
                    <h4>
                      Total Price: {totalPrice}
                      <span>Per Day</span>
                    </h4>
                    {/* {selectedDecoration && (
                                            <p>Selected Decoration ID: {selectedDecoration.decorId}</p>
                                        )} */}
                    <Link
                      to="../booking"
                      state={{
                        destination: location.state.destination,
                        decoration: selectedDecoration,
                        totalPrice,
                      }}
                      className="read-more btn"
                    >
                      Book Now
                      <span
                        className="fa fa-angle-double-right"
                        aria-hidden="true"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w3l-portfolio-3">
        <div className="portfolio-inn-3">
          <div className="wrapper">
            <h3 className="hny-title text-center">Our Decoration</h3>
            <div className="gal-grids-info">
              {decoration.length === 0 ? (
                <h3>No Decoration available</h3>
              ) : (
                decoration.map((decoration, index) => (
                  <>
                    <div
                      className={`content ${
                        selectedDecoration &&
                        selectedDecoration._id === decoration._id
                          ? "selected"
                          : ""
                      }`}
                      key={index}
                      onClick={() => handleDecorationClick(decoration)}
                    >
                      <div className="content-overlay" />
                      <img
                        src={`http://localhost:8000/images/${decoration.image}`}
                        className="image-two img-responsive"
                        alt=""
                      />
                      <div className="content-details fadeIn-bottom">
                        <h4 className="content-title">
                          Decoration {index + 1}
                        </h4>
                        <p className="content-text">
                          Price: {decoration.price}
                        </p>
                      </div>
                    </div>
                  </>
                ))
              )}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default VenueDetail;
