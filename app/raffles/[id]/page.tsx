'use client'
import React from 'react'
import { useAccount, useBalance, useContractRead, usePrepareContractWrite, useContractWrite } from 'wagmi'
import {FiCheckCircle} from 'react-icons/fi'
import Image from 'next/image'
import optimism from "../../assets/optimism.svg"
import abi from '../../utils/abi.json'
import { FaCheckCircle, FaUser } from 'react-icons/fa'
import { parseEther } from 'viem'
import Carousel from '@/app/components/Carousel'

type Props = {}

const RafflePage = () => {
  const { address, isConnecting, isDisconnected } = useAccount()

  const { data: raffleId } = useContractRead({
    address: '0x90e663C5B40eC850DB2bb35E33d72C97CC41bC61',
    abi: abi,
    functionName: 'raffleId',
  })

  const { data: raffleOwner } = useContractRead({
    address: '0x90e663C5B40eC850DB2bb35E33d72C97CC41bC61',
    abi: abi,
    functionName: 'owner',
  })

  const { data: creatorAddress } = useContractRead({
    address: '0x90e663C5B40eC850DB2bb35E33d72C97CC41bC61',
    abi: abi,
    functionName: 'creatorAddress',
  })

  const { data: entries } = useContractRead({
    address: '0x90e663C5B40eC850DB2bb35E33d72C97CC41bC61',
    abi: abi,
    functionName: 'entries',
    args: [address],
  })

  const { data: participants } = useContractRead({
    address: '0x90e663C5B40eC850DB2bb35E33d72C97CC41bC61',
    abi: abi,
    functionName: 'participants',
    args: ['1'],
  })

  const {data: startTime} = useContractRead({
    address: '0x90e663C5B40eC850DB2bb35E33d72C97CC41bC61',
    abi: abi,
    functionName: 'startTime',
  })

  const { data: endTime } = useContractRead({
    address: '0x90e663C5B40eC850DB2bb35E33d72C97CC41bC61',
    abi: abi,
    functionName: 'expectedEndTime',
  })

  const { data: ticketPrice } = useContractRead({
    address: '0x90e663C5B40eC850DB2bb35E33d72C97CC41bC61',
    abi: abi,
    functionName: 'ticketPrice',
  })

  const { data: ticketsVaultAddress } = useContractRead({
    address: '0x90e663C5B40eC850DB2bb35E33d72C97CC41bC61',
    abi: abi,
    functionName: 'ticketsVaultAddress',
  })

  const { data: ticketsVaultId } = useContractRead({
    address: '0x90e663C5B40eC850DB2bb35E33d72C97CC41bC61',
    abi: abi,
    functionName: 'ticketsVaultId',
  })

  const { data: requiredBalance } = useContractRead({
    address: '0x90e663C5B40eC850DB2bb35E33d72C97CC41bC61',
    abi: abi,
    functionName: 'requiredBalance',
  })

  const unixTimestamp = startTime?.toString()
  const startDate = new Date(parseFloat(unixTimestamp as string) * 1000)

  const unixEndTimestamp = endTime?.toString()
  const endDate = new Date(parseFloat(unixEndTimestamp as string) * 1000)

  console.log("raffleId", raffleId?.toString())
  console.log("raffleOwner", raffleOwner?.toString())
  console.log("creatorAddress", creatorAddress?.toString())
  console.log("entriesss", entries?.toString())
  console.log("participantssss", participants?.toString())
  console.log("startTimessss", startDate)
  console.log("endTimesss", endDate)
  console.log("ticketsVaultAddress", ticketsVaultAddress)
  console.log("ticketsVaultId", ticketsVaultId?.toString())
  console.log("ticketPrice", ticketPrice?.toString())
  console.log("requiredBalance", requiredBalance?.toString())


  // WRITE FUNCTIONS

  const { config } = usePrepareContractWrite({
    address: '0x90e663C5B40eC850DB2bb35E33d72C97CC41bC61',
    abi: abi,
    functionName: 'enter',
    args: [address, BigInt(3)],
    value: parseEther("0.000000000000000003"),
    onSuccess(data) {
      console.log('Successsss', data)
    },
  })

  const { data: enter, isLoading, isSuccess, write } = useContractWrite(
    config,
  )

  const shortenAddress = (address: string) => {
    if (address) {
      return `${address.slice(0, 6)}...${address.slice(-4)}`;
    }
    return 'Address not available';
  };


  const entrylist = entries?.toString();
  const raffleid = raffleId?.toString();

  return (
    <div className='min-h-screen flex flex-col items-center px-6 py-10 w-full'>
        <div className='grid md:grid-cols-2 w-full md:space-x-12'>
          <div className='md:relative rounded-3xl'>
            <img src="https://nftstorage.link/ipfs/bafybeidb2cru2yjie5xnfjcyk2fhuexdc2eqccjmw7uq4jqetk27hbj6b4" alt='curtains' className='md:absolute w-full h-full rounded-3xl' />
            <div className='md:absolute top-0 left-0 w-full h-full rounded-3xl flex items-center justify-center'>
              <img src="https://nftstorage.link/ipfs/bafkreia5b2oyydyhpj2ka7v4gtt66onmj55mr5s6c764l5g744hogslsca" alt='nft' className='w-60 h-60 rounded-3xl hidden md:block' />
            </div>
          </div>
          <div className='pt-10 max-w-full overflow-x-hidden'>
          <Carousel />
            <div className='flex flex-col md:flex-row my-8'>
              <div className='flex flex-col space-y-2'>
                <div className='flex items-center justify-center md:justify-start p-2 pr-6 rounded-full border space-x-4'>
                  <div className='w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#9678EF]'></div>
                  <h3 className="text-lg md:text-3xl font-bold text-[#2B2B2B]">
                    Velodrome
                  </h3>
                  <FiCheckCircle className='text-[#9678EF]' size={30} />
                </div>
                </div>
                <div className='flex items-center justify-center flex-col w-full text-center space-y-2'>
                  <h5 className="text-[#2B2B2B] font-medium">
                    Ticket price
                  </h5>
                  <div className='flex items-center justify-center space-x-2'>
                    <h5 className="text-[#2B2B2B] text-3xl font-bold">
                      0.01
                    </h5>
                    <Image src={optimism} width={32} height={32} alt='optimism' />
                  </div>
                </div>
            </div>
            <div className='flex items-center justify-center w-full text-center space-y-2'>
              <div className='w-full'>
                <div className='flex flex-col md:flex-row items-center justify-center w-full text-center space-x-2'>
                  <div className='bg-[#9678EF] shadow-lg rounded-md text-white py-2 pr-16 pl-4'>
                    <span className='font-bold'>Raffle ID</span>
                    <div className='flex items-center space-x-2'>
                      <span className='font-bold text-xl'>{raffleid}</span>
                      <FaCheckCircle className='text-white' size={20} />
                    </div>
                  </div>
                  <div className='bg-[#9678EF] shadow-lg rounded-md text-white py-2 pr-16 pl-4'>
                    <span className='font-bold'>Your txs</span>
                    <div className='flex items-center space-x-2'>
                      <span className='font-bold text-xl'>{entrylist}</span>
                      <FaUser className='text-white' size={20} />
                    </div>
                  </div>
                  </div>
                <p className='text-[#2B2B2B] font-semibold'>Owned by: <span className='text-[#9678EF] font-medium'>{address && shortenAddress(raffleOwner as string)}</span></p>
              </div>
              <div className='w-full'>
                <p>entries end in </p>
              <div className='flex flex-col md:flex-row items-center justify-center w-full text-center space-x-4'>
                {/* buy now button */}
                  <button className='bg-[#9678EF] shadow-lg rounded-md text-white py-4 px-8 hover:cursor-pointer font-bold'
                    disabled={!write} onClick={() => write?.()}
                  >
                    Buy now
                  </button>
                  {/* big + button */}
                  <button className='bg-white text-[#9678EF] border-2 border-[#9678EF] rounded-lg px-8 py-4 font-bold'>
                    +
                  </button>
                </div>
              </div>
                </div>
          </div>
        </div>
        <div className='w-full my-12'>
        <Image src="https://nftstorage.link/ipfs/bafybeig4evisdhwt4z3domrjk37zniirm3k3cxfjqfp3j3vaskzjzppahq" width={1000} height={1000} alt='hello' />
        </div>
    </div>
  )
}

export default RafflePage