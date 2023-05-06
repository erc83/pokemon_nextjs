import React, { useEffect } from 'react'
import { Layout } from "../../components/layouts";
import { useRouter } from 'next/router';

interface Props {
  pokemon: any;
}


const PokemonPage = () => {
    /* useEffect(() => {
        console.log('htttp://...')
    }, []) */
    //obtener del lado del cliente
  const router = useRouter();
  console.log(router.query)


  return (
    <Layout title='algun pokemon'>
        <h1>Hola pokemon</h1>
    </Layout>
  )
}

export default PokemonPage