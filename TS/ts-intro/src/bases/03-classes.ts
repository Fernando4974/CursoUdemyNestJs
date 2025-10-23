
//long mode to define class

import axios from "axios";
import type { Move, PokeAPIResponse } from "../interfaces/pokeapi-response.interface";

export class Pokemon {

    public id: number;
    public name: string;

    constructor(
        name:string,
        id: number,
        public imgUrl:string
    ) {
        this.id=id;
        this.name=name;
        
    }
}
export const charmader:Pokemon  = new Pokemon('MyPokemon',2,'https://pokemon.com/4')
console.log(charmader)
// short mode to define a class
//eraseableSintaxysOnly debe estar en false

//raedonly para que no ppueda ser alterado en la construccion de la instancia,
//ni en la construccion de la clase

export class Gimnasio{
    constructor(
        public readonly name:string,
        public size: number
    ){}
}

//---gettes de clases y metodos

export class PokemonClase {

    
    public get imgUrl(): string {
        return `http://pokemon.com/${ this.id }.jpg`
    }
    

    constructor(
        public readonly id: number,
        public name: string,
        public attackSound:string

        
    ) {
        
    }
    ToPresent(){
        console.log(`${this.name.toUpperCase()} !!!`);
        
    }
    Atacar(){
        console.log(this.attackSound);
        
    }
///tipar promesas de metodos http
    async recibirDaño():Promise<Move>{
    const {data}= await axios.get<PokeAPIResponse>(`https://pokeapi.co/api/v2/pokemon/${this.id}`)
    return data.moves[0]
    }
   
    
}

export const pikachu:PokemonClase= new PokemonClase(1,'pikachu','Impact Trueno')
 console.log(pikachu.ToPresent());
 console.log(pikachu.Atacar());