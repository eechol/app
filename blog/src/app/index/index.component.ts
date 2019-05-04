import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/Http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.sass']
})
export class IndexComponent implements OnInit {

  constructor(private userService:UserService,
  	private http: HttpClient,private router:Router) { }
  
  public userList: any
  ngOnInit() {
  	this.userList = this.userService.getAllUser();
  	console.log(this.userList)
  }
  signIn(){
  	this.router.navigate(["signIn"]);
  }
  signUp(){
  	this.router.navigate(["signUp"]);
  }
}
