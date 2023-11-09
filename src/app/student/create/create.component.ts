import { Component } from '@angular/core';
import { StudentService } from '../student.service';
import {Student} from '../student'
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  constructor(private studentsService: StudentService, private router: Router){}
  formData: Student = {
    id:0,
    name: '',
    notes: [0,0,0,0],
    birthday: '',
    photoUrl:'',
    address:'',
    situation:''

    //media: 0 
  }

  create(){
    this.studentsService.create(this.formData).subscribe({
      next:data => {
        this.router.navigate(['/student/home'])
      },
      error: e => console.log(e)
    })
  }
}
