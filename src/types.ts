// types.ts

export interface CandlestickData {
  x: Date;
  o: number;
  h: number;
  l: number;
  c: number;
  v?: number; // Adding volume as an optional property
}

export interface FinancialData {
  ticker: string;
  current_price: number;
  previous_close: number;
  price_change: number;
  candlestick_data: CandlestickData[];
  market_ap: number;
  shares_outstanding: number;
  pe_ratio: number;
  ps_ratio: number;
  pb_ratio: number;
  peg_ratio: number;
  current_ratio: number;
  debt_to_equity_ratio: number;
  eps: number;
  analyst_estimates: {
    BofA: string;
    Citibank: string;
    'Goldman Sachs': string;
    'Morgan Stanley': string;
    'J.P. Morgan': string;
    Moelis: string;
    Lazard: string;
    Evercore: string;
  };
}
