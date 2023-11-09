import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './student/home/home.component';

const routes: Routes = [
  {path:'student/home', component: HomeComponent},
  {path:'student', redirectTo: 'student/home', pathMatch: 'full'},
  {path:'', redirectTo: 'student/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
