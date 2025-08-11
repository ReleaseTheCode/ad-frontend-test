'use client'
import { Filters } from "@/components";
import { GameList } from '../components/ui/GameList';
import { getPageGames } from "@/services/catalogService";
import { useCallback, useEffect, useState } from "react";
import { Game } from "@/utils/endpoint";
import { useSearchParams } from "next/navigation";
import { MainLoader } from "@/components/ui/MainLoader";

export default function Home() {
  const searchParams = useSearchParams()
  const search = searchParams.get('genre')

  const [loading, setLoading] = useState(true)
  const [games, setGames] = useState<Game[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const [selectedGenre, setSelectedGenre] = useState<string>(search || '')
  const [availableFilters, setAvailableFilters] = useState<string[]>([])

  useEffect(() => {
    setLoading(true)
    getPageGames(currentPage,selectedGenre).then( (response) => {
      const { games, availableFilters, totalPages, currentPage } = response

      setGames(games)
      setAvailableFilters(availableFilters)
      setCurrentPage(currentPage)
      setTotalPages(totalPages)

    }).finally( () => setLoading(false) )
  
  }, [ selectedGenre ])

  const handleGenreChange = useCallback((genre: string) => {
    setSelectedGenre(genre)
    setCurrentPage(1)
  }, [])

  const seeMoreGames = useCallback(() => {
    setLoading(true)
    getPageGames(currentPage + 1, selectedGenre ).then( (response) => {
      const { games: responseGames , totalPages, currentPage } = response
      setGames([...games, ...responseGames])
      setCurrentPage(currentPage)
      setTotalPages(totalPages)
    }).finally( () => setLoading(false) )
  }, [games])

  return (
    <main className='min-h-screen w-full px-6 md:px-32 '>
      <h1 className="my-8 text-2xl font-bold text-[#3B3B3B]">TOP SELLERS</h1>
      { loading ? (
        <MainLoader />
      ) : ( <>
        <div className="mb-8">
          <Filters availableFilters={availableFilters} handleSelectChange={handleGenreChange} selectedGenre={selectedGenre}/>
        </div>
        <section id="GameGrid" className="2xl:max-w-[1280px] py-8 opacity-100">
          <GameList games={games}/>
          { currentPage < totalPages &&
            <button
              onClick={seeMoreGames}
              className="w-full md:max-w-[137px] btn-primary font-bold text-sm leading-4 tracking-[0.5px] my-8"
            >
              SEE MORE
            </button>
          }
        </section>
      </>)}
    </main>
  )
}
