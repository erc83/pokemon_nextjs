import { NextPage, GetStaticProps } from "next"

import { Layout } from "../components/layouts";
import { pokeApi /* , .... */ } from "../../api";    // si tenemos mas apis las podemos llamar aqui
import { PokemonListResponse } from "../../interfaces";

//Listado de Pokemons
export const HomePage: NextPage= ( props ) => {
  
  console.log({ props })
  
  return (
    <>
      <Layout title="Listado de Pokemons">
        <ul>
          <li>Pokémon</li>
          <li>Pokémon</li>
          <li>Pokémon</li>
          <li>Pokémon</li>
          <li>Pokémon</li>
          <li>Pokémon</li>
          <li>Pokémon</li>
        </ul>
      </Layout>
    </>
  )
}


/* export async function getStaticProps(context){
  return{
    props:{}
  }
} */

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.  //tiempo de construccion
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.

// es una funcion que se ejecuta desde el lado del servidor y se ejecuta solamente en el build time, en la creacion del servidor
// hola mundo aparece en la terminal y no en la consola del navegador
// en desarrollo se vuelve a ejecutar porque estamos guardando y generando nuevamente el build de desarrollo
// solo se puede utilizar en las pages no se puede utilizar 
// podemos leer file system, bases de datos, peticiones http mandando secret tokens
// no llega al cliente, con la excepcion de las props que estan en el return
// si colocamos un objeto como
// usar getStaticProps siempre y cuando sepamos cuales son los parametros que la pagina necesita

export const getStaticProps: GetStaticProps = async (ctx) => {
  
  // const resp = await pokeApi.get('/pokemon?limit=151');
  // console.log(resp)     // aqui la data la vemos desde la consola
  
  // const { data } = await pokeApi.get('/pokemon?limit=151');

  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');  // <PokemonListResponse> importado de las interfaces
  console.log(data)

  return {
    props: {
      // pokemon: data.result      -> ahora se queja si no tiene los siguientes valores
      pokemon: data.results
    }
  }
}

export default HomePage