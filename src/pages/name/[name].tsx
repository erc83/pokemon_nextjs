import { useState } from "react";

import { GetStaticProps, NextPage, GetStaticPaths } from "next";
// import { useRouter } from 'next/router';
import { Grid, Card, Text, Button, Container, Image } from '@nextui-org/react';

import confetti from 'canvas-confetti'

import { Layout } from "../../components/layouts";
import { pokeApi } from "../../../api";
import { Pokemon, PokemonListResponse } from "../../../interfaces";

import { localFavorites } from "../../../utils";


interface Props {
  pokemon: Pokemon;       // se necesita recibir el pokemon
  // id:   string;
  // name: string;
}

const PokemonByNamePage: NextPage<Props> = ({ pokemon }) => {
  // console.log({pokemon})   //revision de data pokemon

  const [isInFavorites, setIsInFavorites] = useState(localFavorites.existInFavorites( pokemon.id ) );


  const onToggleFavorite = () => {
    localFavorites.toggleFavorites( pokemon.id )
    setIsInFavorites( !isInFavorites)

    if(isInFavorites) return;
    
    confetti({
      zIndex: 999,
      particleCount: 100,
      spread: 160,
      angle: -100,
      origin: {
        x:1,
        y:0,
      }
    })
    
  }

  return (
    <Layout title={ pokemon.name }>

        <Grid.Container css={{ marginTop: '5px'}} gap={ 2 }>
          <Grid xs={ 12 } sm={ 4 } >
            <Card isHoverable css={{ padding: '30px'}}>
              <Card.Body> 
                <Card.Image 
                  src={ pokemon.sprites.other?.dream_world.front_default || './no-image.png' }
                  alt={ pokemon.name }
                  width="100%"
                  height={ 200 }
                />

              </Card.Body>
            </Card>
          </Grid>
          
          <Grid xs={ 12 } sm={ 8 } >
            <Card>

              <Card.Header css={{ display: 'flex', justifyContent: 'space-between'}}>
                <Text h1 transform='capitalize'>{ pokemon.name }</Text>
                <Button
                  color="gradient"
                  ghost={ !isInFavorites }
                  onPress={ onToggleFavorite }
                >
                  { isInFavorites ? <Text>En Favoritos</Text>: <Text>Guardar en favoritos</Text>}
                </Button>
              </Card.Header>

              <Card.Body>
                <Text size={30}>Sprites:</Text>
                <Container direction='row' display="flex" gap={ 0 }>
                  <Image 
                    src={ pokemon.sprites.front_default }
                    alt={ pokemon.name }
                    width={ 100 }
                    height={ 100 }
                  />
                  <Image 
                    src={ pokemon.sprites.back_default}
                    alt={ pokemon.name }
                    width={ 100 }
                    height={ 100 }
                  />
                  <Image 
                    src={ pokemon.sprites.front_shiny }
                    alt={ pokemon.name }
                    width={ 100 }
                    height={ 100 }
                  />
                  <Image 
                    src={ pokemon.sprites.back_shiny }
                    alt={ pokemon.name }
                    width={ 100 }
                    height={ 100 }
                  />
                </Container>
              </Card.Body>
            </Card>
          </Grid>
        </Grid.Container>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  
    const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');
    const pokemonName: string[] = data.results.map( pokemon => pokemon.name );  // creacion del array con el nombre de los pokemones
  
   return {

    paths: pokemonName.map( ( name ) => ({
      // params: { name : name}
      params: { name }
    })), 
    fallback: false   // <- controlamos la cantidad de paginas cuando no se renderizaron en el inicio 
  } 
}

// optimizacion data en el procesamiento estatico de la app
export const getStaticProps: GetStaticProps = async ({ params }) => {
  //aqui recibo el name [name].tsx  
  const { name } = params as { name: string };    // para agregar tipo al params

  const { data } = await pokeApi.get<Pokemon>(`/pokemon/${ name }`);  // <PokemonListResponse> importado de las interfaces
  
  const pokemonDataOptima = {
    id: data.id,
    name: data.name,
    sprites: data.sprites
  }

  return {
    props: {
      pokemon: pokemonDataOptima
      // id: 1,
      // name: 'Bulbasaur'
    }
  }
}

export default PokemonByNamePage