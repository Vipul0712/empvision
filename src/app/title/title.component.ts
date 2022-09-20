import { Component } from "@angular/core";

@Component( {
    selector : 'app-title',
    template : '<h2><i class="bi bi-person-workspace"></i>{{title}}</h2>',
    styles : [],
})

export class TitleComponent{
    title:string="EmpVision"

}