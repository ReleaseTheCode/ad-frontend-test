import { GameCard } from "./GameCard";
import { Game } from '../../utils/endpoint';

export const GameList = ({games} : {games:Game[]} ) => {
  return (
    <div className="flex items-center gap-6 md:gap-12 flex-wrap">
      {
        games.map( eachGame => (<GameCard key={eachGame.id} {...eachGame}/>) )
      }
    </div>
  )
}
