import React from 'react'

type Props = {}

const Card = (props: Props) => {
  return (
    <div className='bg-white shadow rounded-xl hover:shadow-md hover:cursor-pointer'>
      <div>
        <img src='https://nftstorage.link/ipfs/bafkreiad5kpwhzyv7tq3xhlbejpmu7psk4rvarwfb3m74c3h2fzn3jlodi' alt="logo" className='w-full rounded-t-xl' />
      </div>
      <div className='p-3 space-y-6'>
        <h3 className='text-xl md:text-2xl font-bold text-[#2B2B2B]'>Optimism Collective: Hello World</h3>
        <div className='flex items-center space-x-2.5'>
          <div className='w-10 h-10 bg-[#A7FFCA] rounded-full'></div>
          <div className='-space-y-1 text-sm'>
            <h5 className='font-medium'>Optimism</h5>
            <h6>optimism.mirror.xyz</h6>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card