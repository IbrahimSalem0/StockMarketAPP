export interface Stock {
  ticker: string;
  name: string;
  market: string;
}

export interface StocksResponse {
  results: Stock[];
  count: number;
  next_url: string | null;
}
export interface StockBar {
  c: number; // close
  h: number; // high
  l: number; // low
  n: number; // number of transactions
  o: number; // open
  t: number; // timestamp
  v: number; // volume
  vw: number; // volume weighted average price
}

export interface GroupedDailyResponse {
  queryCount: number;
  resultsCount: number;
  adjusted: boolean;
  results: Array<StockBar & {T: string}>;
}

export interface AggregatesResponse {
  ticker: string;
  queryCount: number;
  resultsCount: number;
  adjusted: boolean;
  results: StockBar[];
}
