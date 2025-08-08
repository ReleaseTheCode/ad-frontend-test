'use client'
import { useState, useEffect } from "react";
import { GameCard } from "./GameCard";
import { Game, GamesApiResponse } from '../../utils/endpoint';
import { Loader } from "./Loader";

export const GameList = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchGames = async () => {
      setLoading(true);
      const res = await fetch(`/api/games?genre=Action&page=${page}`);
      const data:GamesApiResponse = await res.json();
      setGames(data.games);
      setTotalPages(data.totalPages);
      setLoading(false);
    };

    fetchGames();
  }, [page]);
  return (
    < >
      { loading ? (
        <Loader />
      ) : (
        <div className="flex items-center gap-6 md:gap-12 flex-wrap">
          {
            games.map( eachGame => (<GameCard key={eachGame.id} {...eachGame}/>) )
          }
        </div>
      )
    }
    </>
  )
}
