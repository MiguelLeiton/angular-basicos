import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent{

  heroes: string[] = ['camila','monse','jesu','catita'];
  heroesBorrados: string|undefined = "";

  borrar(): void{
    console.log("borrando...");
    this.heroesBorrados = this.heroes.shift();
    
    
    



  }


 
}
