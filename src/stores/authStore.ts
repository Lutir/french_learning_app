import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  proficiencyLevel: 'beginner' | 'intermediate' | 'advanced';
  dailyGoal: number; // minutes per day
  createdAt: Date;
  lastActive: Date;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData {
  email: string;
  password: string;
  name: string;
}

export interface AuthState {
  // State
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  
  // Actions
  login: (credentials: LoginCredentials) => Promise<void>;
  register: (userData: RegisterData) => Promise<void>;
  logout: () => void;
  forgotPassword: (email: string) => Promise<void>;
  clearError: () => void;
  updateUser: (updates: Partial<User>) => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      // Initial state
      user: null,
      isAuthenticated: false,
      isLoading: false,
      error: null,

      // Login action
      login: async (credentials: LoginCredentials) => {
        set({ isLoading: true, error: null });
        
        try {
          // Simulate API call
          await new Promise(resolve => setTimeout(resolve, 1000));
          
          // Mock user data (replace with actual API call)
          const mockUser: User = {
            id: '1',
            email: credentials.email,
            name: credentials.email.split('@')[0],
            proficiencyLevel: 'beginner',
            dailyGoal: 15,
            createdAt: new Date(),
            lastActive: new Date(),
          };

          set({
            user: mockUser,
            isAuthenticated: true,
            isLoading: false,
            error: null,
          });
        } catch (error) {
          set({
            isLoading: false,
            error: error instanceof Error ? error.message : 'Login failed',
          });
        }
      },

      // Register action
      register: async (userData: RegisterData) => {
        set({ isLoading: true, error: null });
        
        try {
          // Simulate API call
          await new Promise(resolve => setTimeout(resolve, 1000));
          
          // Mock user data (replace with actual API call)
          const mockUser: User = {
            id: '1',
            email: userData.email,
            name: userData.name,
            proficiencyLevel: 'beginner',
            dailyGoal: 15,
            createdAt: new Date(),
            lastActive: new Date(),
          };

          set({
            user: mockUser,
            isAuthenticated: true,
            isLoading: false,
            error: null,
          });
        } catch (error) {
          set({
            isLoading: false,
            error: error instanceof Error ? error.message : 'Registration failed',
          });
        }
      },

      // Logout action
      logout: () => {
        set({
          user: null,
          isAuthenticated: false,
          error: null,
        });
      },

      // Forgot password action
      forgotPassword: async (email: string) => {
        set({ isLoading: true, error: null });
        
        try {
          // Simulate API call
          await new Promise(resolve => setTimeout(resolve, 1000));
          
          set({
            isLoading: false,
            error: null,
          });
        } catch (error) {
          set({
            isLoading: false,
            error: error instanceof Error ? error.message : 'Password reset failed',
          });
        }
      },

      // Clear error action
      clearError: () => {
        set({ error: null });
      },

      // Update user action
      updateUser: (updates: Partial<User>) => {
        const currentUser = get().user;
        if (currentUser) {
          set({
            user: { ...currentUser, ...updates },
          });
        }
      },
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => AsyncStorage),
      partialize: (state) => ({
        user: state.user,
        isAuthenticated: state.isAuthenticated,
      }),
      onRehydrateStorage: () => (state) => {
        // Convert string dates back to Date objects after rehydration
        if (state?.user) {
          if (typeof state.user.createdAt === 'string') {
            state.user.createdAt = new Date(state.user.createdAt);
          }
          if (typeof state.user.lastActive === 'string') {
            state.user.lastActive = new Date(state.user.lastActive);
          }
        }
      },
    }
  )
); 