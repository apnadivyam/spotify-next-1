import type { NextPage } from 'next'
import {getSession} from 'next-auth/react'
import Sidebar from '../components/Sidebar'
import Center from '../components/Center'
import Player from '../components/Player'

const Home: NextPage = () => {
  return (
    <div className="bg-black h-screen overflow-hidden">

      <main className='flex'>
        <Sidebar />
        {/* center */}
        <Center />

      </main>

      <div className="sticky bottom-0 text-white h-20 bg-gray-800 opacity-90">
        {/* player */}
        <Player />
      </div>
    </div>
  )
}

export default Home

export async function getServerSideProps(context){
  const session = await getSession(context);

  return {
    props : {
      session,
    },
  };
}