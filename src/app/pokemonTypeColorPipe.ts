import { Pipe, PipeTransform } from "@angular/core";


@Pipe({name:'pokemonTypeColor'})
export class PokemonTypeColorPipe implements PipeTransform {
    
    transform(type:string) {
        let classColor:string = "chip grey";

        switch(type){
            case "PLANTE" : classColor = "chip green lighten-2 white-text"; break;
            case "FEU" : classColor = "chip red darken-1 white-text"; break;
            case "EAU" : classColor = "chip blue darken-2 white-text"; break;
            case "VOL" : classColor = "chip blue lighten-4 white-text"; break;
            case "POISON" : classColor = "chip deep-purple lighten-2 white-text"; break;
        }
        return classColor;
    }


} 

