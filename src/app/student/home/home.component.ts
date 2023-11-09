import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  
  allStudents: Student[] = [];
  
  constructor(private studentService: StudentService){}
  
  ngOnInit(): void {
      this.studentService.getAll().subscribe(data => {
        this.allStudents = data
        this.allStudents.forEach(student => {
          const sum = student.notes.reduce((acc, note) => acc + note, 0);
          student.media = sum / student.notes.length;
        });
      })

     
  }
  

}
