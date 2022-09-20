import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../Employee.model';
import { EmpService } from '../services/emp.service';

@Component({
  selector: 'app-emp-form',
  templateUrl: './emp-form.component.html',
  styleUrls: ['./emp-form.component.css']
})
export class EmpFormComponent implements OnInit {

  emp:Employee = new Employee()

  constructor(private route:ActivatedRoute,private empservice:EmpService,private router:Router) { }

  ngOnInit(): void {
      let id:number = eval(this.route.snapshot.paramMap.get('id')!)
      if(id!=null)
      {
        this.emp = this.empservice.get(id)!
      }
  }

    onsave(){
      console.log(this.emp)
      this.empservice.save(this.emp)
      this.router.navigate(['/List'])
    }

}
