import { useEffect, useState } from "react";

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

        <NoFavorites />


    </Layout>
  )
}

export default FavoritesPage