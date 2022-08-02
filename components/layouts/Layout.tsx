import React, { FC } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { Navbar } from '../ui/Navbar';

interface Props {
    children?: React.ReactNode,
    title?: string,
};

const origin = ( typeof window === 'undefined' ) ? '' : window.location.origin;

export const Layout: FC<Props> = ({ children, title }) => {
    return (
        <>
            <Head>
                <title> {title || 'PokemonApp'} </title>
                <meta name='author' content="Brandon Garcia" />
                <meta name='description' content={`Informacion sobre el pokemon ${title}`} />
                <meta name='keywords' content={`${title}, pokemon, pokedex`} />
                <meta property="og:title" content={`Información sobre ${ title }`} />
                <meta property="og:description" content={`Esta es la página sobre ${ title }`} />
                <meta property="og:image" content={`${ origin }/img/banner.png`} />
            </Head>

            <Navbar />

            <main style={{
                padding: '0px 20px',
            }}>
                {children}
            </main>

        </>
    )
}
