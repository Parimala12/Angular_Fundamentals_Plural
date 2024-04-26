import { AbstractControl } from "@angular/forms"

let i=0;

export function restrictedWords(words:any[]) {
    return (control: AbstractControl): { [key: string]: boolean } | null=>
    {
        for(i=0;i<2;i++){
            if (control.value.includes(words[i])) {
                var invalidWords=words[i]
            }
        }
        return invalidWords && invalidWords.length>0
        ? {'restrictedWords':invalidWords}
        : null
    }
}
