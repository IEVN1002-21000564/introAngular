import { Component } from '@angular/core';
 
@Component({
  selector: 'app-operas-bas',
  standalone: false,
  templateUrl: './operas-bas.html',
})
export class OperasBas {
  num1: string = '';
  num2: string = '';
  resultado: number = 0;
  opcion: string = "0";
 
  suma(): void {
    this.resultado = parseFloat(this.num1) + parseFloat(this.num2);
  }
  
  resta(): void {
    this.resultado = parseFloat(this.num1) - parseFloat(this.num2);
  }
  
  multi(): void {
    this.resultado = parseFloat(this.num1) * parseFloat(this.num2);
  }
  
  divi(): void {
    const divisor = parseFloat(this.num2);
    if (divisor !== 0) {
      this.resultado = parseFloat(this.num1) / divisor;
    } else {
      this.resultado = 0; 
    }
  }
  
  calcular(): void {
    switch (this.opcion) {
      case "1":
        this.suma();
        break;
      case "2":
        this.resta();
        break;
      case "3":
        this.multi();
        break;
      case "4":
        this.divi();
        break;
      default:
        this.resultado = 0;
        break;
    }
  }
}