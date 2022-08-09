import './App.css';
import React from 'react';
import HomePage from './Pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './Pages/Login';
import SignUp from './Pages/SignUp';
import Footer from './Pages/Footer';
import OurStory from './Pages/OurStory';



function App() {
  return (
  <>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<HomePage />}/>
    <Route path="/login" element={<LoginPage />}/>
    <Route path="/signup" element={<SignUp />}/>
    <Route path="/ourstory" element={<OurStory />}/>
  </Routes>
  </BrowserRouter>
  <Footer></Footer>
  </>
  );
}

export default App;
