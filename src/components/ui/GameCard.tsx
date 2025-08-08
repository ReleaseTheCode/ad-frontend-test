"use client"
import Image from "next/image"
import { Game } from '@/utils/endpoint';
import  { default as localCart } from '../../utils/localCart'
import { useEffect, useState } from "react";

export const GameCard = ( game : Game) => {
  const [inCart, setInCart] = useState(false);
  
  useEffect(() => {
    setInCart(localCart.existInCart(game.id));
  }, [game.id]);

  const toggleCart = () => {
    localCart.toggleCart(game.id)
    setInCart(!inCart);
  }
  

  return (
    <div className="w-full max-w-[327px] md:max-w-[380px] rounded-xl border-[0.5px] p-[23px] flex flex-col">
      <div className="relative w-full max-w-[279px] md:w-[332px] h-[240px] mb-5 overflow-hidden">
        <Image
          src={game.image}
          alt={game.name}
          className="object-cover rounded-t-lg overflow-hidden"
          fill
          sizes="(min-width: 768px) 332px, 279px"
        />
        {game.isNew && (
          <span className="absolute top-3 left-3 bg-[#F5F5F4] text-sm text-[#3B3B3B] px-2 py-0.5 rounded">
            New
          </span>
        )}
      </div>
      <div className="w-full">
        <p className="text-base text-[#737373] uppercase font-bold mb-1">
          {game.genre}
        </p>

        <div className="flex justify-between items-center mb-4 text-[#3B3B3B]">
          <h2 className="text-lg font-bold">
            {game.name}
          </h2>
          <span className="text-xl font-bold">
            ${game.price}
          </span>
        </div>

        <button
          onClick={toggleCart}
          className="w-full border border-black font-bold text-[#3B3B3B] py-2 rounded-lg opacity-100"
        >
          { inCart ? `REMOVE` : `ADD TO CART` }
        </button>
      </div>
    </div>
  )
}
