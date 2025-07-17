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

type LanguageSelectionScreenNavigationProp = StackNavigationProp<RootStackParamList, 'LanguageSelection'>;

interface Props {
  navigation: LanguageSelectionScreenNavigationProp;
}

interface ProficiencyOption {
  id: 'beginner' | 'intermediate' | 'advanced';
  title: string;
  description: string;
  icon: string;
  features: string[];
}

const proficiencyOptions: ProficiencyOption[] = [
  {
    id: 'beginner',
    title: 'Beginner',
    description: 'New to French or need a refresher',
    icon: '🌱',
    features: ['Basic vocabulary', 'Simple phrases', 'Pronunciation guide', 'Step-by-step lessons'],
  },
  {
    id: 'intermediate',
    title: 'Intermediate',
    description: 'Some French knowledge, want to improve',
    icon: '🌿',
    features: ['Conversational skills', 'Grammar practice', 'Cultural context', 'Advanced vocabulary'],
  },
  {
    id: 'advanced',
    title: 'Advanced',
    description: 'Good French, want to perfect it',
    icon: '🌳',
    features: ['Complex conversations', 'Literature', 'Business French', 'Native-level fluency'],
  },
];

const LanguageSelectionScreen: React.FC<Props> = ({ navigation }) => {
  const { updateUser } = useAuthStore();
  const [selectedLevel, setSelectedLevel] = useState<'beginner' | 'intermediate' | 'advanced' | null>(null);

  const handleLevelSelect = (level: 'beginner' | 'intermediate' | 'advanced') => {
    setSelectedLevel(level);
  };

  const handleContinue = () => {
    if (selectedLevel) {
      // Update user's proficiency level
      updateUser({ proficiencyLevel: selectedLevel });
      navigation.navigate('LearningGoals');
    }
  };

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <Heading variant="3xl" align="center" style={styles.title}>
          What's your French level?
        </Heading>
        <Body align="center" color={COLORS.textSecondary} style={styles.subtitle}>
          We'll personalize your learning experience based on your current level
        </Body>
      </View>

      <View style={styles.optionsContainer}>
        {proficiencyOptions.map((option) => (
          <TouchableOpacity
            key={option.id}
            style={[
              styles.optionCard,
              selectedLevel === option.id && styles.optionCardSelected,
            ]}
            onPress={() => handleLevelSelect(option.id)}
            activeOpacity={0.8}
          >
            <View style={styles.optionHeader}>
              <Text style={styles.optionIcon}>{option.icon}</Text>
              <View style={styles.optionText}>
                <Text variant="lg" weight="semibold" style={styles.optionTitle}>
                  {option.title}
                </Text>
                <Caption color={COLORS.textSecondary} style={styles.optionDescription}>
                  {option.description}
                </Caption>
              </View>
            </View>
            
            <View style={styles.featuresList}>
              {option.features.map((feature, index) => (
                <View key={index} style={styles.featureItem}>
                  <Text style={styles.featureIcon}>✓</Text>
                  <Caption style={styles.featureText}>{feature}</Caption>
                </View>
              ))}
            </View>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="Continue"
          onPress={handleContinue}
          variant="primary"
          size="lg"
          disabled={!selectedLevel}
          style={styles.continueButton}
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
  optionsContainer: {
    marginBottom: SPACING[8],
  },
  optionCard: {
    backgroundColor: COLORS.surface,
    borderRadius: 16,
    padding: SPACING[6],
    marginBottom: SPACING[4],
    borderWidth: 2,
    borderColor: COLORS.border,
  },
  optionCardSelected: {
    borderColor: COLORS.primary,
    backgroundColor: COLORS.primary + '08',
  },
  optionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SPACING[4],
  },
  optionIcon: {
    fontSize: 32,
    marginRight: SPACING[4],
  },
  optionText: {
    flex: 1,
  },
  optionTitle: {
    marginBottom: SPACING[1],
  },
  optionDescription: {
    lineHeight: 20,
  },
  featuresList: {
    marginTop: SPACING[3],
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SPACING[2],
  },
  featureIcon: {
    color: COLORS.success,
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: SPACING[2],
  },
  featureText: {
    flex: 1,
  },
  buttonContainer: {
    marginTop: 'auto',
  },
  continueButton: {
    marginBottom: SPACING[4],
  },
});

export default LanguageSelectionScreen; 