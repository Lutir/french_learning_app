import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface UserPreferences {
  notifications: boolean;
  soundEnabled: boolean;
  hapticFeedback: boolean;
  autoPlayAudio: boolean;
  theme: 'light' | 'dark' | 'system';
  language: 'en' | 'fr';
}

export interface UserProgress {
  totalXP: number;
  level: number;
  streak: number;
  longestStreak: number;
  lessonsCompleted: number;
  totalStudyTime: number; // in minutes
  lastStudyDate: Date | null;
}

export interface UserState {
  // State
  preferences: UserPreferences;
  progress: UserProgress;
  
  // Actions
  updatePreferences: (updates: Partial<UserPreferences>) => void;
  updateProgress: (updates: Partial<UserProgress>) => void;
  addXP: (amount: number) => void;
  incrementStreak: () => void;
  resetStreak: () => void;
  addStudyTime: (minutes: number) => void;
  completeLesson: () => void;
}

const defaultPreferences: UserPreferences = {
  notifications: true,
  soundEnabled: true,
  hapticFeedback: true,
  autoPlayAudio: true,
  theme: 'system',
  language: 'en',
};

const defaultProgress: UserProgress = {
  totalXP: 0,
  level: 1,
  streak: 0,
  longestStreak: 0,
  lessonsCompleted: 0,
  totalStudyTime: 0,
  lastStudyDate: null,
};

export const useUserStore = create<UserState>()(
  persist(
    (set, get) => ({
      // Initial state
      preferences: defaultPreferences,
      progress: defaultProgress,

      // Update preferences
      updatePreferences: (updates: Partial<UserPreferences>) => {
        set((state) => ({
          preferences: { ...state.preferences, ...updates },
        }));
      },

      // Update progress
      updateProgress: (updates: Partial<UserProgress>) => {
        set((state) => ({
          progress: { ...state.progress, ...updates },
        }));
      },

      // Add XP and handle leveling
      addXP: (amount: number) => {
        set((state) => {
          const newTotalXP = state.progress.totalXP + amount;
          const newLevel = Math.floor(newTotalXP / 100) + 1; // Level up every 100 XP
          
          return {
            progress: {
              ...state.progress,
              totalXP: newTotalXP,
              level: newLevel,
            },
          };
        });
      },

      // Increment streak
      incrementStreak: () => {
        set((state) => {
          const newStreak = state.progress.streak + 1;
          const newLongestStreak = Math.max(newStreak, state.progress.longestStreak);
          
          return {
            progress: {
              ...state.progress,
              streak: newStreak,
              longestStreak: newLongestStreak,
            },
          };
        });
      },

      // Reset streak
      resetStreak: () => {
        set((state) => ({
          progress: {
            ...state.progress,
            streak: 0,
          },
        }));
      },

      // Add study time
      addStudyTime: (minutes: number) => {
        set((state) => ({
          progress: {
            ...state.progress,
            totalStudyTime: state.progress.totalStudyTime + minutes,
            lastStudyDate: new Date(),
          },
        }));
      },

      // Complete lesson
      completeLesson: () => {
        set((state) => ({
          progress: {
            ...state.progress,
            lessonsCompleted: state.progress.lessonsCompleted + 1,
          },
        }));
      },
    }),
    {
      name: 'user-storage',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
); 