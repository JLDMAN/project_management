// System
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing/app-routing.module';
// Components
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './dashboard/home/home.component';
import { NavigationComponent } from './dashboard/navigation/navigation.component';
import { HeaderComponent } from './dashboard/header/header.component';
import { ButtonComponent } from './components/button/button/button.component';
import { IdCardComponent } from './components/id-card/id-card/id-card.component';
import { ProjectOverviewComponent } from './components/project-overview/project-overview/project-overview.component';
// prime ng
import { DropdownModule } from 'primeng/dropdown';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    HomeComponent,
    NavigationComponent,
    HeaderComponent,
    ButtonComponent,
    IdCardComponent,
    ProjectOverviewComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    DropdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
