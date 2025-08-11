import { GameCard } from "./GameCard";

export const GameList = ({games}) => {
  return (
    <div className="flex items-center gap-6 md:gap-12 flex-wrap">
      {
        games.map( eachGame => (<GameCard key={eachGame.id} {...eachGame}/>) )
      }
    </div>
  )
}
