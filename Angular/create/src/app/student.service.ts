import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }

  API = 'http://localhost:9090';

  // tslint:disable-next-line: typedef
  public registerStudent(studentData: any) {
    return this.http.post(this.API + '/registerStudent', studentData);
  }

  // tslint:disable-next-line: typedef
  public getStudents() {
    return this.http.get(this.API + '/getStudents');
  }

  // tslint:disable-next-line: typedef
  public deleteStudent(id: any) {
    return this.http.delete(this.API + '/deleteStudent?id=' + id);
  }

  // tslint:disable-next-line: typedef
  public updateStudents(student: any) {
    return this.http.put(this.API + '/updateStudents', student);
  }
}

