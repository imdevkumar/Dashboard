import React, { useState } from 'react';
import SubHeader from '../../components/SubHeader';
import AwarenessMatrix from './Components/AwarenessMatrix';
import AwarenessEvolution from './Components/AwarenessEvolution';
import SidebarRight from './Components/SidebarRight';
import SidebarRightEvolution from './Components/SidebarRightEvolution';
import RightSidebar from '../../components/common/rightsidebar';

const Awareness = () => {
  const [activeTab, setActiveTab] = useState('compare');
  const [showSidebar, setShowSidebar] = useState(false);

  // Toggle sidebar function
  const toggleSidebar = () => setShowSidebar(!showSidebar);

  return (
    <div className="container-fluid">
      <SubHeader 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        onOpenSegment={toggleSidebar}
        showSidebar={showSidebar}
      />
      <div className="row">
        {activeTab === 'compare' ? (
          <>
            <div className={showSidebar ? 'col-12 col-lg-5' : 'col-12'}>
              <AwarenessMatrix />
            </div>
            {showSidebar && (
              <>
                <div className="col-12 col-lg-5">
                  <SidebarRight />
                </div>
                <div className="col-12 col-lg-2">
                  <RightSidebar />
                </div>
              </>
            )}
          </>
        ) : (
          <>
            <div className={showSidebar ? 'col-12 col-lg-5' : 'col-12'}>
              <AwarenessEvolution />
            </div>
            {showSidebar && (
              <>
                <div className="col-12 col-lg-5">
                  <SidebarRightEvolution />
                </div>
                <div className="col-12 col-lg-2">
                  <RightSidebar />
                </div>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Awareness; 