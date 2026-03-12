import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from '../models/student.model';
@Injectable({
  providedIn: 'root',
})
export class StudentService {
   url ="http://localhost:8080/students";
  constructor(private hc:HttpClient){}

  getAllStudents()
  {
    return this.hc.get<Student[]>(this.url)
  }

  getStudent(reg:number)
  {
    return this.hc.get<Student>(this.url+"/"+reg);
  }

  addStudent(s:Student)
  {
    return this.hc.post<Student>(this.url,s);
  }

  updateStudent(reg:number, s:Student)
  {
    return this.hc.put<Student>(this.url + "/" + reg, s);
  }

  deleteStudent(reg:number)
  {
    return this.hc.delete(this.url+"/"+reg);
  }

  getResults(pass:boolean)
  {
    return this.hc.get<Student[]>(this.url+"/result?pass="+pass);
  }

  getStrength(gender:string,std:number)
  {
    return this.hc.get<number>(this.url+"/strength?gender="+gender+"&std="+std);
  }

  getStudentsBySchool(name:string)
  {
    return this.hc.get<Student[]>(this.url + "/school?name=" + name);
  }

  getCountBySchool(name:string)
  {
    return this.hc.get<number>(this.url + "/school/count?name=" + name);
  }

  getCountBySchoolStd(school:string,std:number)
  {
    return this.hc.get<number>(this.url +
      "/school/standard/count?school=" + school + "&std=" + std);
  }
}
