import { Component,EventEmitter,Output} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-event-binding',
  template: `
   <button (click)="onClicked()" > press me</button>
  `,
  styles: []
})
export class EventBindingComponent {
 @Output('clickable') clicked = new EventEmitter<string>();
  onClicked(){
    this.clicked.emit('it workddd ');
  }
 
  

}
