import { GetStaticProps, NextPage, GetStaticPaths } from "next";
import { useRouter } from 'next/router';

import { Layout } from "../../components/layouts";

interface Props {
  // pokemon: any;
  id:   string;
  name: string;
}


const PokemonPage: NextPage<Props> = ({ id, name }) => {

  const router = useRouter();
  console.log(router.query)


  return (
    <Layout title='algun pokemon'>
        <h1>{ id } - { name }</h1>
    </Layout>
  )
}


// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes
export const getStaticPaths: GetStaticPaths = async (ctx) => {
  // const { data } = await  // your fetch function here 

  return {
    paths: [
      {
        params: { id: '1' }   // aqui recibe string como numero 
      },
      {
        params: { id: '2' }
      },
      {
        params: { id: '3' }
      },
    ],
    // fallback: "blocking"   <- permite mas numeros que los 3 que estan aqui
    fallback: false   // <- controlamos la cantidad de paginas cuando no se renderizaron en el inicio

  }
}




export const getStaticProps: GetStaticProps = async (ctx) => {

  // const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');  // <PokemonListResponse> importado de las interfaces

  return {
    props: {
      id: 1,
      name: 'Bulbasaur'
    }
  }
}



export default PokemonPage