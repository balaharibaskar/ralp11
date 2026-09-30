import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Course, CourseStatus } from '../../../models/course.model';
import { CourseService } from '../../../core/services/course.service';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseListComponent implements OnInit {
  courses: Course[] = [];
  searchTerm: string = '';
  selectedStatus: string = 'All';
  selectedCategory: string = 'All';
  sortBy: string = 'name-asc';

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.courses = this.courseService.getCourses();
  }

  get filteredCourses(): Course[] {
    return this.courses
      .filter(course => {
        const matchesSearch =
          this.searchTerm.trim() === '' ||
          course.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
          course.description.toLowerCase().includes(this.searchTerm.toLowerCase());

        const matchesStatus =
          this.selectedStatus === 'All' || course.status === this.selectedStatus;

        const matchesCategory =
          this.selectedCategory === 'All' ||
          (course.category && course.category === this.selectedCategory);

        return matchesSearch && matchesStatus && matchesCategory;
      })
      .sort((a, b) => {
        if (this.sortBy === 'name-asc') {
          return a.name.localeCompare(b.name);
        } else if (this.sortBy === 'name-desc') {
          return b.name.localeCompare(a.name);
        } else if (this.sortBy === 'duration-asc') {
          return a.duration - b.duration;
        } else if (this.sortBy === 'duration-desc') {
          return b.duration - a.duration;
        } else if (this.sortBy === 'lessons-desc') {
          return b.lessons - a.lessons;
        }
        return 0;
      });
  }

  get categories(): string[] {
    const cats = new Set<string>();
    this.courses.forEach(c => {
      if (c.category) {
        cats.add(c.category);
      }
    });
    return Array.from(cats);
  }

  resetFilters(): void {
    this.searchTerm = '';
    this.selectedStatus = 'All';
    this.selectedCategory = 'All';
    this.sortBy = 'name-asc';
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
}
