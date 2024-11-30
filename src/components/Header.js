import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import checkSession from "../auth/authService";
import axios from "axios";

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkLoginStatus = async () => {
      const loggedIn = await checkSession();
      setIsLoggedIn(loggedIn);
    };

    checkLoginStatus();
  }, []);

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      localStorage.removeItem("token");

      window.location.reload(false);
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <>
      <header>
        <div className="top-nav-hny">
          {/* nav */}
          <nav className="hny-nav">
            <div className="logo" id="logo">
              <h1 className="logo">
                <Link to="/">VenueVista</Link>
              </h1>
            </div>
            <label htmlFor="drop" className="toggle">
              MENU
            </label>
            <input type="checkbox" id="drop" />
            <ul className="v-vjm-topnav mx-lg-auto scrollbar" id="style-2">
              <li className="active">
                <Link to="/">HOME</Link>
              </li>
              <li>
                {/* First Tier Drop Down */}
                <label htmlFor="drop-3" className="toggle toogle-2">
                  Destinations{" "}
                  <span className="fa fa-angle-down" aria-hidden="true" />
                </label>
                <a href="#link">
                  Destinations{" "}
                  <span className="fa fa-angle-down" aria-hidden="true" />
                </a>
                <input type="checkbox" id="drop-3" />
                <ul className="sub-nav-links">
                  <li>
                    <Link to="../venues?city=Ahmedabad">Ahmedabad</Link>
                  </li>
                  <li>
                    <Link to="../venues?city=Surat">Surat</Link>
                  </li>
                  <li>
                    <Link to="../venues?city=Vadodara">Vadodara</Link>
                  </li>
                  <li>
                    <Link to="../venues?city=Gandhinagar">Gandhinagar</Link>
                  </li>
                  <li>
                    <Link to="../venues?city=Rajkot">Rajkot</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="../contact">Contact Us</Link>
              </li>
              {isLoggedIn ? (
                <li>
                  <Link onClick={(e) => handleLogout(e)}>Log Out</Link>
                </li>
              ) : null}
            </ul>
            <div className="last-link">
              <Link to="../profile" className="book-now btn">
                PROFILE
              </Link>
            </div>
          </nav>
          {/* //nav */}
        </div>
      </header>
    </>
  );
}

export default Header;
