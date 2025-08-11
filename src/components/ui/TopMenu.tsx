import Image from "next/image"
import Link from "next/link"


export const TopMenu = () => {
  return (
    <nav
      className="flex justify-between bg-[#EEEEEE] py-5 px-6 md:px-32 "
    >
      <Link
        href="/"
      >
        <span className="font-bold size-6 text-[#585660]">GamerShop</span>
      </Link>
      <Link
        href="/cart"
      >
        <Image src="/Vector.svg" alt="Chart" width={20} height={20} />
      </Link>
    </nav>
  )
}
