import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { CourseListComponent } from './course-list';
import { CourseService } from '../../../core/services/course.service';

describe('CourseListComponent', () => {
  let component: CourseListComponent;
  let fixture: ComponentFixture<CourseListComponent>;
  let courseService: CourseService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseListComponent],
      providers: [provideRouter([]), CourseService]
    }).compileComponents();

    fixture = TestBed.createComponent(CourseListComponent);
    component = fixture.componentInstance;
    courseService = TestBed.inject(CourseService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load all courses on init', () => {
    expect(component.courses.length).toBeGreaterThan(0);
    expect(component.filteredCourses.length).toEqual(component.courses.length);
  });

  it('should filter courses by search term', () => {
    component.searchTerm = 'Angular';
    const results = component.filteredCourses;
    expect(results.length).toBeGreaterThan(0);
    expect(results.every(c => c.name.toLowerCase().includes('angular') || c.description.toLowerCase().includes('angular'))).toBe(true);
  });

  it('should filter courses by status', () => {
    component.selectedStatus = 'Completed';
    const results = component.filteredCourses;
    expect(results.every(c => c.status === 'Completed')).toBe(true);
  });

  it('should sort courses by name ascending', () => {
    component.sortBy = 'name-asc';
    const results = component.filteredCourses;
    for (let i = 0; i < results.length - 1; i++) {
      expect(results[i].name.localeCompare(results[i + 1].name)).toBeLessThanOrEqual(0);
    }
  });

  it('should reset filters', () => {
    component.searchTerm = 'xyz';
    component.selectedStatus = 'Completed';
    component.sortBy = 'duration-desc';
    component.resetFilters();

    expect(component.searchTerm).toBe('');
    expect(component.selectedStatus).toBe('All');
    expect(component.sortBy).toBe('name-asc');
  });
});
