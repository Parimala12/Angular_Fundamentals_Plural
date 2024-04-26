import { Component } from "@angular/core";
import { Router } from '@angular/router'; 
import { EventService } from "./shared";

@Component({
    selector:'create-event',
    templateUrl:'./create-event.component.html',
    styles:[`
    em {float:right; color:#e05c65; padding-left:10px;}
    .error input {background-color:pink;}
    .error ::-webkit-input-placeholder {color:#999;}
    .error ::-moz-placeholder {color:#999;}
    .error :-moz-placeholder {color:#999;}
  `]
})
export class CreateEventComponent{
    newEvent: any
    constructor(private router:Router, private eventService:EventService){}
    isDirty:boolean=true;

    saveEvent(formValues: any){
        this.eventService.saveEvent(formValues)
        this.isDirty=false;
        this.router.navigate(['/events'])
    }

    cancel(){
        this.router.navigate(['/events'])
    }
}