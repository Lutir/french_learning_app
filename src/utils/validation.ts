// Validation utilities for forms

export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}

export interface ValidationRule {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  custom?: (value: any) => string | null;
}

export interface ValidationRules {
  [key: string]: ValidationRule;
}

// Email validation
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Password validation
export const validatePassword = (password: string): { isValid: boolean; errors: string[] } => {
  const errors: string[] = [];
  
  if (password.length < 8) {
    errors.push('Password must be at least 8 characters long');
  }
  
  if (!/[A-Z]/.test(password)) {
    errors.push('Password must contain at least one uppercase letter');
  }
  
  if (!/[a-z]/.test(password)) {
    errors.push('Password must contain at least one lowercase letter');
  }
  
  if (!/\d/.test(password)) {
    errors.push('Password must contain at least one number');
  }
  
  return {
    isValid: errors.length === 0,
    errors,
  };
};

// Name validation
export const validateName = (name: string): boolean => {
  return name.trim().length >= 2 && name.trim().length <= 50;
};

// Form validation
export const validateForm = (data: Record<string, any>, rules: ValidationRules): ValidationResult => {
  const errors: Record<string, string> = {};
  
  Object.keys(rules).forEach((field) => {
    const value = data[field];
    const rule = rules[field];
    
    // Required validation
    if (rule.required && (!value || value.toString().trim() === '')) {
      errors[field] = `${field.charAt(0).toUpperCase() + field.slice(1)} is required`;
      return;
    }
    
    // Skip other validations if value is empty and not required
    if (!value || value.toString().trim() === '') {
      return;
    }
    
    // Min length validation
    if (rule.minLength && value.toString().length < rule.minLength) {
      errors[field] = `${field.charAt(0).toUpperCase() + field.slice(1)} must be at least ${rule.minLength} characters`;
    }
    
    // Max length validation
    if (rule.maxLength && value.toString().length > rule.maxLength) {
      errors[field] = `${field.charAt(0).toUpperCase() + field.slice(1)} must be no more than ${rule.maxLength} characters`;
    }
    
    // Pattern validation
    if (rule.pattern && !rule.pattern.test(value)) {
      errors[field] = `${field.charAt(0).toUpperCase() + field.slice(1)} format is invalid`;
    }
    
    // Custom validation
    if (rule.custom) {
      const customError = rule.custom(value);
      if (customError) {
        errors[field] = customError;
      }
    }
  });
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};

// Predefined validation rules
export const VALIDATION_RULES = {
  email: {
    required: true,
    custom: (value: string) => {
      if (!validateEmail(value)) {
        return 'Please enter a valid email address';
      }
      return null;
    },
  },
  
  password: {
    required: true,
    minLength: 8,
    custom: (value: string) => {
      const result = validatePassword(value);
      if (!result.isValid) {
        return result.errors[0]; // Return first error
      }
      return null;
    },
  },
  
  confirmPassword: {
    required: true,
    custom: (value: string, formData?: Record<string, any>) => {
      if (formData && value !== formData.password) {
        return 'Passwords do not match';
      }
      return null;
    },
  },
  
  name: {
    required: true,
    minLength: 2,
    maxLength: 50,
    custom: (value: string) => {
      if (!validateName(value)) {
        return 'Name must be between 2 and 50 characters';
      }
      return null;
    },
  },
  
  dailyGoal: {
    required: true,
    custom: (value: number) => {
      if (value < 5 || value > 120) {
        return 'Daily goal must be between 5 and 120 minutes';
      }
      return null;
    },
  },
  
  username: {
    required: true,
    minLength: 3,
    maxLength: 20,
    pattern: /^[a-zA-Z0-9_]+$/,
    custom: (value: string) => {
      if (!/^[a-zA-Z0-9_]+$/.test(value)) {
        return 'Username can only contain letters, numbers, and underscores';
      }
      return null;
    },
  },
  
  phone: {
    required: false,
    pattern: /^[\+]?[1-9][\d]{0,15}$/,
    custom: (value: string) => {
      if (value && !/^[\+]?[1-9][\d]{0,15}$/.test(value)) {
        return 'Please enter a valid phone number';
      }
      return null;
    },
  },
  
  age: {
    required: false,
    custom: (value: number) => {
      if (value && (value < 13 || value > 100)) {
        return 'Age must be between 13 and 100';
      }
      return null;
    },
  },
};

// Helper function to validate specific fields
export const validateField = (field: string, value: any, rule: ValidationRule): string | null => {
  if (rule.required && (!value || value.toString().trim() === '')) {
    return `${field.charAt(0).toUpperCase() + field.slice(1)} is required`;
  }
  
  if (!value || value.toString().trim() === '') {
    return null;
  }
  
  if (rule.minLength && value.toString().length < rule.minLength) {
    return `${field.charAt(0).toUpperCase() + field.slice(1)} must be at least ${rule.minLength} characters`;
  }
  
  if (rule.maxLength && value.toString().length > rule.maxLength) {
    return `${field.charAt(0).toUpperCase() + field.slice(1)} must be no more than ${rule.maxLength} characters`;
  }
  
  if (rule.pattern && !rule.pattern.test(value)) {
    return `${field.charAt(0).toUpperCase() + field.slice(1)} format is invalid`;
  }
  
  if (rule.custom) {
    return rule.custom(value);
  }
  
  return null;
}; 