import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { COLORS, TYPOGRAPHY } from './src/constants';
import { useAuthStore } from './src/stores';

// Import our screens
import WelcomeScreen from './src/app/onboarding/welcome';
import LoginScreen from './src/app/auth/login';
import RegisterScreen from './src/app/auth/register';
import LanguageSelectionScreen from './src/app/onboarding/language-selection';
import LearningGoalsScreen from './src/app/onboarding/learning-goals';
import AvatarCreationScreen from './src/app/onboarding/avatar-creation';
import MainTabs from './src/navigation/MainTabs';

const Stack = createStackNavigator();

export default function App() {
  const { isAuthenticated } = useAuthStore();

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar style="auto" />
      <Stack.Navigator 
        initialRouteName={isAuthenticated ? "MainApp" : "Welcome"}
        screenOptions={{
          headerStyle: {
            backgroundColor: COLORS.primary,
          },
          headerTintColor: COLORS.textInverse,
          headerTitleStyle: {
            fontWeight: TYPOGRAPHY.fontWeight.semibold as any,
            fontSize: TYPOGRAPHY.fontSize.lg,
          },
        }}
      >
        {!isAuthenticated ? (
          // Auth and onboarding screens
          <>
            <Stack.Screen 
              name="Welcome" 
              component={WelcomeScreen} 
              options={{ headerShown: false }}
            />
            <Stack.Screen 
              name="Login" 
              component={LoginScreen} 
              options={{ title: 'Sign In' }}
            />
            <Stack.Screen 
              name="Register" 
              component={RegisterScreen} 
              options={{ title: 'Create Account' }}
            />
            <Stack.Screen 
              name="LanguageSelection" 
              component={LanguageSelectionScreen} 
              options={{ title: 'Your Level', headerShown: false }}
            />
            <Stack.Screen 
              name="LearningGoals" 
              component={LearningGoalsScreen} 
              options={{ title: 'Learning Goals', headerShown: false }}
            />
            <Stack.Screen 
              name="AvatarCreation" 
              component={AvatarCreationScreen} 
              options={{ title: 'Choose Avatar', headerShown: false }}
            />
          </>
        ) : (
          // Main app with tab navigation
          <Stack.Screen 
            name="MainApp" 
            component={MainTabs} 
            options={{ headerShown: false }}
          />
        )}
      </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
