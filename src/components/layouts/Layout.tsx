import { FC } from "react"

import Head from "next/head"
import { Nabvar } from "../ui";

interface Props {
    children: JSX.Element;
    title: string;
}

const origin = ( typeof window === 'undefined') ? '' : window.location.origin;


export const Layout:FC<Props> = ({ children, title }) => {
    return (
        <>
            <Head>
                <title>{ title || "Pokemon App"}</title>
                <meta name="author"  content="Eric Espinoza"/>
                <meta name="description"  content={`Información sobre el pokemon ${ title }`}/>
                <meta name="keywords"  content={`${ title }, pokemon, pokedex` }/>

                <meta property="og:title" content={`Información sobre ${ title }`} />
                <meta property="og:description" content={`Esta es la página sobre ${ title }`} />
                <meta property="og:image" content={`${ origin }/imgs/banner.png`} />

            </Head>
        
            <Nabvar />

            <main>
                { children }
            </main>
        
        </>
    )
}
// export default Layout