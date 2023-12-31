import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent {
  student:  Student = {
    id:0,
    name: '',
    notes: [0,0,0,0],
    birthday: '',
    photoUrl:'',
    address:'',
    situation:''
  }
  filterName:string = ''
  filteredStudents: Student[] = []
  media:number = 0
  sum:number = 0

  constructor(
      private studentsService: StudentService,
      private route: ActivatedRoute,
    ){}
  
  ngOnInit(): void {
    this.route.paramMap.subscribe(student => {
      let id = Number(student.get('id'))
      this.getStudentByIdAndSetMedia(id)
      
      
    })
  }

  getStudentByIdAndSetMedia(id:number){
    this.studentsService.get(id).subscribe(data => {
      this.student = data
      this.student.notes.forEach(note => this.sum += Number(note));
      this.media = this.sum / this.student.notes.length;
    })
  }
 
}
