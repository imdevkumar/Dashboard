import axios from 'axios';

const BASE_URL = 'https://api.pvaluedashboard.com/api';

export const getTabDetails = async (dashboardId, tabId) => {
  try {
    const token = localStorage.getItem('token');
    console.log('Making API request with params:', { dashboardId, tabId });
    console.log('Auth token:', token);
    
    const response = await axios.post(
      `${BASE_URL}/dashboard/tabdetails`,
      {
        dashboard_id: dashboardId,
        tab_id: tabId
      },
      {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      }
    );
    
    console.log('API Response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error details:', {
      message: error.message,
      response: error.response?.data,
      status: error.response?.status
    });
    throw error;
  }
}; 