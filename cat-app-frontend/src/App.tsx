import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import LoginForm from './components/LoginForm';
import Home from "./components/Home";
import RegisterForm from "./components/RegisterForm";
import PrivateRoutes from "./components/PrivateRoutes";
import FrontPage from "./components/FrontPage";

function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<FrontPage />} />
            <Route path="/login" element={<LoginForm/>} />
            <Route path="/register" element={<RegisterForm/>} />
            <Route element={<PrivateRoutes />}>
              <Route path="/home" element={<Home/>}/>
            </Route>
          </Routes>

        </div>
      </BrowserRouter>
  );
}

export default App;
