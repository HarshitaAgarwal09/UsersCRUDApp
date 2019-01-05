import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserListComponent} from './user-list/user-list.component';
import {AddUserComponent} from './add-user/add-user.component';
import {EdituserComponent} from './edituser/edituser.component';

const routes: Routes = [
{path:'userlist', component:UserListComponent},
{path:'adduser', component:AddUserComponent},
{path:'edituser', component:EdituserComponent},
{path:'', redirectTo:'/userlist', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
