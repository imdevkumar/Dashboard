import React from 'react';
import Select, { components } from 'react-select';
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

const DropdownIndicator = (props) => (
  <components.DropdownIndicator {...props}>
    <span style={{ display: 'inline-block', width: 18, height: 18, background: 'none' }}>
      <span
        style={{
          display: 'inline-block',
          width: 18,
          height: 18,
          background: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3e%3c/svg%3e") no-repeat center center`,
          backgroundSize: '16px 16px',
        }}
      ></span>
    </span>
  </components.DropdownIndicator>
);

const ValueContainer = ({ children, ...props }) => {
  const { getValue, selectProps } = props;
  const selected = getValue();
  const label = selected.length
    ? `${selected.length} Selected`
    : 'Select KPI';
  return (
    <components.ValueContainer {...props}>
      {!selectProps.menuIsOpen ? (
        <div style={{ color: '#222', fontWeight: 500 }}>
          {label}
        </div>
      ) : children}
    </components.ValueContainer>
  );
};

const SubHeader = ({ activeTab, setActiveTab, onOpenSegment }) => {
  const [coreBrand, setCoreBrand] = React.useState(brands[0].value);
  const [competitorBrand, setCompetitorBrand] = React.useState(brands[1].value);
  const [selectedKpis, setSelectedKpis] = React.useState([kpis[0], kpis[1]]);

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
          <button className="sub-header-segment-btn" onClick={typeof onOpenSegment === 'function' ? onOpenSegment : undefined}>Open Segment</button>
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
          <span className="dropdown-chevron"></span>
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
          <span className="dropdown-chevron"></span>
          <img
            src={brands.find(b => b.value === competitorBrand)?.img}
            alt={brands.find(b => b.value === competitorBrand)?.label}
            className="dropdown-logo"
          />
        </div>
        {/* KPI Dropdown with react-select */}
        <div className="sub-header-dropdown flex-grow-1 select-chevron-wrapper">
          <label>KPI</label>
          <Select
            isMulti
            closeMenuOnSelect={false}
            hideSelectedOptions={false}
            options={kpis}
            value={selectedKpis}
            onChange={setSelectedKpis}
            classNamePrefix="kpi-select"
            components={{ DropdownIndicator, ValueContainer }}
            styles={{
              control: (base) => ({
                ...base,
                minHeight: '38px',
                borderRadius: '6px',
                borderColor: '#bdbdbd',
                boxShadow: 'none',
                fontWeight: 500,
                fontSize: '1rem',
                paddingLeft: '0',
                paddingRight: '0',
              }),
              valueContainer: (base) => ({
                ...base,
                padding: '0 8px',
              }),
              placeholder: (base) => ({
                ...base,
                color: '#222',
                fontWeight: 500,
              }),
              multiValue: () => ({ display: 'none' }),
              singleValue: (base) => ({
                ...base,
                color: '#222',
                fontWeight: 500,
              }),
              dropdownIndicator: (base) => ({
                ...base,
                paddingRight: 8,
                paddingLeft: 8,
              }),
              menu: (base) => ({
                ...base,
                zIndex: 9999,
              }),
            }}
            getOptionLabel={option => option.label}
            getOptionValue={option => option.value}
          />
        </div>
      </div>
    </div>
  );
};

export default SubHeader; 