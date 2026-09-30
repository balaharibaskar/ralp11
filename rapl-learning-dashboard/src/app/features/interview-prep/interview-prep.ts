import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CourseService } from '../../core/services/course.service';
import { Course } from '../../models/course.model';

export interface InterviewTopic {
  id: number;
  question: string;
  category: 'Core' | 'Signals' | 'Forms' | 'Performance';
  answer: string;
  keyPoints: string[];
  expanded?: boolean;
}

@Component({
  selector: 'app-interview-prep',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './interview-prep.html',
  styleUrl: './interview-prep.css'
})
export class InterviewPrepComponent implements OnInit {
  selectedCategory: string = 'All';
  interviewCourses: Course[] = [];

  readonly questions: InterviewTopic[] = [
    {
      id: 1,
      category: 'Core',
      question: 'How does Angular Change Detection work and why is OnPush crucial?',
      answer: 'Angular checks the component tree from top to bottom whenever asynchronous browser events (HTTP, clicks, timers) occur. By default (Default strategy), every component is re-evaluated. With ChangeDetectionStrategy.OnPush, Angular skips checking the component and its subtree unless an @Input() reference changes, an event listener in the component triggers, or an async pipe / manual markForCheck() is fired.',
      keyPoints: [
        'Default checks every component subtree on every tick',
        'OnPush relies on immutable reference equality (===)',
        'Greatly reduces CPU cycles and prevents unwanted re-renders'
      ],
      expanded: true
    },
    {
      id: 2,
      category: 'Signals',
      question: 'What are Angular Signals and how do they differ from RxJS Observables?',
      answer: 'Signals are synchronous, fine-grained reactive primitives introduced in Angular 16+. A signal holds a current value, notifies dependents on change, and guarantees glitch-free computation. RxJS Observables represent asynchronous event streams over time. Signals excel at template-bound UI state, while RxJS is ideal for complex async coordination (debounce, switchMap, web sockets).',
      keyPoints: [
        'Signals provide synchronous getter functions without manual unsubscribe',
        'computed() values are memoized until dependencies change',
        'effect() runs side effects with automatic dependency tracking'
      ],
      expanded: false
    },
    {
      id: 3,
      category: 'Core',
      question: 'Explain Angular Dependency Injection and the Injector Hierarchy.',
      answer: 'Angular features a hierarchical dependency injection system. When a component requests a dependency, Angular checks the Element Injector tree upwards to the Module/Environment Injector (root). Dependencies can be scoped globally using { providedIn: "root" } for singleton services, or scoped to a component subtree using the @Component({ providers: [...] }) property.',
      keyPoints: [
        'Singleton services via providedIn: "root"',
        'Resolution modifiers: @Optional(), @SkipSelf(), @Self(), @Host()',
        'Encourages loose coupling and simplifies unit testing with mocks'
      ],
      expanded: false
    },
    {
      id: 4,
      category: 'Forms',
      question: 'Why choose Reactive Forms over Template-Driven Forms in enterprise apps?',
      answer: 'Reactive Forms provide programmatic, synchronous access to the form model through FormGroup and FormControl. They are completely decoupled from the DOM, making them straightforward to unit test without rendering templates. They also support complex cross-field validation, dynamic form control generation, and reactive streams via valueChanges.',
      keyPoints: [
        'Synchronous access to form data and validity state',
        'Easy to write isolated unit tests without TestBed DOM assertions',
        'Direct RxJS integration with control.valueChanges'
      ],
      expanded: false
    },
    {
      id: 5,
      category: 'Performance',
      question: 'What techniques do you use to optimize an Angular application for production?',
      answer: 'High-performance Angular apps leverage: 1) OnPush change detection, 2) Route-level lazy loading with loadComponent, 3) @for track expression to avoid re-rendering DOM lists, 4) Image optimization via NgOptimizedImage, 5) Deferrable views (@defer), and 6) Ahead-of-Time (AOT) compilation with tree-shaking.',
      keyPoints: [
        'Use @defer blocks for off-screen components and expensive dependencies',
        'Always provide track expressions in @for loops for DOM reconciliation',
        'Minimize main bundle by lazy loading feature routes'
      ],
      expanded: false
    }
  ];

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.interviewCourses = this.courseService
      .getCourses()
      .filter(c => c.category === 'Interview Prep');
  }

  get filteredQuestions(): InterviewTopic[] {
    if (this.selectedCategory === 'All') {
      return this.questions;
    }
    return this.questions.filter(q => q.category === this.selectedCategory);
  }

  toggleQuestion(question: InterviewTopic): void {
    question.expanded = !question.expanded;
  }
}
