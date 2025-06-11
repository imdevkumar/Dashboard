import React from 'react';
import Select, { components } from 'react-select';
import './SubHeader.css';

const brands = [
  { label: 'Burger King', value: 'burger-king', img: 'https://logosdown.com/wp-content/uploads/2023/09/burguer-king-logo-0-2048x2048-1-300x300.png' },
  { label: 'KFC', value: 'kfc', img: 'https://upload.wikimedia.org/wikipedia/commons/b/bf/KFC_logo.svg' },
  { label: 'Apache Pizza', value: 'apache-pizza', img: 'https://via.placeholder.com/300x300?text=Apache+Pizza' },
  { label: 'BackWerk', value: 'backwerk', img: 'https://via.placeholder.com/300x300?text=BackWerk' },
  { label: 'Bakker Bart', value: 'bakker-bart', img: 'https://via.placeholder.com/300x300?text=Bakker+Bart' },
  { label: 'Bastard Burgers', value: 'bastard-burgers', img: 'https://via.placeholder.com/300x300?text=Bastard+Burgers' },
  { label: 'BBQ', value: 'bbq', img: 'https://via.placeholder.com/300x300?text=BBQ' },
  { label: 'BHC', value: 'bhc', img: 'https://via.placeholder.com/300x300?text=BHC' },
  { label: 'Blue Frog', value: 'blue-frog', img: 'https://via.placeholder.com/300x300?text=Blue+Frog' },
  { label: 'Bob\'s', value: 'bobs', img: 'https://via.placeholder.com/300x300?text=Bob\'s' },
  { label: 'Brödernas', value: 'brodernas', img: 'https://via.placeholder.com/300x300?text=Brödernas' },
  { label: 'Buffalo Grill', value: 'buffalo-grill', img: 'https://via.placeholder.com/300x300?text=Buffalo+Grill' },
  { label: 'Carl\'s Jr', value: 'carls-jr', img: 'https://via.placeholder.com/300x300?text=Carl\'s+Jr' },
  { label: 'Chickeria', value: 'chickeria', img: 'https://via.placeholder.com/300x300?text=Chickeria' },
  { label: 'Circle K', value: 'circle-k', img: 'https://via.placeholder.com/300x300?text=Circle+K' },
  { label: 'Dean & David', value: 'dean-david', img: 'https://via.placeholder.com/300x300?text=Dean+&+David' },
  { label: 'Dicos', value: 'dicos', img: 'https://via.placeholder.com/300x300?text=Dicos' },
  { label: 'Dieci Pizza-Kurier', value: 'dieci-pizza-kurier', img: 'https://via.placeholder.com/300x300?text=Dieci+Pizza-Kurier' },
  { label: 'Domino\'s Pizza', value: 'dominos-pizza', img: 'https://via.placeholder.com/300x300?text=Domino\'s+Pizza' },
  { label: 'Eddie Rocket\'s', value: 'eddie-rockets', img: 'https://via.placeholder.com/300x300?text=Eddie+Rocket\'s' },
  { label: 'Febo', value: 'febo', img: 'https://via.placeholder.com/300x300?text=Febo' },
  { label: 'Giraffa\'s', value: 'giraffas', img: 'https://via.placeholder.com/300x300?text=Giraffa\'s' },
  { label: 'Goiko', value: 'goiko', img: 'https://via.placeholder.com/300x300?text=Goiko' },
  { label: 'Gregg\'s', value: 'greggs', img: 'https://via.placeholder.com/300x300?text=Gregg\'s' },
  { label: 'Habib\'s', value: 'habibs', img: 'https://via.placeholder.com/300x300?text=Habib\'s' },
  { label: 'Hans im Gluck', value: 'hans-im-gluck', img: 'https://via.placeholder.com/300x300?text=Hans+im+Gluck' },
  { label: 'Holy Cow!', value: 'holy-cow', img: 'https://via.placeholder.com/300x300?text=Holy+Cow' },
  { label: 'Ikea', value: 'ikea', img: 'https://via.placeholder.com/300x300?text=Ikea' },
  { label: 'JaFs!', value: 'jafs', img: 'https://via.placeholder.com/300x300?text=JaFs' },
  { label: 'Jagger', value: 'jagger', img: 'https://via.placeholder.com/300x300?text=Jagger' },
  { label: 'Kwalitaria', value: 'kwalitaria', img: 'https://via.placeholder.com/300x300?text=Kwalitaria' },
  { label: 'Kyochon 1991', value: 'kyochon-1991', img: 'https://via.placeholder.com/300x300?text=Kyochon+1991' },
  { label: 'Leon', value: 'leon', img: 'https://via.placeholder.com/300x300?text=Leon' },
  { label: 'Little Caesars Pizza', value: 'little-caesars-pizza', img: 'https://via.placeholder.com/300x300?text=Little+Caesars+Pizza' },
  { label: 'Lotteria', value: 'lotteria', img: 'https://via.placeholder.com/300x300?text=Lotteria' },
  { label: 'Madero', value: 'madero', img: 'https://via.placeholder.com/300x300?text=Madero' },
  { label: 'Marie Blachère', value: 'marie-blachere', img: 'https://via.placeholder.com/300x300?text=Marie+Blachère' },
  { label: 'Max', value: 'max', img: 'https://via.placeholder.com/300x300?text=Max' },
  { label: 'McDonalds', value: 'mcdonalds', img: 'https://via.placeholder.com/300x300?text=McDonalds' },
  { label: 'Mom\'s Touch', value: 'moms-touch', img: 'https://via.placeholder.com/300x300?text=Mom\'s+Touch' },
  { label: 'Nando\'s', value: 'nandos', img: 'https://via.placeholder.com/300x300?text=Nando\'s' },
  { label: 'New YOBO', value: 'new-yobo', img: 'https://via.placeholder.com/300x300?text=New+YOBO' },
  { label: 'New York Pizza', value: 'new-york-pizza', img: 'https://via.placeholder.com/300x300?text=New+York+Pizza' },
  { label: 'Nordsee', value: 'nordsee', img: 'https://via.placeholder.com/300x300?text=Nordsee' },
  { label: 'O\'Brien\'s', value: 'obriens', img: 'https://via.placeholder.com/300x300?text=O\'Brien\'s' },
  { label: 'Papa John\'s', value: 'papa-johns', img: 'https://via.placeholder.com/300x300?text=Papa+John\'s' },
  { label: 'Paul', value: 'paul', img: 'https://via.placeholder.com/300x300?text=Paul' },
  { label: 'Pizzabakeren', value: 'pizzabakeren', img: 'https://via.placeholder.com/300x300?text=Pizzabakeren' },
  { label: 'Pizza Hut', value: 'pizza-hut', img: 'https://via.placeholder.com/300x300?text=Pizza+Hut' },
  { label: 'Popeyes', value: 'popeyes', img: 'https://via.placeholder.com/300x300?text=Popeyes' },
  { label: 'Pret A Manger', value: 'pret-a-manger', img: 'https://via.placeholder.com/300x300?text=Pret+A+Manger' },
  { label: 'Quick', value: 'quick', img: 'https://via.placeholder.com/300x300?text=Quick' },
  { label: 'Rodilla', value: 'rodilla', img: 'https://via.placeholder.com/300x300?text=Rodilla' },
  { label: 'Shake Shack', value: 'shake-shack', img: 'https://via.placeholder.com/300x300?text=Shake+Shack' },
  { label: 'Sibylla', value: 'sibylla', img: 'https://via.placeholder.com/300x300?text=Sibylla' },
  { label: 'Snackpoint', value: 'snackpoint', img: 'https://via.placeholder.com/300x300?text=Snackpoint' },
  { label: 'Starbucks', value: 'starbucks', img: 'https://via.placeholder.com/300x300?text=Starbucks' },
  { label: 'Subway', value: 'subway', img: 'https://via.placeholder.com/300x300?text=Subway' },
  { label: 'Sunset Boulevard', value: 'sunset-boulevard', img: 'https://via.placeholder.com/300x300?text=Sunset+Boulevard' },
  { label: 'Supermac\'s', value: 'supermacs', img: 'https://via.placeholder.com/300x300?text=Supermac\'s' },
  { label: 'Taco Bell', value: 'taco-bell', img: 'https://via.placeholder.com/300x300?text=Taco+Bell' },
  { label: 'Tastien', value: 'tastien', img: 'https://via.placeholder.com/300x300?text=Tastien' },
  { label: 'Telepizza', value: 'telepizza', img: 'https://via.placeholder.com/300x300?text=Telepizza' },
  { label: 'TGB The Good Burger', value: 'tgb-the-good-burger', img: 'https://via.placeholder.com/300x300?text=TGB+The+Good+Burger' },
  { label: 'Wallace', value: 'wallace', img: 'https://via.placeholder.com/300x300?text=Wallace' },
  { label: 'Wendys', value: 'wendys', img: 'https://via.placeholder.com/300x300?text=Wendys' },
  { label: 'O\'Tacos', value: 'otacos', img: 'https://via.placeholder.com/300x300?text=O\'Tacos' }
];

