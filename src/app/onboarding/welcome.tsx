import React from 'react';
import { View, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import Button from '../../components/ui/Button';
import { Text, Heading, Body, Caption } from '../../components/ui/Text';
import { COLORS, SPACING } from '../../constants';

type RootStackParamList = {
  Welcome: undefined;
  Login: undefined;
  Home: undefined;
  Lessons: undefined;
  Games: undefined;
  Progress: undefined;
  Profile: undefined;
};

type WelcomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Welcome'>;

interface Props {
  navigation: WelcomeScreenNavigationProp;
}

const WelcomeScreen: React.FC<Props> = ({ navigation }) => {
  const handleContinue = () => {
    navigation.navigate('Home');
  };

  const handleLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.emoji}>🇫🇷</Text>
        <Heading variant="3xl" align="center" style={styles.title}>
          Welcome to French Learning!
        </Heading>
        <Body variant="lg" align="center" color={COLORS.textSecondary} style={styles.subtitle}>
          Start your journey to master French with fun, interactive lessons and games.
        </Body>
      </View>
      
      <View style={styles.buttonContainer}>
        <Button 
          title="Get Started" 
          onPress={handleContinue}
          variant="primary"
          size="lg"
          style={styles.primaryButton}
        />
        <Button 
          title="Login" 
          onPress={handleLogin}
          variant="outline"
          size="md"
          style={styles.secondaryButton}
        />
        
        {/* Test navigation buttons */}
        <Caption variant="base" weight="semibold" align="center" style={styles.testTitle}>
          Test Navigation:
        </Caption>
        <View style={styles.testButtons}>
          <Button 
            title="Lessons" 
            onPress={() => navigation.navigate('Lessons')}
            variant="secondary"
            size="sm"
            style={styles.testButton}
          />
          <Button 
            title="Games" 
            onPress={() => navigation.navigate('Games')}
            variant="secondary"
            size="sm"
            style={styles.testButton}
          />
          <Button 
            title="Progress" 
            onPress={() => navigation.navigate('Progress')}
            variant="secondary"
            size="sm"
            style={styles.testButton}
          />
          <Button 
            title="Profile" 
            onPress={() => navigation.navigate('Profile')}
            variant="secondary"
            size="sm"
            style={styles.testButton}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: SPACING[6],
    justifyContent: 'space-between',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: SPACING[12],
  },
  emoji: {
    fontSize: 100,
    marginBottom: SPACING[8],
  },
  title: {
    marginBottom: SPACING[6],
  },
  subtitle: {
    paddingHorizontal: SPACING[6],
  },
  buttonContainer: {
    marginTop: SPACING[8],
  },
  primaryButton: {
    marginBottom: SPACING[4],
  },
  secondaryButton: {
    marginBottom: SPACING[8],
  },
  testTitle: {
    marginBottom: SPACING[3],
  },
  testButtons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: SPACING[2],
  },
  testButton: {
    flex: 1,
    minWidth: '48%',
  },
});

export default WelcomeScreen; 