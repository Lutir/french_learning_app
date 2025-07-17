import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { COLORS, TYPOGRAPHY, SPACING } from '../../constants';

/**
 * Reusable Button component inspired by Claude.ai's minimal design.
 * Props:
 * - title: string (button label)
 * - onPress: () => void (callback for press)
 * - style?: ViewStyle (optional custom style)
 * - textStyle?: TextStyle (optional custom text style)
 * - variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
 * - size?: 'sm' | 'md' | 'lg'
 */
interface ButtonProps {
  title: string;
  onPress: () => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

const Button: React.FC<ButtonProps> = ({ 
  title, 
  onPress, 
  style, 
  textStyle, 
  variant = 'primary',
  size = 'md'
}) => {
  const buttonStyle = [
    styles.button,
    styles[variant],
    styles[size],
    style
  ];

  const textStyleCombo = [
    styles.text,
    styles[`${variant}Text`],
    styles[`${size}Text`],
    textStyle
  ];

  return (
    <TouchableOpacity 
      style={buttonStyle} 
      onPress={onPress} 
      activeOpacity={0.8}
    >
      <Text style={textStyleCombo}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  
  // Variants
  primary: {
    backgroundColor: COLORS.primary,
    shadowColor: COLORS.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  secondary: {
    backgroundColor: COLORS.surface,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  outline: {
    backgroundColor: 'transparent',
    borderWidth: 1.5,
    borderColor: COLORS.primary,
  },
  ghost: {
    backgroundColor: 'transparent',
  },
  
  // Sizes
  sm: {
    paddingVertical: SPACING[3],
    paddingHorizontal: SPACING[4],
    minHeight: 40,
  },
  md: {
    paddingVertical: SPACING[4],
    paddingHorizontal: SPACING[6],
    minHeight: 48,
  },
  lg: {
    paddingVertical: SPACING[5],
    paddingHorizontal: SPACING[8],
    minHeight: 56,
  },
  
  // Text styles
  text: {
    fontWeight: '500',
    textAlign: 'center',
  },
  
  // Variant text styles
  primaryText: {
    color: COLORS.textInverse,
  },
  secondaryText: {
    color: COLORS.textPrimary,
  },
  outlineText: {
    color: COLORS.primary,
  },
  ghostText: {
    color: COLORS.primary,
  },
  
  // Size text styles
  smText: {
    fontSize: TYPOGRAPHY.fontSize.sm,
  },
  mdText: {
    fontSize: TYPOGRAPHY.fontSize.base,
  },
  lgText: {
    fontSize: TYPOGRAPHY.fontSize.lg,
  },
});

export default Button; 