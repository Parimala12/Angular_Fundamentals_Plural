import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ISession, restrictedWords } from "../shared";

@Component({
    selector:'create-session',
    templateUrl:'./create-session.component.html',
    styles:[`
    em {float:right; color:#e05c65; padding-left:10px;}
    .error input, .error select, .error textarea {background-color:pink;}
    .error ::-webkit-input-placeholder {color:#999;}
    .error ::-moz-placeholder {color:#999;}
    .error :-moz-placeholder {color:#999;}
  `]
})
export class CreateSessionComponent implements OnInit{
    @Output() saveNewSession = new EventEmitter();
    @Output() cancelAddSession = new EventEmitter();

    name:any
    presenter:any
    duration:any
    level:any
    abstract:any
    newSessionForm:any
    rw=['foo','bar']

    ngOnInit(): void {
        this.name=new FormControl('', Validators.required)
        this.presenter=new FormControl('', Validators.required)
        this.duration=new FormControl('', Validators.required)
        this.level=new FormControl('', Validators.required)
        this.abstract=new FormControl('', [Validators.required, Validators.maxLength(400), restrictedWords(['foo', 'bar']) ])

        this.newSessionForm =  new FormGroup({
            name:this.name,
            presenter:this.presenter,
            duration:this.duration,
            level:this.level,
            abstract:this.abstract
        })

    }

    saveSession(formValues:any){
        let session:ISession={
            name: formValues.name,
            duration: +formValues.duration,
            level:formValues.level,
            presenter:formValues.presenter,
            abstract:formValues.abstract,
            voters:[],
            id:9
        }
        this.saveNewSession.emit(session)
    }
    cancel(){
        this.cancelAddSession.emit()
    }


}