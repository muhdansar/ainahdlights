import './App.css';
import React from 'react';
import HomePage from './Pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './Pages/Login';
import SignUp from './Pages/SignUp';



function App() {
  return (
  <>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<HomePage />}/>
    <Route path="/login" element={<LoginPage />}/>
    <Route path="/signup" element={<SignUp />}/>
  </Routes>
  </BrowserRouter>
  </>
  );
}

export default App;
