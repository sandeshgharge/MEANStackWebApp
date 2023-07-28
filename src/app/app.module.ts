import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './registration/register.component';
import { NewsListComponent } from './news-list/news-list.component';
import { HomeComponent } from './home/home.component';
import { CourseComponent } from './course/course.component';
import { Accomodation } from './accomodation/accomodation.component';
import { EditDialogA } from './accomodation/accomodation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditDialogPU } from './p-universities/p-universities.component';
import { MatButtonModule } from '@angular/material/button';
import { FacultyComponent } from './faculty/faculty.component';
import { EditDialogU } from './user/user.component';
import { MatIconModule } from '@angular/material/icon';
import {
  MatSidenavModule,
} from '@angular/material/sidenav';
import {
  MatListModule,
} from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';

import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';


import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PUniversitiesComponent } from './p-universities/p-universities.component';

import { SafePipe } from './ParentClass';
import { HttpService } from './http.service';
import { UserComponent } from './user/user.component';

import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AlleventsComponent } from './allevents/allevents.component';
import { ScholarshipsComponent } from './scholarships/scholarships.component';
import { ChatComponent } from './chat/chat.component';


export  function  HttpLoaderFactory(http:  HttpClient) {
  return  new  TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NewsListComponent,
    HomeComponent,
    CourseComponent,
    Accomodation,
    PUniversitiesComponent,
    EditDialogA,
    EditDialogPU,
    FacultyComponent,
    SafePipe,
    UserComponent,
    EditDialogU,

    AlleventsComponent,
      ScholarshipsComponent,
      ChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,

    MatExpansionModule,
    MatCardModule,
    MatGridListModule,
    MatTabsModule,
    MatInputModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatTableModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    MatDialogModule,
    MatDividerModule,
    BrowserAnimationsModule,

    HttpClientModule,

    TranslateModule.forRoot({
      loader: {
        provide:  TranslateLoader,
        useFactory:  HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  exports: [TranslateModule],
  providers: [HttpService, TranslateService],
  bootstrap: [AppComponent]
})
export class AppModule { }

