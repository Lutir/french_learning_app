import React from 'react';
import { View, StyleSheet, ViewStyle, StyleProp } from 'react-native';

/**
 * Reusable Card component for displaying content blocks.
 * Props:
 * - children: React.ReactNode (content inside the card)
 * - style?: StyleProp<ViewStyle> (optional custom style)
 */
interface CardProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

const Card: React.FC<CardProps> = ({ children, style }) => (
  <View style={[styles.card, style]}>
    {children}
  </View>
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 2,
    marginVertical: 8,
  },
});

export default Card; 