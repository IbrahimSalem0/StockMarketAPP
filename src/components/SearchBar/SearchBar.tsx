import React, { memo } from 'react';
import {View, TextInput} from 'react-native';
import {Search, X} from 'lucide-react-native';
import {styles} from './styles';

interface SearchBarProps {
  value: string;
  onChangeText: (text: string) => void;
  onClear?: () => void;
}

export const SearchBar = memo<SearchBarProps>(
  ({value, onChangeText, onClear}) => {
    return (
      <View style={styles.container}>
        <Search size={20} color="#666" />
        <TextInput
          style={styles.input}
          value={value}
          onChangeText={onChangeText}
          placeholder="Search stocks..."
          placeholderTextColor="#666"
          autoCapitalize="none"
          clearButtonMode="never"
          returnKeyType="search"
          keyboardType="ascii-capable"
          maxLength={10}
          enablesReturnKeyAutomatically
        />
        {value.length > 0 && (
          <X
            size={20}
            color="#666"
            onPress={() => {
              onChangeText('');
              onClear?.();
            }}
          />
        )}
      </View>
    );
  },
);
