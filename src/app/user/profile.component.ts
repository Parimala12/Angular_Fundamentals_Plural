import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  templateUrl:'./profile.component.html',
  styles:[`
    em {float:right; color:#e05c65; padding-left:10px;}
    .error input {background-color:pink;}
    .error ::-webkit-input-placeholder {color:#999;}
    .error ::-moz-placeholder {color:#999;}
    .error :-moz-placeholder {color:#999;}
  `]
})

export class ProfileComponent implements OnInit{  
  profileForm!:FormGroup
  public firstName!:FormControl
  public lastName!:FormControl
  constructor(private router:Router, private authService:AuthService){}
  ngOnInit(){
    this.firstName=new FormControl(this.authService.currentUser.firstName, [Validators.required, Validators.pattern('[a-zzA-Z].*')])
    this.lastName=new FormControl(this.authService.currentUser.lastName,  [Validators.required, Validators.pattern('[a-zzA-Z].*')])
    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    });
  }
  cancel(){this.router.navigate(['events'])}

  saveProfile(formValues: { firstName: any; lastName: any; })	{
    if(this.profileForm.valid){
		  this.authService.updateCurrentUser(formValues.firstName, formValues.lastName)
		  this.router.navigate(['events'])
    }
	}

  validateLastName(){
    return this.lastName.valid || this.lastName.untouched
  }

  validateFirstName(){
    return this.firstName.valid || this.firstName.untouched
  }
}