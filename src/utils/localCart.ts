import { Game } from "./endpoint";

const toggleCart = ( game: Game ) => {
  let CartGames: Game[] = JSON.parse(localStorage.getItem('shoppingCart') || '[]')
  if( CartGames.map(cartGame=>cartGame.id).includes(game.id) ) {
    CartGames = CartGames.filter( cartGame => cartGame.id !== game.id );
  } else {
    CartGames.push( game );
  }
  localStorage.setItem('shoppingCart', JSON.stringify( CartGames ) )
}

const existInCart = (id: string): boolean => {
  if( typeof window === 'undefined' ) return false
  const CartGames: Game[] = JSON.parse(localStorage.getItem('shoppingCart') || '[]');
  return CartGames.map(eachGame=>eachGame.id).includes( id );
}

const cart = (): Game[] => {
  return JSON.parse(localStorage.getItem('shoppingCart') || '[]');
}

export default {
  toggleCart,
  existInCart,
  cart
}
