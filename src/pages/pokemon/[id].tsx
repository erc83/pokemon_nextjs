import { GetStaticProps, NextPage, GetStaticPaths } from "next";
import { useRouter } from 'next/router';
import { Grid, Card, Text, Button, Container, Image } from '@nextui-org/react';

import { Layout } from "../../components/layouts";
import { pokeApi } from "../../../api";
import { Pokemon } from "../../../interfaces";
import { localFavorites } from "../../../utils";

interface Props {
  pokemon: Pokemon;       // se necesita recibir el pokemon
  // id:   string;
  // name: string;
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {

  const onToggleFavorite = () => {
    
    localFavorites.toggleFavorites( pokemon.id )

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
                  ghost
                  onPress={ onToggleFavorite }
                >
                  Guardar en favoritos
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


// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes
export const getStaticPaths: GetStaticPaths = async (ctx) => {
  // const { data } = await  // your fetch function here 

  const pokemons151 = [...Array(151)].map( (value, index) => `${ index + 1 }` ) ;
  // console.log(pokemons151)   se ven por el lado del servidor

  return {
    /* paths: [
      {
        params: { id: '1' }   // aqui recibe string como numero 
      },
      {
        params: { id: '2' }
      },
      {
        params: { id: '3' }
      },
    ], */
    // fallback: "blocking"   <- permite mas numeros que los 3 que estan aqui

    // solo se ejecuta del lado del servidor cuando se ejecuta el build de la app
    paths: pokemons151.map( ( id ) => ({
      // params: { id : id}
      params: { id }
    })),
    fallback: false   // <- controlamos la cantidad de paginas cuando no se renderizaron en el inicio

  }
}




// export const getStaticProps: GetStaticProps = async (ctx) => {
//  console.log( ctx.params, "parametros" ) 
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string };    // para agregar tipo al params
  // console.log(id)

  // en tiempo de build time tenemos la data.
  const { data } = await pokeApi.get<Pokemon>(`/pokemon/${ id }`);  // <PokemonListResponse> importado de las interfaces
  console.log()


  return {
    props: {
      pokemon: data
      // id: 1,
      // name: 'Bulbasaur'
    }
  }
}

export default PokemonPage