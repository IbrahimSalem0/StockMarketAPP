import React from 'react';
import {render} from '@testing-library/react-native';
import {StockCard} from '../components';

describe('StockCard', () => {
  const mockStock = {
    ticker: 'AAPL',
    name: 'Apple Inc.',
    market: 'stocks',
  };

  it('renders stock information correctly', () => {
    const {getByText} = render(<StockCard stock={mockStock} />);
    expect(getByText('AAPL')).toBeTruthy();
    expect(getByText('Apple Inc.')).toBeTruthy();
  });
});
