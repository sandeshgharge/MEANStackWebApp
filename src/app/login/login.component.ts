import { style } from "@angular/animations";
import { ThrowStmt } from "@angular/compiler";
import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { CheckLogin } from "../checkLogin.component";
import { HttpService } from "../http.service";
import { ParentClass } from "../ParentClass";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls : ['./login.component.scss']
})

 export class LoginComponent extends CheckLogin implements OnInit{
    userName = '';
    psw ='';
    errorMessage = 'All details are Mandatory.';

    objLogin : Login;
    constructor(private httpService : HttpService, private router : Router,private dialog: MatDialog){
        super();
    }

    ngOnInit(): void {
        
    }
    
    onLogin(){
        this.objLogin = new Login (this.userName, this.psw);
        this.httpService.login(this.objLogin).subscribe(( res ) => {
            console.log(res)
            if(res != null){

                if(res.data != null)
                    if(res.data.password === this.psw)
                    {
                        if(res.data.status === "Approved"){

                            localStorage.setItem('auth', res.data.role_id);
                            localStorage.setItem('user', res.data);
                            if(res.data.role_id == 0)
                                this.editAuth = true;
                            
                            this.router.navigateByUrl('');
                        }
                        else{
                            this.errorMessage = "User not approved. Contact Admin"
                        }
                    }
                    else{
                        this.errorMessage = "Wrong password entered."
                    }
                else{
                    this.errorMessage = "User does not exist."

                }
            }
            else{
            }
        });
    }

 }

export class Login  extends ParentClass{
    userName = '';
    password = '';

    constructor(usrName :string, psw : string){

        super('User','accom')
        this.userName = usrName;
        this.password = psw;
    }
}