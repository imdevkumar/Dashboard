import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import LeftSidebar from './components/LeftSidebar';
import Overview from './pages/Overview/Overview';
import Communication from './pages/Communication/Communication';
import Product from './pages/Product/Product';
import Visitation from './pages/Visitation/Visitation';
import Consideration from './pages/Consideration/Consideration';
import Awareness from './pages/Awareness/Awareness';
import Profile from './pages/Profile/Profile';
import './App.css';
import SubHeader from './components/SubHeader';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="main-content">
          <LeftSidebar />
          <div className="content-wrapper">
       
            <Routes>
              <Route path="/" element={<Overview />} />
              <Route path="/communication" element={<Communication />} />
              <Route path="/product" element={<Product />} />
              <Route path="/visitation" element={<Visitation />} />
              <Route path="/consideration" element={<Consideration />} />
              <Route path="/awareness" element={<Awareness />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
