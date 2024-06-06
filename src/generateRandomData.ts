import { FinancialData } from './types';

const generateRandomData = (): FinancialData => {
  return {
    ticker: "AAPL",
    current_price: parseFloat((Math.random() * 300).toFixed(2)),
    candlestick_data: [
      { x: new Date('2023-01-01'), o: 100, h: 110, l: 90, c: 105 },
      { x: new Date('2023-01-02'), o: 105, h: 115, l: 95, c: 100 },
      { x: new Date('2023-01-03'), o: 100, h: 120, l: 90, c: 110 },
      { x: new Date('2023-01-04'), o: 110, h: 130, l: 100, c: 125 },
      { x: new Date('2023-01-05'), o: 125, h: 135, l: 115, c: 120 },
      { x: new Date('2023-01-06'), o: 120, h: 140, l: 110, c: 130 },
      { x: new Date('2023-01-07'), o: 130, h: 150, l: 120, c: 140 },
      // Additional data points
      { x: new Date('2023-01-08'), o: 140, h: 160, l: 130, c: 150 },
      { x: new Date('2023-01-09'), o: 150, h: 170, l: 140, c: 160 },
      { x: new Date('2023-01-10'), o: 160, h: 180, l: 150, c: 170 },
      { x: new Date('2023-01-11'), o: 170, h: 190, l: 160, c: 180 },
    ],
    market_ap: parseFloat((Math.random() * 3).toFixed(1)),
    shares_outstanding: parseFloat((Math.random() * 500).toFixed(1)),
    pe_ratio: parseFloat((Math.random() * 30).toFixed(1)),
    ps_ratio: parseFloat((Math.random() * 30).toFixed(1)),
    pb_ratio: parseFloat((Math.random() * 10).toFixed(1)),
    peg_ratio: parseFloat((Math.random() * 5).toFixed(1)),
    current_ratio: parseFloat((Math.random() * 10).toFixed(1)),
    debt_to_equity_ratio: parseFloat((Math.random() * 5).toFixed(1)),
    eps: parseFloat((Math.random() * 10).toFixed(1)),
    previous_close: parseFloat((Math.random() * 300).toFixed(2)),
    price_change: parseFloat((Math.random() * 20).toFixed(2)),
    analyst_estimates: {
      BofA: 'Buy',
      Citibank: 'Neutral',
      'Goldman Sachs': 'Buy',
      'Morgan Stanley': 'Overweight',
      'J.P. Morgan': 'Neutral',
      Moelis: 'Buy',
      Lazard: 'Buy',
      Evercore: 'Outperform',
    },
  };
};

export default generateRandomData;
