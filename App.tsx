import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { COLORS, TYPOGRAPHY } from './src/constants';

// Import our screens
import WelcomeScreen from './src/app/onboarding/welcome';
import LoginScreen from './src/app/auth/login';
import HomeScreen from './src/app/main/home';
import LessonsScreen from './src/app/main/lessons';
import GamesScreen from './src/app/main/games';
import ProgressScreen from './src/app/main/progress';
import ProfileScreen from './src/app/main/profile';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator 
        initialRouteName="Welcome"
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
        <Stack.Screen 
          name="Welcome" 
          component={WelcomeScreen} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{ title: 'Login' }}
        />
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: 'French Learning' }}
        />
        <Stack.Screen 
          name="Lessons" 
          component={LessonsScreen} 
          options={{ title: 'Lessons' }}
        />
        <Stack.Screen 
          name="Games" 
          component={GamesScreen} 
          options={{ title: 'Games' }}
        />
        <Stack.Screen 
          name="Progress" 
          component={ProgressScreen} 
          options={{ title: 'Progress' }}
        />
        <Stack.Screen 
          name="Profile" 
          component={ProfileScreen} 
          options={{ title: 'Profile' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
