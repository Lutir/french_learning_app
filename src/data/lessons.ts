import { Lesson, FrenchWord } from '../types/lessons';

// French vocabulary data
export const frenchWords: FrenchWord[] = [
  // Greetings
  { id: 'g1', french: 'Bonjour', english: 'Hello', category: 'greetings', difficulty: 'beginner', tags: ['greetings', 'basic'] },
  { id: 'g2', french: 'Salut', english: 'Hi', category: 'greetings', difficulty: 'beginner', tags: ['greetings', 'informal'] },
  { id: 'g3', french: 'Au revoir', english: 'Goodbye', category: 'greetings', difficulty: 'beginner', tags: ['greetings', 'basic'] },
  { id: 'g4', french: 'Merci', english: 'Thank you', category: 'greetings', difficulty: 'beginner', tags: ['greetings', 'polite'] },
  { id: 'g5', french: 'S\'il vous plaît', english: 'Please', category: 'greetings', difficulty: 'beginner', tags: ['greetings', 'polite'] },
  { id: 'g6', french: 'Comment allez-vous?', english: 'How are you?', category: 'greetings', difficulty: 'beginner', tags: ['greetings', 'formal'] },
  { id: 'g7', french: 'Ça va?', english: 'How are you?', category: 'greetings', difficulty: 'beginner', tags: ['greetings', 'informal'] },
  { id: 'g8', french: 'Bien', english: 'Good', category: 'greetings', difficulty: 'beginner', tags: ['greetings', 'response'] },

  // Numbers 1-10
  { id: 'n1', french: 'Un', english: 'One', category: 'numbers', difficulty: 'beginner', tags: ['numbers', 'counting'] },
  { id: 'n2', french: 'Deux', english: 'Two', category: 'numbers', difficulty: 'beginner', tags: ['numbers', 'counting'] },
  { id: 'n3', french: 'Trois', english: 'Three', category: 'numbers', difficulty: 'beginner', tags: ['numbers', 'counting'] },
  { id: 'n4', french: 'Quatre', english: 'Four', category: 'numbers', difficulty: 'beginner', tags: ['numbers', 'counting'] },
  { id: 'n5', french: 'Cinq', english: 'Five', category: 'numbers', difficulty: 'beginner', tags: ['numbers', 'counting'] },
  { id: 'n6', french: 'Six', english: 'Six', category: 'numbers', difficulty: 'beginner', tags: ['numbers', 'counting'] },
  { id: 'n7', french: 'Sept', english: 'Seven', category: 'numbers', difficulty: 'beginner', tags: ['numbers', 'counting'] },
  { id: 'n8', french: 'Huit', english: 'Eight', category: 'numbers', difficulty: 'beginner', tags: ['numbers', 'counting'] },
  { id: 'n9', french: 'Neuf', english: 'Nine', category: 'numbers', difficulty: 'beginner', tags: ['numbers', 'counting'] },
  { id: 'n10', french: 'Dix', english: 'Ten', category: 'numbers', difficulty: 'beginner', tags: ['numbers', 'counting'] },

  // Colors
  { id: 'c1', french: 'Rouge', english: 'Red', category: 'colors', difficulty: 'beginner', tags: ['colors', 'basic'] },
  { id: 'c2', french: 'Bleu', english: 'Blue', category: 'colors', difficulty: 'beginner', tags: ['colors', 'basic'] },
  { id: 'c3', french: 'Vert', english: 'Green', category: 'colors', difficulty: 'beginner', tags: ['colors', 'basic'] },
  { id: 'c4', french: 'Jaune', english: 'Yellow', category: 'colors', difficulty: 'beginner', tags: ['colors', 'basic'] },
  { id: 'c5', french: 'Noir', english: 'Black', category: 'colors', difficulty: 'beginner', tags: ['colors', 'basic'] },
  { id: 'c6', french: 'Blanc', english: 'White', category: 'colors', difficulty: 'beginner', tags: ['colors', 'basic'] },
  { id: 'c7', french: 'Orange', english: 'Orange', category: 'colors', difficulty: 'beginner', tags: ['colors', 'basic'] },
  { id: 'c8', french: 'Violet', english: 'Purple', category: 'colors', difficulty: 'beginner', tags: ['colors', 'basic'] },

  // Basic Nouns
  { id: 'noun1', french: 'Chat', english: 'Cat', category: 'nouns', difficulty: 'beginner', tags: ['animals', 'basic'] },
  { id: 'noun2', french: 'Chien', english: 'Dog', category: 'nouns', difficulty: 'beginner', tags: ['animals', 'basic'] },
  { id: 'noun3', french: 'Maison', english: 'House', category: 'nouns', difficulty: 'beginner', tags: ['home', 'basic'] },
  { id: 'noun4', french: 'Voiture', english: 'Car', category: 'nouns', difficulty: 'beginner', tags: ['transport', 'basic'] },
  { id: 'noun5', french: 'Livre', english: 'Book', category: 'nouns', difficulty: 'beginner', tags: ['objects', 'basic'] },
  { id: 'noun6', french: 'Table', english: 'Table', category: 'nouns', difficulty: 'beginner', tags: ['furniture', 'basic'] },
  { id: 'noun7', french: 'Eau', english: 'Water', category: 'nouns', difficulty: 'beginner', tags: ['drinks', 'basic'] },
  { id: 'noun8', french: 'Pain', english: 'Bread', category: 'nouns', difficulty: 'beginner', tags: ['food', 'basic'] },

  // Articles
  { id: 'art1', french: 'Le', english: 'The (masculine)', category: 'articles', difficulty: 'beginner', tags: ['articles', 'definite', 'masculine'] },
  { id: 'art2', french: 'La', english: 'The (feminine)', category: 'articles', difficulty: 'beginner', tags: ['articles', 'definite', 'feminine'] },
  { id: 'art3', french: 'Les', english: 'The (plural)', category: 'articles', difficulty: 'beginner', tags: ['articles', 'definite', 'plural'] },
  { id: 'art4', french: 'Un', english: 'A/An (masculine)', category: 'articles', difficulty: 'beginner', tags: ['articles', 'indefinite', 'masculine'] },
  { id: 'art5', french: 'Une', english: 'A/An (feminine)', category: 'articles', difficulty: 'beginner', tags: ['articles', 'indefinite', 'feminine'] },
  { id: 'art6', french: 'Des', english: 'Some (plural)', category: 'articles', difficulty: 'beginner', tags: ['articles', 'indefinite', 'plural'] },
];

