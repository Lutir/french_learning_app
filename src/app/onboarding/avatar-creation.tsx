import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useAuthStore } from '../../stores';
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

type AvatarCreationScreenNavigationProp = StackNavigationProp<RootStackParamList, 'AvatarCreation'>;

interface Props {
  navigation: AvatarCreationScreenNavigationProp;
}

interface AvatarOption {
  id: string;
  emoji: string;
  name: string;
}

const avatarOptions: AvatarOption[] = [
  { id: '1', emoji: '👨‍🎓', name: 'Student' },
  { id: '2', emoji: '👩‍💼', name: 'Professional' },
  { id: '3', emoji: '🧑‍🎨', name: 'Creative' },
  { id: '4', emoji: '👨‍⚕️', name: 'Healthcare' },
  { id: '5', emoji: '👩‍🍳', name: 'Chef' },
  { id: '6', emoji: '🧑‍🚀', name: 'Explorer' },
  { id: '7', emoji: '👨‍🎤', name: 'Artist' },
  { id: '8', emoji: '👩‍🏫', name: 'Teacher' },
  { id: '9', emoji: '🧑‍💻', name: 'Tech' },
  { id: '10', emoji: '👨‍🔬', name: 'Scientist' },
  { id: '11', emoji: '👩‍⚖️', name: 'Lawyer' },
  { id: '12', emoji: '🧑‍🌾', name: 'Farmer' },
];

const AvatarCreationScreen: React.FC<Props> = ({ navigation }) => {
  const { updateUser } = useAuthStore();
  const [selectedAvatar, setSelectedAvatar] = useState<string | null>(null);

  const handleAvatarSelect = (avatarId: string) => {
    setSelectedAvatar(avatarId);
  };

  const handleComplete = () => {
    if (selectedAvatar) {
      // Update user's avatar
      updateUser({ avatar: selectedAvatar });
    }
    
    // Complete onboarding and navigate to main app
    navigation.navigate('MainApp');
  };

  const handleBack = () => {
    navigation.goBack();
  };

  const handleSkip = () => {
    // Skip avatar selection and complete onboarding
    navigation.navigate('MainApp');
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <Heading variant="3xl" align="center" style={styles.title}>
          Choose your avatar
        </Heading>
        <Body align="center" color={COLORS.textSecondary} style={styles.subtitle}>
          Pick an avatar that represents you or your learning goals
        </Body>
      </View>

      <View style={styles.avatarContainer}>
        <View style={styles.avatarGrid}>
          {avatarOptions.map((avatar) => (
            <TouchableOpacity
              key={avatar.id}
              style={[
                styles.avatarCard,
                selectedAvatar === avatar.id && styles.avatarCardSelected,
              ]}
              onPress={() => handleAvatarSelect(avatar.id)}
              activeOpacity={0.8}
            >
              <Text style={styles.avatarEmoji}>{avatar.emoji}</Text>
              <Caption align="center" style={styles.avatarName}>
                {avatar.name}
              </Caption>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.infoCard}>
        <Text style={styles.infoIcon}>✨</Text>
        <Body color={COLORS.textSecondary} style={styles.infoText}>
          You can change your avatar anytime in your profile settings.
        </Body>
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="Complete Setup"
          onPress={handleComplete}
          variant="primary"
          size="lg"
          disabled={!selectedAvatar}
          style={styles.completeButton}
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
  avatarContainer: {
    marginBottom: SPACING[6],
  },
  avatarGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: SPACING[3],
  },
  avatarCard: {
    width: '30%',
    aspectRatio: 1,
    backgroundColor: COLORS.surface,
    borderRadius: 16,
    padding: SPACING[4],
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: COLORS.border,
  },
  avatarCardSelected: {
    borderColor: COLORS.primary,
    backgroundColor: COLORS.primary + '08',
  },
  avatarEmoji: {
    fontSize: 32,
    marginBottom: SPACING[2],
  },
  avatarName: {
    fontSize: 10,
    textAlign: 'center',
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
  completeButton: {
    marginBottom: SPACING[3],
  },
  skipButton: {
    marginBottom: SPACING[4],
  },
});

export default AvatarCreationScreen; 