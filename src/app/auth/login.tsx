import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Alert } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useAuthStore } from '../../stores';
import { Input } from '../../components/ui/Input';
import Button from '../../components/ui/Button';
import { LoadingOverlay } from '../../components/ui/LoadingOverlay';
import { Text, Heading, Body, Caption } from '../../components/ui/Text';
import { COLORS, SPACING } from '../../constants';
import { validateForm, VALIDATION_RULES } from '../../utils/validation';

type RootStackParamList = {
  Welcome: undefined;
  Login: undefined;
  Register: undefined;
  Home: undefined;
};

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;

interface Props {
  navigation: LoginScreenNavigationProp;
}

const LoginScreen: React.FC<Props> = ({ navigation }) => {
  const { login, isLoading, error, clearError } = useAuthStore();
  
  const [formData, setFormData] = useState({
    email: '',
    password: '',
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
      email: VALIDATION_RULES.email,
      password: VALIDATION_RULES.password,
    };

    const result = validateForm(formData, validationRules);
    setErrors(result.errors);
    return result.isValid;
  };

  const handleLogin = async () => {
    if (!validateFormData()) {
      return;
    }

    try {
      await login({
        email: formData.email,
        password: formData.password,
      });
      
      // Navigation will be handled by the auth state change
    } catch (error) {
      Alert.alert('Login Failed', 'Please check your credentials and try again.');
    }
  };

  const handleRegisterPress = () => {
    navigation.navigate('Register');
  };

  const handleForgotPassword = () => {
    // TODO: Implement forgot password functionality
    Alert.alert('Forgot Password', 'This feature will be implemented soon.');
  };

  return (
    <>
      <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <Heading variant="3xl" align="center" style={styles.title}>
          Welcome Back
        </Heading>
        <Body align="center" color={COLORS.textSecondary} style={styles.subtitle}>
          Sign in to continue your French learning journey
        </Body>
      </View>

      <View style={styles.form}>
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
          placeholder="Enter your password"
          value={formData.password}
          onChangeText={(value) => handleInputChange('password', value)}
          error={errors.password}
          secureTextEntry
          size="lg"
        />

        <Button
          title="Forgot Password?"
          onPress={handleForgotPassword}
          variant="ghost"
          size="sm"
          style={styles.forgotPasswordButton}
        />

        {error && (
          <View style={styles.errorContainer}>
            <Caption color={COLORS.error} align="center">
              {error}
            </Caption>
          </View>
        )}

        <Button
          title="Sign In"
          onPress={handleLogin}
          variant="primary"
          size="lg"
          loading={isLoading}
          style={styles.loginButton}
        />

        <View style={styles.divider}>
          <View style={styles.dividerLine} />
          <Caption color={COLORS.textMuted} style={styles.dividerText}>
            or
          </Caption>
          <View style={styles.dividerLine} />
        </View>

        <Button
          title="Don't have an account? Sign Up"
          onPress={handleRegisterPress}
          variant="outline"
          size="md"
        />
      </View>
      </ScrollView>
      
      <LoadingOverlay 
        visible={isLoading} 
        message="Signing you in..." 
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
  forgotPasswordButton: {
    alignSelf: 'flex-end',
    marginBottom: SPACING[4],
  },
  loginButton: {
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

export default LoginScreen; 