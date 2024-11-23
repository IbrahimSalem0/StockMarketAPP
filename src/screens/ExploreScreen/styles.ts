import {StyleSheet} from 'react-native';
const SCREEN_PADDING = 16;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyContainer: {
    padding: SCREEN_PADDING,
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 16,
    color: '#666',
  }
});
