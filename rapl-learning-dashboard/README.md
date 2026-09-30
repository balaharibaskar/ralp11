# RapL Online Learning Platform & Dashboard

A modern, responsive online learning management dashboard built with **Angular 21**, **TypeScript**, and **Vitest**. The project demonstrates enterprise-grade Angular architecture using standalone components, reactive forms, state-preserving services, and rich UI/UX without external UI library overhead.

---

## Table of Contents
- [Architecture & Tech Stack](#architecture--tech-stack)
- [Project Highlights & Features](#project-highlights--features)
  - [1. Learning Dashboard](#1-learning-dashboard)
  - [2. Course Catalog (Search, Filter, Sort)](#2-course-catalog-search-filter-sort)
  - [3. Course Details & Status Engine](#3-course-details--status-engine)
  - [4. Add Course & Reactive Form Validation](#4-add-course--reactive-form-validation)
  - [5. Interview Preparation Center](#5-interview-preparation-center)
  - [6. Responsive Mobile-First Design](#6-responsive-mobile-first-design)
- [Mock Course Data & Model](#mock-course-data--model)
- [Getting Started](#getting-started)
- [Running Unit Tests](#running-unit-tests)
- [Production Build](#production-build)
- [Technical Interview Walkthrough & Debugging Guide](#technical-interview-walkthrough--debugging-guide)

---

## Architecture & Tech Stack

| Technology | Version / Spec | Purpose |
|---|---|---|
| **Angular** | `v21.2.24` | Modern standalone components, modern control flow (`@if`, `@for`), typed routing |
| **TypeScript** | `v5.9.3` | Strict type checking, interfaces, and clean OOP abstractions |
| **Reactive Forms** | `@angular/forms` | Model-driven form state management and synchronous validation |
| **Vitest** | `v4.1.11` | High-speed unit test runner replacing Karma/Jasmine |
| **CSS3** | Modern Vanilla CSS | Flexbox, CSS Grid, mobile-responsive media queries, RapL dark/light palette |

### Directory Structure
```
rapl-learning-dashboard/
├── src/
│   ├── app/
│   │   ├── core/
│   │   │   ├── data/
│   │   │   │   └── courses.ts              # Mock course dataset with interview prep tracks
│   │   │   └── services/
│   │   │       ├── course.service.ts       # Central course state service (CRUD operations)
│   │   │       └── course.spec.ts          # Unit tests for CourseService
│   │   ├── features/
│   │   │   ├── dashboard/                  # Learning dashboard (4 metric cards + continue learning)
│   │   │   │   ├── dashboard.ts
│   │   │   │   ├── dashboard.html
│   │   │   │   ├── dashboard.css
│   │   │   │   └── dashboard.spec.ts
│   │   │   ├── courses/
│   │   │   │   ├── course-list/            # Catalog with search, status & topic filters, sorting
│   │   │   │   │   ├── course-list.ts
│   │   │   │   │   ├── course-list.html
│   │   │   │   │   ├── course-list.css
│   │   │   │   │   └── course-list.spec.ts
│   │   │   │   ├── course-detail/          # Course details view with dynamic status toggle
│   │   │   │   │   ├── course-detail.ts
│   │   │   │   │   ├── course-detail.html
│   │   │   │   │   ├── course-detail.css
│   │   │   │   │   └── course-detail.spec.ts
│   │   │   │   └── course-add/             # Reactive form with inline validations
│   │   │   │       ├── course-add.ts
│   │   │   │       ├── course-add.html
│   │   │   │       ├── course-add.css
│   │   │   │       └── course-add.spec.ts
│   │   │   └── interview-prep/             # Interview preparation guide & Q&A
│   │   │       ├── interview-prep.ts
│   │   │       ├── interview-prep.html
│   │   │       ├── interview-prep.css
│   │   │       └── interview-prep.spec.ts
│   │   ├── models/
│   │   │   └── course.model.ts             # Course and CourseStatus types
│   │   ├── shared/
│   │   │   └── components/
│   │   │       └── navbar/                 # Responsive RapL navigation header
│   │   ├── app.routes.ts                   # Angular route definitions
│   │   ├── app.ts                          # Root shell component
│   │   └── app.html                        # Application shell with router-outlet
│   ├── styles.css                          # Global typography and base styles
│   └── main.ts                             # Angular bootstrap entrypoint
```

---

## Project Highlights & Features

### 1. Learning Dashboard
- **Real-Time Metrics Grid**: Calculates live statistics derived directly from `CourseService`:
  - Total Courses
  - Courses Completed
  - Courses In Progress
  - Courses Not Started
- **Continue Learning Feature Card**: Highlights current active course with progress percentage indicator, topic badge, and direct deep link into lesson progress.

### 2. Course Catalog (Search, Filter, Sort)
- **Live Search**: Performs real-time search across course names and course descriptions.
- **Status Filtering**: Filter by `All`, `In Progress`, `Completed`, or `Not Started`.
- **Topic Filtering**: Filter by curriculum categories (`Angular`, `TypeScript`, `JavaScript`, `Web Basics`, `Interview Prep`).
- **Dynamic Sorting**: Sort by `Name (A-Z)`, `Name (Z-A)`, `Duration (Shortest/Longest)`, or `Lessons (Most first)`.
- **Empty State**: Friendly fallback when search queries or filters yield zero results, with a one-click reset action.

### 3. Course Details & Status Engine
- **Dynamic Routing**: Dedicated route `/courses/:id` resolving parameters via `ActivatedRoute`.
- **Interactive Lifecycle Controls**: Change course status instantly with one click:
  - `▶ Start / Continue` → Updates course status to `In Progress`
  - `✓ Mark as Completed` → Updates course status to `Completed`
  - `↺ Reset Status` → Resets course status to `Not Started`
- **Dynamic Progress Bar**: Dynamically reflects course completion (0% -> 60% -> 100%).
- **Curriculum Syllabus**: Outlines lesson modules, time breakdown, and objectives.

### 4. Add Course & Reactive Form Validation
- Built with Angular `FormGroup` and `FormBuilder` with synchronous validation:
  - **Title**: Required, min 3 characters, max 80 characters.
  - **Category / Topic**: Required dropdown selection.
  - **Description**: Required, min 10 characters, max 400 characters.
  - **Duration (hours)**: Required numeric, min 1 hour, max 200 hours.
  - **Lessons count**: Required numeric, min 1 lesson, max 200 lessons.
  - **Status**: Required dropdown selection (`Not Started`, `In Progress`, `Completed`).
- **Real-Time Visual Validation**: Red outline styling and contextual error messages appear once touched or submitted.
- **Auto-generated Unique ID**: Generates the next sequential ID and redirects to the catalog upon successful addition.

### 5. Interview Preparation Center
- Dedicated `/interview-prep` section tailored for engineering interviews:
  - Categorized interview questions: **Core & DI**, **Signals & Reactivity**, **Forms & State**, and **Performance & Defer**.
  - Interactive accordions with comprehensive, high-scoring technical explanations and bulleted talking points.
  - Featured interview preparation tracks linked directly from mock data (`Angular Interview Masterclass`, `Frontend Coding & System Design Interviews`).
- Preserves the clean RapL visual theme without disruptive layout changes.

### 6. Responsive Mobile-First Design
- Seamlessly adapts across desktops (1200px container), tablets, and smartphones (under 650px).
- Navigation bar collapses into mobile-friendly scrollable tabs.
- Form rows collapse from two-column grids to stacked layouts for single-thumb mobile accessibility.

---

## Mock Course Data & Model

```typescript
export type CourseStatus = 'Not Started' | 'In Progress' | 'Completed';

export interface Course {
  id: number;
  name: string;
  description: string;
  duration: number;
  lessons: number;
  status: CourseStatus;
  category?: string;
}
```

Pre-populated mock dataset includes:
1. **Angular Fundamentals** (In Progress, Angular)
2. **JavaScript Essentials** (Completed, JavaScript)
3. **HTML & CSS Basics** (Not Started, Web Basics)
4. **TypeScript for Beginners** (In Progress, TypeScript)
5. **Responsive Web Design** (Completed, Web Basics)
6. **Angular Reactive Forms** (Not Started, Angular)
7. **Angular Routing & Navigation** (In Progress, Angular)
8. **Web Accessibility & Performance** (Not Started, Web Basics)
9. **Angular Interview Masterclass** (In Progress, Interview Prep)
10. **Frontend Coding & System Design Interviews** (Not Started, Interview Prep)

---

## Getting Started

### Prerequisites
- **Node.js**: v18.19+ or v20+ or v24+
- **npm**: v10+ or v11+

### Installation
Clone or navigate to the project directory:
```bash
cd rapl-learning-dashboard
npm install
```

### Development Server
Start the local hot-reloading development server:
```bash
npm start
# or
npx ng serve
```
Open **[http://localhost:4200/](http://localhost:4200/)** in your browser.

---

## Running Unit Tests

Unit tests are executed via **Vitest**:
```bash
# Run tests once (CI mode)
npm test -- --watch=false
# or
npx ng test --watch=false
```

### Test Suite Coverage:
- `App` component: Shell rendering and navbar integration
- `Navbar` component: Brand logo and navigation link counts
- `CourseService`: In-memory data store, ID lookups, CRUD and status updates
- `Dashboard` component: Correct metric computation (total = completed + inProgress + notStarted)
- `CourseListComponent`: Real-time text search, status filtering, category filtering, name/duration sorting
- `CourseDetailComponent`: Route parameter retrieval, status mutations, progress calculation
- `CourseAddComponent`: Reactive form validations, min/max length constraints, course submission
- `InterviewPrepComponent`: Category filters, accordion toggle, interview mock courses integration

**Result: 8 Test Suites, 33 Tests Passing (100% Pass Rate).**

---

## Production Build

Compile the optimized bundle:
```bash
npm run build
```
Output artifacts are saved to `dist/rapl-learning-dashboard`.

---

## Technical Interview Walkthrough & Debugging Guide

When presenting this application in a technical interview, here is how to explain key architectural decisions and problem-solving skills:

### 1. Displaying and Manipulating Data (CourseService & State)
- **Concept**: A single source of truth for course state is managed by `CourseService` registered with `providedIn: 'root'`.
- **Explanation**: This ensures all components (Dashboard, Course List, Course Details, Add Course) share the exact same state in memory. Changing a course status in Course Details immediately recalculates the statistics on the Dashboard upon navigation.

### 2. Angular Standalone Architecture & Control Flow
- **Concept**: Standalone components (`standalone: true`) eliminate the need for legacy `NgModule` modules.
- **Explanation**: Used modern Angular control flow syntax (`@if`, `@else`, `@for (item of items; track item.id)`). The `@for` syntax requires an explicit `track` expression which improves DOM reconciliation performance by tracking unique entity keys.

### 3. Reactive Forms vs Template-Driven Forms
- **Concept**: The Add Course form uses `FormBuilder` and `ReactiveFormsModule`.
- **Explanation**: Reactive forms keep validation logic entirely in TypeScript, making them synchronously testable in unit tests without querying DOM inputs. Form status changes (`isFieldInvalid`) provide feedback only after user interaction (`touched` or `submitted`).

### 4. How Debugging Was Approached
- **TestBed Provider Missing**: When testing standalone components that rely on `routerLink`, Vitest throws `NG0201: No provider found for ActivatedRoute`. Solution: Added `provideRouter([])` to test Bed configurations.
- **Budget Thresholds**: CSS component styles slightly exceeded the default 4kB warning threshold. Solution: Adjusted `anyComponentStyle` budget in `angular.json` to 8kB for complex enterprise dashboard components.
