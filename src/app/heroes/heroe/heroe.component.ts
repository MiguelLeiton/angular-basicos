import { Component } from "@angular/core";




@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'







})

export class HeroeComponent{
    nombre: string = 'miguel';
    edad: number = 32;
    get nombreCapitalizado(){
        return this.nombre.toUpperCase();
 
    }
    obtenerNombre():string{
        return `${this.nombre} - ${this.edad}`
    }
    cambiarHeroe():void{
        console.log('cambioheroe')
        this.nombre = 'migueloco';


    }
    cambiarEdad():void{
        console.log('cambia edad')
        this.edad = 23




    }



}