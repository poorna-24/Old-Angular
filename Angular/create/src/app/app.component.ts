import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StudentService } from './student.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'create';

  studentDetails = null as any;
  studentToUpdate = {
    // tslint:disable-next-line: whitespace
    rollNumber:'',
    name: '',
    address: '',
    percentage: ''
  };

  constructor(private studentService: StudentService) {
    this.getStudentsDetails();
  }

  // tslint:disable-next-line: typedef
  register(registerForm: NgForm) {
    this.studentService.registerStudent(registerForm.value).subscribe(
      (resp) => {
        console.log(resp);
        registerForm.reset();
        this.getStudentsDetails();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  // tslint:disable-next-line: typedef
  getStudentsDetails() {
    this.studentService.getStudents().subscribe(
      (resp) => {
        console.log(resp);
        this.studentDetails = resp;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  // tslint:disable-next-line: typedef
  deleteStudent(student: any) {
    this.studentService.deleteStudent(student.rollNumber).subscribe(
      (resp) => {
        console.log(resp);
        this.getStudentsDetails();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  // tslint:disable-next-line: typedef
  edit(studuent: any){
    this.studentToUpdate = studuent;
  }

  // tslint:disable-next-line: typedef
  updateStudent(){
    this.studentService.updateStudents(this.studentToUpdate).subscribe(
      (resp) => {
        console.log(resp);
      },
      (err) => {
        console.log(err);
      }
    );
  }


}
