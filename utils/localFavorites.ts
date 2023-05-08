

const toggleFavorites = ( id: number ) => {
    // si no existe lo creo, y si existe lo borro
    console.log('toggleFavorite Llamado');

    let favorites: number[] = JSON.parse( localStorage.getItem('favorites')  || '[]' )

    if( favorites.includes( id )) {
        favorites = favorites.filter( pokeId => pokeId !== id );
    } else {
        favorites.push( id );
    }

    localStorage.setItem('favorites', JSON.stringify( favorites ))

}

export default {
    toggleFavorites
}

