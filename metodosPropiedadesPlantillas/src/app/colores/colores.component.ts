import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-colores',
  templateUrl: './colores.component.html',
  styleUrls: ['./colores.component.css']
})
export class ColoresComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  //metodos para generar un color aleatorio
  
  colorLocal:String;
  
  generarRandom():String{ //generamos un numero aleatorio hexadecimal
    return Math.floor(Math.random()*255).toString(16);
  }

  colorHex():String{ //generamos un color aleatorio
    this.colorLocal = "#" + this.generarRandom() + this.generarRandom() + this.generarRandom();
    return this.colorLocal;
  }

}
