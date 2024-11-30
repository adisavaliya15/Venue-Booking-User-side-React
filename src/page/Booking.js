import axios from "axios";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import CardReactFormContainer from "card-react";

function Booking() {
  const location = useLocation();
  console.log("aaaa", location.state);
  const navigate = useNavigate();

  const [data, setData] = useState({
    venueId: location.state.destination._id,
    ownerId: location.state.destination.ownerId,
    fromDate: "",
    toDate: "",
    decorationId: location.state.decoration?.decorId,
    paymentMethod: "Credit Card",
    paymentAmount: location.state.totalPrice,
  });
  console.log("ba", data);

  const handleChange = (e) => {
    const { name, value } = e.target;

    //storing textdata from input fields
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  console.log("aa", data);

  const handleSubmit = async (e) => {
    e.preventDefault();

    //calling Login API
    try {
      const response = await axios.post(
        "http://localhost:8000/api/user/book_venue",
        data,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      //initializing response data from API response
        const { success, message } = response.data;
        alert(message);
      console.log(success);

      //if success then navigate to home page
      if (success) {
        navigate("/");
      } else {
        console.log(message);
        alert(message);
      }
    } catch (error) {
      console.log("Login Err: ", error);
      if (error.response && error.response.status === 400) {
        alert("Already Booked for this date");
      } else {
        alert(error.message);
      }
    }
  };

  return (
    <>
      <section className="w3l-booking-top">
        {/* /form-16-section */}
        <div className="booking-form-61">
          <div className="wrapper">
            <div className="booking-form-content">
              <h6>Book Now</h6>
              <CardReactFormContainer container="card-wrapper">
                <form onSubmit={handleSubmit} className="book-depature-6">
                  <div className="d-grid grid-col-2">
                    <div className="hny-frm_grid">
                      <h5>Arrival</h5>
                      <input
                        className="date"
                        name="fromDate"
                        type="date"
                        placeholder="Date"
                        min={new Date().toISOString().split("T")[0]}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="hny-frm_grid">
                      <h5>Departure</h5>
                      <input
                        className="date"
                        name="toDate"
                        type="date"
                        placeholder="Date"
                        onChange={handleChange}
                        min={
                          data.fromDate ||
                          new Date().toISOString().split("T")[0]
                        }
                        required
                      />
                    </div>
                    <br />
                  </div>

                  <input
                    placeholder="Full name"
                    type="text"
                    name="name"
                    required
                  />
                  <br />
                  <input
                    placeholder="Card number"
                    type="text"
                    name="number"
                    required
                  />
                  <br />
                  <input
                    placeholder="MM/YYYY"
                    type="text"
                    name="expiry"
                    required
                  />
                  <br />
                  <input
                    placeholder="CVC"
                    type="text"
                    name="cvc"
                    maxLength={3}
                    required
                  />

                  <div id="card-wrapper"></div>

                  <h4>Total: {location.state.totalPrice}</h4>
                  <button type="submit" className="btn book">
                    Book Now
                  </button>
                </form>
                <br />
              </CardReactFormContainer>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Booking;
