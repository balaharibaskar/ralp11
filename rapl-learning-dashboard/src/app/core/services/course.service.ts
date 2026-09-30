import { Injectable } from '@angular/core';
import { Course } from '../../models/course.model';
import { COURSES } from '../data/courses';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private courses: Course[] = [...COURSES];

  getCourses(): Course[] {
    return this.courses;
  }

  getCourseById(id: number): Course | undefined {
    return this.courses.find(course => course.id === id);
  }

  addCourse(course: Course): void {
    this.courses.push(course);
  }

  updateCourse(updatedCourse: Course): void {
    const index = this.courses.findIndex(
      course => course.id === updatedCourse.id
    );

    if (index !== -1) {
      this.courses[index] = updatedCourse;
    }
  }

  updateCourseStatus(id: number, status: Course['status']): void {
    const course = this.getCourseById(id);
    if (course) {
      course.status = status;
    }
  }
}