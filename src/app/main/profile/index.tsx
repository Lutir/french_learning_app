import React from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { useAuthStore, useUserStore } from '../../../stores';
import Card from '../../../components/ui/Card';
import { Text, Heading, Body, Caption } from '../../../components/ui/Text';
import { COLORS, SPACING } from '../../../constants';

const ProfileScreen: React.FC = () => {
  const { user, logout } = useAuthStore();
  const { progress, preferences } = useUserStore();

  const handleLogout = () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Logout',
          style: 'destructive',
          onPress: () => {
            logout();
          },
        },
      ]
    );
  };

  const menuItems = [
    { 
      id: 1, 
      title: 'Settings', 
      icon: '⚙️', 
      onPress: () => Alert.alert('Settings', 'Settings screen coming soon!') 
    },
    { 
      id: 2, 
      title: 'Help & Support', 
      icon: '❓', 
      onPress: () => Alert.alert('Help', 'Help & Support coming soon!') 
    },
    { 
      id: 3, 
      title: 'About', 
      icon: 'ℹ️', 
      onPress: () => Alert.alert('About', 'French Learning App v1.0.0') 
    },
    { 
      id: 4, 
      title: 'Logout', 
      icon: '🚪', 
      onPress: handleLogout,
      destructive: true 
    },
  ];

  const formatDate = (date: Date | string) => {
    const dateObj = typeof date === 'string' ? new Date(date) : date;
    return dateObj.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long' 
    });
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
      <View style={styles.header}>
        <Heading variant="2xl">Profile</Heading>
      </View>

      <Card style={styles.profileCard}>
        <View style={styles.profileHeader}>
          <Text style={styles.profileEmoji}>
            {user?.avatar ? '👤' : '👤'}
          </Text>
          <View style={styles.profileInfo}>
            <Heading variant="xl" style={styles.profileName}>
              {user?.name || 'French Learner'}
            </Heading>
            <Body color={COLORS.textSecondary} style={styles.profileEmail}>
              {user?.email || 'learner@example.com'}
            </Body>
            <Caption color={COLORS.primary} weight="medium" style={styles.profileLevel}>
              Level {progress.level} • {user?.proficiencyLevel || 'beginner'}
            </Caption>
          </View>
        </View>
        <Caption color={COLORS.textSecondary} style={styles.joinDate}>
          Member since {user?.createdAt ? formatDate(user.createdAt) : 'January 2024'}
        </Caption>
      </Card>

      <Card style={styles.statsCard}>
        <Heading variant="lg" style={styles.statsTitle}>Your Progress</Heading>
        <View style={styles.statsGrid}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>{progress.totalXP}</Text>
            <Caption>Total XP</Caption>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>{progress.streak}</Text>
            <Caption>Day Streak</Caption>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>{progress.lessonsCompleted}</Text>
            <Caption>Lessons</Caption>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>{progress.totalStudyTime}</Text>
            <Caption>Minutes</Caption>
          </View>
        </View>
      </Card>

      <Card style={styles.menuCard}>
        {menuItems.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={[
              styles.menuItem,
              item.destructive && styles.menuItemDestructive
            ]}
            onPress={item.onPress}
            activeOpacity={0.7}
          >
            <View style={styles.menuItemContent}>
              <Text style={styles.menuIcon}>{item.icon}</Text>
              <Body style={[
                styles.menuTitle,
                item.destructive && styles.menuTitleDestructive
              ]}>
                {item.title}
              </Body>
            </View>
            <Text style={styles.menuArrow}>›</Text>
          </TouchableOpacity>
        ))}
      </Card>

      <View style={styles.footer}>
        <Caption color={COLORS.textSecondary}>Version 1.0.0</Caption>
      </View>
    </ScrollView>
  );
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
    padding: SPACING[6],
    paddingTop: SPACING[4],
  },
  profileCard: {
    margin: SPACING[6],
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SPACING[4],
  },
  profileEmoji: {
    fontSize: 50,
    marginRight: SPACING[4],
  },
  profileInfo: {
    flex: 1,
  },
  profileName: {
    marginBottom: SPACING[1],
  },
  profileEmail: {
    marginBottom: SPACING[1],
  },
  profileLevel: {
    marginBottom: SPACING[2],
  },
  joinDate: {
    marginTop: SPACING[2],
  },
  statsCard: {
    margin: SPACING[6],
  },
  statsTitle: {
    marginBottom: SPACING[4],
  },
  statsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statItem: {
    alignItems: 'center',
    flex: 1,
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.primary,
    marginBottom: SPACING[1],
  },
  menuCard: {
    margin: SPACING[6],
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: SPACING[4],
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  menuItemDestructive: {
    borderBottomColor: COLORS.error + '20',
  },
  menuItemContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuIcon: {
    fontSize: 24,
    marginRight: SPACING[4],
  },
  menuTitle: {
    color: COLORS.textPrimary,
  },
  menuTitleDestructive: {
    color: COLORS.error,
  },
  menuArrow: {
    fontSize: 18,
    color: COLORS.textSecondary,
  },
  footer: {
    padding: SPACING[6],
    alignItems: 'center',
  },
});

export default ProfileScreen; 