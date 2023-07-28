import { Component, OnInit } from '@angular/core';
import { CheckLogin } from '../checkLogin.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent extends CheckLogin implements OnInit {

  myimage:string = "assets/background_image.webp";

  constructor(){
    super();
  }

  ngOnInit(): void {
  }

}
