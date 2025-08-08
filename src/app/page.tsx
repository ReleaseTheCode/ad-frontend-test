import { GameList } from '../components/ui/GameList';

export default async function Home() {
  return (
    <main className='min-h-screen w-full px-6 md:px-32 '>
      <section id="GameGrid" className="2xl:max-w-[1280px] py-8 opacity-100">
        <GameList />
      </section>
    </main>
  )
}
