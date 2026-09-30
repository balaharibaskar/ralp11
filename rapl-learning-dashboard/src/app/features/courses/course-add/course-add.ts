import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CourseService } from '../../../core/services/course.service';
import { Course, CourseStatus } from '../../../models/course.model';

@Component({
  selector: 'app-course-add',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './course-add.html',
  styleUrl: './course-add.css'
})
export class CourseAddComponent {
  courseForm: FormGroup;
  isSubmitted: boolean = false;
  successMessage: string = '';

  readonly statusOptions: CourseStatus[] = ['Not Started', 'In Progress', 'Completed'];
  readonly categoryOptions: string[] = ['Angular', 'TypeScript', 'JavaScript', 'Web Basics', 'Interview Prep', 'General'];

  constructor(
    private fb: FormBuilder,
    private courseService: CourseService,
    private router: Router
  ) {
    this.courseForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(80)]],
      description: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(400)]],
      duration: [null, [Validators.required, Validators.min(1), Validators.max(200)]],
      lessons: [null, [Validators.required, Validators.min(1), Validators.max(200)]],
      status: ['Not Started', [Validators.required]],
      category: ['Angular', [Validators.required]]
    });
  }

  get f() {
    return this.courseForm.controls;
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.courseForm.get(fieldName);
    return !!(field && field.invalid && (field.touched || this.isSubmitted));
  }

  onSubmit(): void {
    this.isSubmitted = true;

    if (this.courseForm.invalid) {
      this.courseForm.markAllAsTouched();
      return;
    }

    const allCourses = this.courseService.getCourses();
    const nextId = allCourses.length > 0 ? Math.max(...allCourses.map(c => c.id)) + 1 : 1;

    const formValues = this.courseForm.value;
    const newCourse: Course = {
      id: nextId,
      name: formValues.name.trim(),
      description: formValues.description.trim(),
      duration: Number(formValues.duration),
      lessons: Number(formValues.lessons),
      status: formValues.status as CourseStatus,
      category: formValues.category
    };

    this.courseService.addCourse(newCourse);
    this.successMessage = `Course "${newCourse.name}" has been created successfully!`;

    setTimeout(() => {
      this.router.navigate(['/courses']);
    }, 1200);
  }

  onReset(): void {
    this.isSubmitted = false;
    this.courseForm.reset({
      name: '',
      description: '',
      duration: null,
      lessons: null,
      status: 'Not Started',
      category: 'Angular'
    });
  }
}
