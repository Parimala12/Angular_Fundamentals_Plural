import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
    templateUrl:'./login.component.html',
    styles:[`em{float:right; color:#e056c5; padding-left:10px;}`]
})
export class LoginComponent{
    tit:any;
    userName:any
    password:any
    mouseoverLogin:any
    constructor(private authService:AuthService, private router:Router){}
    login(data:any){
        this.authService.loginUser(data.userName, data.password)
        this.router.navigate(['/events']);
    }
}
