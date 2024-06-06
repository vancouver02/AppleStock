import React from 'react';

const KeyRatios: React.FC<{ data: any }> = ({ data }) => {
  return (
    <div className="key-ratios">
      <h2>Key Ratios</h2>
      <ul>
        <li>
          <span>Market Cap:</span> <span>{data.market_ap}T</span>
        </li>
        <li>
          <span>Shares Outstanding:</span> <span>{data.shares_outstanding}B</span>
        </li>
        <li>
          <span>P/E Ratio:</span> <span>{data.pe_ratio}</span>
        </li>
        <li>
          <span>P/S Ratio:</span> <span>{data.ps_ratio}</span>
        </li>
        <li>
          <span>P/B Ratio:</span> <span>{data.pb_ratio}</span>
        </li>
        <li>
          <span>PEG Ratio:</span> <span>{data.peg_ratio}</span>
        </li>
        <li>
          <span>Current Ratio:</span> <span>{data.current_ratio}</span>
        </li>
        <li>
          <span>Debt to Equity Ratio:</span> <span>{data.debt_to_equity_ratio}</span>
        </li>
        <li>
          <span>EPS:</span> <span>{data.eps}</span>
        </li>
      </ul>
    </div>
  );
};

export default KeyRatios;
