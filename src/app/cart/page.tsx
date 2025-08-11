import Link from "next/link";
import { LeftArrow } from "@/components/miscellaneous/LeftArrow";
import { CartWrapper } from "@/components/ui/CartWrapper";

export default async function Cart() {
  return (
    <main className='min-h-screen w-full px-6 md:px-32 '>
      <Link href='/' className="flex py-5">
        <LeftArrow />
        Back to Catalog
      </Link>
      <h1 className="font-bold text-2xl text-[#3B3B3B]">Your Cart</h1>
      <CartWrapper />
    </main>
  )
}
