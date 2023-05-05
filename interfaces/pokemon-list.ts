// fuente https://quicktype.io/ sacar la respuesta de postman de la api y obtener las interfaces en quicktype.io

/* export interface Welcome {
    count:    number;
    next:     string;
    previous: null;
    results:  Result[];
}

export interface Result {
    name: string;
    url:  string;
} */



// results no se puede cambiar porque viene en la data, si la interface SmallPokemon
export interface PokemonListResponse {
    count:    number;
    next?:     string;
    previous?: string;
    results:  SmallPokemon[];
}

export interface SmallPokemon {
    name: string;
    url:  string;
    id:   number;
    img:  string
}