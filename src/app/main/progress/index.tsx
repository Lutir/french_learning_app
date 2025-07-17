import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Card from '../../../components/ui/Card';
import ProgressBar from '../../../components/ui/ProgressBar';
import { COLORS, TYPOGRAPHY, SPACING } from '../../../constants';

const ProgressScreen: React.FC = () => {
  const stats = {
    currentLevel: 1,
    totalXP: 150,
    lessonsCompleted: 2,
    gamesPlayed: 5,
    currentStreak: 3,
    longestStreak: 7,
  };

  const achievements = [
    { id: 1, title: 'First Lesson', description: 'Complete your first lesson', earned: true },
    { id: 2, title: '3-Day Streak', description: 'Learn for 3 days in a row', earned: true },
    { id: 3, title: 'Game Master', description: 'Play 10 games', earned: false },
  ];

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
      <View style={styles.header}>
        <Text style={styles.title}>Your Progress</Text>
        <Text style={styles.subtitle}>Track your French learning journey</Text>
      </View>

      <Card style={styles.statsCard}>
        <Text style={styles.cardTitle}>Statistics</Text>
        <View style={styles.statsGrid}>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>{stats.currentLevel}</Text>
            <Text style={styles.statLabel}>Level</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>{stats.totalXP}</Text>
            <Text style={styles.statLabel}>Total XP</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>{stats.lessonsCompleted}</Text>
            <Text style={styles.statLabel}>Lessons</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>{stats.gamesPlayed}</Text>
            <Text style={styles.statLabel}>Games</Text>
          </View>
        </View>
      </Card>

      <Card style={styles.streakCard}>
        <Text style={styles.cardTitle}>Learning Streak</Text>
        <View style={styles.streakInfo}>
          <Text style={styles.streakValue}>{stats.currentStreak} days</Text>
          <Text style={styles.streakLabel}>Current Streak</Text>
        </View>
        <Text style={styles.longestStreak}>Longest: {stats.longestStreak} days</Text>
      </Card>

      <Card style={styles.achievementsCard}>
        <Text style={styles.cardTitle}>Achievements</Text>
        {achievements.map((achievement) => (
          <View key={achievement.id} style={styles.achievementItem}>
            <View style={styles.achievementInfo}>
              <Text style={styles.achievementTitle}>{achievement.title}</Text>
              <Text style={styles.achievementDescription}>{achievement.description}</Text>
            </View>
            <Text style={[styles.achievementStatus, { color: achievement.earned ? COLORS.success : COLORS.textMuted }]}>
              {achievement.earned ? '✓' : '○'}
            </Text>
          </View>
        ))}
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  scrollContent: {
    paddingBottom: 20, // Small padding for content spacing
  },
  header: {
    padding: SPACING.lg,
    paddingTop: SPACING.md,
  },
  title: {
    fontSize: TYPOGRAPHY.fontSize['2xl'],
    fontFamily: TYPOGRAPHY.fontFamily.bold,
    color: COLORS.textPrimary,
    marginBottom: SPACING.xs,
  },
  subtitle: {
    fontSize: TYPOGRAPHY.fontSize.base,
    color: COLORS.textSecondary,
  },
  statsCard: {
    margin: SPACING.lg,
  },
  streakCard: {
    margin: SPACING.lg,
  },
  achievementsCard: {
    margin: SPACING.lg,
  },
  cardTitle: {
    fontSize: TYPOGRAPHY.fontSize.lg,
    fontFamily: TYPOGRAPHY.fontFamily.semibold,
    color: COLORS.textPrimary,
    marginBottom: SPACING.md,
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  statItem: {
    width: '48%',
    alignItems: 'center',
    marginBottom: SPACING.md,
  },
  statValue: {
    fontSize: TYPOGRAPHY.fontSize['2xl'],
    fontFamily: TYPOGRAPHY.fontFamily.bold,
    color: COLORS.primary,
  },
  statLabel: {
    fontSize: TYPOGRAPHY.fontSize.sm,
    color: COLORS.textSecondary,
    marginTop: SPACING.xs,
  },
  streakInfo: {
    alignItems: 'center',
    marginBottom: SPACING.sm,
  },
  streakValue: {
    fontSize: TYPOGRAPHY.fontSize['3xl'],
    fontFamily: TYPOGRAPHY.fontFamily.bold,
    color: COLORS.streak,
  },
  streakLabel: {
    fontSize: TYPOGRAPHY.fontSize.base,
    color: COLORS.textSecondary,
  },
  longestStreak: {
    fontSize: TYPOGRAPHY.fontSize.sm,
    color: COLORS.textSecondary,
    textAlign: 'center',
  },
  achievementItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: SPACING.sm,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.textMuted,
  },
  achievementInfo: {
    flex: 1,
  },
  achievementTitle: {
    fontSize: TYPOGRAPHY.fontSize.base,
    fontFamily: TYPOGRAPHY.fontFamily.medium,
    color: COLORS.textPrimary,
  },
  achievementDescription: {
    fontSize: TYPOGRAPHY.fontSize.sm,
    color: COLORS.textSecondary,
    marginTop: SPACING.xs,
  },
  achievementStatus: {
    fontSize: TYPOGRAPHY.fontSize.lg,
    fontFamily: TYPOGRAPHY.fontFamily.bold,
  },
});

export default ProgressScreen; 