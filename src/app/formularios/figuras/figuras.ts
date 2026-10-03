import { Component } from '@angular/core';

@Component({
  selector: 'app-figuras',
  standalone: false,
  templateUrl: './figuras.html',
})
export class Figuras {
  num1: string = '';
  num2: string = '';
  figura: string = '';
  resultado: number = 0;
 
  Triangulo(): void {
    this.resultado =( parseFloat(this.num1) * parseFloat(this.num2) ) /2;
  }
  
  Rectangulo(): void {
    this.resultado = parseFloat(this.num1) * parseFloat(this.num2);
  }
  
  Circulo(): void {
    this.resultado =Math.pow( Math.PI * parseFloat(this.num1),2 );
  }
  
  Pentangono(): void {
    this.resultado =(( parseFloat(this.num1) * parseFloat(this.num2) ) /2) *5;
    
  }
  
  calcularAR(): void {
    switch (this.figura) {
      case "1":
        this.Triangulo();
        break;
      case "2":
        this.Rectangulo();
        break;
      case "3":
        this.Circulo();
        break;
      case "4":
        this.Pentangono();
        break;
      default:
        this.resultado = 0;
        break;
    }
  }
}