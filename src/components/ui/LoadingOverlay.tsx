import React from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { Text, Body } from './Text';
import { COLORS, SPACING } from '../../constants';

export interface LoadingOverlayProps {
  visible: boolean;
  message?: string;
  size?: 'small' | 'large';
}

export const LoadingOverlay: React.FC<LoadingOverlayProps> = ({
  visible,
  message = 'Loading...',
  size = 'large',
}) => {
  if (!visible) return null;

  return (
    <View style={styles.overlay}>
      <View style={styles.container}>
        <ActivityIndicator size={size} color={COLORS.primary} />
        <Body color={COLORS.textSecondary} style={styles.message}>
          {message}
        </Body>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  container: {
    backgroundColor: COLORS.background,
    padding: SPACING[6],
    borderRadius: 16,
    alignItems: 'center',
    minWidth: 120,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  message: {
    marginTop: SPACING[3],
    textAlign: 'center',
  },
}); 