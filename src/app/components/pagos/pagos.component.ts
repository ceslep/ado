import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Citas } from '../../models/citas';

@Component({
  selector: 'pagos',
  templateUrl: './pagos.component.html',
  styleUrls: ['./pagos.component.css']
})
export class PagosComponent implements OnInit {

  @Input() cita:Citas;
  constructor() { }

  ngOnInit() {
    console.log(this.cita);
  }

}
