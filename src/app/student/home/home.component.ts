import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  media:number[] = []
  allStudents: Student[] = [];
  filterName:string = ''
  filteredStudents: Student[] = []

  constructor(private studentService: StudentService){}
  
  ngOnInit(): void {
    this.studentService.getAll().subscribe(data => {
      this.allStudents = data
      
      this.allStudents.forEach((student, i) => {
        let sum = 0 
        student.notes.forEach(note => sum += Number(note));
        this.media[i] = sum / student.notes.length;
      });

      this.filteredStudents = this.allStudents;
    })
  }

  deleteStudent(id:number){
    this.studentService.delete(id).subscribe({
      next: data => {
        this.filteredStudents = this.filteredStudents.filter(_ => _.id != id)
      }
    })
  }
  
  updateFilteredStudents(){
    this.filteredStudents = this.allStudents.filter(
      student => student.name.toLowerCase().includes(this.filterName.toLowerCase())
    );
  }
}
