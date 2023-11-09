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

  get(id:number){
    return this.httpClient.get<Student>(`http://localhost:3000/students/${id}`)
  }
  create(data: Student){
    return this.httpClient.post('http://localhost:3000/students', data)
  }

  edit(id:number){
    return this.httpClient.get<Student>(`http://localhost:3000/students/${id}`)
  }

  update(data:Student){
    return this.httpClient.put<Student>(`http://localhost:3000/students/${data.id}`, data)
  }

  delete(id:number){
    return this.httpClient.delete<Student>(`http://localhost:3000/students/${id}`)
  }
}
