import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 // name = '';
  userName = 'chandu';
  password = '';
  // gmail = '';
  // phone ='';
  errormessage = ' errormessage';
  invaild = false;
  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  handlelogin(){
    // console.log("userName:" + this.userName + ';password:' + this.password );
    // console.log("name:" + this.name + ';phone:' + this.phone + ';gmail' + this.gmail);
if (this.userName === 'chandu' && this.password === '123'){
  this.invaild = false;
}else{
  this.invaild = true;
}
}
Data= [
  {Id:123,Name:'krishna',Place:'india'},
  {Id: 234,Name:'sovan', Place: 'london'}
];
}





