import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './student/home/home.component';

const routes: Routes = [
  {path:'student/index', component: HomeComponent},
  {path:'student', redirectTo: 'fruit', pathMatch: 'full'},
  {path:'', redirectTo: 'fruit', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
