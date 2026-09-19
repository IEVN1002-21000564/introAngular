import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  standalone: false,
  styleUrl: './heroes-list.css',
  templateUrl: './heroes-list.html',
})
export class HeroesList {
imageWidth:number=40;
imageMargin:number=2;
muestraImage:boolean=true;
listFilter:string='';

showImagen():void{
 this.muestraImage=!this.muestraImage
}

  heroes:any[]=[
    {
    imagen:"https://dragonball-api.com/characters/goku_normal.webp",
    nombre:"Goku",
    description:"Hame Hame Haaaaaa",
    rece:"Saiyan",
    ki:900000
    },

    {
    imagen:"https://dragonball-api.com/characters/Jiren.webp",
    nombre:"Jiren",
     description:"Si no gano, entonces todo mi esfuerzo, todo lo que me he esforzado por lograr, ¡todo habrá sido en vano!",
    rece:"extraterrestre humanoide",
    ki:5000000
    },

    {
    imagen:"https://dragonball-api.com/characters/Androide_18_Artwork.webp",
    nombre:"Android 18",
     description:"Eres un mocoso insoportable",
    rece:"Humana",
    ki:50000
    },

    {
    imagen:"https://dragonball-api.com/characters/celula.webp",
    nombre:"Cell",
    description:"Al fin. Todo cuanto imaginé me pertenece ahora. Me he convertido en algo que absolutamente nadie pudo. Soy perfecto",
    rece:"Bioandroide",
    ki:100000
    },

  ]
  
}
