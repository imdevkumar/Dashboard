import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import LeftSidebar from "./components/LeftSidebar";
import Overview from "./pages/Overview";
import Awareness from "./pages/Awareness";
import Consideration from "./pages/Consideration"
import Visitation from "./pages/Visitation";
import Product from "./pages/Product";
import Communication from "./pages/Communication";

function App() {
  return (
    <div className="app-container">
      <Header />
      <LeftSidebar />
      <div className="main-content" style={{ 
        marginLeft: '280px',
        paddingTop: '80px',
        padding: '20px',
        minHeight: 'calc(100vh - 80px)',
        backgroundColor: '#f8f9fa',
        transition: 'margin-left 0.3s ease',
        '@media (max-width: 768px)': {
          marginLeft: 0
        }
      }}>
        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="/awareness" element={<Awareness />} />
          <Route path="/consideration" element={<Consideration />} />
          <Route path="/visitation" element={<Visitation />} />
          <Route path="/product" element={<Product />} />
          <Route path="/communication" element={<Communication />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
