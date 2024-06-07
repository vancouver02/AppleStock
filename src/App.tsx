import React, { useEffect, useState } from 'react';
import './App.css';
import StockInfo from './components/StockInfo';
import Plot from 'react-plotly.js';
import generateRandomData from './generateRandomData';
import { FinancialData } from './types';

const App: React.FC = () => {
  const [financialData, setFinancialData] = useState<FinancialData | null>(null);
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true }));

  useEffect(() => {
    setFinancialData(generateRandomData());

    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true }));
    }, 60000); // Update time every minute

    return () => clearInterval(timer); // Cleanup the timer on component unmount
  }, []);

  if (!financialData) {
    return <div>Loading...</div>;
  }

  const candlestickData = financialData.candlestick_data.map((d) => ({
    x: d.x,
    open: d.o,
    high: d.h,
    low: d.l,
    close: d.c,
    volume: d.v,
  }));

  const calculateSMA = (data: any[], window: number) => {
    let sma = [];
    for (let i = 0; i < data.length; i++) {
      if (i < window - 1) {
        sma.push(null);
      } else {
        const sum = data.slice(i - window + 1, i + 1).reduce((acc, val) => acc + val.c, 0);
        sma.push(sum / window);
      }
    }
    return sma;
  };

  const sma20 = calculateSMA(financialData.candlestick_data, 20);
  const sma50 = calculateSMA(financialData.candlestick_data, 50);
  const sma200 = calculateSMA(financialData.candlestick_data, 200);

  return (
    <div className="container">
      <header>
        <h1>Apple Inc. (AAPL) Stock Analysis</h1>
        <div className="stock-info-header">
          <span>Technology</span>
          <span>•</span>
          <span>Consumer Electronics</span>
          <span>•</span>
          <span>USA</span>
          <span>•</span>
          <span>NASD</span>
        </div>
        <div className="signin-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-log-in"
          >
            <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
            <polyline points="10 17 15 12 10 7"></polyline>
            <line x1="15" y1="12" x2="3" y2="12"></line>
          </svg>
        </div>
      </header>
      <div className="stock-summary">
        <div className="current-price">
          {financialData.current_price.toFixed(2)}
        </div>
        <div className={`price-change ${financialData.price_change > 0 ? 'positive-change' : 'negative-change'}`}>
          {financialData.price_change > 0 ? '+' : ''}{financialData.price_change.toFixed(2)} ({((financialData.price_change / financialData.previous_close) * 100).toFixed(2)}%)
        </div>
        <div className="closing-info">At close: 4:00 PM EDT</div>
        <div className="after-hours">
          <span className="after-hours-price">195.50</span>
          <span className="after-hours-change negative-change">-0.37 (-0.19%)</span>
          <div className="after-hours-time">After hours: {currentTime} EDT</div>
        </div>
      </div>
      <div className="section">
        <h2>Candlestick Chart</h2>
        <div className="chart-container">
          <Plot
            data={[
              {
                x: financialData.candlestick_data.map((d) => d.x),
                close: financialData.candlestick_data.map((d) => d.c),
                decreasing: { line: { color: 'red', width: 2 } },
                high: financialData.candlestick_data.map((d) => d.h),
                increasing: { line: { color: 'green', width: 2 } },
                low: financialData.candlestick_data.map((d) => d.l),
                open: financialData.candlestick_data.map((d) => d.o),
                type: 'candlestick',
                xaxis: 'x',
                yaxis: 'y',
                name: 'Price',
                hoverinfo: 'x+open+high+low+close',
              },
              {
                x: financialData.candlestick_data.map((d) => d.x),
                y: financialData.candlestick_data.map((d) => d.v),
                type: 'bar',
                yaxis: 'y2',
                marker: { color: 'rgba(128,128,128,0.5)' },
                name: 'Volume',
              },
              {
                x: financialData.candlestick_data.map((d) => d.x),
                y: sma20,
                type: 'scatter',
                mode: 'lines',
                line: { color: 'blue', width: 2 },
                name: 'SMA20',
              },
              {
                x: financialData.candlestick_data.map((d) => d.x),
                y: sma50,
                type: 'scatter',
                mode: 'lines',
                line: { color: 'purple', width: 2 },
                name: 'SMA50',
              },
              {
                x: financialData.candlestick_data.map((d) => d.x),
                y: sma200,
                type: 'scatter',
                mode: 'lines',
                line: { color: 'orange', width: 2 },
                name: 'SMA200',
              },
            ]}
            layout={{
              plot_bgcolor: '#1e1e1e',
              paper_bgcolor: '#1e1e1e',
              font: { color: '#fff' },
              xaxis: {
                gridcolor: '#333',
                tickformat: '%b %d, %Y',
                rangeslider: { visible: false },
                title: 'Date',
              },
              yaxis: {
                gridcolor: '#333',
                title: 'Stock Price',
              },
              yaxis2: {
                overlaying: 'y',
                side: 'right',
                title: 'Volume',
                gridcolor: '#333',
              },
              dragmode: 'zoom',
              margin: {
                r: 50,
                t: 25,
                b: 40,
                l: 50,
              },
              showlegend: true,
              legend: {
                x: 0,
                y: 1,
                xanchor: 'left',
                yanchor: 'top',
              },
              annotations: [
                {
                  x: financialData.candlestick_data[0].x,
                  y: sma20[0],
                  xref: 'x',
                  yref: 'y',
                  text: 'SMA20',
                  showarrow: true,
                  arrowhead: 7,
                  ax: 0,
                  ay: -40,
                  font: { color: 'blue' }
                },
                {
                  x: financialData.candlestick_data[0].x,
                  y: sma50[0],
                  xref: 'x',
                  yref: 'y',
                  text: 'SMA50',
                  showarrow: true,
                  arrowhead: 7,
                  ax: 0,
                  ay: -40,
                  font: { color: 'purple' }
                },
                {
                  x: financialData.candlestick_data[0].x,
                  y: sma200[0],
                  xref: 'x',
                  yref: 'y',
                  text: 'SMA200',
                  showarrow: true,
                  arrowhead: 7,
                  ax: 0,
                  ay: -40,
                  font: { color: 'orange' }
                }
              ]
            }}
            useResizeHandler
            style={{ width: '100%', height: '100%' }}
          />
        </div>
      </div>
      <div className="section">
        <StockInfo data={financialData} />
      </div>
      <footer>
        <div className="stock-info-header">
          <span>Technology</span>
          <span>•</span>
          <span>Consumer Electronics</span>
          <span>•</span>
          <span>USA</span>
          <span>•</span>
          <span>NASD</span>
        </div>
        <p>&copy; 2024 Stock Analysis</p>
      </footer>
    </div>
  );
};

export default App;
