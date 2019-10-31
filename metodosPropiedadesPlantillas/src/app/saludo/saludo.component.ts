import { Component, OnInit, Input} from '@angular/core'; //Agregamos el import 'Input' para recibir valores

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css']
})
export class SaludoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() colorNombre:String; //invocamos el input para recibir valores desde afuera
  

}
