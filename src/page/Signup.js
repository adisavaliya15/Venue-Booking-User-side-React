import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function Signup() {

    //initialize navigate
    const navigate = useNavigate();

    //storing registration data from input fields 
    const [registrationData, setRegistrationData] = useState({
        username: '',
        email: '',
        role: '2',
        phoneNo: '',
        password: ''
    })

    //getting textdata from input fields
    const handleRegistrationChange = (e) => {
        const { name, value } = e.target;

        //storing textdata from input fields
        setRegistrationData((prevData) => ({
            ...prevData,
            [name]: value,
        }))
    }


    //adding user details to MongoDB
    const handleRegistrationSubmit = async (e) => {

        e.preventDefault();

        //console.log("Data: ",registrationData);
        //sending API for storing user data to MongoDB 
        try {
            const response = await axios.post('http://localhost:8000/api/signup',
                registrationData);
            console.log("res: ", response);
            console.log(response);
            console.log('Registered Succesfully!', response);

            navigate("/login");

        } catch (error) {
            alert(error.response.data.message)
        }
    }

    return (
        <>
            <section className="w3l-form-16">
                {/* /form-16-section */}
                <div className="form-16-mian sign-up-page">
                    <div className="wrapper">
                        <div className="forms-16-top">
                            <div className="forms-16-info">
                                <h5>Create An Acount</h5>
                                <h3>Select the tour you like from our top tour place.</h3>
                                <p>Lorem ipsum dolor sit amet,Ea consequuntur illum facere aperiam sequi optio consectetur adipisicing
                                    elit Ea consequuntur illum.</p>
                                {/* <a href="index.html" className="read-more black btn">Home Overview <span className="fa fa-angle-double-right" aria-hidden="true" /></a> */}
                            </div>
                            <div className="form-right-inf">
                                <div className="form-inner-cont">
                                    <h6>Signup Now</h6>
                                    <form onSubmit={handleRegistrationSubmit} className="signin-form">
                                        <div className="form-input">
                                            <input type="name"
                                                name="username"
                                                placeholder="User Name"
                                                onChange={handleRegistrationChange}
                                                value={registrationData.username}
                                                required />
                                        </div>
                                        <div className="form-input">
                                            <input type="email"
                                                name="email"
                                                placeholder="User Email"
                                                onChange={handleRegistrationChange}
                                                value={registrationData.email}
                                                required />
                                        </div>
                                        <div className="form-input">
                                            <input type="tel"
                                                name="phoneNo"
                                                placeholder="User Phone No"
                                                onChange={handleRegistrationChange}
                                                value={registrationData.phoneNo}
                                                required />
                                        </div>
                                        <div className="form-input">
                                            <input type="password"
                                                name="password"
                                                placeholder="Password"
                                                onChange={handleRegistrationChange}
                                                value={registrationData.password}
                                                required />
                                        </div>
                                        <button className="btn" type='submit'>Sign Up</button>
                                        <p className="already">Already have an account? &nbsp;
                                            <Link to="/login"><span>Login<span /></span></Link>
                                        </p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Signup