"use client"
import { usePathname, useRouter, useSearchParams } from "next/navigation"

interface Props  {
  availableFilters: string[]
  selectedGenre: string
  handleSelectChange: (value:string) => void
}

export const Filters = ({availableFilters, selectedGenre = '', handleSelectChange}: Props) => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  
  const onSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value
    const params = new URLSearchParams(searchParams.toString())
    params.set('genre', value)
    router.push(pathname + '?' + params.toString())
    handleSelectChange(value)
  }

  return (
    
    <div className="w-full">
      <div className="flex justify-between max-w-[346px] ml-auto">
        <span>Genre</span>
        <span> | </span>
        <select
          id="genre"
          value={selectedGenre}
          onChange={onSelectChange}
        >
          <option value="">All</option>
          {availableFilters.map((genre) => {
            return (
              <option key={genre} value={genre}>
                {genre}
              </option>
            )
          })}
        </select>
      </div>
    </div>
  )
}
