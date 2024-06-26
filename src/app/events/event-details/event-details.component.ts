import { Component, OnInit } from "@angular/core";
import { EventService } from "../shared/event.service";
import { ActivatedRoute} from '@angular/router';
import { ISession } from "../shared";

@Component({
    selector:'event-details',
    templateUrl:'./event-details.component.html',
    styles:[`
    .event-image{ height:100px;}
    a {cursor:pointer}
    `]
})
export class EventDetailsComponent implements OnInit{
    event:any;
    addMode: boolean=false;
    constructor(private eventService: EventService, private route:ActivatedRoute){

    }
    ngOnInit():void{
        this.event=this.eventService.getEvent(this.route.snapshot.params['id']);
    }

    addSession(){
        this.addMode=true
    }

    saveNewSession(session:ISession){
        const nextId=Math.max.apply(null, this.event.sessions.map((s:any)=>s.id));
        this.event.sessions.push(session)
        this.eventService.updateEvent(this.event)
        this.addMode=false
    }

    cancelAddSession(){
        this.addMode = false
    }
}