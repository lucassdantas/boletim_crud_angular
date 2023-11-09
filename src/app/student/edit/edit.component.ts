import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../student';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  constructor(
    private studentsService: StudentService, 
    private router: Router,
    private route: ActivatedRoute
    ){}


  formData: Student = {
    id:0,
    name: '',
    notes: [0,0,0,0],
    birthday: '',
    photoUrl:'',
    address:'',
    situation:''
  }

  ngOnInit(): void {
      this.route.paramMap.subscribe(student => {
        let id = Number(student.get('id'))
        this.getStudentByIdAndEdit(id)
      })
  }
  getStudentByIdAndEdit(id:number){
    this.studentsService.edit(id).subscribe(data => {
      this.formData = data
    })
  }

  update(){
    this.studentsService.update(this.formData).subscribe({
      next:data => {
        this.router.navigate(['/student/home'])
      },
      error: e => console.log(e)
    })
  }

  handleFileInput(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.convertToBase64(file);
    }
  }

  convertToBase64(file: File) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.formData.photoUrl = reader.result as string;
    };
  }
}
