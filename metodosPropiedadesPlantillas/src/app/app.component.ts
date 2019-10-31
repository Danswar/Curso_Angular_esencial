import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'metodosPropiedadesPlantillas';
  color:String = 'red';


  //metodos para generar un color aleatorio
  generarRandom():String{ //generamos un numero aleatorio hexadecimal
    return Math.floor(Math.random()*255).toString(16);
  }

  colorHex():String{ //generamos un color aleatorio
    return "#" + this.generarRandom() + this.generarRandom() + this.generarRandom();
  }

}
