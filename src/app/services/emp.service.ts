import { Injectable } from '@angular/core';
import { Employee } from '../Employee.model';


@Injectable({
  providedIn: 'root'
})

export class EmpService {
  all(): any[] {
    throw new Error('Method not implemented.');
  }

  emplist:Employee[] = [
    {
      "empId":101,
      "empName":"Vipul Karle",
      "empSalary":100000,
      "empDOB":new Date(1999,7,7),
      "empImage":"data:image/png;base64,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",
      "empDept":"Admin"
  },
  {
      "empId":102,
      "empName":"Sonal Kulkarni",
      "empSalary":60000,
      "empDOB":new Date(2000,4,5),
      "empImage":"data:image/png;base64,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",
      "empDept":"HR"
  },
  {
      "empId":103,
      "empName":"Sanket Dhembre",
      "empSalary":50000,
      "empDOB":new Date(1996,8,12),
      "empImage":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjSmL2vrLk-gtpfdM9tkRonD-_ZHr4DhCr66nV3-NB4aoOoeXtHILO_6zFu4S_FGkqHPQ&usqp=CAU.png",
      "empDept":"Developer"
  },
  {
    "empId":104,
    "empName":"Pratiksha GaykWad",
    "empSalary":60000,
    "empDOB":new Date(1999,9,3),
    "empImage":"data:image/png;base64,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",
    "empDept":"Developer"
  },
  ]

  constructor() { 
    console.log("I am Service Constructor")
  }

  get(id:number){
    return this.emplist.find(emp=>emp.empId==id)
  }

  delete(id:number){
    let emp:Employee = this.emplist.find(emp=>emp.empId==id)!
    let index:number = this.emplist.indexOf(emp)
    this.emplist.splice(index,1)
  }
   
  save(emp:Employee){
    this.emplist.push(emp)
  }
  
}   

