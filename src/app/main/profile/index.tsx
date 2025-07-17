import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Card from '../../../components/ui/Card';
import { COLORS, TYPOGRAPHY, SPACING } from '../../../constants';

const ProfileScreen: React.FC = () => {
  const user = {
    name: 'French Learner',
    email: 'learner@example.com',
    level: 1,
    joinDate: 'January 2024',
  };

  const menuItems = [
    { id: 1, title: 'Settings', icon: '⚙️', onPress: () => console.log('Settings') },
    { id: 2, title: 'Help & Support', icon: '❓', onPress: () => console.log('Help') },
    { id: 3, title: 'About', icon: 'ℹ️', onPress: () => console.log('About') },
    { id: 4, title: 'Logout', icon: '🚪', onPress: () => console.log('Logout') },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Profile</Text>
      </View>

      <Card style={styles.profileCard}>
        <View style={styles.profileHeader}>
          <Text style={styles.profileEmoji}>👤</Text>
          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>{user.name}</Text>
            <Text style={styles.profileEmail}>{user.email}</Text>
            <Text style={styles.profileLevel}>Level {user.level}</Text>
          </View>
        </View>
        <Text style={styles.joinDate}>Member since {user.joinDate}</Text>
      </Card>

      <Card style={styles.menuCard}>
        {menuItems.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.menuItem}
            onPress={item.onPress}
            activeOpacity={0.7}
          >
            <View style={styles.menuItemContent}>
              <Text style={styles.menuIcon}>{item.icon}</Text>
              <Text style={styles.menuTitle}>{item.title}</Text>
            </View>
            <Text style={styles.menuArrow}>›</Text>
          </TouchableOpacity>
        ))}
      </Card>

      <View style={styles.footer}>
        <Text style={styles.version}>Version 1.0.0</Text>
      </View>
    </ScrollView>
  );
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
  },
  profileCard: {
    margin: SPACING.lg,
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SPACING.md,
  },
  profileEmoji: {
    fontSize: 50,
    marginRight: SPACING.md,
  },
  profileInfo: {
    flex: 1,
  },
  profileName: {
    fontSize: TYPOGRAPHY.fontSize.xl,
    fontFamily: TYPOGRAPHY.fontFamily.semibold,
    color: COLORS.textPrimary,
    marginBottom: SPACING.xs,
  },
  profileEmail: {
    fontSize: TYPOGRAPHY.fontSize.base,
    color: COLORS.textSecondary,
    marginBottom: SPACING.xs,
  },
  profileLevel: {
    fontSize: TYPOGRAPHY.fontSize.base,
    color: COLORS.primary,
    fontFamily: TYPOGRAPHY.fontFamily.medium,
  },
  joinDate: {
    fontSize: TYPOGRAPHY.fontSize.sm,
    color: COLORS.textSecondary,
  },
  menuCard: {
    margin: SPACING.lg,
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: SPACING.md,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.textMuted,
  },
  menuItemContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuIcon: {
    fontSize: 24,
    marginRight: SPACING.md,
  },
  menuTitle: {
    fontSize: TYPOGRAPHY.fontSize.base,
    color: COLORS.textPrimary,
  },
  menuArrow: {
    fontSize: TYPOGRAPHY.fontSize.lg,
    color: COLORS.textSecondary,
  },
  footer: {
    padding: SPACING.lg,
    alignItems: 'center',
  },
  version: {
    fontSize: TYPOGRAPHY.fontSize.sm,
    color: COLORS.textSecondary,
  },
});

export default ProfileScreen; 