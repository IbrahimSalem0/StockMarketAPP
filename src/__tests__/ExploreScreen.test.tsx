import React from 'react';
import {render, fireEvent, waitFor} from '@testing-library/react-native';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {ExploreScreen} from '../screens/ExploreScreen/ExploreScreen';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

const wrapper = ({children}: {children: React.ReactNode}) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

describe('ExploreScreen', () => {
  it('renders loading state initially', () => {
    const {getByTestId} = render(<ExploreScreen />, {wrapper});
    expect(getByTestId('loading-indicator')).toBeTruthy();
  });

  it('renders stock list after loading', async () => {
    const {getByText} = render(<ExploreScreen />, {wrapper});
    await waitFor(() => {
      expect(getByText('AAPL')).toBeTruthy();
    });
  });

  it('handles search input', async () => {
    const {getByPlaceholderText} = render(<ExploreScreen />, {wrapper});
    const searchInput = getByPlaceholderText('Search stocks...');
    fireEvent.changeText(searchInput, 'AAPL');
    await waitFor(() => {
      expect(searchInput.props.value).toBe('AAPL');
    });
  });
});
