import { Component, OnInit } from "@angular/core";
import { EventService } from "./shared/event.service";
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from "@angular/router";
import { IEvent } from "./shared/index";

@Component({
    selector:'events-list',
    template:`
    <div>
        <h1>Upcoming Angular Events</h1>
        <hr/>
        <div class="row">
            <div *ngFor="let event of events" class="col-md-5">
                <event-thumbnail (click)="handleThumbnailClick(event.name)" [event]="event"></event-thumbnail><br>
            </div>
        </div>
    </div>
    `,
    styles:[`
    .block:hover{color:#837e7e}`]
})
export class EventsListComponent implements OnInit{
    events: IEvent[] = [];
    constructor(private eventService: EventService, private toastr:ToastrService, private route:ActivatedRoute){

    }
    
    ngOnInit(): void {
        //this.events=this.eventService.getEvents();
        //this.eventService.getEvents().subscribe(events =>{this.events = events} );
        this.events=this.route.snapshot.data['eve_nts']
        const param=this.route.snapshot.queryParams['path'];
        console.log("param is .........."+param);
    }
    handleThumbnailClick(eventName:any){
        this.toastr.success(eventName);
    }
}