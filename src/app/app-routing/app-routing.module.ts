import { NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../login/login.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { HomeComponent } from '../dashboard/home/home.component';
import { ChatComponent } from '../dashboard/chat/chat/chat.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent, children:[
    {path: 'home', component: HomeComponent},
    {path: 'chat', component: ChatComponent}
  ]}

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes, { enableTracing: true, useHash: true })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
