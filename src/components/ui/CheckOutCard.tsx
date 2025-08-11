import Image from "next/image"
import { Game } from '@/utils/endpoint'
import { Cross } from '../miscellaneous/Cross'

interface Props {
  item: Game
  DeleteFromCart: (value: Game) => void
}

export const CheckOutCard = ({ item, DeleteFromCart}: Props) => {

  return (
    <div className='py-5 px-4 relative mb-5'>
      <span className='absolute end-4' onClick={()=>DeleteFromCart(item)}>
        <Cross/>
      </span>
      <div className="relative w-full h-[136px] max-w-[259px] md:w-[256px] h-[240px] mb-5">
        <Image
          src={item.image}
          alt={item.name}
          className="object-cover overflow-hidden"
          sizes="(min-width: 768px) 256px, 259px"
          fill
        />
      </div>
      <p className="text-base text-[#737373] uppercase font-bold mb-3">
        {item.genre}
      </p>
      <h2 className="text-lg font-bold mb-2">
        {item.name}
      </h2>
      <p className="text-base leading-5 text-[#737373] mb-6">
        {item.description}
      </p>
      <span className="absolute end-4 text-lg leading-5 tracking-[0.4px] font-bold text-[#3B3B3B]">${item.price}</span>
    </div>
  )
}
