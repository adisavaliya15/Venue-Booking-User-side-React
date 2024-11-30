import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";

function Destinations() {
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const city = searchParams.get("city");
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    try {
      axios
        .post(
          "http://localhost:8000/api/user/view_venue_by_city",
          { city },
          {},
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        )
        .then((response) => {
          setDestinations(response.data.venueData || []);
        })
        .catch((error) => {
          console.log(error);
          setDestinations([]);
        });
    } catch (error) {
      console.log(error);
      setDestinations([]);
    }
  }, [city]);

  return (
    <>
      <section className="w3l-banner-7 inner-banner-main">
        <div className="about-inner">
          <Header />
          {/* //header */}
          <div className="wrapper-full">
            <ul className="breadcrumbs-custom-path">
              <li>
                <a href="index.html">
                  Home <span className="fa fa-angle-right" aria-hidden="true" />
                </a>
              </li>
              <li className="active">Destinations</li>
            </ul>
          </div>
        </div>
      </section>
      {/* //covers */}
      <section className="w3l-gallery-25-top">
        {/* gallery-25 */}
        <div className="gallery-25 destionation-page">
          <div className="wrapper">
            <h3 className="hny-title text-center">Destinations </h3>
            <div className="gallery-25-content">
              <div className="d-grid grid-column-2">
                {destinations.length === 0 ? (
                  <h3>No Destinations Found For This City</h3>
                ) : (
                  destinations.map((destination, index) => (
                    <div className="column" key={index}>
                      <div className="destination-gd">
                        <div className="box13">
                          <img
                            className="side-img"
                            src={`http://localhost:8000/images/${destination.images[0]}`}
                            alt=""
                          />
                        </div>
                        <div className="box13">
                          <h4>{destination.name}</h4>
                          <p>{destination.about}</p>
                          <h4>
                            {destination.pricePerDay} <span>Per day</span>
                          </h4>
                          <Link
                            to={`../venuedetails/${destination._id}`}
                            state={{ destination }}
                            className="read-more black btn"
                          >
                            Venue Details
                            <span
                              className="fa fa-angle-double-right"
                              aria-hidden="true"
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* //grids */}
      {/* footer-61 block */}
      <Footer />
    </>
  );
}

export default Destinations;
