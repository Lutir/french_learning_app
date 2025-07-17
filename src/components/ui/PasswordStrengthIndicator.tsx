import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Caption } from './Text';
import { COLORS, SPACING } from '../../constants';

export interface PasswordStrengthIndicatorProps {
  password: string;
  showLabel?: boolean;
}

export const PasswordStrengthIndicator: React.FC<PasswordStrengthIndicatorProps> = ({
  password,
  showLabel = true,
}) => {
  const getPasswordStrength = (password: string) => {
    if (!password) return { score: 0, label: '', color: COLORS.textMuted, feedback: [] };
    
    let score = 0;
    const feedback: string[] = [];
    
    // Length check
    if (password.length >= 8) {
      score += 1;
    } else {
      feedback.push('At least 8 characters');
    }
    
    // Lowercase check
    if (/[a-z]/.test(password)) {
      score += 1;
    } else {
      feedback.push('Include lowercase letters');
    }
    
    // Uppercase check
    if (/[A-Z]/.test(password)) {
      score += 1;
    } else {
      feedback.push('Include uppercase letters');
    }
    
    // Numbers check
    if (/\d/.test(password)) {
      score += 1;
    } else {
      feedback.push('Include numbers');
    }
    
    // Special characters check
    if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      score += 1;
    } else {
      feedback.push('Include special characters');
    }
    
    // Determine strength level
    let label = '';
    let color = COLORS.textMuted;
    
    if (score === 0) {
      label = '';
      color = COLORS.textMuted;
    } else if (score <= 2) {
      label = 'Weak';
      color = COLORS.error;
    } else if (score <= 3) {
      label = 'Fair';
      color = COLORS.warning;
    } else if (score <= 4) {
      label = 'Good';
      color = COLORS.success;
    } else {
      label = 'Strong';
      color = COLORS.primary;
    }
    
    return { score, label, color, feedback };
  };

  const strength = getPasswordStrength(password);
  const progressBars = 5; // Total number of strength criteria

  return (
    <View style={styles.container}>
      {showLabel && (
        <View style={styles.labelContainer}>
          <Caption variant="xs" color={COLORS.textSecondary}>
            Password Strength
          </Caption>
          {strength.label && (
            <Caption variant="xs" color={strength.color} weight="medium">
              {strength.label}
            </Caption>
          )}
        </View>
      )}
      
      <View style={styles.progressContainer}>
        {Array.from({ length: progressBars }, (_, index) => (
          <View
            key={index}
            style={[
              styles.progressBar,
              index < strength.score && { backgroundColor: strength.color },
            ]}
          />
        ))}
      </View>
      
      {password && strength.feedback.length > 0 && (
        <View style={styles.feedbackContainer}>
          {strength.feedback.slice(0, 2).map((item, index) => (
            <Caption key={index} variant="xs" color={COLORS.textMuted} style={styles.feedback}>
              • {item}
            </Caption>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: SPACING[2],
  },
  labelContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SPACING[2],
  },
  progressContainer: {
    flexDirection: 'row',
    gap: SPACING[1],
  },
  progressBar: {
    flex: 1,
    height: 4,
    backgroundColor: COLORS.border,
    borderRadius: 2,
  },
  feedbackContainer: {
    marginTop: SPACING[2],
  },
  feedback: {
    marginBottom: SPACING[1],
  },
}); 