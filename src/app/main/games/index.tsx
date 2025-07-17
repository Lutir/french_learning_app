import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Card from '../../../components/ui/Card';
import { COLORS, TYPOGRAPHY, SPACING } from '../../../constants';

const GamesScreen: React.FC = () => {
  const games = [
    {
      id: 1,
      title: 'Word Matching',
      emoji: '🔤',
      description: 'Match French words with their meanings',
      difficulty: 'Easy',
    },
    {
      id: 2,
      title: 'Memory Game',
      emoji: '🧠',
      description: 'Find matching pairs of French words',
      difficulty: 'Medium',
    },
    {
      id: 3,
      title: 'Word Scramble',
      emoji: '🔀',
      description: 'Unscramble French words',
      difficulty: 'Hard',
    },
  ];

  const handleGamePress = (gameId: number) => {
    console.log(`Start game ${gameId}`);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Games</Text>
        <Text style={styles.subtitle}>Learn French through fun games</Text>
      </View>

      {games.map((game) => (
        <TouchableOpacity
          key={game.id}
          onPress={() => handleGamePress(game.id)}
          activeOpacity={0.7}
        >
          <Card style={styles.gameCard}>
            <View style={styles.gameHeader}>
              <Text style={styles.gameEmoji}>{game.emoji}</Text>
              <View style={styles.gameInfo}>
                <Text style={styles.gameTitle}>{game.title}</Text>
                <Text style={styles.gameDescription}>{game.description}</Text>
              </View>
              <View style={[styles.difficultyBadge, { backgroundColor: getDifficultyColor(game.difficulty) }]}>
                <Text style={styles.difficultyText}>{game.difficulty}</Text>
              </View>
            </View>
          </Card>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case 'Easy':
      return COLORS.success;
    case 'Medium':
      return COLORS.warning;
    case 'Hard':
      return COLORS.error;
    default:
      return COLORS.primary;
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    padding: SPACING.lg,
    paddingTop: SPACING.xl,
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
  gameCard: {
    margin: SPACING.lg,
    marginTop: 0,
  },
  gameHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  gameEmoji: {
    fontSize: 40,
    marginRight: SPACING.md,
  },
  gameInfo: {
    flex: 1,
  },
  gameTitle: {
    fontSize: TYPOGRAPHY.fontSize.lg,
    fontFamily: TYPOGRAPHY.fontFamily.semibold,
    color: COLORS.textPrimary,
    marginBottom: SPACING.xs,
  },
  gameDescription: {
    fontSize: TYPOGRAPHY.fontSize.sm,
    color: COLORS.textSecondary,
  },
  difficultyBadge: {
    paddingHorizontal: SPACING.sm,
    paddingVertical: SPACING.xs,
    borderRadius: 12,
  },
  difficultyText: {
    fontSize: TYPOGRAPHY.fontSize.xs,
    color: '#fff',
    fontFamily: TYPOGRAPHY.fontFamily.medium,
  },
});

export default GamesScreen; 