import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../Employee.model';
import { EmpService } from '../services/emp.service';


@Component({
  selector: 'app-emp-card',
  templateUrl: './emp-card.component.html',
  styleUrls: ['./emp-card.component.css']
})
export class EmpCardComponent implements OnInit 
{

  @Input() emp!:Employee

  @Output() getid = new EventEmitter<number>()
  showId(id:number){

    this.getid.emit(id)
  }

  constructor(private empservice:EmpService,private router:Router) { 
    console.log("I am card Constructor")
  }

  deleteemp(id:number){
    this.empservice.delete(id)
  }

  ngOnInit(): void {
  }

}
