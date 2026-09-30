import { Routes } from '@angular/router';
import { Dashboard } from './features/dashboard/dashboard';
import { CourseListComponent } from './features/courses/course-list/course-list';
import { CourseDetailComponent } from './features/courses/course-detail/course-detail';
import { CourseAddComponent } from './features/courses/course-add/course-add';
import { InterviewPrepComponent } from './features/interview-prep/interview-prep';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: Dashboard
  },
  {
    path: 'courses',
    component: CourseListComponent
  },
  {
    path: 'courses/add',
    component: CourseAddComponent
  },
  {
    path: 'courses/:id',
    component: CourseDetailComponent
  },
  {
    path: 'interview-prep',
    component: InterviewPrepComponent
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];