// System
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { FormsModule } from '@angular/forms'; // Import FormsModule
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
import { ProjectsComponent } from './dashboard/projects/projects.component';
import { CalendarComponent } from './dashboard/calendar/calendar.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
// prime ng
import { DropdownModule } from 'primeng/dropdown';
import { ChatComponent } from './dashboard/chat/chat/chat.component';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { SelectButtonModule } from 'primeng/selectbutton';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { SignupComponent } from './signup/signup.component';
import { CarouselModule } from 'primeng/carousel';
import { MessagesModule } from 'primeng/messages';
// services

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
    ProjectOverviewComponent,
    ChatComponent,
    ProjectsComponent,
    CalendarComponent,
    UserInfoComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    DropdownModule,
    ButtonModule,
    DialogModule,
    FormsModule,
    SelectButtonModule,
    InputTextareaModule,
    CarouselModule,
    MessagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
