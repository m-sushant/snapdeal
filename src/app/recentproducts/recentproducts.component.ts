import { Component, OnInit,Output,EventEmitter, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-recentproducts',
  templateUrl: './recentproducts.component.html',
  styleUrls: ['./recentproducts.component.css']
})
export class RecentproductsComponent implements OnInit {

  @Input() selectedUser:any;
  constructor() { }

  ngOnInit(): void {
  }

  public data: any = {}
ngOnChanges(changes: SimpleChanges) {
  console.log('OnChanges',changes);
  console.log(JSON.stringify(changes));

  for (let propName in changes) {
       let change = changes[propName];
       this.data[propName] = change.currentValue
  }

  console.log('my data', this.data)
}
}
