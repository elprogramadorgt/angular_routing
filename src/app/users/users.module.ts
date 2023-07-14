import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { CreateComponent } from './create/create.component';
import { RolesModule } from './roles/roles.module';
import { RoleComponent } from './roles/role/role.component';


@NgModule({
  declarations: [
    CreateComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    RolesModule
  ],
  exports: [
    CreateComponent,
    RoleComponent
  ]
})
export class UsersModule { }
