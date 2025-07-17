import React from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import { Text, Caption } from './Text';
import { COLORS, SPACING } from '../../constants';

export interface OfflineBannerProps {
  visible: boolean;
  message?: string;
}

export const OfflineBanner: React.FC<OfflineBannerProps> = ({
  visible,
  message = 'You are currently offline. Some features may be limited.',
}) => {
  const translateY = React.useRef(new Animated.Value(-50)).current;

  React.useEffect(() => {
    Animated.timing(translateY, {
      toValue: visible ? 0 : -50,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [visible, translateY]);

  if (!visible) return null;

  return (
    <Animated.View
      style={[
        styles.container,
        {
          transform: [{ translateY }],
        },
      ]}
    >
      <View style={styles.content}>
        <Text style={styles.icon}>📶</Text>
        <Caption color={COLORS.textInverse} style={styles.message}>
          {message}
        </Caption>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: COLORS.warning,
    zIndex: 1000,
    paddingHorizontal: SPACING[4],
    paddingVertical: SPACING[3],
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    fontSize: 16,
    marginRight: SPACING[2],
  },
  message: {
    flex: 1,
    textAlign: 'center',
  },
}); 