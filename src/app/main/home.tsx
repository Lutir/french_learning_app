import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';
import ProgressBar from '../../components/ui/ProgressBar';
import { COLORS, TYPOGRAPHY, SPACING } from '../../constants';

const HomeScreen: React.FC = () => {
  const currentLevel = 1;
  const currentXP = 150;
  const xpToNextLevel = 500;
  const progress = currentXP / xpToNextLevel;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.greeting}>Bonjour! 👋</Text>
        <Text style={styles.subtitle}>Continue your French journey</Text>
      </View>

      <Card style={styles.progressCard}>
        <Text style={styles.cardTitle}>Your Progress</Text>
        <View style={styles.progressInfo}>
          <Text style={styles.levelText}>Level {currentLevel}</Text>
          <Text style={styles.xpText}>{currentXP} / {xpToNextLevel} XP</Text>
        </View>
        <ProgressBar progress={progress} color={COLORS.primary} />
      </Card>

      <Card style={styles.quickActionsCard}>
        <Text style={styles.cardTitle}>Quick Actions</Text>
        <View style={styles.buttonContainer}>
          <Button 
            title="Continue Lesson" 
            onPress={() => console.log('Continue lesson')} 
            style={styles.actionButton}
          />
          <Button 
            title="Practice Games" 
            onPress={() => console.log('Practice games')} 
            style={styles.actionButton}
          />
          <Button 
            title="View Progress" 
            onPress={() => console.log('View progress')} 
            style={styles.actionButton}
          />
        </View>
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    padding: SPACING[6],
    paddingTop: SPACING[8],
  },
  greeting: {
    fontSize: TYPOGRAPHY.fontSize['2xl'],
    fontWeight: '700',
    color: COLORS.textPrimary,
    marginBottom: SPACING.xs,
  },
  subtitle: {
    fontSize: TYPOGRAPHY.fontSize.base,
    color: COLORS.textSecondary,
  },
  progressCard: {
    margin: SPACING[6],
    marginTop: SPACING[4],
  },
  quickActionsCard: {
    margin: SPACING[6],
    marginTop: SPACING[4],
  },
  cardTitle: {
    fontSize: TYPOGRAPHY.fontSize.lg,
    fontWeight: '600',
    color: COLORS.textPrimary,
    marginBottom: SPACING.md,
  },
  progressInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: SPACING.sm,
  },
  levelText: {
    fontSize: TYPOGRAPHY.fontSize.base,
    fontWeight: '500',
    color: COLORS.textPrimary,
  },
  xpText: {
    fontSize: TYPOGRAPHY.fontSize.base,
    color: COLORS.textSecondary,
  },
  buttonContainer: {
    gap: SPACING[3],
  },
  actionButton: {
    marginBottom: SPACING[3],
  },
});

export default HomeScreen; 