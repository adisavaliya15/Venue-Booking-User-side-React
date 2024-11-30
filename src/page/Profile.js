import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { CDBCard, CDBDataTable } from "cdbreact";
import axios from "axios";

function Profile() {
  // eslint-disable-next-line
  const [isLoaded, setLoaded] = useState(false);
  const [datas, setDatas] = useState([]);
  const [reloadData, setReloadData] = useState(false); // State variable to trigger useEffect

  useEffect(() => {
    const fetchData = async () => {
      try {
        await axios
          .post(
            "http://localhost:8000/api/user/view_booking_history",
            {},
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            }
          )
          .then((response) => response.data)
          .then((data) => {
            setDatas(data.bookings.reverse());
          });
      } catch (error) {
        console.error("An error occurred:", error);
      }
      setLoaded(true);
    };
    fetchData();
  }, [reloadData]);

  function handleCancel(id) {
    axios
      .post(
        "http://localhost:8000/api/user/cancle_booking",
        { bookingId: id },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        if (response.data.success) {
          alert(response.data.message);
          setReloadData(!reloadData); // Update state to trigger useEffect
        }
      });
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
              <li className="active">Profile</li>
            </ul>
          </div>
        </div>
      </section>
      {/* //covers */}
      <section className="w3l-contact-61">
        <div style={{ padding: "20px" }}>
          <h1 className="text-center p-3">Booking History</h1>
          {/* /contact-61-section */}
          <CDBCard style={{ padding: "20px" }}>
            <CDBDataTable
              striped
              bordered
              hover
              barReverse
              entriesOptions={[10, 20, 25]}
              noRecordsFoundLabel="No records found"
              entries={10}
              pagesAmount={4}
              data={{
                columns: [
                  { label: "Venue ID", field: "VenueID" },
                  { label: "From Date", field: "From Date" },
                  { label: "To Date", field: "To Date" },
                  { label: "Booking Status", field: "Booking Status" },
                  { label: "Payment Amount", field: "Payment Amount" },
                  { label: "Payment Method", field: "Payment Method" },
                  { label: "Payment Status", field: "Payment Status" },
                  { label: "Cancel", field: "Cancel" }, // Added Cancel column
                ],
                rows: datas
                  ? datas.map((data) => ({
                      VenueID: data.venueId,
                      "From Date": data.fromDate,
                      "To Date": data.toDate,
                      "Booking Status": data.bookingStatus,
                      "Payment Amount": data.paymentAmount,
                      "Payment Method": data.paymentMethod,
                      "Payment Status": data.paymentStatus,
                      Cancel:
                        data.bookingStatus === "booked" ? (
                          <button
                            className="btn btn-danger"
                            onClick={() => handleCancel(data._id)}
                          >
                            Cancel
                          </button>
                        ) : (
                          "Cancelled"
                        ),
                    }))
                  : [],
              }}
            />
          </CDBCard>
        </div>
      </section>
      {/* //contact-61-section */}
      {/* footer-61 block */}
      <Footer />
    </>
  );
}

export default Profile;
