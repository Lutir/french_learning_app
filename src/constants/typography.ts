// Typography settings inspired by Claude.ai's excellent typography

export const TYPOGRAPHY = {
  fontFamily: {
    // Use system fonts with proper weights
    regular: 'System',
    medium: 'System',
    semibold: 'System',
    bold: 'System',
    // Fallback to system fonts
    fallback: 'System',
  },
  
  fontSize: {
    xs: 12,      // Captions, labels
    sm: 14,      // Small text, secondary info
    base: 16,    // Body text (Claude's default)
    lg: 18,      // Large body text
    xl: 20,      // Subheadings
    '2xl': 24,   // Section headings
    '3xl': 30,   // Page titles
    '4xl': 36,   // Large titles
    '5xl': 48,   // Hero titles
  },
  
  lineHeight: {
    tight: 1.2,      // For headings
    normal: 1.5,     // For body text (Claude's default)
    relaxed: 1.75,   // For long-form content
    loose: 2.0,      // For very readable text
  },
  
  fontWeight: {
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },
  
  // Letter spacing for better readability
  letterSpacing: {
    tight: -0.5,
    normal: 0,
    wide: 0.5,
    wider: 1,
  },
};

// Helper function to get font family based on weight and custom font availability
export const getFontFamily = (weight: keyof typeof TYPOGRAPHY.fontWeight, useCustomFonts: boolean = false) => {
  if (!useCustomFonts) {
    return TYPOGRAPHY.fontFamily.fallback;
  }
  
  switch (weight) {
    case 'normal':
      return TYPOGRAPHY.fontFamily.regular;
    case 'medium':
      return TYPOGRAPHY.fontFamily.medium;
    case 'semibold':
      return TYPOGRAPHY.fontFamily.semibold;
    case 'bold':
      return TYPOGRAPHY.fontFamily.bold;
    default:
      return TYPOGRAPHY.fontFamily.regular;
  }
}; 