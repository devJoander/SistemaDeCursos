import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { LoginGuard as AuthGuard } from 'src/app/services/guard/login.guard';
import { NotfoundComponent } from '../home/components/notfound/notfound.component';

const routes: Routes = [{
  path: '',
  canActivate: [AuthGuard],
    data: { expectedRol: ['admin', 'creador'] }, 
  children: [
    { path: 'list', component: UserComponent }
  ]
},
{ path: '**', component: NotfoundComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
