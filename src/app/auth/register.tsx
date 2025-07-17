import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Alert } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useAuthStore } from '../../stores';
import { Input } from '../../components/ui/Input';
import Button from '../../components/ui/Button';
import { PasswordStrengthIndicator } from '../../components/ui/PasswordStrengthIndicator';
import { LoadingOverlay } from '../../components/ui/LoadingOverlay';
import { Text, Heading, Body, Caption } from '../../components/ui/Text';
import { COLORS, SPACING } from '../../constants';
import { validateForm, VALIDATION_RULES } from '../../utils/validation';

type RootStackParamList = {
  Welcome: undefined;
  Login: undefined;
  Register: undefined;
  LanguageSelection: undefined;
  LearningGoals: undefined;
  AvatarCreation: undefined;
  Home: undefined;
};

type RegisterScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Register'>;

interface Props {
  navigation: RegisterScreenNavigationProp;
}

const RegisterScreen: React.FC<Props> = ({ navigation }) => {
  const { register, isLoading, error, clearError } = useAuthStore();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
    
    // Clear auth error when user starts typing
    if (error) {
      clearError();
    }
  };

  const validateFormData = () => {
    const validationRules = {
      name: VALIDATION_RULES.name,
      email: VALIDATION_RULES.email,
      password: VALIDATION_RULES.password,
      confirmPassword: {
        ...VALIDATION_RULES.confirmPassword,
        custom: (value: string) => {
          if (value !== formData.password) {
            return 'Passwords do not match';
          }
          return null;
        },
      },
    };

    const result = validateForm(formData, validationRules);
    setErrors(result.errors);
    return result.isValid;
  };

  const handleRegister = async () => {
    if (!validateFormData()) {
      return;
    }

    try {
      await register({
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });
      
      // After registration, start onboarding
      navigation.navigate('LanguageSelection');
    } catch (error) {
      Alert.alert('Registration Failed', 'Please try again.');
    }
  };

  const handleLoginPress = () => {
    navigation.navigate('Login');
  };

  return (
    <>
      <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <Heading variant="3xl" align="center" style={styles.title}>
          Create Account
        </Heading>
        <Body align="center" color={COLORS.textSecondary} style={styles.subtitle}>
          Join thousands of learners mastering French
        </Body>
      </View>

      <View style={styles.form}>
        <Input
          label="Full Name"
          placeholder="Enter your full name"
          value={formData.name}
          onChangeText={(value) => handleInputChange('name', value)}
          error={errors.name}
          autoCapitalize="words"
          autoCorrect={false}
          size="lg"
        />

        <Input
          label="Email"
          placeholder="Enter your email"
          value={formData.email}
          onChangeText={(value) => handleInputChange('email', value)}
          error={errors.email}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          size="lg"
        />

        <Input
          label="Password"
          placeholder="Create a password"
          value={formData.password}
          onChangeText={(value) => handleInputChange('password', value)}
          error={errors.password}
          secureTextEntry
          size="lg"
        />
        
        {formData.password && (
          <PasswordStrengthIndicator password={formData.password} />
        )}

        <Input
          label="Confirm Password"
          placeholder="Confirm your password"
          value={formData.confirmPassword}
          onChangeText={(value) => handleInputChange('confirmPassword', value)}
          error={errors.confirmPassword}
          secureTextEntry
          size="lg"
        />

        {error && (
          <View style={styles.errorContainer}>
            <Caption color={COLORS.error} align="center">
              {error}
            </Caption>
          </View>
        )}

        <Button
          title="Create Account"
          onPress={handleRegister}
          variant="primary"
          size="lg"
          loading={isLoading}
          style={styles.registerButton}
        />

        <View style={styles.divider}>
          <View style={styles.dividerLine} />
          <Caption color={COLORS.textMuted} style={styles.dividerText}>
            or
          </Caption>
          <View style={styles.dividerLine} />
        </View>

        <Button
          title="Already have an account? Sign In"
          onPress={handleLoginPress}
          variant="outline"
          size="md"
        />
      </View>
      </ScrollView>
      
      <LoadingOverlay 
        visible={isLoading} 
        message="Creating your account..." 
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  content: {
    flexGrow: 1,
    padding: SPACING[6],
    justifyContent: 'center',
  },
  header: {
    marginBottom: SPACING[8],
  },
  title: {
    marginBottom: SPACING[4],
  },
  subtitle: {
    paddingHorizontal: SPACING[4],
  },
  form: {
    marginBottom: SPACING[6],
  },
  registerButton: {
    marginTop: SPACING[4],
    marginBottom: SPACING[6],
  },
  errorContainer: {
    marginBottom: SPACING[4],
    padding: SPACING[3],
    backgroundColor: COLORS.error + '10',
    borderRadius: 8,
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: SPACING[6],
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: COLORS.border,
  },
  dividerText: {
    marginHorizontal: SPACING[4],
  },
});

export default RegisterScreen; 