import { useEffect, useState } from "react";
import { Grid, Card } from '@nextui-org/react';

import { Layout } from "@/components/layouts"
import NoFavorites from "@/components/ui/NoFavorites";

import { localFavorites } from "../../../utils";
// import { FavoritePokemonCard } from "@/components/pokemon";
import FavoritePokemons  from "@/components/pokemon/FavoritePokemons";


const FavoritesPage = () => {

  const [favoritePokemon, setFavoritePokemon] = useState<number[]>([])

  useEffect(() => {
    setFavoritePokemon( localFavorites.pokemons() ); 

  }, [])
  
  return (

    <Layout title='pokemones favoritos'>

        {
          favoritePokemon.length === 0
            ? (<NoFavorites />)
            : ( <FavoritePokemons pokemons={ favoritePokemon } />
              
            )
        }


        

    </Layout>
  )
}

export default FavoritesPage