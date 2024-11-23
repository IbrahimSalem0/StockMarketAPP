import React, {useState, useCallback, useMemo} from 'react';
import {
  View,
  FlatList,
  ActivityIndicator,
  RefreshControl,
  Text,
  SafeAreaView,
} from 'react-native';
import {styles} from './styles';
import {SearchBar, StockCard} from '../../components';
import {useStocks} from '../../hooks/useStocks';

export const ExploreScreen: React.FC = () => {
  const [searchText, setSearchText] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');

  const {
    data,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    refetch,
    isRefetching,
  } = useStocks(debouncedSearch);

  // Handle search with optimized debounce
  const handleSearch = useCallback((text: string) => {
    setSearchText(text);
    const timeout = setTimeout(() => {
      setDebouncedSearch(text);
    }, 300);
    return () => clearTimeout(timeout);
  }, []);

  const handleLoadMore = useCallback(() => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

  const stocks = useMemo(() => {
    return data?.pages.flatMap(page => page.results) ?? [];
  }, [data]);

  if (isLoading) {
    return (
      <View style={styles.centerContainer}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      <SearchBar
        value={searchText}
        onChangeText={handleSearch}
        onClear={() => {
          setSearchText('');
          setDebouncedSearch('');
        }}
      />

      <FlatList
        data={stocks}
        renderItem={({item}) => (
          <StockCard
            stock={item}
            onPress={stock => console.log('Pressed:', stock.ticker)}
          />
        )}
        keyExtractor={(item, index) => `#${item.ticker}+${index}`}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.5}
        numColumns={2}
        ListFooterComponent={
          isFetchingNextPage ? <ActivityIndicator size="large" /> : null
        }
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No stocks found</Text>
          </View>
        }
        refreshControl={
          <RefreshControl refreshing={isRefetching} onRefresh={refetch} />
        }
      />
    </SafeAreaView>
  );
};
