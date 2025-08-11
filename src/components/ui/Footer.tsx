import Link from "next/link"
import { ADLogo } from "../miscellaneous/ADLogo"

export const Footer = () => {
  return (
    <footer className="w-full bg-[#404040] flex justify-center opacity-100 py-16">
      <Link href='/'>
        <ADLogo />
      </Link>
    </footer>
  )
}
