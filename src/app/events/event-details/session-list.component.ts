import { Component, Input } from "@angular/core";
import { ISession } from "../shared";
import { ToastrService } from "ngx-toastr";


@Component({
    selector:'session-list',
    templateUrl:'./session-list.component.html',
    
})

export class SessionListComponent{
    @Input() sessions:ISession[]=[];
    constructor(private toastr:ToastrService){}
    handleThumbnailClick(eventName:any){
        this.toastr.info(eventName);
    }
}