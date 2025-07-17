# French Learning iOS App 🇫🇷

A gamified French learning application built with React Native and Expo, designed to make learning French accessible, engaging, and fun for complete beginners.

## 🚀 Features (Coming Soon)

### Core Learning Features
- **Progressive Learning Path**: Structured curriculum from beginner to intermediate
- **Visual Learning**: Images, animations, and visual cues for better retention
- **Audio Integration**: Native French speaker pronunciation
- **Interactive Exercises**: Multiple choice, drag-and-drop, matching games
- **Spacing Repetition**: Smart review system for optimal learning
- **Daily Challenges**: Bite-sized daily learning goals

### Gamification Elements
- **Experience Points (XP)**: Earn XP for completing lessons and exercises
- **Level System**: Progress through levels with increasing difficulty
- **Achievement Badges**: Unlock badges for milestones and streaks
- **Streak Counter**: Daily learning streak tracking
- **Virtual Currency**: Earn coins for completing challenges
- **Customizable Avatar**: Personalize your learning experience

### iOS-Specific Features
- **Haptic Feedback**: Tactile responses for better user experience
- **Voice Recognition**: Practice pronunciation with speech recognition
- **Push Notifications**: Daily reminders and achievement notifications
- **Offline Support**: Download lessons for offline learning
- **Accessibility**: Full VoiceOver and Dynamic Type support
- **Clean Typography**: System fonts with consistent weights

## 📱 Tech Stack

### Frontend (iOS App)
- **Framework**: React Native 0.73+ with Expo SDK 50
- **Language**: TypeScript for type safety
- **Navigation**: React Navigation 6 (Stack + Tab navigation)
- **State Management**: Zustand for lightweight state management
- **UI Components**: React Native Elements + Custom Components
- **Animations**: React Native Reanimated 3
- **Audio**: Expo AV (audio playback/recording)
- **Storage**: AsyncStorage + SQLite
- **Notifications**: Expo Notifications
- **Haptics**: Expo Haptics
- **Build & Deploy**: EAS Build (Expo Application Services)

### Backend Infrastructure (Planned)
- **Runtime**: Node.js 18+ with TypeScript
- **Framework**: Express.js
- **Database**: PostgreSQL 15+ with Prisma ORM
- **Cache**: Redis
- **Cloud Services**: Railway/Heroku (hosting), AWS S3/Cloudinary (file storage)
- **Authentication**: JWT with refresh tokens
- **Monitoring**: Sentry (error tracking), Mixpanel/Amplitude (analytics)

### Development Tools
- **IDE**: VS Code with React Native extensions
- **Package Manager**: npm
- **Version Control**: Git
- **Testing**: Jest, React Native Testing Library
- **Code Quality**: ESLint, Prettier, TypeScript

## 🔤 Typography System

The app uses a clean, consistent typography system with system fonts:

### Features
- **System Fonts**: Uses native iOS system fonts for optimal performance
- **Consistent Weights**: Proper font weights (normal, medium, semibold, bold)
- **Typography Scale**: Consistent font sizes from xs to 5xl
- **Smart Components**: Text components with built-in typography variants

### Components
- `Text`: Base text component with typography variants
- `Heading`: For titles and headings
- `Subheading`: For section headers
- `Body`: For body text
- `Caption`: For secondary text
- `Label`: For form labels

### Usage
```typescript
import { Text, Heading, Body, Caption } from './src/components/ui/Text';

// Use typography variants
<Heading>This is a heading</Heading>
<Body>This is body text</Body>
<Caption>This is caption text</Caption>

// Or use the base Text component with custom props
<Text variant="lg" weight="semibold" color={COLORS.primary}>
  Custom styled text
</Text>
```

## 🏗️ Project Structure

