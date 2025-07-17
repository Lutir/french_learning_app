import React from 'react';
import { View, StyleSheet, ViewStyle, StyleProp } from 'react-native';
import { COLORS, SPACING } from '../../constants';

/**
 * Reusable Card component inspired by Claude.ai's clean card design.
 * Props:
 * - children: React.ReactNode (content inside the card)
 * - style?: StyleProp<ViewStyle> (optional custom style)
 * - variant?: 'default' | 'elevated' | 'outlined'
 * - padding?: 'sm' | 'md' | 'lg'
 */
interface CardProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  variant?: 'default' | 'elevated' | 'outlined';
  padding?: 'sm' | 'md' | 'lg';
}

const Card: React.FC<CardProps> = ({ 
  children, 
  style, 
  variant = 'elevated',
  padding = 'md'
}) => {
  const getPaddingStyle = () => {
    switch (padding) {
      case 'sm': return styles.paddingSm;
      case 'lg': return styles.paddingLg;
      default: return styles.paddingMd;
    }
  };

  return (
    <View style={[
      styles.card,
      styles[variant],
      getPaddingStyle(),
      style
    ]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.card,
    borderRadius: 16,
    marginVertical: SPACING[2],
  },
  
  // Variants
  default: {
    backgroundColor: COLORS.surface,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  elevated: {
    backgroundColor: COLORS.card,
    shadowColor: COLORS.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
  },
  outlined: {
    backgroundColor: COLORS.card,
    borderWidth: 1.5,
    borderColor: COLORS.border,
  },
  
  // Padding variants
  paddingSm: {
    padding: SPACING[3],
  },
  paddingMd: {
    padding: SPACING[4],
  },
  paddingLg: {
    padding: SPACING[6],
  },
});

export default Card; 