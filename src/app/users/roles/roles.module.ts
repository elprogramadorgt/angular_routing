import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RolesRoutingModule } from './roles-routing.module';
import { RoleComponent } from './role/role.component';


@NgModule({
  declarations: [
    RoleComponent
  ],
  imports: [
    CommonModule,
    RolesRoutingModule
  ],
  exports: [
    RoleComponent,
  ]
})
export class RolesModule { }
