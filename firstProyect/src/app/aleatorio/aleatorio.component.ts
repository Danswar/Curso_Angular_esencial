import { Component, OnInit } from '@angular/core'; //importamos funcionalidades desde diferentes partes
// que estan defnidos dentro de la aplicacon

@Component({ // Decorator:  son la configuracion del componente
  selector: 'app-aleatorio', //es la forma de invocar el componente "app-.." es un prefijo
  templateUrl: './aleatorio.component.html', //la ruta a la plantilla
  styleUrls: ['./aleatorio.component.css'] //hoja de estilos de este componente
})
export class AleatorioComponent implements OnInit { //definicion de la clse de este componente

  constructor() { } //contrutor de la clase, se ejecuta al iniciar la aplicacion

  ngOnInit() { //se llama a este metodo al invocar el componente
  }

  //aqui podemos escribir cualquier logica;

  aleatorio:Number =  Math.floor(Math.random()  * 100);


}
