import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { CompletedProjectComponent } from '../completed-project/completed-project.component';
import { OnGoingProjectComponent } from '../on-going-project/on-going-project.component';
import { DeliveredProjectComponent } from '../delivered-project/delivered-project.component';

export const content: Routes = [
  {
    path: '',component: HomeComponent
  },
  {
    path:"completed-project",component:CompletedProjectComponent
  },
  {
    path:"ongoing-project" ,component: OnGoingProjectComponent
  },
  {
    path:'delivered-project', component:DeliveredProjectComponent
  }
 

];
@NgModule({
  exports: [RouterModule],
})
export class SaredRoutingModule { }