```
french-learning-app/
├── src/
│   ├── app/                    # App screens and navigation
│   │   ├── auth/              # Authentication screens
│   │   │   └── login.tsx
│   │   ├── onboarding/        # Onboarding flow
│   │   │   └── welcome.tsx
│   │   └── main/              # Main app screens
│   │       ├── home.tsx
│   │       ├── lessons/
│   │       │   └── index.tsx
│   │       ├── games/
│   │       │   └── index.tsx
│   │       ├── progress/
│   │       │   └── index.tsx
│   │       └── profile/
│   │           └── index.tsx
│   ├── components/             # Reusable React components
│   │   ├── ui/                # Base UI components
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   └── ProgressBar.tsx
│   │   ├── lessons/           # Lesson-specific components
│   │   ├── games/             # Game components
│   │   └── progress/          # Progress components
│   ├── stores/                # State management with Zustand
│   ├── services/              # API calls and external services
│   ├── hooks/                 # Custom React hooks
│   ├── utils/                 # Utility functions and helpers
│   ├── types/                 # TypeScript type definitions
│   └── constants/             # App constants and configuration
│       ├── colors.ts          # Color palette
│       ├── typography.ts      # Typography settings
│       ├── spacing.ts         # Spacing values
│       └── index.ts           # Constants exports
├── assets/                    # Static assets
│   ├── images/
│   │   ├── avatars/
│   │   ├── lessons/
│   │   └── icons/
│   ├── sounds/
│   ├── animations/
│   └── fonts/
├── App.tsx                    # Main app component
├── app.json                   # Expo configuration
├── package.json               # Dependencies and scripts
└── tsconfig.json              # TypeScript configuration
```

## 🎯 Week 1 Progress

### ✅ Completed
- [x] **Project Setup**
  - Node.js and npm installed
  - Expo project initialized with TypeScript
  - Project moved to main directory structure
- [x] **Dependencies Installed**
  - React Navigation (stack, tabs)
  - Animation and gesture libraries
  - Zustand (state management)
  - AsyncStorage (local storage)
  - UI libraries (React Native Elements, Vector Icons)
  - Expo libraries (AV, Haptics, Notifications, SQLite, File System)
  - TypeScript types for React/React Native
- [x] **Project Structure Created**
  - Complete folder structure for components, screens, services
  - Asset directories for images, sounds, animations, fonts
- [x] **Design System Implemented**
  - Claude.ai-inspired color palette with soft pastels
  - Typography system with Inter font family
  - Spacing system for consistent layouts
  - Constants index for easy imports
- [x] **Typography System**
  - Clean system fonts with proper weights
  - Consistent typography scale
  - Smart Text components with variants
- [x] **UI Components Built**
  - Reusable Button component with multiple variants
  - Card component with elevation options
  - ProgressBar component with clean design
  - Smart Text component with typography variants
- [x] **Screens Created**
  - Welcome screen with navigation
  - Login screen with form fields
  - Home screen with progress overview
  - Lessons list with progress tracking
  - Games list with difficulty indicators
  - Progress screen with statistics
  - Profile screen with user info
- [x] **Navigation Setup**
  - Stack navigation configured
  - All screens connected with proper routing
  - Test navigation buttons added

### 🎯 Success Criteria Met
- ✅ App runs without crashes
- ✅ Navigation between screens works smoothly
- ✅ UI components are consistent and reusable
- ✅ Authentication screens are functional

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Expo CLI
- iOS Simulator or physical iPhone with Expo Go app

### Installation
```bash
# Clone the repository
git clone <repository-url>
cd french

# Install dependencies
npm install

# Start development server
npx expo start
```

### Running the App

#### On iOS Simulator
```bash
# Start the development server
npx expo start

# Press 'i' to open iOS simulator
# Or run directly:
npx expo run:ios
```

#### On Physical Device
1. Install **Expo Go** from the App Store
2. Run `npx expo start`
3. Scan the QR code with your iPhone camera
4. The app will open in Expo Go

#### On Web (for testing)
```bash
npx expo start --web
```

### Development Commands
```bash
# Start development server
npm start

# Run on iOS
npm run ios

# Run on Android
npm run android

# Run on web
npm run web

# Type checking
npx tsc --noEmit

# Linting
npm run lint
```

## 🎨 Design System

