import React from 'react';
import { FinancialData } from '../types';

interface StockInfoProps {
  data: FinancialData;
}

const StockInfo: React.FC<StockInfoProps> = ({ data }) => {
  return (
    <div className="stock-info">
      <h2>Key Ratios</h2>
      <div className="table-container">
        <table className="table">
          <tbody>
            <tr>
              <th>Market Cap</th>
              <td>{data.market_ap}T</td>
            </tr>
            <tr>
              <th>Shares Outstanding</th>
              <td>{data.shares_outstanding}B</td>
            </tr>
            <tr>
              <th>P/E Ratio</th>
              <td>{data.pe_ratio}</td>
            </tr>
            <tr>
              <th>P/S Ratio</th>
              <td>{data.ps_ratio}</td>
            </tr>
            <tr>
              <th>P/B Ratio</th>
              <td>{data.pb_ratio}</td>
            </tr>
            <tr>
              <th>PEG Ratio</th>
              <td>{data.peg_ratio}</td>
            </tr>
            <tr>
              <th>Current Ratio</th>
              <td>{data.current_ratio}</td>
            </tr>
            <tr>
              <th>Debt to Equity Ratio</th>
              <td>{data.debt_to_equity_ratio}</td>
            </tr>
            <tr>
              <th>EPS</th>
              <td>{data.eps}</td>
            </tr>
          </tbody>
        </table>

        <h2>Analyst Estimates</h2>
        <table className="table">
          <tbody>
            <tr>
              <th>BofA</th>
              <td>{data.analyst_estimates.BofA}</td>
            </tr>
            <tr>
              <th>Citibank</th>
              <td>{data.analyst_estimates.Citibank}</td>
            </tr>
            <tr>
              <th>Goldman Sachs</th>
              <td>{data.analyst_estimates['Goldman Sachs']}</td>
            </tr>
            <tr>
              <th>Morgan Stanley</th>
              <td>{data.analyst_estimates['Morgan Stanley']}</td>
            </tr>
            <tr>
              <th>J.P. Morgan</th>
              <td>{data.analyst_estimates['J.P. Morgan']}</td>
            </tr>
            <tr>
              <th>Moelis</th>
              <td>{data.analyst_estimates.Moelis}</td>
            </tr>
            <tr>
              <th>Lazard</th>
              <td>{data.analyst_estimates.Lazard}</td>
            </tr>
            <tr>
              <th>Evercore</th>
              <td>{data.analyst_estimates.Evercore}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StockInfo;
