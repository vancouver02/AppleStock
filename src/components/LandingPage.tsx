import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CandlestickChart from './CandlestickChart';
import KeyRatios from './KeyRatios';
import AnalystEstimates from './AnalystEstimates';
import './LandingPage.css';

const LandingPage: React.FC = () => {
  const [stockData, setStockData] = useState<any>(null);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/financials')
      .then(response => {
        setStockData(response.data);
      })
      .catch(error => {
        console.error('Error fetching stock data', error);
      });
  }, []);

  if (!stockData) {
    return <div className="container">Loading...</div>;
  }

  return (
    <div className="container">
      <div className="header">
        <h1>{stockData.ticker} Stock Information</h1>
        <p>Current Price: ${stockData.current_price} <span className={stockData.current_price > stockData.previous_close ? 'text-success' : 'text-danger'}>({stockData.price_change}%)</span></p>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="box">
            <KeyRatios data={stockData} />
          </div>
          <div className="box">
            <AnalystEstimates data={stockData.analyst_estimates} />
          </div>
        </div>
        <div className="col-md-6">
          <div className="chart-container">
            <CandlestickChart data={stockData.candlestick_data} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
