import React from 'react';
import { View, StyleSheet } from 'react-native';

/**
 * ProgressBar component for visualizing progress.
 * Props:
 * - progress: number (between 0 and 1)
 * - height?: number (optional bar height)
 * - color?: string (optional bar color)
 */
interface ProgressBarProps {
  progress: number;
  height?: number;
  color?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress, height = 10, color = '#4A90E2' }) => (
  <View style={[styles.container, { height }]}> 
    <View style={[styles.bar, { width: `${Math.max(0, Math.min(progress, 1)) * 100}%`, backgroundColor: color }]} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#E0E0E0',
    borderRadius: 8,
    overflow: 'hidden',
  },
  bar: {
    height: '100%',
    borderRadius: 8,
  },
});

export default ProgressBar; 