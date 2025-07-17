import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useAuthStore, useUserStore } from '../../stores';
import Button from '../../components/ui/Button';
import { Text, Heading, Body, Caption } from '../../components/ui/Text';
import { COLORS, SPACING } from '../../constants';

type RootStackParamList = {
  Welcome: undefined;
  Login: undefined;
  Register: undefined;
  LanguageSelection: undefined;
  LearningGoals: undefined;
  AvatarCreation: undefined;
  MainApp: undefined;
};

type LearningGoalsScreenNavigationProp = StackNavigationProp<RootStackParamList, 'LearningGoals'>;

interface Props {
  navigation: LearningGoalsScreenNavigationProp;
}

interface GoalOption {
  id: number;
  title: string;
  description: string;
  icon: string;
  timeRange: string;
}

const goalOptions: GoalOption[] = [
  {
    id: 5,
    title: 'Casual Learner',
    description: 'Just getting started',
    icon: '🌱',
    timeRange: '5 minutes/day',
  },
  {
    id: 15,
    title: 'Regular Learner',
    description: 'Building a habit',
    icon: '🌿',
    timeRange: '15 minutes/day',
  },
  {
    id: 30,
    title: 'Dedicated Learner',
    description: 'Serious about progress',
    icon: '🌳',
    timeRange: '30 minutes/day',
  },
  {
    id: 60,
    title: 'Intensive Learner',
    description: 'Fast-track to fluency',
    icon: '🚀',
    timeRange: '60 minutes/day',
  },
];

const LearningGoalsScreen: React.FC<Props> = ({ navigation }) => {
  const { updateUser } = useAuthStore();
  const { updatePreferences } = useUserStore();
  const [selectedGoal, setSelectedGoal] = useState<number | null>(null);

  const handleGoalSelect = (goalId: number) => {
    setSelectedGoal(goalId);
  };

  const handleContinue = () => {
    if (selectedGoal) {
      // Update user's daily goal
      updateUser({ dailyGoal: selectedGoal });
      
      // Set up default preferences
      updatePreferences({
        notifications: true,
        soundEnabled: true,
        hapticFeedback: true,
        autoPlayAudio: true,
      });
      
      navigation.navigate('AvatarCreation');
    }
  };

  const handleBack = () => {
    navigation.goBack();
  };

  const handleSkip = () => {
    // Set default goal and continue
    updateUser({ dailyGoal: 15 });
    updatePreferences({
      notifications: true,
      soundEnabled: true,
      hapticFeedback: true,
      autoPlayAudio: true,
    });
    navigation.navigate('AvatarCreation');
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <Heading variant="3xl" align="center" style={styles.title}>
          Set your learning goal
        </Heading>
        <Body align="center" color={COLORS.textSecondary} style={styles.subtitle}>
          Choose how much time you want to spend learning French each day
        </Body>
      </View>

      <View style={styles.goalsContainer}>
        {goalOptions.map((goal) => (
          <TouchableOpacity
            key={goal.id}
            style={[
              styles.goalCard,
              selectedGoal === goal.id && styles.goalCardSelected,
            ]}
            onPress={() => handleGoalSelect(goal.id)}
            activeOpacity={0.8}
          >
            <View style={styles.goalHeader}>
              <Text style={styles.goalIcon}>{goal.icon}</Text>
              <View style={styles.goalText}>
                <Text variant="lg" weight="semibold" style={styles.goalTitle}>
                  {goal.title}
                </Text>
                <Caption color={COLORS.textSecondary} style={styles.goalDescription}>
                  {goal.description}
                </Caption>
              </View>
            </View>
            
            <View style={styles.timeContainer}>
              <Text variant="sm" weight="medium" color={COLORS.primary}>
                {goal.timeRange}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.infoCard}>
        <Text style={styles.infoIcon}>💡</Text>
        <Body color={COLORS.textSecondary} style={styles.infoText}>
          Don't worry! You can always adjust your daily goal later in your profile settings.
        </Body>
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="Continue"
          onPress={handleContinue}
          variant="primary"
          size="lg"
          disabled={!selectedGoal}
          style={styles.continueButton}
        />
        
        <Button
          title="Skip for now"
          onPress={handleSkip}
          variant="ghost"
          size="md"
          style={styles.skipButton}
        />
        
        <Button
          title="Back"
          onPress={handleBack}
          variant="outline"
          size="md"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  content: {
    flexGrow: 1,
    padding: SPACING[6],
  },
  header: {
    marginBottom: SPACING[8],
  },
  title: {
    marginBottom: SPACING[4],
  },
  subtitle: {
    paddingHorizontal: SPACING[4],
  },
  goalsContainer: {
    marginBottom: SPACING[6],
  },
  goalCard: {
    backgroundColor: COLORS.surface,
    borderRadius: 16,
    padding: SPACING[6],
    marginBottom: SPACING[4],
    borderWidth: 2,
    borderColor: COLORS.border,
  },
  goalCardSelected: {
    borderColor: COLORS.primary,
    backgroundColor: COLORS.primary + '08',
  },
  goalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SPACING[3],
  },
  goalIcon: {
    fontSize: 32,
    marginRight: SPACING[4],
  },
  goalText: {
    flex: 1,
  },
  goalTitle: {
    marginBottom: SPACING[1],
  },
  goalDescription: {
    lineHeight: 20,
  },
  timeContainer: {
    alignItems: 'flex-end',
  },
  infoCard: {
    backgroundColor: COLORS.info + '10',
    borderRadius: 12,
    padding: SPACING[4],
    marginBottom: SPACING[6],
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  infoIcon: {
    fontSize: 20,
    marginRight: SPACING[3],
    marginTop: 2,
  },
  infoText: {
    flex: 1,
    lineHeight: 20,
  },
  buttonContainer: {
    marginTop: 'auto',
  },
  continueButton: {
    marginBottom: SPACING[3],
  },
  skipButton: {
    marginBottom: SPACING[4],
  },
});

export default LearningGoalsScreen; 