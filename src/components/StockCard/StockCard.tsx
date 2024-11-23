import React, {memo} from 'react';
import {View, Text, Pressable} from 'react-native';
import {TrendingUp, TrendingDown} from 'lucide-react-native';
import type {Stock} from '../../api/types';
import {styles} from './styles';

interface StockCardProps {
  stock: Stock;
  onPress?: (stock: Stock) => void;
}

export const StockCard: React.FC<StockCardProps> = memo(({stock, onPress}) => {
  // Mock data for demonstration - in real app, this would come from the API
  const mockPriceChange = Math.random() * 10 - 5;
  const isPositive = mockPriceChange > 0;
  const handlePress = () => {
    onPress?.(stock);
  };

  return (
    <Pressable
      style={({pressed}) => [styles.container, pressed && styles.pressed]}
      onPress={handlePress}
      testID={`stock-card-${stock.ticker}`}>
      <View style={styles.leftContent}>
        <Text style={styles.ticker}>{stock.ticker}</Text>
        <Text style={styles.name} numberOfLines={1}>
          {stock.name}
        </Text>
      </View>

      <View style={styles.rightContent}>
        {isPositive ? (
          <TrendingUp size={20} color="#22c55e" />
        ) : (
          <TrendingDown size={20} color="#ef4444" />
        )}
        <Text
          style={[
            styles.priceChange,
            isPositive ? styles.positive : styles.negative,
          ]}>
          {Math.abs(mockPriceChange).toFixed(2)}%
        </Text>
      </View>

      {/* Market indicator dot */}
      <View
        style={[
          styles.marketIndicator,
          {backgroundColor: stock.market === 'stocks' ? '#3b82f6' : '#8b5cf6'},
        ]}
      />
    </Pressable>
  );
});
