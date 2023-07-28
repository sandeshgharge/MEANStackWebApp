import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.scss']
})
export class FacultyComponent implements OnInit {
  name: any;
  title: any;
  description: any;
  animal: any;
  shortdescription: any;

  constructor() {}
  
  ngOnInit(): void {
  }

}
