import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDelText]'
})

export class DelTextDirective {

  constructor(element:ElementRef) 
  {
    element.nativeElement.style.color="red"
    element.nativeElement.style.textDecoration="line-through"
    element.nativeElement.style.backgroundColor="yellow"
  }

}
