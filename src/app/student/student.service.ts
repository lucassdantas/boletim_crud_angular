import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private httpClient: HttpClient) { }

  getAll(){
    return this.httpClient.get<Student[]>('http://localhost:3000/students')
  }

  create(data: Student){
    return this.httpClient.post('http://localhost:3000/students', data)
  }
}
