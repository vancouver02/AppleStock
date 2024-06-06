import React from 'react';

const AnalystEstimates: React.FC<{ data: any }> = ({ data }) => {
  return (
    <div className="analyst-estimates">
      <h2>Analyst Estimates</h2>
      <ul>
        {Object.entries(data).map(([key, value]: any) => (
          <li key={key}>
            <span>{key}:</span> <span>{value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AnalystEstimates;
