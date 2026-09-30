# 📚 RAPL Learning Dashboard

A modern, feature-rich **learning management dashboard** built with **Angular 21** and **TypeScript**. Track your courses, monitor progress, and prepare for technical interviews — all from a single, elegant interface

---

## ✨ Features

| Feature | Description |
|---|---|
| **📊 Dashboard** | At-a-glance summary of total, completed, in-progress, and not-started courses |
| **📖 Course Catalog** | Browse, search, filter, and sort all available courses |
| **➕ Add Course** | Create new courses with name, description, duration, lessons, status, and category |
| **🔍 Course Detail** | View detailed information and update the status of any course |
| **🎯 Interview Prep** | Curated Angular interview questions with expandable answers and key takeaways |
| **🧭 Navigation** | Responsive navbar with seamless client-side routing |

---

## 🛠️ Tech Stack

- **Framework** — [Angular 21](https://angular.dev) (standalone components)
- **Language** — TypeScript 5.9
- **Styling** — Vanilla CSS (component-scoped)
- **Routing** — Angular Router with lazy-friendly standalone routes
- **Forms** — Angular Reactive Forms
- **Testing** — Vitest + jsdom
- **Code Quality** — Prettier, EditorConfig

---

## 📁 Project Structure

```
rapl-learning-dashboard/
├── src/
│   ├── app/
│   │   ├── core/                    # Core singleton services & data
│   │   │   ├── data/
│   │   │   │   └── courses.ts       # In-memory course seed data
│   │   │   └── services/
│   │   │       └── course.service.ts # CRUD operations for courses
│   │   ├── features/                # Feature modules
│   │   │   ├── dashboard/           # Dashboard overview page
│   │   │   ├── courses/
│   │   │   │   ├── course-list/     # Searchable, filterable course list
│   │   │   │   ├── course-detail/   # Single course view & status update
│   │   │   │   └── course-add/      # New course creation form
│   │   │   └── interview-prep/      # Interview Q&A reference
│   │   ├── models/
│   │   │   └── course.model.ts      # Course interface & status types
│   │   ├── shared/
│   │   │   └── components/
│   │   │       └── navbar/          # Global navigation bar
│   │   ├── app.routes.ts            # Application route definitions
│   │   ├── app.config.ts            # App-level providers
│   │   └── app.ts                   # Root component
│   ├── index.html
│   ├── main.ts
│   └── styles.css                   # Global styles
├── angular.json
├── package.json
├── tsconfig.json
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

| Tool | Version |
|---|---|
| **Node.js** | 18.x or later |
| **npm** | 11.x or later |
| **Angular CLI** | 21.x (`npm install -g @angular/cli`) |

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/balaharibaskar/ralp11.git
cd ralp11/rapl-learning-dashboard

# 2. Install dependencies
npm install

# 3. Start the development server
npm start
```

The app will be served at **`http://localhost:4200/`** and will auto-reload on file changes.

---

## 📜 Available Scripts

| Command | Description |
|---|---|
| `npm start` | Start the dev server (`ng serve`) |
| `npm run build` | Build for production |
| `npm run watch` | Build in watch mode (development config) |
| `npm test` | Run unit tests with Vitest |

---

## 🗺️ Routes

| Path | Component | Description |
|---|---|---|
| `/` | — | Redirects to `/dashboard` |
| `/dashboard` | `Dashboard` | Overview with course stats |
| `/courses` | `CourseListComponent` | Full course catalog with filters |
| `/courses/add` | `CourseAddComponent` | Add a new course |
| `/courses/:id` | `CourseDetailComponent` | View & manage a single course |
| `/interview-prep` | `InterviewPrepComponent` | Interview Q&A browser |
| `**` | — | Wildcard redirect → `/dashboard` |

---

## 🧪 Running Tests

```bash
npm test
```

Tests are written with **Vitest** and run in a **jsdom** environment. Each feature component and the core `CourseService` have dedicated spec files.

---

## 📝 Course Data Model

```typescript
type CourseStatus = 'Not Started' | 'In Progress' | 'Completed';

interface Course {
  id: number;
  name: string;
  description: string;
  duration: number;      // hours
  lessons: number;
  status: CourseStatus;
  category?: string;     // e.g. "Angular", "JavaScript", "Interview Prep"
}
```

### Pre-loaded Categories

- 🅰️ **Angular** — Fundamentals, Reactive Forms, Routing & Navigation
- 🟨 **JavaScript** — ES6+, closures, async programming
- 🌐 **Web Basics** — HTML & CSS, Responsive Design, Accessibility & Performance
- 🔷 **TypeScript** — Types, interfaces, generics, decorators
- 🎯 **Interview Prep** — Angular Interview Masterclass, Frontend System Design

---

## 🤝 Contributing

Contributions are welcome! To get started:

1. **Fork** the repository
2. **Create** a feature branch — `git checkout -b feature/my-feature`
3. **Commit** your changes — `git commit -m "feat: add my feature"`
4. **Push** to the branch — `git push origin feature/my-feature`
5. **Open** a Pull Request

---

