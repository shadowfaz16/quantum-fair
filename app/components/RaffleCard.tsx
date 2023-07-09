import React from 'react'

type RaffleCardProps = {
  raffleName: string
  raffleDescription: string
  raffleImage: string
  raffleBanner: string
  raffleCreator: string
  raffleId: string
  raffleStartTime: string
  raffleEndTime: string
  raffleTicketPrice: string
  raffleTicketsRemaining: string
}

const RaffleCard = (props: RaffleCardProps) => {
  return (
    <div className='rounded-xl w-full bg-white shadow-md'>
      <div>
        <img src={props.raffleBanner} alt='banner' className='w-full rounded-t-xl md:h-32 object-cover' />
      </div>
      <div className="px-6 py-4 space-y-4 -mt-8 md:-mt-12">
        <div className="flex items-end space-x-4">
          <div>
            <img src={props.raffleImage} className='md:w-28 md:h-28 rounded-2xl' />
          </div>
          <div>
            <h3 className="text-lg md:text-xl font-bold text-[#2B2B2B]">
              {props.raffleName}
            </h3>
            <h5 className="text-[#2B2B2B] text-xs md:text-sm w-52 leading-4 font-medium">
              {props.raffleDescription}
            </h5>
          </div>
        </div>
          <div className='flex justify-between items-center'>
            <div>
              <h5 className="text-[#2B2B2B] text-sm font-bold">
                {props.raffleTicketPrice} ETH
              </h5>
              <h5 className="text-[#2B2B2B] text-sm">
                10/100 tickets left
              </h5>
            </div>
          <button className='bg-[#9678EF] font-bold text-white rounded-lg px-10 py-2 text-sm md:text-base'>
              Join raffle
            </button>
          </div>
      </div>
      
    </div>
  )
}

export default RaffleCard