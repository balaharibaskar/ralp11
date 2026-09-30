import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Course, CourseStatus } from '../../../models/course.model';
import { CourseService } from '../../../core/services/course.service';

@Component({
  selector: 'app-course-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './course-detail.html',
  styleUrl: './course-detail.css'
})
export class CourseDetailComponent implements OnInit {
  course: Course | undefined;
  notFound: boolean = false;
  statusUpdatedMessage: string = '';

  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService
  ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    const courseId = Number(idParam);

    if (isNaN(courseId)) {
      this.notFound = true;
      return;
    }

    this.course = this.courseService.getCourseById(courseId);
    if (!this.course) {
      this.notFound = true;
    }
  }

  updateStatus(newStatus: CourseStatus): void {
    if (!this.course) return;

    this.courseService.updateCourseStatus(this.course.id, newStatus);
    this.course.status = newStatus;

    this.statusUpdatedMessage = `Course marked as "${newStatus}"!`;
    setTimeout(() => {
      this.statusUpdatedMessage = '';
    }, 3000);
  }

  getStatusClass(status: CourseStatus): string {
    switch (status) {
      case 'Completed':
        return 'status-completed';
      case 'In Progress':
        return 'status-in-progress';
      case 'Not Started':
      default:
        return 'status-not-started';
    }
  }

  getProgressPercentage(): number {
    if (!this.course) return 0;
    if (this.course.status === 'Completed') return 100;
    if (this.course.status === 'In Progress') return 60;
    return 0;
  }
}
