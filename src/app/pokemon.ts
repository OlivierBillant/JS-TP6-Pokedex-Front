export class Pokemon {
    id:number;
    name:string;
    image:string;
    types:Array<string>;
    //les attributs sont passés en public afin de gagner du temps et d'éviter d'avoir à générer les GetSets.
    constructor(id:number, name:string,image:string,types:Array<string>){
        this.id = id;
        this.name = name;
        this.image = image;
        this.types = types;
    }
}