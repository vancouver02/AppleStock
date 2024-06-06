import React from 'react';

export interface CandlestickData {
  x: string | number | Date;
  o: number;
  h: number;
  l: number;
  c: number;
}

interface Props {
  data: CandlestickData[];
}

const CandlestickChart: React.FC<Props> = ({ data }) => {
  return (
    <div className="chart-placeholder">
      Candlestick Chart Placeholder
    </div>
  );
};

export default CandlestickChart;
