import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { InterviewPrepComponent } from './interview-prep';
import { CourseService } from '../../core/services/course.service';

describe('InterviewPrepComponent', () => {
  let component: InterviewPrepComponent;
  let fixture: ComponentFixture<InterviewPrepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterviewPrepComponent],
      providers: [provideRouter([]), CourseService]
    }).compileComponents();

    fixture = TestBed.createComponent(InterviewPrepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load interview questions', () => {
    expect(component.questions.length).toBeGreaterThan(0);
    expect(component.filteredQuestions.length).toBe(component.questions.length);
  });

  it('should filter questions by category', () => {
    component.selectedCategory = 'Signals';
    expect(component.filteredQuestions.every(q => q.category === 'Signals')).toBe(true);
  });

  it('should toggle question expansion', () => {
    const question = component.questions[0];
    const initial = question.expanded;
    component.toggleQuestion(question);
    expect(question.expanded).toBe(!initial);
  });

  it('should retrieve interview courses from CourseService', () => {
    expect(component.interviewCourses.length).toBeGreaterThan(0);
    expect(component.interviewCourses.every(c => c.category === 'Interview Prep')).toBe(true);
  });
});
