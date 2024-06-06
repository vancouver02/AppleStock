import axios from 'axios';

export const fetchStockData = async () => {
  try {
    const response = await axios.get('http://127.0.0.1:8000/financials');
    return response.data;
  } catch (error) {
    console.error('Error fetching stock data:', error);
    return null;
  }
};
