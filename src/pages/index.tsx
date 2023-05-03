import { NextPage } from "next"
import { Button } from "@nextui-org/react";
import { Layout } from "../components/layouts";

//Listado de Pokemons
export const HomePage: NextPage= () => {
  return (
    <>
      <Layout title="Listado de Pokemons">
        <Button > Hola Mundo</Button>
      </Layout>
    </>
  )
}

export default HomePage