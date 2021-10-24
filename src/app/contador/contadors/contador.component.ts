
//import { templateJitUrl } from '@angular/compiler';
//import { Template } from '@angular/compiler/src/render3/r3_ast';
import {Component}  from '@angular/core';
//import { table } from 'console';



@Component({

    selector: 'app-contador',
    template: `


    <h1> Acumulador de 5</h1>
    <h3> Base: <strong>{{base}}</strong></h3>
 

    <button (click)="acumulador(base)" >+5</button>
    <span>  {{numero}}  </span>
    <button (click)="acumulador(-base)">-5</button> 
    
    
    `

})

export class ContadorComponent{
    title = 'base';
    numero: number = 10;
    base: number = 5;
    acumulador(valor: number){
       console.log('acumulador')
       this.numero +=valor
    
    }
  




}