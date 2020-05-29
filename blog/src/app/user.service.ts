import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders  } from '@angular/common/Http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl: string ="/api/modify"
  allUser: any

  flag:boolean
  userExist: boolean
  authHeader: HttpHeaders = new HttpHeaders()
  constructor(private http:HttpClient) { }

  getAllUser():any{
  	return this.http.get(this.baseUrl+"/user/list")
  		.toPromise();
  }

  saveUser(user):any{
  	return this.http.post(this.baseUrl+"/user/save",
  		{"username":user.username,"password":user.password,"email":user.email})
  	.toPromise();
  }

  existUser(user):any{
  	return this.http.post(this.baseUrl+"/user/exist",{"username":user.username,"password":user.password})
  	.toPromise();
  }

  getToken(token,user):any{
    return this.http.post(this.baseUrl +"/user/token",
       {"username":user == undefined? null :user.username,"password":user == undefined? null :user.password},
       {headers : new HttpHeaders({'Content-Type': 'application/json','Auth-token':token == undefined ?'':<string> token})
       ,responseType:'text'}).toPromise();
  }
}
