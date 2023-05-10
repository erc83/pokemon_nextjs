import { useEffect, useState } from "react";
import { Grid, Card } from '@nextui-org/react';

import { Layout } from "@/components/layouts"
import NoFavorites from "@/components/ui/NoFavorites";

import { localFavorites } from "../../../utils";



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
                    <Grid xs={ 6 } sm={ 3 } xl={ 1 } key={ id }>
                      <Card isHoverable isPressable css={{ padding: 10}}>  
                        <Card.Image
                          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${ id }.svg`}
                          width={'100%'}
                          height={ 140 }
                        />
                      </Card>
                    </Grid>
                  ))
                }


              </Grid.Container>
            )
        }


        

    </Layout>
  )
}

export default FavoritesPage