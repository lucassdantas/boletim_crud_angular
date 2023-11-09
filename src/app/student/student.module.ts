import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';

import { FormsModule } from '@angular/forms';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [
    HomeComponent,
    CreateComponent,
    EditComponent,
    ViewComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    FormsModule
  ]
})
export class StudentModule { }
