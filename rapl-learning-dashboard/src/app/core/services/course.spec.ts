import { TestBed } from '@angular/core/testing';
import { CourseService } from './course.service';
import { Course } from '../../models/course.model';

describe('CourseService', () => {
  let service: CourseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CourseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return initial list of courses', () => {
    const courses = service.getCourses();
    expect(courses.length).toBeGreaterThan(0);
    expect(courses[0].name).toBe('Angular Fundamentals');
  });

  it('should find a course by id', () => {
    const course = service.getCourseById(1);
    expect(course).toBeDefined();
    expect(course?.id).toBe(1);
    expect(course?.name).toBe('Angular Fundamentals');
  });

  it('should return undefined for non-existent course id', () => {
    const course = service.getCourseById(9999);
    expect(course).toBeUndefined();
  });

  it('should add a new course', () => {
    const initialCount = service.getCourses().length;
    const newCourse: Course = {
      id: 99,
      name: 'RxJS in Depth',
      description: 'Master observables, operators, and state.',
      duration: 5,
      lessons: 10,
      status: 'Not Started'
    };

    service.addCourse(newCourse);
    const courses = service.getCourses();
    expect(courses.length).toBe(initialCount + 1);
    expect(service.getCourseById(99)).toEqual(newCourse);
  });

  it('should update course status', () => {
    service.updateCourseStatus(1, 'Completed');
    const course = service.getCourseById(1);
    expect(course?.status).toBe('Completed');
  });
});