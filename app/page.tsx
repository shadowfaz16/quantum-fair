'use client'
import Image from 'next/image'
import NavBar from './components/NavBar'
import Card from './components/Card'
import RaffleListItem from './components/RaffleListItem'

export default function Home() {
  return (
    <>
      <main className="py-8 px-10">
        <div className='flex justify-center'>
          <img src='https://nftstorage.link/ipfs/bafybeigknjddz7izjx7bjrgtm267yxd4me4asrzawal2lp47coh2amnkwm' alt="logo" />
          {/* {bafybeiecimoztswv7vt4xbspcpmkhq66ysjdyjnwbbeb2ryql7xaip2r5i } */}
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
        <div className='flex items-center justify-between pt-12'>
          <div className='space-y-2 py-12'>
            <h2 className="text-5xl font-bold text-[#653AA3]">
              Top raffles
            </h2>
            <h5 className="text-[#5F27CB]">
              Explore and collect the best writing in web3
            </h5>
          </div>

          <div className="inline-flex rounded-md shadow-sm" role="group">
            <button type="button" className="px-4 py-2 text-sm font-medium text-[#5F27CB] bg-[#EAE3F8] border border-gray-200 rounded-l-lg hover:bg-[#5F27CB] hover:text-white focus:z-10  focus:bg-[#5F27CB] focus:text-white">
              1 day
            </button>
            <button type="button" className="px-4 py-2 text-sm font-medium text-[#5F27CB] bg-[#EAE3F8] border-t border-b border-gray-200 hover:bg-[#5F27CB] hover:text-white focus:z-10  focus:bg-[#5F27CB] focus:text-white">
              7 day
            </button>
            <button type="button" className="px-4 py-2 text-sm font-medium text-[#5F27CB] bg-[#EAE3F8] border-t border-b border-gray-200 hover:bg-[#5F27CB] hover:text-white focus:z-10  focus:bg-[#5F27CB] focus:text-white">
              30 day
            </button>
            <button type="button" className="px-4 py-2 text-sm font-medium text-[#5F27CB] bg-[#EAE3F8] border border-gray-200 rounded-r-md hover:bg-[#5F27CB] hover:text-white focus:z-10  focus:bg-[#5F27CB] focus:text-white">
              All time
            </button>
          </div>
        </div>
          <div className='grid grid-cols-3 gap-x-16 gap-y-12 pb-32'>
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
      </main>
    </>
  )
}
