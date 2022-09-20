import { Component, OnInit, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../Employee.model';
import { EmpService } from '../services/emp.service';

@Component({
  selector: 'app-emp-detail',
  templateUrl: './emp-detail.component.html',
  styleUrls: ['./emp-detail.component.css']
})
export class EmpDetailComponent implements OnInit {

  empId!:number
  emp!:Employee
  constructor( private route:ActivatedRoute,private empservice:EmpService) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id')!
    if(id!=null)
    {
      this.empId = eval(id)
      this.emp = this.empservice.get(this.empId)!
    }

  }

}
