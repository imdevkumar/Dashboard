import React, { useState } from "react";
import Header from "../components/Header";
import SidebarLeft from "../components/SidebarLeft";
import SidebarRight from "../components/SidebarRight";

const HomePage = () => {
  const [showRightSidebar, setShowRightSidebar] = useState(false);

  return (
    <>
     
      <div className="d-flex">
        <SidebarLeft toggleRightSidebar={() => setShowRightSidebar(!showRightSidebar)} />

        <main className="flex-grow-1 p-4">
          <h5>Main Dashboard</h5>
          <div className="row">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="col-md-6 mb-4">
                <div className="border p-4 text-center">
                  <h6>Graph {i}</h6>
                  <div
                    style={{
                      width: "180px",
                      height: "180px",
                      borderRadius: "50%",
                      background: "conic-gradient(#0d6efd 60%, #dee2e6 40%)",
                      margin: "auto",
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </main>

        {showRightSidebar && <SidebarRight />}
      </div>
    </>
  );
};

export default HomePage;
