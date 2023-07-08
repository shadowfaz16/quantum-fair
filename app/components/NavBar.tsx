import React from 'react'
import logo from '../../public/logo.svg'
import Image from 'next/image'


type Props = {}

const NavBar = (props: Props) => {
  return (
    // navbar with logo, menu, search bar, and button to get started.
    <div className="flex w-full justify-between py-4 items-center px-10 border-b sticky top-0 bg-white">
        <div className="logo">
            <Image src={logo} alt="logo" width={170} height={170} />
        </div>
        <div className='flex space-x-16 items-center'>
            <div className="search">
                  <input type="text" placeholder="Search for collections and accounts" className='bg-[#EAE3F8] text-[#A274FF] placeholder:text-[#A274FF] border border-[#5F27CB] rounded-full w-96 px-4 py-2 text-sm' />
            </div>
            <div className="menu">
                <ul className='flex space-x-11 text-[#5F27CB] font-semibold -ml-4'>
                    <li className='hover:cursor-pointer'>Explore</li>
                    <li className='hover:cursor-pointer'>Stats</li>
                    <li className='hover:cursor-pointer'>Bridge</li>
                    <li className='hover:cursor-pointer'>My raffles</li>
                </ul>
            </div>
            <div className="button">
                <button className='bg-[#9678EF] text-white py-2 px-8 text-sm font-semibold rounded-lg'>Connect wallet</button>
            </div>
        </div>
    </div>
  )
}

export default NavBar