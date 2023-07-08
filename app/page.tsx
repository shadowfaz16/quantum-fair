'use client'
import Image from 'next/image'
import NavBar from './components/NavBar'
import Card from './components/Card'

export default function Home() {
  return (
    <>
    <NavBar />
      <main className="py-8 px-10">
        <div className='flex justify-center'>
          <img src='https://nftstorage.link/ipfs/bafybeigknjddz7izjx7bjrgtm267yxd4me4asrzawal2lp47coh2amnkwm' alt="logo" />
        </div>
        <div className='space-y-2 py-16'>
          <h2 className="text-5xl font-bold text-[#653AA3]">
            Featured projects
          </h2>
          <h5 className="text-[#5F27CB]">
            All the apps you need to pick random winners from everywhere!
          </h5>
        </div>
        {/*  */}
        <div className='space-y-2 text-center py-12'>
          <h2 className="text-5xl font-bold text-[#653AA3]">
            Featured projects
          </h2>
          <h5 className="text-[#5F27CB]">
            Explore and collect the best writing in web3
          </h5>
        </div>
        <div className='grid grid-cols-4 gap-12'>
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </main>
    </>
  )
}
