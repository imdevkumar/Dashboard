import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
    customDate: {
      start: '',
      end: ''
    }
  });

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({
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
    <div className="left-sidebar bg-white" style={{
      width: '280px',
      height: '100vh',
      position: 'fixed',
      left: 0,
      top: 0,
      borderRight: '1px solid #e0e0e0',
      paddingTop: '80px',
      display: 'flex',
      flexDirection: 'column',
      '@media (max-width: 768px)': {
        transform: 'translateX(-100%)',
        '&.open': {
          transform: 'translateX(0)'
        }
      }
    }}>
      {/* Fixed Filters Header */}
      <div className="filters-header" style={{
        position: 'fixed',
        top: '80px',
        left: 0,
        width: '280px',
        padding: '15px 20px',
        backgroundColor: 'white',
        borderBottom: '1px solid #e0e0e0',
        zIndex: 1
      }}>
        <h5 className="mb-0">Filters</h5>
      </div>

      {/* Scrollable Filters Section */}
      <div className="filters-container" style={{
        flex: 1,
        overflowY: 'auto',
        padding: '20px',
        paddingTop: '60px', // Space for fixed header
        paddingBottom: '100px' // Space for fixed buttons
      }}>
        {/* Date Range Filter */}
        <div className="mb-4">
          <h6 className="mb-2">Date Range</h6>
          <select 
            className="form-select mb-2"
            value={filters.dateRange}
            onChange={(e) => handleFilterChange('dateRange', e.target.value)}
          >
            <option value="">Select Date Range</option>
            <option value="7">Last 7 days</option>
            <option value="30">Last 30 days</option>
            <option value="90">Last 90 days</option>
            <option value="custom">Custom Range</option>
          </select>
          {filters.dateRange === 'custom' && (
            <div className="d-flex gap-2">
              <input type="date" className="form-control" 
                value={filters.customDate.start}
                onChange={(e) => handleFilterChange('customDate', {...filters.customDate, start: e.target.value})}
              />
              <input type="date" className="form-control"
                value={filters.customDate.end}
                onChange={(e) => handleFilterChange('customDate', {...filters.customDate, end: e.target.value})}
              />
            </div>
          )}
        </div>

        {/* Status Filter */}
        <div className="mb-4">
          <h6 className="mb-2">Status</h6>
          <select 
            className="form-select"
            value={filters.status}
            onChange={(e) => handleFilterChange('status', e.target.value)}
          >
            <option value="">All Status</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
            <option value="pending">Pending</option>
            <option value="completed">Completed</option>
          </select>
        </div>

        {/* Priority Filter */}
        <div className="mb-4">
          <h6 className="mb-2">Priority</h6>
          <select 
            className="form-select"
            value={filters.priority}
            onChange={(e) => handleFilterChange('priority', e.target.value)}
          >
            <option value="">All Priorities</option>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        </div>

        {/* Location Filter */}
        <div className="mb-4">
          <h6 className="mb-2">Location</h6>
          <select 
            className="form-select"
            value={filters.location}
            onChange={(e) => handleFilterChange('location', e.target.value)}
          >
            <option value="">All Locations</option>
            <option value="location1">Location 1</option>
            <option value="location2">Location 2</option>
            <option value="location3">Location 3</option>
          </select>
        </div>

        {/* Assigned To Filter */}
        <div className="mb-4">
          <h6 className="mb-2">Assigned To</h6>
          <select 
            className="form-select"
            value={filters.assignedTo}
            onChange={(e) => handleFilterChange('assignedTo', e.target.value)}
          >
            <option value="">All Users</option>
            <option value="user1">User 1</option>
            <option value="user2">User 2</option>
            <option value="user3">User 3</option>
          </select>
        </div>
      </div>

      {/* Fixed Buttons at Bottom */}
      <div className="filter-buttons" style={{
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
      }}>
        <button 
          className="btn btn-outline-secondary flex-grow-1"
          onClick={handleReset}
        >
          Reset Filters
        </button>
        <button 
          className="btn btn-primary flex-grow-1"
          onClick={handleApply}
        >
          Apply Filters
        </button>
      </div>

      {/* Mobile Toggle Button */}
      <button 
        className="d-md-none btn btn-primary position-fixed"
        style={{
          bottom: '20px',
          right: '20px',
          zIndex: 1001,
          borderRadius: '50%',
          width: '50px',
          height: '50px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
        onClick={() => document.querySelector('.left-sidebar').classList.toggle('open')}
      >
        <i className="fas fa-filter"></i>
      </button>
    </div>
  );
};

export default LeftSidebar; 