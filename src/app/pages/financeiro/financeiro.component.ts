import { Component } from '@angular/core';



interface Transacao {
  nome: string;
  valor: string;
}


@Component({
    selector: 'app-financeiro',
    templateUrl: './financeiro.component.html',
    styleUrls: ['./financeiro.component.scss']
  })


export class FinanceiroComponent {
  title = 'financeiro';

  inputEntradaNome = '';
  inputEntradaValor= '';

  totalEntradas= 0;

  entradas: Transacao[] = [

  ];
  
  salvarEntrada(){
    console.log(this.inputEntradaNome)
    console.log(this.inputEntradaValor)
    
    this.entradas.push({nome: this.inputEntradaNome, valor: this.inputEntradaValor})
    this.totalEntradas = Number(this.inputEntradaValor) + this.totalEntradas;
  }
 
 
}
