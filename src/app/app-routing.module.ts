import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RobotComponent } from './robot/robot.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: "robot",
    component: RobotComponent
  },
  {
    path: "",
    loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
