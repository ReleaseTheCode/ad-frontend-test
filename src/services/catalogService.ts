import { GamesApiResponse } from "@/utils/endpoint";

export const getPageGames = async (page: number, genre = "") : Promise<GamesApiResponse> => {
  const params = new URLSearchParams({
    page: page.toString(),
    ...(genre && { genre }),
  })

  const response = await fetch(`/api/games?${params}`)
  const data: GamesApiResponse = await response.json()
  return data
}