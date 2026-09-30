import { Course } from '../../models/course.model';

export const COURSES: Course[] = [
  {
    id: 1,
    name: 'Angular Fundamentals',
    description:
      'Learn Angular components, routing, services and TypeScript fundamentals.',
    duration: 6,
    lessons: 12,
    status: 'In Progress',
    category: 'Angular'
  },
  {
    id: 2,
    name: 'JavaScript Essentials',
    description:
      'Understand modern JavaScript concepts, ES6+, closures, and asynchronous programming.',
    duration: 5,
    lessons: 10,
    status: 'Completed',
    category: 'JavaScript'
  },
  {
    id: 3,
    name: 'HTML & CSS Basics',
    description:
      'Build responsive and accessible web pages using modern HTML5 semantic elements and CSS3.',
    duration: 4,
    lessons: 8,
    status: 'Not Started',
    category: 'Web Basics'
  },
  {
    id: 4,
    name: 'TypeScript for Beginners',
    description:
      'Master types, interfaces, generics, decorators and TypeScript compiler options.',
    duration: 5,
    lessons: 9,
    status: 'In Progress',
    category: 'TypeScript'
  },
  {
    id: 5,
    name: 'Responsive Web Design',
    description:
      'Learn how to create mobile-first layouts using CSS Grid, Flexbox, and media queries.',
    duration: 3,
    lessons: 7,
    status: 'Completed',
    category: 'Web Basics'
  },
  {
    id: 6,
    name: 'Angular Reactive Forms',
    description:
      'Build resilient forms using FormGroup, FormBuilder, custom validators, and async checks.',
    duration: 4,
    lessons: 8,
    status: 'Not Started',
    category: 'Angular'
  },
  {
    id: 7,
    name: 'Angular Routing & Navigation',
    description:
      'Understand routing, lazy loading, route parameters, guards, and navigation events.',
    duration: 3,
    lessons: 6,
    status: 'In Progress',
    category: 'Angular'
  },
  {
    id: 8,
    name: 'Web Accessibility & Performance',
    description:
      'Practical techniques for WCAG compliance, screen readers, Core Web Vitals, and Lighthouse audit.',
    duration: 2,
    lessons: 5,
    status: 'Not Started',
    category: 'Web Basics'
  },
  {
    id: 9,
    name: 'Angular Interview Masterclass',
    description:
      'Ace senior Angular interviews: Signals vs RxJS, Change Detection (OnPush), DI hierarchical tree, and micro-frontends.',
    duration: 8,
    lessons: 16,
    status: 'In Progress',
    category: 'Interview Prep'
  },
  {
    id: 10,
    name: 'Frontend Coding & System Design Interviews',
    description:
      'High-frequency coding challenges, debounce/throttle implementations, and frontend system architecture.',
    duration: 7,
    lessons: 14,
    status: 'Not Started',
    category: 'Interview Prep'
  }
];