import React, { useState } from 'react';
import './index.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Components/login';
import Dashboard from './Components/DashBoard';
import Maintenance from './Components/Maintenance';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/" element={!isLoggedIn ? <Login onLogin={() => setIsLoggedIn(true)} /> : <Navigate to="/dashboard" />} />
        <Route path="/dashboard" element={isLoggedIn ? <Dashboard /> : <Navigate to="/" />} />
        <Route path="/maintenance" element={isLoggedIn ? <Maintenance /> : <Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
