import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { TranslateService } from '@ngx-translate/core';
import { CheckLogin } from './checkLogin.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
  
})
export class AppComponent extends CheckLogin{
  title = 'InternationalOffice';

  constructor(private router : Router, private translate:  TranslateService){
    super();
    translate.setDefaultLang('en');
    translate.use('en');
  }

  logout(){

    localStorage.removeItem('auth');
    localStorage.removeItem('user');
    this.router.navigateByUrl('');
    this.editAuth = false;
  }

  languageSwitch(lang:string){
    this.translate.use(lang);
  }
}