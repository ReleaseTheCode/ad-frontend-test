const toggleCart = ( id: string ) => {
  let games: string[] = JSON.parse(localStorage.getItem('shoppingCart') || '[]')
  if( games.includes(id) ) {
    games = games.filter( gameID => gameID !== id );
  } else {
    games.push( id );
  }
  localStorage.setItem('shoppingCart', JSON.stringify( games ) )
}

const existInCart = (id: string): boolean => {
  if( typeof window === 'undefined' ) return false
  const favorites: string[] = JSON.parse(localStorage.getItem('shoppingCart') || '[]');
  return favorites.includes( id );
}

const cart = (): number[] => {
  return JSON.parse(localStorage.getItem('shoppingCart') || '[]');
}

export default {
  toggleCart,
  existInCart,
  cart
}
