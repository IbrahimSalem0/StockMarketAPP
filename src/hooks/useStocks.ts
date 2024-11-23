import {useInfiniteQuery} from '@tanstack/react-query';
import {client} from '../api/client';
import {StocksResponse} from '../api/types';

export const useStocks = (search: string) => {
  return useInfiniteQuery({
    queryKey: ['stocks', search],
    queryFn: async ({pageParam = 1}) => {
      const {data} = await client.get<StocksResponse>('/reference/tickers', {
        params: {
          market: 'stocks',
          active: true,
          sort: 'ticker',
          order: 'asc',
          limit: 20,
          page: pageParam,
          search: search || undefined,
        },
      });
      return data;
    },
    getNextPageParam: (lastPage, pages) => {
      if (!lastPage.next_url) return undefined;
      return pages.length + 1;
    },
    staleTime: 5 * 60 * 1000, // Cache for 5 minutes
    cacheTime: 30 * 60 * 1000, // Keep in cache for 30 minutes
  });
};
