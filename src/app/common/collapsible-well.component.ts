import { Component, Input } from "@angular/core";

@Component({
    selector:'collapsible-well',
    template:`
    <div (click)="toggleContent()" id="block1" class="well pointable">
        <h4>
            <ng-content select="[well-title]"></ng-content>
        </h4>
        <ng-content *ngIf="visible" select=".body"> </ng-content>
    </div>
    `
})
export class CollapsibleWellComponent{
    // @Input() title:string='';
    visible:boolean=true;

    toggleContent(){
        this.visible=!this.visible;
    }
}