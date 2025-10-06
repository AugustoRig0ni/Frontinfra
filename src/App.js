import React, { useState } from 'react';
import './index.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Components/login';
import Dashboard from './Components/DashBoard';
import Maintenance from './Components/Maintenance';
import MaintenanceDashboard from './Components/MaintenanceDashboard';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [maintenances, setMaintenances] = useState([]);

  const addMaintenance = (maintenance) => {
    setMaintenances((prev) => [...prev, { ...maintenance, id: Date.now() }]);
  };

  const deleteMaintenance = (id) => {
    setMaintenances((prev) => prev.filter((m) => m.id !== id));
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={!isLoggedIn ? <Login onLogin={() => setIsLoggedIn(true)} /> : <Navigate to="/dashboard" />} />
        <Route path="/dashboard" element={isLoggedIn ? <Dashboard /> : <Navigate to="/" />} />
        <Route path="/maintenance" element={isLoggedIn ? <Maintenance addMaintenance={addMaintenance} maintenances={maintenances} /> : <Navigate to="/" />} />
  <Route path="/maintenance-dashboard" element={isLoggedIn ? <MaintenanceDashboard addMaintenance={addMaintenance} maintenances={maintenances} deleteMaintenance={deleteMaintenance} /> : <Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
