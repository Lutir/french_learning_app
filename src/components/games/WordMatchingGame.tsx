import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Dimensions,
  Alert,
} from 'react-native';
import { FrenchWord } from '../../types/lessons';
import { Text as CustomText, Heading, Body, Caption } from '../ui/Text';
import { COLORS, SPACING } from '../../constants';

interface WordMatchingGameProps {
  words: FrenchWord[];
  onComplete: (score: number, timeSpent: number, mistakes: number) => void;
  onExit: () => void;
}

interface GameSet {
  id: string;
  words: FrenchWord[];
  isCompleted: boolean;
  score: number;
  mistakes: number;
}

interface MatchItem {
  id: string;
  text: string;
  isFrench: boolean;
  isMatched: boolean;
  isSelected: boolean;
  matchedWith?: string;
  wordId: string;
}

const { width: screenWidth } = Dimensions.get('window');

export const WordMatchingGame: React.FC<WordMatchingGameProps> = ({
  words,
  onComplete,
  onExit,
}) => {
  const [gameState, setGameState] = useState<'playing' | 'completed'>('playing');
  const [currentSetIndex, setCurrentSetIndex] = useState(0);
  const [totalScore, setTotalScore] = useState(0);
  const [totalMistakes, setTotalMistakes] = useState(0);
  const [startTime] = useState(Date.now());
  const [selectedItem, setSelectedItem] = useState<MatchItem | null>(null);
  const [matchItems, setMatchItems] = useState<MatchItem[]>([]);
  const [completedMatches, setCompletedMatches] = useState(0);
  
  // Create game sets with 6 words each
  const gameSets: GameSet[] = React.useMemo(() => {
    const sets: GameSet[] = [];
    for (let i = 0; i < words.length; i += 6) {
      sets.push({
        id: `set-${i / 6 + 1}`,
        words: words.slice(i, i + 6),
        isCompleted: false,
        score: 0,
        mistakes: 0,
      });
    }
    return sets;
  }, [words]);
  
  const currentSet = gameSets[currentSetIndex];
  const isLastSet = currentSetIndex === gameSets.length - 1;

  const scaleAnim = useRef(new Animated.Value(1)).current;
  const shakeAnim = useRef(new Animated.Value(0)).current;

  // Initialize game items for current set
  useEffect(() => {
    if (!currentSet) return;
    
    const frenchItems: MatchItem[] = currentSet.words.map(word => ({
      id: `french-${word.id}`,
      text: word.french,
      isFrench: true,
      isMatched: false,
      isSelected: false,
      wordId: word.id,
    }));

    const englishItems: MatchItem[] = currentSet.words.map(word => ({
      id: `english-${word.id}`,
      text: word.english,
      isFrench: false,
      isMatched: false,
      isSelected: false,
      wordId: word.id,
    }));

    // Shuffle the items
    const shuffledItems = [...frenchItems, ...englishItems].sort(() => Math.random() - 0.5);
    setMatchItems(shuffledItems);
    setCompletedMatches(0);
  }, [currentSet]);

  const handleItemPress = (item: MatchItem) => {
    if (item.isMatched) return;

    if (!selectedItem) {
      // First selection
      setSelectedItem(item);
      setMatchItems(prev => 
        prev.map(i => ({ ...i, isSelected: i.id === item.id }))
      );
    } else {
      // Second selection - check for match
      if (selectedItem.id === item.id) {
        // Same item clicked - deselect
        setSelectedItem(null);
        setMatchItems(prev => 
          prev.map(i => ({ ...i, isSelected: false }))
        );
        return;
      }

      // Simplified matching logic - check if they have the same wordId
      const isMatch = selectedItem.wordId === item.wordId && selectedItem.isFrench !== item.isFrench;

      if (isMatch) {
        // Correct match
        setTotalScore(prev => prev + 10);
        setCompletedMatches(prev => prev + 1);
        
        setMatchItems(prev => 
          prev.map(i => ({
            ...i,
            isMatched: i.id === selectedItem.id || i.id === item.id ? true : i.isMatched,
            isSelected: false,
            matchedWith: i.id === selectedItem.id ? item.id : i.id === item.id ? selectedItem.id : i.matchedWith,
          }))
        );

        // Animate correct match
        Animated.sequence([
          Animated.timing(scaleAnim, {
            toValue: 1.1,
            duration: 150,
            useNativeDriver: true,
          }),
          Animated.timing(scaleAnim, {
            toValue: 1,
            duration: 150,
            useNativeDriver: true,
          }),
        ]).start();

        setSelectedItem(null);

        // Check if current set is complete
        if (completedMatches + 1 === currentSet.words.length) {
          setTimeout(() => {
            if (isLastSet) {
              // Game is complete
              const timeSpent = Math.floor((Date.now() - startTime) / 1000);
              setGameState('completed');
              onComplete(totalScore + 10, timeSpent, totalMistakes);
            } else {
              // Move to next set
              setCurrentSetIndex(prev => prev + 1);
            }
          }, 500);
        }
      } else {
        // Incorrect match
        setTotalMistakes(prev => prev + 1);
        
        // Animate shake for incorrect match
        Animated.sequence([
          Animated.timing(shakeAnim, {
            toValue: 10,
            duration: 100,
            useNativeDriver: true,
          }),
          Animated.timing(shakeAnim, {
            toValue: -10,
            duration: 100,
            useNativeDriver: true,
          }),
          Animated.timing(shakeAnim, {
            toValue: 0,
            duration: 100,
            useNativeDriver: true,
          }),
        ]).start();

        // Reset selection after delay
        setTimeout(() => {
          setSelectedItem(null);
          setMatchItems(prev => 
            prev.map(i => ({ ...i, isSelected: false }))
          );
        }, 300);
      }
    }
  };

  const getItemStyle = (item: MatchItem) => {
    const baseStyle = [
      styles.item,
      item.isFrench ? styles.frenchItem : styles.englishItem,
    ];

    if (item.isMatched) {
      baseStyle.push(styles.matchedItem);
    } else if (item.isSelected) {
      baseStyle.push(styles.selectedItem);
    }

    return baseStyle;
  };

  const frenchItems = matchItems.filter(item => item.isFrench && !item.isMatched);
  const englishItems = matchItems.filter(item => !item.isFrench && !item.isMatched);
  const matchedItems = matchItems.filter(item => item.isMatched);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={onExit} style={styles.exitButton}>
          <CustomText style={styles.exitText}>✕</CustomText>
        </TouchableOpacity>
        
        <View style={styles.stats}>
          <View style={styles.stat}>
            <Caption>Score</Caption>
            <Body weight="semibold" color={COLORS.primary}>{totalScore}</Body>
          </View>
          <View style={styles.stat}>
            <Caption>Set</Caption>
            <Body weight="semibold">{currentSetIndex + 1}/{gameSets.length}</Body>
          </View>
          <View style={styles.stat}>
            <Caption>Matches</Caption>
            <Body weight="semibold">{completedMatches}/{currentSet?.words.length || 0}</Body>
          </View>
          <View style={styles.stat}>
            <Caption>Mistakes</Caption>
            <Body weight="semibold" color={COLORS.error}>{totalMistakes}</Body>
          </View>
        </View>
      </View>

      {/* Instructions */}
      <View style={styles.instructions}>
        <Heading variant="lg" align="center">Match French words with their meanings</Heading>
        <Body align="center" color={COLORS.textSecondary} style={styles.instructionText}>
          Tap a French word, then tap its English translation
        </Body>
      </View>

      {/* Game Area */}
      <View style={styles.gameArea}>
        {/* French Words */}
        <View style={styles.column}>
          <Heading variant="lg" align="center" style={styles.columnTitle}>
            French
          </Heading>
          <View style={styles.itemsContainer}>
            {frenchItems.map((item) => (
              <Animated.View
                key={item.id}
                style={[
                  getItemStyle(item),
                  {
                    transform: [
                      { scale: item.isSelected ? scaleAnim : 1 },
                      { translateX: item.isSelected ? shakeAnim : 0 },
                    ],
                  },
                ]}
              >
                <TouchableOpacity
                  onPress={() => handleItemPress(item)}
                  style={styles.itemTouchable}
                >
                  <CustomText style={styles.itemText}>{item.text}</CustomText>
                </TouchableOpacity>
              </Animated.View>
            ))}
          </View>
        </View>

        {/* English Words */}
        <View style={styles.column}>
          <Heading variant="lg" align="center" style={styles.columnTitle}>
            English
          </Heading>
          <View style={styles.itemsContainer}>
            {englishItems.map((item) => (
              <Animated.View
                key={item.id}
                style={[
                  getItemStyle(item),
                  {
                    transform: [
                      { scale: item.isSelected ? scaleAnim : 1 },
                      { translateX: item.isSelected ? shakeAnim : 0 },
                    ],
                  },
                ]}
              >
                <TouchableOpacity
                  onPress={() => handleItemPress(item)}
                  style={styles.itemTouchable}
                >
                  <CustomText style={styles.itemText}>{item.text}</CustomText>
                </TouchableOpacity>
              </Animated.View>
            ))}
          </View>
        </View>
      </View>

      {/* Progress Bar */}
      <View style={styles.progressContainer}>
        <View style={styles.progressBar}>
          <View 
            style={[
              styles.progressFill, 
              { width: `${(completedMatches / (currentSet?.words.length || 1)) * 100}%` }
            ]} 
          />
        </View>
        <Caption align="center" style={styles.progressText}>
          Set {currentSetIndex + 1}: {completedMatches} of {currentSet?.words.length || 0} matches completed
        </Caption>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: SPACING[4],
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SPACING[4],
  },
  exitButton: {
    padding: SPACING[2],
  },
  exitText: {
    fontSize: 20,
    color: COLORS.textSecondary,
  },
  stats: {
    flexDirection: 'row',
    gap: SPACING[4],
  },
  stat: {
    alignItems: 'center',
  },
  instructions: {
    marginBottom: SPACING[6],
  },
  instructionText: {
    marginTop: SPACING[2],
  },
  gameArea: {
    flex: 1,
    flexDirection: 'row',
    gap: SPACING[4],
  },
  column: {
    flex: 1,
  },
  columnTitle: {
    marginBottom: SPACING[3],
  },
  itemsContainer: {
    gap: SPACING[2],
  },
  item: {
    borderRadius: 12,
    padding: SPACING[3],
    borderWidth: 2,
    borderColor: COLORS.border,
    backgroundColor: COLORS.surface,
  },
  frenchItem: {
    borderColor: COLORS.primary,
    backgroundColor: COLORS.primary + '10',
  },
  englishItem: {
    borderColor: COLORS.success,
    backgroundColor: COLORS.success + '10',
  },
  selectedItem: {
    borderColor: COLORS.warning,
    backgroundColor: COLORS.warning + '20',
    transform: [{ scale: 1.05 }],
  },
  matchedItem: {
    borderColor: COLORS.success,
    backgroundColor: COLORS.success + '20',
    opacity: 0.7,
  },
  itemTouchable: {
    alignItems: 'center',
  },
  itemText: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },

  progressContainer: {
    marginTop: SPACING[4],
  },
  progressBar: {
    height: 8,
    backgroundColor: COLORS.border,
    borderRadius: 4,
    overflow: 'hidden',
    marginBottom: SPACING[2],
  },
  progressFill: {
    height: '100%',
    backgroundColor: COLORS.primary,
    borderRadius: 4,
  },
  progressText: {
    color: COLORS.textSecondary,
  },
}); 