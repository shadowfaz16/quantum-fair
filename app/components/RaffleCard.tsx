import React from 'react'

type Props = {}

const RaffleCard = (props: Props) => {
  return (
    <div className='rounded-xl w-full bg-white shadow-md'>
      <div>
        <img src="https://nftstorage.link/ipfs/bafkreib5ekl6zajsonvaxaugktzy7udezazbnooe7r4lp4q7mkvx4w7ave" className='w-full h-36 object-cover rounded-t-xl' />
      </div>
      <div className="px-6 py-4 space-y-4 -mt-12">
        <div className="flex items-end space-x-4">
          <div>
            <img src="https://nftstorage.link/ipfs/bafkreia5b2oyydyhpj2ka7v4gtt66onmj55mr5s6c764l5g744hogslsca" className='w-28 h-28 rounded-2xl' />
          </div>
          <div>
            <h3 className="text-xl font-bold text-[#2B2B2B]">
              RaffleName
            </h3>
            <h5 className="text-[#2B2B2B] text-sm w-52 leading-4 font-medium">
              The raffle description, telling about good things about this
            </h5>
          </div>
        </div>
          <div className='flex justify-between items-center'>
            <div>
              <h5 className="text-[#2B2B2B] text-sm font-bold text-lg">
                0.1 ETH
              </h5>
              <h5 className="text-[#2B2B2B] text-sm">
                10/100 tickets left
              </h5>
            </div>
          <button className='bg-[#9678EF] font-bold text-white rounded-lg px-10 py-2'>
              Join raffle
            </button>
          </div>
      </div>
      
    </div>
  )
}

export default RaffleCard