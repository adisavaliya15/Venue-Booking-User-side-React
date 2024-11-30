import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Login() {
  //hook for Storing email & password
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    role: "2",
  });

  //getting textdata from input fields
  const handleLoginChange = (e) => {
    const { name, value } = e.target;

    //storing textdata from input fields
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  //callback function to FIRE login API
  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    //calling Login API
    try {
      const response = await axios.post(
        "http://localhost:8000/api/login",
        loginData,
        {
          withCredentials: true,
        }
        );
        localStorage.setItem("token", response.data.token);
      alert("Login Succesfully!");
      window.location.reload(false);
    } catch (error) {
      console.log("Login Err: ", error);
      alert(error.response.data.message);
    }

    //set login data in Login hook
    setLoginData({
      email: "",
      password: "",
      role: "2",
    });
  };

  return (
    <>
      <section className="w3l-form-16">
        {/* /form-16-section */}
        <div className="form-16-mian">
          <div className="wrapper">
            <div className="forms-16-top">
              <div className="forms-16-info">
                <h5>Login Now</h5>
                <h3>Select the Venue you like from our top visiting place.</h3>
                <p>
                  Lorem ipsum dolor sit amet,Ea consequuntur illum facere
                  aperiam sequi optio consectetur adipisicing elit Ea
                  consequuntur illum.
                </p>
                <a
                  href="http://localhost:3002/login"
                  className="read-more black btn"
                >
                  Are you a owner?{" "}
                  <span
                    className="fa fa-angle-double-right"
                    aria-hidden="true"
                  />
                </a>
              </div>
              <div className="form-right-inf">
                <div className="form-inner-cont">
                  <h6>Login Now</h6>
                  <form onSubmit={handleLoginSubmit} className="signin-form">
                    <div className="form-input">
                      <input
                        type="email"
                        name="email"
                        placeholder="User Email"
                        onChange={handleLoginChange}
                        value={loginData.email}
                        required
                      />
                    </div>
                    <div className="form-input">
                      <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        onChange={handleLoginChange}
                        value={loginData.password}
                        required
                      />
                    </div>
                    <button type="submit" className="btn">
                      Login
                    </button>
                    <p className="already">
                      Are you new? &nbsp;
                      <Link to="/signup">
                        <span>
                          Sign Up
                          <span />
                        </span>
                      </Link>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
