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
  media:number[] = []
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

  constructor(
    private studentsService: StudentService,
    private router: Router,
    private route: ActivatedRoute
    ){}
  
  ngOnInit(): void {
    this.route.paramMap.subscribe(student => {
      let id = Number(student.get('id'))
      this.getStudentByIdAndEdit(id)
    })
  }
  getStudentByIdAndEdit(id:number){
    this.studentsService.edit(id).subscribe(data => {
      this.student = data
    })
  }
 
}
