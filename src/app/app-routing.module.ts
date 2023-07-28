import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './registration/register.component';
import { HomeComponent } from './home/home.component';
import { Accomodation } from './accomodation/accomodation.component';
import { NewsListComponent } from './news-list/news-list.component';
import { PUniversitiesComponent } from './p-universities/p-universities.component';
import { FacultyComponent } from './faculty/faculty.component';
import { UserComponent } from './user/user.component';
import { AlleventsComponent } from './allevents/allevents.component';
import { ScholarshipsComponent } from './scholarships/scholarships.component';
import { ChatComponent } from './chat/chat.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'accom', component: Accomodation },
  { path: 'news', component: NewsListComponent },
  { path: 'pu', component: PUniversitiesComponent },
  
  { path : "faculty", component : FacultyComponent},
  { path : "user", component : UserComponent},
  {path: "allevents", component: AlleventsComponent},
  {path: "scholarships", component: ScholarshipsComponent},
  {path: "chat", component: ChatComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
