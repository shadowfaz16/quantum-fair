'use client'
import Image from 'next/image'
import NavBar from './components/NavBar'
import Card from './components/Card'
import RaffleListItem from './components/RaffleListItem'
import { useState } from 'react'
import HappyPathJoin from './components/HappyPathJoin'
import { useContractRead } from 'wagmi'
import abi from './utils/abi.json'
import RaffleCard from './components/RaffleCard'
import raffles from './utils/rifas.json'


export default function Home() {

  const [modal, setModal] = useState(false)

  return (
    <>
      <main className="py-6 md:py-10 px-6 md:px-10">
        <div className='flex justify-center'>
          <img src='https://nftstorage.link/ipfs/bafybeigb6slir75kg2kmib7ndtfaaba3rdkuqqtmdsup7tlhktmc2rt7uu' alt="logo" className='rounded-3xl w-full' />
        </div>
        <div className='space-y-2 py-10 md:py-16'>
          <h2 className="text-3xl md:text-5xl font-bold text-[#653AA3]">
            Featured projects
          </h2>
          <h5 className="text-[#5F27CB] text-sm md:text-base">
            All the apps you need to pick random winners from everywhere!
          </h5>
        </div>
        <div className='grid md:grid-cols-3 gap-12'>
          {raffles.map((raffle) => (
            <RaffleCard
              key={raffle.raffleId}
              raffleName={raffle.raffleName}
              raffleDescription={raffle.raffleDescription}
              raffleImage={raffle.raffleImage}
              raffleBanner={raffle.raffleBanner}
              raffleCreator={raffle.raffleCreator}
              raffleId={raffle.raffleId}
              raffleStartTime={raffle.raffleStartTime}
              raffleEndTime={raffle.raffleEndTime}
              raffleTicketPrice={raffle.raffleTicketPrice}
              raffleTicketsRemaining={raffle.raffleTicketsRemaining}
            />
          ))}
        </div>
        {/*  */}
        <div className='space-y-2 text-center py-10 md:py-16 mt-12'>
          <h2 className="text-3xl md:text-5xl font-bold text-[#653AA3]">
            Featured projects
          </h2>
          <h5 className="text-[#5F27CB] text-sm md:text-base">
            Explore and collect the best writing in web3
          </h5>
        </div>
        <div className='grid lg:grid-cols-4 gap-12'>
          <div onClick={() => setModal(true)}>
            <Card />
          </div>
          <Card />
          <Card />
          <Card />
        </div>
        <div className='flex flex-col md:flex-row md:items-center justify-between pt-12'>
          <div className='space-y-2 py-4 md:py-12'>
            <h2 className="text-3xl md:text-5xl font-bold text-[#653AA3]">
              Top raffles
            </h2>
            <h5 className="text-[#5F27CB] text-sm md:text-base">
              Explore and collect the best writing in web3
            </h5>
          </div>
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <button type="button" className="w-1/4 md:w-auto md:px-4 py-2 font-medium text-[#5F27CB] text-sm md:text-base bg-[#EAE3F8] border border-gray-200 rounded-l-lg hover:bg-[#5F27CB] hover:text-white focus:z-10  focus:bg-[#5F27CB] focus:text-white">
              1 day
            </button>
            <button type="button" className="w-1/4 md:w-auto md:px-4 py-2 text-sm font-medium text-[#5F27CB] bg-[#EAE3F8] border-t border-b border-gray-200 hover:bg-[#5F27CB] hover:text-white focus:z-10  focus:bg-[#5F27CB] focus:text-white">
              7 day
            </button>
            <button type="button" className="w-1/4 md:w-auto md:px-4 py-2 text-sm font-medium text-[#5F27CB] bg-[#EAE3F8] border-t border-b border-gray-200 hover:bg-[#5F27CB] hover:text-white focus:z-10  focus:bg-[#5F27CB] focus:text-white">
              30 day
            </button>
            <button type="button" className="w-1/4 md:w-auto md:px-4 py-2 text-sm font-medium text-[#5F27CB] bg-[#EAE3F8] border border-gray-200 rounded-r-md hover:bg-[#5F27CB] hover:text-white focus:z-10  focus:bg-[#5F27CB] focus:text-white">
              All time
            </button>
          </div>
        </div>
          <div className='grid md:grid-cols-3 gap-x-16 gap-y-8 md:gap-y-12 pb-32 pt-8'>
            <RaffleListItem />
            <RaffleListItem />
            <RaffleListItem />
            <RaffleListItem />
            <RaffleListItem />
            <RaffleListItem />
            <RaffleListItem />
            <RaffleListItem />
            <RaffleListItem />
          </div>
          {
            modal && (
              <HappyPathJoin />
            )
          }
      </main>
    </>
  )
}
