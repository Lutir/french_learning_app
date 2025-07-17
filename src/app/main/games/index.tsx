import React, { useState, useCallback } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, RefreshControl, Modal } from 'react-native';
import Card from '../../../components/ui/Card';
import { WordMatchingGame } from '../../../components/games/WordMatchingGame';
import { getWordsByCategory } from '../../../data/lessons';
import { COLORS, TYPOGRAPHY, SPACING } from '../../../constants';

const GamesScreen: React.FC = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [selectedGame, setSelectedGame] = useState<string | null>(null);
  const [showWordMatching, setShowWordMatching] = useState(false);
  
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
    if (gameId === 1) {
      setShowWordMatching(true);
    } else {
      console.log(`Start game ${gameId}`);
    }
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    // Simulate data refresh
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  }, []);

  const handleWordMatchingComplete = (score: number, timeSpent: number, mistakes: number) => {
    console.log(`Word Matching completed! Score: ${score}, Time: ${timeSpent}s, Mistakes: ${mistakes}`);
    setShowWordMatching(false);
    // TODO: Save game results to user progress
  };

  const handleWordMatchingExit = () => {
    setShowWordMatching(false);
  };

  return (
    <>
      <ScrollView 
        style={styles.container} 
        contentContainerStyle={styles.scrollContent}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={[COLORS.primary]}
            tintColor={COLORS.primary}
          />
        }
      >
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

      {/* Word Matching Game Modal */}
      <Modal
        visible={showWordMatching}
        animationType="slide"
        presentationStyle="fullScreen"
      >
        <WordMatchingGame
          words={getWordsByCategory('greetings')}
          onComplete={handleWordMatchingComplete}
          onExit={handleWordMatchingExit}
        />
      </Modal>
    </>
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