import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter, ActivatedRoute } from '@angular/router';
import { CourseDetailComponent } from './course-detail';
import { CourseService } from '../../../core/services/course.service';

describe('CourseDetailComponent', () => {
  let component: CourseDetailComponent;
  let fixture: ComponentFixture<CourseDetailComponent>;
  let courseService: CourseService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseDetailComponent],
      providers: [
        provideRouter([]),
        CourseService,
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get: (key: string) => (key === 'id' ? '1' : null)
              }
            }
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CourseDetailComponent);
    component = fixture.componentInstance;
    courseService = TestBed.inject(CourseService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load course details for id 1', () => {
    expect(component.course).toBeDefined();
    expect(component.course?.id).toBe(1);
    expect(component.course?.name).toBe('Angular Fundamentals');
    expect(component.notFound).toBe(false);
  });

  it('should update course status', () => {
    component.updateStatus('Completed');
    expect(component.course?.status).toBe('Completed');
    expect(courseService.getCourseById(1)?.status).toBe('Completed');
    expect(component.statusUpdatedMessage).toContain('Completed');
  });

  it('should calculate progress percentage', () => {
    component.updateStatus('Completed');
    expect(component.getProgressPercentage()).toBe(100);

    component.updateStatus('In Progress');
    expect(component.getProgressPercentage()).toBe(60);

    component.updateStatus('Not Started');
    expect(component.getProgressPercentage()).toBe(0);
  });
});
