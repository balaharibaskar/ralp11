import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { CourseAddComponent } from './course-add';
import { CourseService } from '../../../core/services/course.service';

describe('CourseAddComponent', () => {
  let component: CourseAddComponent;
  let fixture: ComponentFixture<CourseAddComponent>;
  let courseService: CourseService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseAddComponent],
      providers: [provideRouter([]), CourseService]
    }).compileComponents();

    fixture = TestBed.createComponent(CourseAddComponent);
    component = fixture.componentInstance;
    courseService = TestBed.inject(CourseService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize form with invalid status because fields are empty', () => {
    expect(component.courseForm.valid).toBe(false);
    expect(component.courseForm.get('name')?.valid).toBe(false);
    expect(component.courseForm.get('description')?.valid).toBe(false);
  });

  it('should validate minimum length for name and description', () => {
    component.courseForm.patchValue({
      name: 'ab',
      description: 'short'
    });
    expect(component.courseForm.get('name')?.errors?.['minlength']).toBeTruthy();
    expect(component.courseForm.get('description')?.errors?.['minlength']).toBeTruthy();
  });

  it('should successfully add a course when form is valid', () => {
    const initialCount = courseService.getCourses().length;

    component.courseForm.setValue({
      name: 'Advanced NgRx State',
      description: 'Master global store, effects, selectors, and entity adapters.',
      duration: 10,
      lessons: 15,
      status: 'In Progress',
      category: 'Angular'
    });

    expect(component.courseForm.valid).toBe(true);

    component.onSubmit();

    expect(courseService.getCourses().length).toBe(initialCount + 1);
    expect(component.successMessage).toContain('Advanced NgRx State');
  });

  it('should reset form when onReset is invoked', () => {
    component.courseForm.patchValue({
      name: 'Sample Course',
      duration: 5
    });

    component.onReset();
    expect(component.courseForm.get('name')?.value).toBe('');
    expect(component.courseForm.get('duration')?.value).toBeNull();
    expect(component.isSubmitted).toBe(false);
  });
});
