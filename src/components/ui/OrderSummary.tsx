import { Game } from "@/utils/endpoint"

export const OrderSummary = ({cart}:{cart: Game[]}) => {
  const total = cart.reduce((accumulator, currentValue) => accumulator + currentValue.price, 0)


  return (
    <div className="border-[0.5px] rounded-lg py-6 px-4 mb-10">
      <h2 className="font-bold text-xl text-[#3B3B3B] mb-3">Order Summary</h2>
      <p className="text-lg font-normal leading-6 tracking-tight text-[#3B3B3B] mb-11">{cart.length} items</p>

      {
        cart.map(({name,price}) => (
        <div key={name} className="flex justify-between text-[#3B3B3B]">
          <span className="text-lg font-normal">{name}</span><span className="text-lg font-normal ">$ {price}</span>
        </div>
        ))
      }
      <hr className="my-6"/>
      <h2 className="flex justify-between font-bold text-xl text-[#3B3B3B]">
        <span>Order Total</span>
        <span>${total}</span>
      </h2>
    </div>
  )
}
