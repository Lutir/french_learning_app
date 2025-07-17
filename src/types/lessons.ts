// Lesson and learning content types

export type DifficultyLevel = 'beginner' | 'intermediate' | 'advanced';
export type LessonCategory = 'greetings' | 'numbers' | 'colors' | 'nouns' | 'articles';
export type QuestionType = 'multiple_choice' | 'matching' | 'fill_blank' | 'translation';

export interface FrenchWord {
  id: string;
  french: string;
  english: string;
  pronunciation?: string;
  audioUrl?: string;
  category: LessonCategory;
  difficulty: DifficultyLevel;
  tags: string[];
}

export interface LessonStep {
  id: string;
  type: 'introduction' | 'vocabulary' | 'practice' | 'quiz' | 'review';
  title: string;
  content: string;
  words?: FrenchWord[];
  questions?: QuizQuestion[];
  duration?: number; // in minutes
}

export interface QuizQuestion {
  id: string;
  type: QuestionType;
  question: string;
  correctAnswer: string;
  options?: string[];
  explanation?: string;
  points: number;
}

export interface Lesson {
  id: string;
  title: string;
  description: string;
  category: LessonCategory;
  difficulty: DifficultyLevel;
  order: number; // for progressive learning
  steps: LessonStep[];
  estimatedDuration: number; // in minutes
  prerequisites?: string[]; // lesson IDs that should be completed first
  tags: string[];
  isUnlocked: boolean;
}

export interface UserProgress {
  lessonId: string;
  completedSteps: string[];
  currentStep: string;
  score: number;
  timeSpent: number; // in seconds
  completedAt?: Date;
  mistakes: number;
  accuracy: number; // percentage
}

export interface LearningStats {
  totalLessonsCompleted: number;
  totalWordsLearned: number;
  totalStudyTime: number; // in minutes
  currentStreak: number;
  longestStreak: number;
  totalPoints: number;
  accuracy: number;
  mistakes: number;
  lastStudyDate?: Date;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: 'streak' | 'accuracy' | 'completion' | 'speed' | 'vocabulary';
  criteria: {
    type: 'lessons_completed' | 'words_learned' | 'streak_days' | 'accuracy_percentage' | 'study_time';
    value: number;
  };
  points: number;
  isUnlocked: boolean;
  unlockedAt?: Date;
}

export interface GameScore {
  gameType: 'word_matching' | 'memory' | 'word_scramble';
  score: number;
  timeSpent: number;
  accuracy: number;
  mistakes: number;
  playedAt: Date;
}

export interface UserProfile {
  proficiencyLevel: 'beginner' | 'intermediate' | 'advanced';
  learningGoals: string[];
  preferredStudyTime: number; // minutes per day
  notificationsEnabled: boolean;
  audioEnabled: boolean;
  theme: 'light' | 'dark' | 'auto';
} 