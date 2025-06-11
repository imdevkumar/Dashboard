import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getTabDetails } from '../api/dashboardService';

// Floating label select component
const FloatingSelect = ({ label, name, value, options, onChange }) => (
  <div className="mb-3 position-relative" style={{ width: '250px' }}>
    <label
      className="position-absolute bg-white px-1"
      style={{
        top: '-8px',
        left: '12px',
        fontSize: '15px',
        zIndex: 1
      }}
    >
      {label}
    </label>
    <select
      className="form-select"
      style={{ paddingTop: '10px', paddingBottom: '10px', paddingLeft: '12px' }}
      value={value}
      onChange={(e) => onChange(name, e.target.value)}
    >
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  </div>
);

const LeftSidebar = () => {
  const [filters, setFilters] = useState({
    dateRange: '',
    categories: [],
    status: '',
    priority: '',
    type: [],
    location: '',
    tags: [],
    assignedTo: '',
    product: '',
    customDate: {
      start: '',
      end: ''
    }
  });

  const [markets, setMarkets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMarkets = async () => {
      try {
        const data = await getTabDetails('evhq5wczbiu', 'yegniuz2vsw');
        if (data && data.markets) {
          setMarkets(data.markets);
        }
      } catch (error) {
        console.error('Error fetching markets:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMarkets();
  }, []);

  const handleFilterChange = (filterType, value) => {
    setFilters((prev) => ({
      ...prev,
      [filterType]: value
    }));
  };

  const handleReset = () => {
    setFilters({
      dateRange: '',
      categories: [],
      status: '',
      priority: '',
      type: [],
      location: '',
      tags: [],
      assignedTo: '',
      product: '',
      customDate: {
        start: '',
        end: ''
      }
    });
  };

  const handleApply = () => {
    console.log('Applied filters:', filters);
  };

  return (
    <>
      {/* Mobile Filter Toggle Button - Fixed */}
      <button
        className="d-md-none btn btn-primary position-fixed"
        style={{
          top: '10px',
          left: '20px',
          zIndex: 1001,
          borderRadius: '50%',
          width: '40px',
          height: '40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 2px 5px rgba(0,0,0,0.2)'
        }}
        onClick={() => document.querySelector('.left-sidebar').classList.toggle('open')}
      >
        <i className="fas fa-filter"></i>
      </button>

      {/* Sidebar */}
      <div
        className="left-sidebar bg-white"
        style={{
          width: '280px',
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: 0,
          borderRight: '1px solid #e0e0e0',
          paddingTop: '80px',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        {/* Filters Header */}
        <div
          className="filters-header"
          style={{
            position: 'sticky',
            top: '80px',
            left: 0,
            width: '280px',
            padding: '0px 20px',
            backgroundColor: 'white',
            borderBottom: '1px solid #e0e0e0',
            zIndex: 1
          }}
        >
          
          <FloatingSelect
            label="Weights"
            name="priority"
            value={filters.priority}
            onChange={handleFilterChange}
            options={[
              { value: '', label: 'Burger king' },
              { value: 'high', label: 'Popeyes' },
              
            ]}
          />
        </div>

        {/* Scrollable Filters */}
        <div
          className="filters-container"
          style={{
            flex: 1,
            overflowY: 'auto',
            padding: '20px',
            paddingTop: '10px',
            paddingBottom: '20px'
          }}
        >
          {/* All Dropdown Filters with Floating Labels */}
          <FloatingSelect
            label="Markets"
            name="product"
            value={filters.product}
            onChange={handleFilterChange}
            options={[
              { value: '', label: 'Select Market' },
              ...markets.map(market => ({
                value: market.market_id.toString(),
                label: market.market_label
              }))
            ]}
          />

          <FloatingSelect
            label="Priority"
            name="priority"
            value={filters.priority}
            onChange={handleFilterChange}
            options={[
              { value: '', label: 'All Priorities' },
              { value: 'high', label: 'High' },
              { value: 'medium', label: 'Medium' },
              { value: 'low', label: 'Low' }
            ]}
          />

          <FloatingSelect
            label="Location"
            name="location"
            value={filters.location}
            onChange={handleFilterChange}
            options={[
              { value: '', label: 'All Locations' },
              { value: 'location1', label: 'Location 1' },
              { value: 'location2', label: 'Location 2' },
              { value: 'location3', label: 'Location 3' }
            ]}
          />

          <FloatingSelect
            label="Assigned To"
            name="assignedTo"
            value={filters.assignedTo}
            onChange={handleFilterChange}
            options={[
              { value: '', label: 'All Users' },
              { value: 'user1', label: 'User 1' },
              { value: 'user2', label: 'User 2' },
              { value: 'user3', label: 'User 3' }
            ]}
          />
        </div>

        {/* Fixed Action Buttons */}
        <div
          className="filter-buttons"
          style={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            width: '280px',
            padding: '15px',
            backgroundColor: 'white',
            borderTop: '1px solid #e0e0e0',
            display: 'flex',
            gap: '10px',
            zIndex: 1
          }}
        >
          <button
            className="btn btn-outline-secondary flex-grow-1"
            onClick={handleReset}
            // style={{fontSize:'15px'}}
          >
            Reset Filters
          </button>
          <button
            className="btn btn-dark flex-grow-1"
            onClick={handleApply}
          >
            Apply Filters
          </button>
        </div>
      </div>
    </>
  );
};

export default LeftSidebar;