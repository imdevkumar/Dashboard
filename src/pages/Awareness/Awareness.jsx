import React, { useState } from 'react';
import SubHeader from '../../components/SubHeader';
import AwarenessMatrix from './Components/AwarenessMatrix';
import AwarenessEvolution from './Components/AwarenessEvolution';
import SidebarRight from './Components/SidebarRight';

const Awareness = () => {
  const [activeTab, setActiveTab] = useState('compare');
  const [showSidebar, setShowSidebar] = useState(false);

  // Handler for Open Segment button
  const handleOpenSegment = () => setShowSidebar(true);
  const handleCloseSidebar = () => setShowSidebar(false);

  return (
    <div className="container-fluid">
      <SubHeader activeTab={activeTab} setActiveTab={setActiveTab} onOpenSegment={handleOpenSegment} />
      <div className="row">
        {activeTab === 'compare' ? (
          <>
            <div className={showSidebar ? 'col-12 col-lg-6' : 'col-12'}>
              <AwarenessMatrix />
            </div>
            {showSidebar && (
              <div className="col-12 col-lg-6">
                <SidebarRight onClose={handleCloseSidebar} />
              </div>
            )}
          </>
        ) : (
          <>
            <div className={showSidebar ? 'col-12 col-lg-6' : 'col-12'}>
              <AwarenessEvolution />
            </div>
            {showSidebar && (
              <div className="col-12 col-lg-6">
                <SidebarRight onClose={handleCloseSidebar} />
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Awareness; 