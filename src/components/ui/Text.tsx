import React from 'react';
import { Text as RNText, TextProps as RNTextProps, StyleSheet } from 'react-native';
import { TYPOGRAPHY } from '../../constants/typography';
import { COLORS } from '../../constants/colors';

export interface TextProps extends RNTextProps {
  variant?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl';
  weight?: 'normal' | 'medium' | 'semibold' | 'bold';
  color?: string;
  align?: 'left' | 'center' | 'right' | 'justify';
  lineHeight?: 'tight' | 'normal' | 'relaxed' | 'loose';
  letterSpacing?: 'tight' | 'normal' | 'wide' | 'wider';
}

export const Text: React.FC<TextProps> = ({
  variant = 'base',
  weight = 'normal',
  color = COLORS.textPrimary,
  align = 'left',
  lineHeight = 'normal',
  letterSpacing = 'normal',
  style,
  children,
  ...props
}) => {
  const textStyle = StyleSheet.create({
    text: {
      fontSize: TYPOGRAPHY.fontSize[variant],
      fontWeight: TYPOGRAPHY.fontWeight[weight] as any,
      color,
      textAlign: align,
      lineHeight: TYPOGRAPHY.fontSize[variant] * TYPOGRAPHY.lineHeight[lineHeight],
      letterSpacing: TYPOGRAPHY.letterSpacing[letterSpacing],
    },
  });

  return (
    <RNText style={[textStyle.text, style]} {...props}>
      {children}
    </RNText>
  );
};

// Convenience components for common text styles
export const Heading: React.FC<TextProps> = (props) => (
  <Text variant="2xl" weight="bold" lineHeight="tight" {...props} />
);

export const Subheading: React.FC<TextProps> = (props) => (
  <Text variant="xl" weight="semibold" lineHeight="tight" {...props} />
);

export const Body: React.FC<TextProps> = (props) => (
  <Text variant="base" weight="normal" lineHeight="normal" {...props} />
);

export const Caption: React.FC<TextProps> = (props) => (
  <Text variant="sm" weight="normal" color={COLORS.textSecondary} {...props} />
);

export const Label: React.FC<TextProps> = (props) => (
  <Text variant="sm" weight="medium" {...props} />
); 