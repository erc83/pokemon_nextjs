import { FC } from "react";
import { Grid } from "@nextui-org/react"
import { FavoritePokemonCard } from '@/components/pokemon';



interface Props {
    pokemons: number[];
}

const FavoritePokemons: FC<Props> = ({ pokemons}) => {

    

  return (
    <Grid.Container gap={ 2 } direction="row" justify="flex-start">
                {
                  pokemons.map(( id ) => (
                    <FavoritePokemonCard key={ id } pokemonId={ id }/>
                  ))
                }
    </Grid.Container>
  )
}

export default FavoritePokemons