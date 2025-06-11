import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import LeftSidebar from './components/LeftSidebar';
import Overview from './pages/Overview/Overview';
import Communication from './pages/Communication/Communication';
import Product from './pages/Product/Product';
import Visitation from './pages/Visitation/Visitation';
import Consideration from './pages/Consideration/Consideration';
import Awareness from './pages/Awareness/Awareness';
import Profile from './pages/Profile/Profile';
import Login from './pages/login/login';
import SelectBrand from './pages/selectbrand/selectbrand';
import './App.css';
import SubHeader from './components/SubHeader';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/selectbrand" element={<SelectBrand />} />
          <Route
            path="/*"
            element={
              <>
                <Header />
                <div className="main-container">
                  <LeftSidebar />
                  <div className="content-wrapper">
                    <Routes>
                      <Route path="/overview" element={<Overview />} />
                      <Route path="/communication" element={<Communication />} />
                      <Route path="/product" element={<Product />} />
                      <Route path="/awareness" element={<Awareness />} />
                      <Route path="/profile" element={<Profile />} />
                    </Routes>
                  </div>
                </div>
              </>
            }
          />
          <Route path="/" element={<Navigate to="/login" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
