import { FC } from "react"

import Head from "next/head"

interface Props {
    children: JSX.Element;
    title: string;
}


export const Layout:FC<Props> = ({ children, title }) => {
    return (
        <>
            <Head>
                <title>{ title || "Pokemon App"}</title>
                <meta name="author"  content="Eric Espinoza"/>
                <meta name="description"  content={`Información sobre el pokemon ${ title }`}/>
                <meta name="keywords"  content={`${ title }, pokemon, pokedex` }/>
            </Head>
        
            <h1>Layout</h1>
           {/*  <Navbar></Navbar> */}

            <main>
                { children }
            </main>
        
        </>
    )
}
// export default Layout