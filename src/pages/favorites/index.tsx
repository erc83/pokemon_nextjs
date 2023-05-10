import { useEffect, useState } from "react";
import { Grid, Card } from '@nextui-org/react';

import { Layout } from "@/components/layouts"
import NoFavorites from "@/components/ui/NoFavorites";

import { localFavorites } from "../../../utils";
import { FavoritePokemonCard } from "@/components/pokemon";

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
            : (
              <Grid.Container gap={ 2 } direction="row" justify="flex-start">
                {
                  favoritePokemon.map(( id ) => (
                    <FavoritePokemonCard  pokemonId={ id }/>
                  ))
                }
              </Grid.Container>
            )
        }


        

    </Layout>
  )
}

export default FavoritesPage