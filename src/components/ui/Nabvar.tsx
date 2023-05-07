import Image from "next/image";
import NextLink from 'next/link';  // aqui se renombra para que no choque con el Link de nextui
import { /* Link, */ Spacer, Text, useTheme } from "@nextui-org/react"  // Link no fue necesario utilizarlo

export const Nabvar = () => {

    const { theme } = useTheme()
    // console.log(theme);

  return (
    <div style={{
        display: "flex",
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'start',
        padding:'0px 20px',
        backgroundColor: theme?.colors.gray100.value
    }}>

      <NextLink href="/" style={{
        display: 'flex'
      }}>
        <Image 
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
            alt="icono de navbar"
            width={70}
            height={70}
        />
          
          <Text color='white' h2>P</Text>
          <Text color='white' h3>okémon</Text>

        </NextLink>

        <Spacer css={{ flex: 1 }} />

        <NextLink href="/favorites">
          <Text color='white'>Favoritos</Text>
        </NextLink>
    
    </div>
  )
}

