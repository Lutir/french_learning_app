import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Card from '../../../components/ui/Card';
import ProgressBar from '../../../components/ui/ProgressBar';
import { COLORS, TYPOGRAPHY, SPACING } from '../../../constants';

const LessonsScreen: React.FC = () => {
  const lessons = [
    { id: 1, title: 'Greetings', progress: 1.0, completed: true },
    { id: 2, title: 'Numbers 1-10', progress: 0.7, completed: false },
    { id: 3, title: 'Colors', progress: 0.0, completed: false },
    { id: 4, title: 'Family Members', progress: 0.0, completed: false },
  ];

  const handleLessonPress = (lessonId: number) => {
    console.log(`Navigate to lesson ${lessonId}`);
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
      <View style={styles.header}>
        <Text style={styles.title}>Lessons</Text>
        <Text style={styles.subtitle}>Master French step by step</Text>
      </View>

      {lessons.map((lesson) => (
        <TouchableOpacity
          key={lesson.id}
          onPress={() => handleLessonPress(lesson.id)}
          activeOpacity={0.7}
        >
          <Card style={styles.lessonCard}>
            <View style={styles.lessonHeader}>
              <Text style={styles.lessonTitle}>{lesson.title}</Text>
              {lesson.completed && (
                <Text style={styles.completedBadge}>✓</Text>
              )}
            </View>
            <ProgressBar progress={lesson.progress} />
            <Text style={styles.progressText}>
              {Math.round(lesson.progress * 100)}% Complete
            </Text>
          </Card>
        </TouchableOpacity>
      ))}
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
  lessonCard: {
    margin: SPACING.lg,
    marginTop: 0,
  },
  lessonHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SPACING.sm,
  },
  lessonTitle: {
    fontSize: TYPOGRAPHY.fontSize.lg,
    fontFamily: TYPOGRAPHY.fontFamily.semibold,
    color: COLORS.textPrimary,
  },
  completedBadge: {
    fontSize: TYPOGRAPHY.fontSize.lg,
    color: COLORS.success,
    fontFamily: TYPOGRAPHY.fontFamily.bold,
  },
  progressText: {
    fontSize: TYPOGRAPHY.fontSize.sm,
    color: COLORS.textSecondary,
    marginTop: SPACING.xs,
  },
});

export default LessonsScreen; 