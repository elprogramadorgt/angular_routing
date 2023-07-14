import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersModule } from './users/users.module';
import { RolesModule } from './users/roles/roles.module';
import { RobotComponent } from './robot/robot.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RobotComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsersModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
