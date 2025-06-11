import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './overview.css';
import OverviewMetrics from './Components/OverviewMetrics';

const Overview = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn) {
      navigate('/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    navigate('/login');
  };

  return (
    <div className="overview-container">
      <header className="overview-header">
        <h1>Dashboard Overview</h1>
        <button onClick={handleLogout} className="logout-button">
          Logout
        </button>
      </header>
      <main className="overview-content">
        <h2>Welcome to your Dashboard</h2>
        <p>You have successfully logged in!</p>
      </main>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">Welcome to the Dashboard</h5>
                <p className="card-text">This is the overview page of your dashboard.</p>
              </div>
            </div>
            <OverviewMetrics />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview; 