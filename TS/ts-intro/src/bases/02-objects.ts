

export const pokemonId:number[]=[12,2423,546,4]
///ERROR -----> //pokemonId.push('12');

//conversiones rapidas

pokemonId.push(+'1')

//convesiones

pokemonId.push(Number('1'))

//intefaces
export interface Pokemon{
    id:number,
    name:string,
    age?:number,
    status: number | undefined
}
export const pikachu:Pokemon={
    id:2,
    name:"por",
    status:undefined

}
export const duck: Pokemon={
    id: 0,
    name: "",
    status: undefined
}

export const pokemons:string[] = []