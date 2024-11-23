import {Dimensions, StyleSheet} from 'react-native';
const CARD_MARGIN = 6;
const SCREEN_PADDING = 12;
// Calculate card width to fit 2 cards per row with margins
const cardWidth =
  (Dimensions.get('window').width - SCREEN_PADDING * 2 - CARD_MARGIN * 4) / 2;

export const styles = StyleSheet.create({
  container: {
    width: cardWidth,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    marginHorizontal: SCREEN_PADDING,
    marginVertical: 6,
    padding: SCREEN_PADDING,
    borderRadius: 12,
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  pressed: {
    opacity: 0.9,
    transform: [{scale: 0.98}],
  },
  leftContent: {
    flex: 1,
    marginRight: SCREEN_PADDING,
  },
  rightContent: {
    alignItems: 'flex-end',
  },
  ticker: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1f2937',
    marginBottom: 4,
  },
  name: {
    fontSize: 14,
    color: '#6b7280',
    marginRight: 8,
  },
  priceChange: {
    fontSize: 14,
    fontWeight: '600',
    marginTop: 4,
  },
  positive: {
    color: '#22c55e',
  },
  negative: {
    color: '#ef4444',
  },
  marketIndicator: {
    position: 'absolute',
    top: 8,
    right: 8,
    width: 8,
    height: 8,
    borderRadius: 4,
  },
});