### Colors (Claude.ai Inspired)
```typescript
// Primary colors (soft, pastel aesthetic)
primary: '#7C3AED'      // Soft purple (Claude's primary)
secondary: '#F59E0B'    // Warm amber
accent: '#10B981'       // Soft emerald green

// Background colors (clean whites and grays)
background: '#FFFFFF'   // Pure white background
surface: '#F8FAFC'      // Very light gray (Claude's card background)
card: '#FFFFFF'         // White cards
elevated: '#F1F5F9'     // Slightly darker for elevated elements

// Text colors (excellent contrast)
textPrimary: '#1E293B'  // Dark slate (Claude's primary text)
textSecondary: '#64748B' // Medium slate (Claude's secondary text)
textMuted: '#94A3B8'    // Light slate (Claude's muted text)
textInverse: '#FFFFFF'  // White text for dark backgrounds

// Status colors (subtle approach)
success: '#10B981'      // Soft green
warning: '#F59E0B'      // Warm amber
error: '#EF4444'        // Soft red
info: '#3B82F6'         // Soft blue

// Gamification colors (pastel versions)
xp: '#FCD34D'           // Soft gold
level: '#A855F7'        // Soft purple
streak: '#FB7185'       // Soft pink
achievement: '#F97316'  // Soft orange
```

### Typography (Inter Font Family)
```typescript
fontFamily: {
  regular: 'Inter-Regular',
  medium: 'Inter-Medium',
  semibold: 'Inter-SemiBold',
  bold: 'Inter-Bold',
  fallback: 'System',
}

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
}

lineHeight: {
  tight: 1.2,      // For headings
  normal: 1.5,     // For body text (Claude's default)
  relaxed: 1.75,   // For long-form content
  loose: 2.0,      // For very readable text
}
```

### Spacing (8px Grid System)
```typescript
SPACING: {
  // Micro spacing for fine-tuning
  0: 0,
  px: 1,      // 1px for borders
  '0.5': 2,   // 2px
  1: 4,       // 4px
  '1.5': 6,   // 6px
  
  // Small spacing
  2: 8,       // 8px - Small gaps
  3: 12,      // 12px - Component padding
  4: 16,      // 16px - Standard spacing (Claude's default)
  
  // Medium spacing
  5: 20,      // 20px
  6: 24,      // 24px - Section spacing
  7: 28,      // 28px
  8: 32,      // 32px - Large spacing
  
  // Large spacing
  10: 40,     // 40px
  12: 48,     // 48px - Page sections
  14: 56,     // 56px
  16: 64,     // 64px - Major sections
}
```

### UI Components
- **Button**: Multiple variants (primary, secondary, outline, ghost) and sizes (sm, md, lg)
- **Card**: Clean design with elevation options (default, elevated, outlined)
- **ProgressBar**: Minimal progress indicators with customizable colors and variants

## 📋 Development Roadmap

### Phase 1: Foundation (Week 1-2) ✅
- [x] Basic app structure and navigation
- [x] Core lesson functionality
- [x] Simple vocabulary exercises
- [x] Progress tracking
- [x] Basic gamification (XP, levels)

### Phase 2: Enhanced Features (Week 3-4)
- [ ] Advanced games and exercises
- [ ] Audio integration
- [ ] Offline support
- [ ] Achievement system
- [ ] Push notifications

### Phase 3: Polish & Testing (Week 5-6)
- [ ] UI/UX refinements
- [ ] Performance optimization
- [ ] Bug fixes and testing
- [ ] App Store preparation

### Phase 4: Launch (Week 7-8)
- [ ] App Store submission
- [ ] Marketing materials
- [ ] User feedback collection
- [ ] Analytics setup

## 🤝 Contributing

This is a personal learning project. Feel free to fork and experiment!

### Development Guidelines
- Use TypeScript for all new code
- Follow the established design system
- Write meaningful commit messages
- Test on both simulator and physical device
- Keep components reusable and modular

## 📄 License

MIT License - feel free to use this code for your own learning projects.

## 📞 Support

For questions or issues:
- Check the [Expo documentation](https://docs.expo.dev/)
- Review React Navigation [docs](https://reactnavigation.org/)
- Open an issue in the repository

---

**Happy Learning! ��🇷 Bonne chance!**
