import { Card, Grid } from "@nextui-org/react"

interface Props {
    pokemonId: number;
}


export const FavoritePokemonCard  = ( { pokemonId }: Props ) => {
  return (
    <Grid xs={ 6 } sm={ 3 } xl={ 1 } key={ pokemonId }>
    <Card isHoverable isPressable css={{ padding: 10}}>  
        <Card.Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${ pokemonId }.svg`}
            width={'100%'}
            height={ 140 }
        />
        </Card>
    </Grid>
  )
}

export default {
    FavoritePokemonCard
}