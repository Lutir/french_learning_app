import React, { Component, ErrorInfo, ReactNode } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, Heading, Body, Caption } from './Text';
import { COLORS, SPACING } from '../../constants';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    this.setState({ error, errorInfo });
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: undefined, errorInfo: undefined });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <View style={styles.container}>
          <View style={styles.content}>
            <Text style={styles.icon}>⚠️</Text>
            <Heading variant="xl" align="center" style={styles.title}>
              Oops! Something went wrong
            </Heading>
            <Body align="center" color={COLORS.textSecondary} style={styles.message}>
              We encountered an unexpected error. Please try again or restart the app.
            </Body>
            
            <TouchableOpacity style={styles.retryButton} onPress={this.handleRetry}>
              <Text style={styles.retryText}>Try Again</Text>
            </TouchableOpacity>
            
            {__DEV__ && this.state.error && (
              <View style={styles.debugContainer}>
                <Caption color={COLORS.textMuted} style={styles.debugTitle}>
                  Debug Info (Development Only):
                </Caption>
                <Caption color={COLORS.textMuted} style={styles.debugText}>
                  {this.state.error.toString()}
                </Caption>
              </View>
            )}
          </View>
        </View>
      );
    }

    return this.props.children;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    justifyContent: 'center',
    alignItems: 'center',
    padding: SPACING[6],
  },
  content: {
    alignItems: 'center',
    maxWidth: 300,
  },
  icon: {
    fontSize: 64,
    marginBottom: SPACING[4],
  },
  title: {
    marginBottom: SPACING[3],
  },
  message: {
    marginBottom: SPACING[6],
    lineHeight: 22,
  },
  retryButton: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: SPACING[6],
    paddingVertical: SPACING[3],
    borderRadius: 12,
    marginBottom: SPACING[4],
  },
  retryText: {
    color: COLORS.textInverse,
    fontSize: 16,
    fontWeight: '600',
  },
  debugContainer: {
    marginTop: SPACING[4],
    padding: SPACING[3],
    backgroundColor: COLORS.surface,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  debugTitle: {
    marginBottom: SPACING[2],
    fontWeight: '600',
  },
  debugText: {
    fontSize: 10,
    lineHeight: 14,
  },
}); 