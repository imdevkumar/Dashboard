import React, { useState } from 'react';
import './SubHeader.css';

const brands = [
  { label: 'Burger King', value: 'burger-king', img: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Burger_King_logo.svg' },
  { label: 'KFC', value: 'kfc', img: 'https://upload.wikimedia.org/wikipedia/commons/b/bf/KFC_logo.svg' },
  // Add more brands as needed
];

const kpis = [
  { label: 'Awareness', value: 'awareness' },
  { label: 'Consideration', value: 'consideration' },
  { label: 'Visitation', value: 'visitation' },
  // Add more KPIs as needed
];

const SubHeader = () => {
  const [activeTab, setActiveTab] = useState('compare');
  const [coreBrand, setCoreBrand] = useState(brands[0].value);
  const [competitorBrand, setCompetitorBrand] = useState(brands[1].value);
  const [selectedKpis, setSelectedKpis] = useState(['awareness', 'consideration']);

  // For KPI dropdown: show 'N Selected' as the only visible option
  const kpiSelectedLabel = `${selectedKpis.length} Selected`;

  return (
    <div className="sub-header-container">
      {/* Row 1: Tabs and Button */}
      <div className="sub-header-row sub-header-tabs-row align-items-center">
        <div className="sub-header-tabs">
          <button
            className={`sub-header-tab${activeTab === 'compare' ? ' active' : ''}`}
            onClick={() => setActiveTab('compare')}
          >
            Compare
          </button>
          <button
            className={`sub-header-tab${activeTab === 'evolution' ? ' active' : ''}`}
            onClick={() => setActiveTab('evolution')}
          >
            Evolution
          </button>
        </div>
        <div className="sub-header-segment-btn-wrapper ms-auto">
          <button className="sub-header-segment-btn">Open Segment</button>
        </div>
      </div>
      {/* Row 2: All Filters Inline and Full Width */}
      <div className="sub-header-row sub-header-filters-row sub-header-filters-inline">
        {/* Core Brand Dropdown */}
        <div className="sub-header-dropdown flex-grow-1 select-chevron-wrapper">
          <label>Core Brand</label>
          <select value={coreBrand} onChange={e => setCoreBrand(e.target.value)}>
            {brands.map(b => (
              <option key={b.value} value={b.value}>{b.label}</option>
            ))}
          </select>
          <span className="dropdown-chevron">▼</span>
          <img
            src={brands.find(b => b.value === coreBrand)?.img}
            alt={brands.find(b => b.value === coreBrand)?.label}
            className="dropdown-logo"
          />
        </div>
        {/* Competitor Brand Dropdown */}
        <div className="sub-header-dropdown flex-grow-1 select-chevron-wrapper">
          <label>Competitor Brand</label>
          <select value={competitorBrand} onChange={e => setCompetitorBrand(e.target.value)}>
            {brands.map(b => (
              <option key={b.value} value={b.value}>{b.label}</option>
            ))}
          </select>
          <span className="dropdown-chevron">▼</span>
          <img
            src={brands.find(b => b.value === competitorBrand)?.img}
            alt={brands.find(b => b.value === competitorBrand)?.label}
            className="dropdown-logo"
          />
        </div>
        {/* KPI Dropdown */}
        <div className="sub-header-dropdown flex-grow-1 select-chevron-wrapper">
          <label>KPI</label>
          <select
            value={kpiSelectedLabel}
            onChange={e => {
              // This disables direct selection, but keeps the label visible
            }}
            style={{ color: '#222', fontWeight: 500 }}
            disabled
          >
            <option value={kpiSelectedLabel}>{kpiSelectedLabel}</option>
          </select>
          <span className="dropdown-chevron">▼</span>
        </div>
      </div>
    </div>
  );
};

export default SubHeader; 