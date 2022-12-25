import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import LoginForm from './components/LoginForm';
import Home from "./components/Home";
import RegisterForm from "./components/RegisterForm";

function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginForm/>} />
              <Route path="/register" element={<RegisterForm/>} />
          </Routes>

        </div>
      </BrowserRouter>
  );
}

export default App;
