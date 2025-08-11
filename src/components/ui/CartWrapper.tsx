'use client'
import { useState } from 'react'
import { OrderSummary } from './OrderSummary'
import  { default as localCart } from '../../utils/localCart'
import { Game } from '@/utils/endpoint'
import { CheckOutCard } from './CheckOutCard'
import { EmptyCart } from './EmptyCart'

export const CartWrapper = () => {
const {
    cart,
    toggleCart
   } = localCart
   
  const [shoppingCart, setShoppingCart] = useState<Game[]>(cart())
  
    const handleDeleteGame = (game:Game) => {
      toggleCart(game)
      setShoppingCart(cart())
    }

  return (
  <>
    <p className='text-xl font-normal tracking-wide mb-8 md:mb-12'>{shoppingCart.length} Items</p>
    <div className='flex flex-col md:flex-row md:justify-between'>
      <div className='divide-y mb-12 2xl:min-w-[678px]'>
      { shoppingCart.length == 0 ?
        (
          <EmptyCart />
        ) : (
          shoppingCart.map( game => (
            <CheckOutCard
              key={game.id}
              item={game}
              DeleteFromCart={handleDeleteGame}
            />
          ) )
        )
      }
      </div>
      <div className='2xl:min-w-[532px]'>
        <OrderSummary cart={shoppingCart} />
        <button
          onClick={()=>console.log('Checkout')}
          className="w-full btn-primary font-bold text-sm leading-4 tracking-[0.5px] mb-8"
        >
          Checkout
        </button>
      </div>
    </div>
  </>
  )
}
