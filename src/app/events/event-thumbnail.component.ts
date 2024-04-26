import { Component, Input } from "@angular/core";
import { IEvent } from "./shared/index";
@Component({
    selector:'event-thumbnail',
    template:`
    <div [routerLink]="['/events', event.id]" class="well hoverwell thumbnail" id="block">
        <h2>{{event.name|uppercase}}</h2>
        <div>Date:{{event?.date|date:'longDate'}}</div>
        <div>Price:{{event?.price|currency:'USD'}}</div>
        <div [ngStyle]="getStartTimeStyle()"  [ngSwitch]="event?.time">Time:{{event?.time}}
            <span *ngSwitchCase="event?.time=='8:00 am'">Early Start</span>
            <span *ngSwitchCase="event?.time=='10:00 am'">Late Start</span>
            <span *ngSwitchDefault>Normal Start</span>
        </div>
        <div *ngIf="event?.location">Location:{{event?.location?.address}}
            <span class="pl-1"> {{event?.location?.city}}, {{event?.location?.country}}</span>
        </div>
        <div [hidden]="!event?.onlineUrl">Online URL:{{event?.onlineUrl}}</div>
    </div> 
    `,
    styles:[`
    .well div{color:#bbb;}
    `]
})
export class EventThumbnailComponent{
    @Input()event: any
    getStartTimeStyle():any{
        if(this.event&&this.event.time=='8:00 am')
            return {color:'lightgreen', 'font-weight':'bold'}
        else if(this.event&&this.event.time=='10:00 am')
            return { color:'rgb(238, 112, 112)', 'font-weight':'bold'}
        return { color:'rgb(212, 212, 138)', 'font-weight':'bold'}
    }
}