'use client'
import { useState } from 'react'
import { OrderSummary } from './OrderSummary'
import  { default as localCart } from '../../utils/localCart'
import { Game } from '@/utils/endpoint'
import { CheckOutCard } from './CheckOutCard'

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
    <p className='text-xl font-normal tracking-wide'>{shoppingCart.length} Items</p>
    <div className='flex gap-20'>
      <div className='divide-y mb-12'>
      {
        shoppingCart.map( game => (
          <CheckOutCard
            key={game.id}
            item={game}
            DeleteFromCart={handleDeleteGame}
          />
        ) )
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