const kpis = [
  { label: 'Awareness', value: 'awareness' },
  { label: 'Consideration', value: 'consideration' },
  { label: 'Visitation', value: 'visitation' },
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

// Custom Option component to display brand logo and label
const BrandOption = (props) => (
  <components.Option {...props}>
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <img
        src={props.data.img}
        alt={props.data.label}
        style={{ width: 24, height: 24, marginRight: 8, objectFit: 'contain' }}
      />
      <span>{props.data.label}</span>
    </div>
  </components.Option>
);

// Custom SingleValue component to display brand logo and label when selected
const BrandSingleValue = (props) => (
  <components.SingleValue {...props}>
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <img
        src={props.data.img}
        alt={props.data.label}
        style={{ width: 24, height: 24, marginRight: 8, objectFit: 'contain' }}
      />
      <span>{props.data.label}</span>
    </div>
  </components.SingleValue>
);

const SubHeader = ({ activeTab, setActiveTab, onOpenSegment, showSidebar }) => {
  const [coreBrand, setCoreBrand] = React.useState(brands[0]);
  const [competitorBrand, setCompetitorBrand] = React.useState(brands[1]);
  const [selectedKpis, setSelectedKpis] = React.useState([kpis[0], kpis[1]]);

  // Common styles for brand dropdowns
  const brandSelectStyles = {
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
    singleValue: (base) => ({
      ...base,
      color: '#222',
      fontWeight: 500,
      display: 'flex',
      alignItems: 'center',
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
    option: (base, state) => ({
      ...base,
      display: 'flex',
      alignItems: 'center',
      backgroundColor: state.isSelected ? '#e0e0e0' : state.isFocused ? '#f5f5f5' : 'white',
      color: '#222',
      padding: '8px 12px',
    }),
  };

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
          <button
            className="sub-header-segment-btn"
            onClick={typeof onOpenSegment === 'function' ? onOpenSegment : undefined}
          >
            {showSidebar ? 'Close Segment' : 'Open Segment'}
          </button>
        </div>
      </div>

      {/* Row 2: All Filters Inline and Full Width */}
      <div className="sub-header-row sub-header-filters-row sub-header-filters-inline">
        {/* Core Brand Dropdown */}
        <div className="sub-header-dropdown flex-grow-1">
          <label>Core Brand</label>
          <Select
            options={brands}
            value={coreBrand}
            onChange={setCoreBrand}
            classNamePrefix="brand-select"
            components={{ DropdownIndicator, Option: BrandOption, SingleValue: BrandSingleValue }}
            styles={brandSelectStyles}
            getOptionLabel={(option) => option.label}
            getOptionValue={(option) => option.value}
            placeholder="Select Core Brand"
          />
        </div>

        {/* Competitor Brand Dropdown */}
        <div className="sub-header-dropdown flex-grow-1">
          <label>Competitor Brand</label>
          <Select
            options={brands}
            value={competitorBrand}
            onChange={setCompetitorBrand}
            classNamePrefix="brand-select"
            components={{ DropdownIndicator, Option: BrandOption, SingleValue: BrandSingleValue }}
            styles={brandSelectStyles}
            getOptionLabel={(option) => option.label}
            getOptionValue={(option) => option.value}
            placeholder="Select Competitor Brand"
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
            getOptionLabel={(option) => option.label}
            getOptionValue={(option) => option.value}
          />
        </div>
      </div>
    </div>
  );
};

export default SubHeader;