import { Injectable } from "@angular/core";
import { IUser } from "./user.model";

@Injectable()
export class AuthService{
    currentUser:IUser={
        id: 0,
        firstName: "",
        lastName: "",
        userName: ""
    }
    loginCheck!:boolean;
    loginUser(userName:string, password:string){
        this.loginCheck=true;
        this.currentUser={
            id:1,
            userName:userName,
            firstName:userName,
            lastName:'Papa'            
        }
        console.log(userName);
        console.log(password)
    }
    updateCurrentUser(firstName:string, lastName:string){
		this.currentUser.userName=firstName;
		this.currentUser.lastName=lastName;
	}
}