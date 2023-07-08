import React from 'react'

type Props = {}

const RaffleListItem = (props: Props) => {
  return (
    <div className='flex justify-between'>
        <div className='flex space-x-4'>
            <div className='flex items-center justify-center w-8'>
                  <span className='text-2xl text-[#5F27CB] font-semibold'>1</span>
            </div>
            <div>
                <img src='https://nftstorage.link/ipfs/bafkreigt6rsehas6dk4dswhz7polffxz5azmp6rdzaocbq3jkjvsnmvpzy' alt="logo" className='w-12 h-12' />
            </div>
            <div>
                  <h1 className='font-bold text-2xl text-[#5F27CB]'>The Vitalik Raffle</h1>
                  <span className='text-sm font-semibold text-[#EF68DC]'>Participants: 1452</span>
            </div>
        </div>
          <div className='bg-[#5F27CB] text-center text-white py-2 px-3 flex flex-col justify-center items-center rounded w-12 h-12'>
                <h4 className='font-semibold text-2xl leading-7'>22</h4>
                <span className='text-[10px] font-semibold'>DAYS</span>
        </div>
    </div>
  )
}

export default RaffleListItem