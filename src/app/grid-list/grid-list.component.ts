import { NgIfContext } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Employee, } from '../Employee.model';
import { EmpService } from '../services/emp.service';

@Component({
  selector: 'app-grid-list',
  templateUrl: './grid-list.component.html',
  styleUrls: ['./grid-list.component.css']
})
export class GridListComponent implements 
OnInit {

  emplist!: Employee[]





displayId(id:number){
    console.log(id)
  }
  
  constructor(private empservice:EmpService) { }

  ngOnInit(): void {
    this.emplist = this.empservice.all()
    this.filteremplist = this.emplist
  }

  filteremplist!: Employee[]

  _searchQuery:string="Vipul"
  get searchQuery():string{
    return this._searchQuery
  }

  set searchQuery(searchQuery:string){
  this._searchQuery = searchQuery

  this.filteremplist = this.emplist.filter(emp=>emp.empName.startsWith(this._searchQuery))
  }

  searchByDept(dept?:string){
    if(dept!=undefined)
    {
      this.filteremplist = this.emplist.filter(emp=>emp.empDept==dept)
    }
    else
    {
      this.filteremplist = this.emplist
    }
  }

 
}
