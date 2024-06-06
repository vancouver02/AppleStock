import React from 'react';
import Plot from 'react-plotly.js';

const InteractiveCandlestickChart = () => {
  const data = [
    {
      x: ['2023-01-01', '2023-01-02', '2023-01-03', '2023-01-04'],
      close: [105, 115, 110, 120],
      decreasing: { line: { color: 'red' } },
      high: [110, 115, 120, 125],
      increasing: { line: { color: 'green' } },
      low: [90, 95, 100, 105],
      open: [100, 105, 110, 115],
      type: 'candlestick',
      xaxis: 'x',
      yaxis: 'y',
    },
  ];

  const layout = {
    dragmode: 'zoom',
    margin: {
      r: 10,
      t: 25,
      b: 40,
      l: 60,
    },
    showlegend: false,
    xaxis: {
      autorange: true,
      domain: [0, 1],
      range: ['2023-01-01', '2023-01-04'],
      title: 'Date',
      type: 'date',
    },
    yaxis: {
      autorange: true,
      domain: [0, 1],
      range: [80, 130],
      type: 'linear',
    },
  };

  return (
    <Plot
      data={data}
      layout={layout}
      config={{ responsive: true }}
    />
  );
};

export default InteractiveCandlestickChart;
