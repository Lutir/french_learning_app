import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS } from '../constants';

// Import screens
import HomeScreen from '../app/main/home';
import LessonsScreen from '../app/main/lessons';
import GamesScreen from '../app/main/games';
import ProgressScreen from '../app/main/progress';
import ProfileScreen from '../app/main/profile';

const Tab = createBottomTabNavigator();

const MainTabs: React.FC = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.background }}>
      <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: COLORS.background,
          borderTopColor: COLORS.border,
          borderTopWidth: 1,
          paddingBottom: 8,
          paddingTop: 8,
          height: 88,
        },
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.textSecondary,
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '500',
          marginTop: 4,
        },
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="HomeTab"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Text style={{ fontSize: size, color }}>🏠</Text>
          ),
        }}
      />
      <Tab.Screen
        name="LessonsTab"
        component={LessonsScreen}
        options={{
          tabBarLabel: 'Lessons',
          tabBarIcon: ({ color, size }) => (
            <Text style={{ fontSize: size, color }}>📚</Text>
          ),
        }}
      />
      <Tab.Screen
        name="GamesTab"
        component={GamesScreen}
        options={{
          tabBarLabel: 'Games',
          tabBarIcon: ({ color, size }) => (
            <Text style={{ fontSize: size, color }}>🎮</Text>
          ),
        }}
      />
      <Tab.Screen
        name="ProgressTab"
        component={ProgressScreen}
        options={{
          tabBarLabel: 'Progress',
          tabBarIcon: ({ color, size }) => (
            <Text style={{ fontSize: size, color }}>📊</Text>
          ),
        }}
      />
      <Tab.Screen
        name="ProfileTab"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <Text style={{ fontSize: size, color }}>👤</Text>
          ),
        }}
      />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

export default MainTabs; 