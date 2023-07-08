import Image from 'next/image'
import React from 'react'
import logo from "../../public/logo.svg"
import { FaTwitterSquare, FaDiscord } from "react-icons/fa"

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className='md:px-24 border-t md:py-8 bg-[#A7FFCA]'>
          <div className='border-b-2 border-[#D9D9D9] pb-8'>
            <div className='flex w-full justify-between'>
                <Image src={logo} alt="logo" width={170} height={170} />
                <h3 className='font-semibold'>Join the community</h3>
            </div>
            <div className='flex w-full justify-between pt-4'>
                <p>Discover, collect, and sell digital items on the<br /> largest Raffle marketplace on Optimism</p>
                <div className='flex items-center space-x-2'>
                    <FaTwitterSquare className='text-4xl' />
                    <FaDiscord className='text-4xl' />
                </div>
            </div>
        </div>
              <div className='flex w-full justify-between pt-6'>
                <p>• 2023 QF. All rights reserved</p>
                <div>
                    <ul className='flex space-x-4'>
                        <li>Help</li>
                        <li>Status</li>
                        <li>API</li>
                        <li>Brand</li>
                        <li>Terms</li>
                        <li>Privacy</li>
                    </ul>
                </div>
                </div>
    </div>
  )
}

export default Footer