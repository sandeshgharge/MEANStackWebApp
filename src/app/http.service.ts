import { Injectable } from '@angular/core';
import { Login } from './login/login.component';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { ParentClass } from './ParentClass';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http : HttpClient) { }
  apiURL = environment.SOCKET_ENDPOINT;


  login(objLogin : Login):Observable<any>{
    console.log("In Http Service");
    return this.http.post(`${this.apiURL}/user/login`, objLogin);
    
  }

  fetchData(obj : ParentClass):Observable<any>{
    console.log("fetching data");
    return this.http.post(`${this.apiURL}/api/fetch`, obj);
  }

  saveData(obj : ParentClass):Observable<any>{
    console.log("Data :"+obj);
    return this.http.post(`${this.apiURL}/api/insert`, obj)
  }

  updateData(obj : ParentClass):Observable<any>{
    console.log("Data :"+obj);
    return this.http.post(`${this.apiURL}/api/update`, obj)
  }

  deleteData(obj : ParentClass):Observable<any>{
    console.log("Data :"+obj);
    return this.http.post(`${this.apiURL}/api/delete`, obj)
  }

  fetchUserRq(obj : ParentClass):Observable<any>{
    console.log("fetching data");
    return this.http.post(`${this.apiURL}/user/fetchUsrRq`, obj);
  }
}
