import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './page/Home';
import Signup from './page/Signup';
import Login from './page/Login';
import axios from 'axios';
import Destinations from './page/Destinations';
import VenueDetail from './page/VenueDetail';
import Booking from './page/Booking';
import { useEffect, useState } from 'react';
import checkSession from './auth/authService'; // Import the checkSession function
import Profile from './page/Profile';
import Contacts from './page/Contacts';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true); // New loading state

  axios.defaults.withCredentials = true;


  //for checking session 
  useEffect(() => {
    const authenticateUser = async () => {

      // Call checkSession to determine if user is authenticated
      // const isAuthenticated = await checkSession();
      // setIsAuthenticated(isAuthenticated);
      // setLoading(false); // Set loading to false after checking session
      try {
        const isAuthenticated = await checkSession();
        setIsAuthenticated(isAuthenticated);

      } catch (error) {
        setIsAuthenticated(false);
      } finally {
        setLoading(false); // Set loading to false after authentication check
      }
    };
    if (!isAuthenticated) {
      authenticateUser(); // Check session only if user is not authenticated
    } else {
      setLoading(false); // Set loading to false immediately if user is authenticated
    }

  }, [isAuthenticated]);

  return (
    loading ? <h3>Loading...</h3> :
      <>
        <BrowserRouter>
          <Routes>
            <Route path='/login' element={!isAuthenticated ? <Login /> : <Navigate to="/" />} />
            <Route path='/signup' element={!isAuthenticated ? <Signup /> : <Navigate to="/" />} />
            <Route path="/" element={isAuthenticated ? <Home /> : <Navigate to="/login" />} />
            <Route path='/venues' element={isAuthenticated ? <Destinations /> : <Navigate to="/login" />} />
            <Route path='/venuedetails/:id' element={isAuthenticated ? <VenueDetail /> : <Navigate to="/login" />} />
            <Route path='/booking/' element={isAuthenticated ? <Booking /> : <Navigate to="/login" />} />
            <Route path='/profile' element={isAuthenticated ? <Profile /> : <Navigate to="/login" />} />
            <Route path='/contact' element={isAuthenticated ? <Contacts /> : <Navigate to="/login" />} />
            <Route path='*' element={isAuthenticated ? <h1> 404 Page Not Found</h1> : <Navigate to="/login" />} />
          </Routes>
        </BrowserRouter>
      </>
  );
}

export default App;
