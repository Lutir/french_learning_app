import React from 'react';
import { View, StyleSheet } from 'react-native';
import { COLORS, SPACING } from '../../constants';

/**
 * ProgressBar component inspired by Claude.ai's clean progress indicators.
 * Props:
 * - progress: number (between 0 and 1)
 * - height?: number (optional bar height)
 * - color?: string (optional bar color)
 * - variant?: 'default' | 'gradient' | 'minimal'
 */
interface ProgressBarProps {
  progress: number;
  height?: number;
  color?: string;
  variant?: 'default' | 'gradient' | 'minimal';
}

const ProgressBar: React.FC<ProgressBarProps> = ({ 
  progress, 
  height = 8, 
  color = COLORS.primary,
  variant = 'default'
}) => {
  const clampedProgress = Math.max(0, Math.min(progress, 1));
  
  return (
    <View style={[styles.container, { height }, styles[variant]]}> 
      <View 
        style={[
          styles.bar, 
          { 
            width: `${clampedProgress * 100}%`, 
            backgroundColor: color 
          }
        ]} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: COLORS.surface,
    borderRadius: 12,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  bar: {
    height: '100%',
    borderRadius: 12,
  },
  
  // Variants
  default: {
    // Default styling
  },
  gradient: {
    // For future gradient implementation
  },
  minimal: {
    backgroundColor: COLORS.elevated,
    borderWidth: 0,
  },
});

export default ProgressBar; 