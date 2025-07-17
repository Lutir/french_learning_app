import React, { useState } from 'react';
import { View, TextInput, TextInputProps, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, Caption } from './Text';
import { COLORS, SPACING } from '../../constants';

export interface InputProps extends TextInputProps {
  label?: string;
  error?: string;
  helperText?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  onRightIconPress?: () => void;
  variant?: 'default' | 'outlined';
  size?: 'sm' | 'md' | 'lg';
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  helperText,
  leftIcon,
  rightIcon,
  onRightIconPress,
  variant = 'default',
  size = 'md',
  style,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const inputStyle = [
    styles.input,
    styles[`input_${variant}`],
    styles[`input_${size}`],
    isFocused && styles.input_focused,
    error && styles.input_error,
    style,
  ];

  const containerStyle = [
    styles.container,
    styles[`container_${size}`],
  ];

  return (
    <View style={containerStyle}>
      {label && (
        <Text variant="sm" weight="medium" style={styles.label}>
          {label}
        </Text>
      )}
      
      <View style={styles.inputContainer}>
        {leftIcon && (
          <View style={styles.leftIcon}>
            {leftIcon}
          </View>
        )}
        
        <TextInput
          style={inputStyle}
          placeholderTextColor={COLORS.textMuted}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...props}
        />
        
        {rightIcon && (
          <TouchableOpacity
            style={styles.rightIcon}
            onPress={onRightIconPress}
            disabled={!onRightIconPress}
          >
            {rightIcon}
          </TouchableOpacity>
        )}
      </View>
      
      {(error || helperText) && (
        <Caption
          variant="xs"
          color={error ? COLORS.error : COLORS.textMuted}
          style={styles.helperText}
        >
          {error || helperText}
        </Caption>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: SPACING[4],
  },
  container_sm: {
    marginBottom: SPACING[3],
  },
  container_md: {
    marginBottom: SPACING[4],
  },
  container_lg: {
    marginBottom: SPACING[5],
  },
  label: {
    marginBottom: SPACING[2],
    color: COLORS.textPrimary,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: COLORS.textPrimary,
    paddingHorizontal: SPACING[4],
    paddingVertical: SPACING[3],
    borderRadius: 12,
    backgroundColor: COLORS.surface,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  input_default: {
    backgroundColor: COLORS.surface,
  },
  input_outlined: {
    backgroundColor: 'transparent',
    borderColor: COLORS.border,
  },
  input_sm: {
    paddingVertical: SPACING[2],
    paddingHorizontal: SPACING[3],
    fontSize: 14,
  },
  input_md: {
    paddingVertical: SPACING[3],
    paddingHorizontal: SPACING[4],
    fontSize: 16,
  },
  input_lg: {
    paddingVertical: SPACING[4],
    paddingHorizontal: SPACING[5],
    fontSize: 18,
  },
  input_focused: {
    borderColor: COLORS.primary,
    backgroundColor: COLORS.background,
  },
  input_error: {
    borderColor: COLORS.error,
  },
  leftIcon: {
    position: 'absolute',
    left: SPACING[3],
    zIndex: 1,
  },
  rightIcon: {
    position: 'absolute',
    right: SPACING[3],
    zIndex: 1,
  },
  helperText: {
    marginTop: SPACING[1],
    marginLeft: SPACING[1],
  },
}); 