// Lesson definitions
export const lessons: Lesson[] = [
  {
    id: 'greetings-1',
    title: 'Basic Greetings',
    description: 'Learn essential French greetings for everyday conversations',
    category: 'greetings',
    difficulty: 'beginner',
    order: 1,
    estimatedDuration: 10,
    isUnlocked: true,
    tags: ['greetings', 'basic', 'conversation'],
    steps: [
      {
        id: 'greetings-intro',
        type: 'introduction',
        title: 'Welcome to French Greetings',
        content: 'In this lesson, you\'ll learn the most common French greetings used in everyday conversations. These are the building blocks of French communication!',
        duration: 2,
      },
      {
        id: 'greetings-vocab',
        type: 'vocabulary',
        title: 'Essential Greetings',
        content: 'Let\'s learn the basic greetings:',
        words: frenchWords.filter(w => w.category === 'greetings'),
        duration: 5,
      },
      {
        id: 'greetings-practice',
        type: 'practice',
        title: 'Practice Greetings',
        content: 'Practice using these greetings in different situations',
        duration: 3,
      },
    ],
  },
  {
    id: 'numbers-1',
    title: 'Numbers 1-10',
    description: 'Master counting from one to ten in French',
    category: 'numbers',
    difficulty: 'beginner',
    order: 2,
    estimatedDuration: 12,
    isUnlocked: true,
    tags: ['numbers', 'counting', 'basic'],
    steps: [
      {
        id: 'numbers-intro',
        type: 'introduction',
        title: 'Counting in French',
        content: 'Numbers are essential in any language. Let\'s start with the basics: counting from 1 to 10.',
        duration: 2,
      },
      {
        id: 'numbers-vocab',
        type: 'vocabulary',
        title: 'Numbers 1-10',
        content: 'Learn to count in French:',
        words: frenchWords.filter(w => w.category === 'numbers'),
        duration: 6,
      },
      {
        id: 'numbers-practice',
        type: 'practice',
        title: 'Practice Counting',
        content: 'Practice counting and recognizing numbers',
        duration: 4,
      },
    ],
  },
  {
    id: 'colors-1',
    title: 'Basic Colors',
    description: 'Learn the names of common colors in French',
    category: 'colors',
    difficulty: 'beginner',
    order: 3,
    estimatedDuration: 10,
    isUnlocked: true,
    tags: ['colors', 'descriptive', 'basic'],
    steps: [
      {
        id: 'colors-intro',
        type: 'introduction',
        title: 'Colors in French',
        content: 'Colors help us describe the world around us. Let\'s learn the basic colors in French!',
        duration: 2,
      },
      {
        id: 'colors-vocab',
        type: 'vocabulary',
        title: 'Basic Colors',
        content: 'Learn the names of colors:',
        words: frenchWords.filter(w => w.category === 'colors'),
        duration: 5,
      },
      {
        id: 'colors-practice',
        type: 'practice',
        title: 'Practice Colors',
        content: 'Practice identifying and naming colors',
        duration: 3,
      },
    ],
  },
  {
    id: 'nouns-1',
    title: 'Common Nouns',
    description: 'Learn everyday objects and animals in French',
    category: 'nouns',
    difficulty: 'beginner',
    order: 4,
    estimatedDuration: 12,
    isUnlocked: true,
    tags: ['nouns', 'objects', 'animals'],
    steps: [
      {
        id: 'nouns-intro',
        type: 'introduction',
        title: 'Common Objects',
        content: 'Let\'s learn the names of common objects and animals you see every day.',
        duration: 2,
      },
      {
        id: 'nouns-vocab',
        type: 'vocabulary',
        title: 'Everyday Objects',
        content: 'Learn the names of common objects:',
        words: frenchWords.filter(w => w.category === 'nouns'),
        duration: 6,
      },
      {
        id: 'nouns-practice',
        type: 'practice',
        title: 'Practice Nouns',
        content: 'Practice identifying objects and animals',
        duration: 4,
      },
    ],
  },
  {
    id: 'articles-1',
    title: 'Definite & Indefinite Articles',
    description: 'Master French articles: le, la, les, un, une, des',
    category: 'articles',
    difficulty: 'beginner',
    order: 5,
    estimatedDuration: 15,
    isUnlocked: true,
    tags: ['articles', 'grammar', 'basic'],
    steps: [
      {
        id: 'articles-intro',
        type: 'introduction',
        title: 'French Articles',
        content: 'Articles are small words that come before nouns. French has different articles for masculine, feminine, and plural nouns.',
        duration: 3,
      },
      {
        id: 'articles-vocab',
        type: 'vocabulary',
        title: 'Definite Articles',
        content: 'Learn the definite articles (the):',
        words: frenchWords.filter(w => w.category === 'articles' && w.tags.includes('definite')),
        duration: 4,
      },
      {
        id: 'articles-indefinite',
        type: 'vocabulary',
        title: 'Indefinite Articles',
        content: 'Learn the indefinite articles (a/an/some):',
        words: frenchWords.filter(w => w.category === 'articles' && w.tags.includes('indefinite')),
        duration: 4,
      },
      {
        id: 'articles-practice',
        type: 'practice',
        title: 'Practice Articles',
        content: 'Practice using articles with nouns',
        duration: 4,
      },
    ],
  },
];

// Helper functions
export const getWordsByCategory = (category: string): FrenchWord[] => {
  return frenchWords.filter(word => word.category === category);
};

export const getWordsByDifficulty = (difficulty: string): FrenchWord[] => {
  return frenchWords.filter(word => word.difficulty === difficulty);
};

export const getLessonById = (id: string): Lesson | undefined => {
  return lessons.find(lesson => lesson.id === id);
};

export const getLessonsByCategory = (category: string): Lesson[] => {
  return lessons.filter(lesson => lesson.category === category);
}; 