import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import { HttpService } from "../http.service";
import { ParentClass } from "../ParentClass";

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html'
})

export class RegisterComponent {
    name = '';
    psw = '';
    email = '';
    role_id = '';
    status = '';
    errorMessage = "All details are mandatory";
    objReg = new Register(this.name, this.psw, this.email, this.role_id);

    constructor( private httpService : HttpService, private router : Router){

      
    }
    onRegister() { 

      this.objReg = new Register(this.name, this.psw, this.email, this.role_id);
      this.httpService.saveData(this.objReg).subscribe((res) => {
        console.log(res);
        alert("Now you can login after Admin approves the new user request.");
        this.router.navigateByUrl('/');
    });
  
    }
    reset(){
      this.name = '';
      this.psw = '';
      this.email = '';
      this.role_id = '';
  }

}

export class Register extends ParentClass{
    name = '';
    password = '';
    email = '';
    role_id = '';
    status = 'Pending';
    

  constructor(name? : string, password? : string, email? : string, role_id?: string) {

    super('User','');
    if(name){
        this.email = email;
        this.name = name;
        this.password = password;
        this.role_id = role_id;
    }
  }
}