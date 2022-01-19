import { Component, OnInit } from '@angular/core';
import { Teacher } from '../models/teacher';
import { TeacherService } from './services/teacher.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public teachers: Teacher[];
  public editTeacher: Teacher;
  public deleteTeacher: Teacher;

  constructor(private teacherService: TeacherService){}

  ngOnInit() {
    this.getTeachers();
  }

  public getTeachers(): void {
    this.teacherService.getTeachers().subscribe(
      (response: Teacher[]) => {
        this.teachers = response;
        console.log(this.teachers);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onAddEmloyee(addForm: NgForm): void {
    document.getElementById('add-teacher-form').click();
    this.teacherService.addTeacher(addForm.value).subscribe(
      (response: Teacher) => {
        console.log(response);
        this.getTeachers();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

  public onUpdateEmloyee(teacher: Teacher): void {
    this.teacherService.updateTeacher(teacher).subscribe(
      (response: Teacher) => {
        console.log(response);
        this.getTeachers();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onDeleteEmloyee(teacherId: number): void {
    this.teacherService.deleteTeacher(teacherId).subscribe(
      (response: void) => {
        console.log(response);
        this.getTeachers();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public searchTeachers(key: string): void {
    console.log(key);
    const results: Teacher[] = [];
    for (const teacher of this.teachers) {
      if (teacher.name.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || teacher.email.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || teacher.phone.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || teacher.subject.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
        results.push(teacher);
      }
    }
    this.teachers = results;
    if (results.length === 0 || !key) {
      this.getTeachers();
    }
  }

  public onOpenModal(teacher: Teacher, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addTeacherModal');
    }
    if (mode === 'edit') {
      this.editTeacher = teacher;
      button.setAttribute('data-target', '#updatTeacherModal');
    }
    if (mode === 'delete') {
      this.deleteTeacher = teacher;
      button.setAttribute('data-target', '#deleteTeacherModal');
    }
    container.appendChild(button);
    button.click();
  }



}
