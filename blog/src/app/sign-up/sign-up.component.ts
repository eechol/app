import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { User } from '../user';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.sass']
})
export class SignUpComponent implements OnInit {

  constructor(private userService:UserService,private router:Router) { }
  flag:boolean
  ngOnInit() {
  }
  onSubmit(value){
  	let user = new User();
  	user.username = value.username;
  	user.password = value.password;
  	user.email = value.email;
  	this.userService.saveUser(user)
  	.then(function success(res){
  		let data = JSON.stringify(res);
  		if(data == "true"){
		this.router.navigate(["/user"])
		}else{
			alert("sing up fail");
			window.location.reload();
		}
  	},function error(){
  		alert("system error");
  	});
  	
  }
}
