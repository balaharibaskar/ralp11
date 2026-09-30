import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CourseService } from '../../core/services/course.service';

@Component({
  selector: 'app-dashboard',
  imports: [RouterLink],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard implements OnInit {

  totalCourses = 0;
  completedCourses = 0;
  inProgressCourses = 0;
  notStartedCourses = 0;
  continueCourse?: import('../../models/course.model').Course;

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    const courses = this.courseService.getCourses();

    this.totalCourses = courses.length;

    this.completedCourses = courses.filter(
      course => course.status === 'Completed'
    ).length;

    this.inProgressCourses = courses.filter(
      course => course.status === 'In Progress'
    ).length;

    this.notStartedCourses = courses.filter(
      course => course.status === 'Not Started'
    ).length;

    this.continueCourse = courses.find(c => c.status === 'In Progress') || courses[0];
  }
}