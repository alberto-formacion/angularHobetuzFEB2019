import { Component, OnInit, Input } from '@angular/core';
import { Objeto } from '../models/Objeto';

@Component({
  selector: 'app-componente-a',
  templateUrl: './componente-a.component.html',
  styleUrls: ['./componente-a.component.css']
})
export class ComponenteAComponent implements OnInit {

  @Input() obj: Objeto;

  constructor() { }

  ngOnInit() {
    console.log(this.obj);
  }

}
