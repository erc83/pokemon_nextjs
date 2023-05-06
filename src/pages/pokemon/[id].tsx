import { GetStaticProps, NextPage, GetStaticPaths } from "next";
import { useRouter } from 'next/router';

import { Layout } from "../../components/layouts";
import { pokeApi } from "../../../api";
import { Pokemon } from "../../../interfaces";

interface Props {
  pokemon: Pokemon;       // se necesita recibir el pokemon
  // id:   string;
  // name: string;
}


const PokemonPage: NextPage<Props> = ({ pokemon }) => {

  // console.log(pokemon ,"PokemonPage")

  const router = useRouter();
  // console.log(router.query)

  return (
    <Layout title='algun pokemon'>
        <h1>{ pokemon.name }</h1>
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