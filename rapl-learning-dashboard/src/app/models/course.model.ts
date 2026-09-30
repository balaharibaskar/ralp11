export type CourseStatus =
  | 'Not Started'
  | 'In Progress'
  | 'Completed';

export interface Course {
  id: number;
  name: string;
  description: string;
  duration: number;
  lessons: number;
  status: CourseStatus;
  category?: string;
}