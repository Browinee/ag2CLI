import { Component } from '@angular/core';
import {PropertyBindingComponent} from './property-binding.component';
import {EventBindingComponent} from './event-binding.component';
@Component({
  moduleId: module.id,
  selector: 'app-databinding',
  templateUrl: 'databinding.component.html',
  styleUrls: ['databinding.component.css'],
  directives:[PropertyBindingComponent,EventBindingComponent]
})

export class DatabindingComponent  {
  title:string="databinding test";
  numberI:number = 2;
  answer:boolean;
  onTest():boolean{
  	
  	 return true;
    
  }
  onClicked(value:string){
     console.log(value);
  }


}
