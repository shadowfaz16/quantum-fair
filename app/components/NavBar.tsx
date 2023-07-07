import React from 'react'
import logo from '../../public/logo.svg'

type Props = {}

const NavBar = (props: Props) => {
  return (
    // navbar with logo, menu, search bar, and button to get started.
    <div className="flex w-full justify-between h-16 items-center px-10 border-b">
        <div className="logo">
            <img src={logo} alt="logo" />
        </div>
        <div className="search">
            <input type="text" placeholder="Search..." />
        </div>
        <div className="menu">
            <ul className='flex space-x-11 text-[#5F27CB] font-semibold'>
                <li>Explore</li>
                <li>Stats</li>
                <li>Bridge</li>
                <li>My raffles</li>
            </ul>
        </div>
        <div className="button">
              <button className='bg-[#9678EF] rounded text-white p-1'>Connect wallet</button>
        </div>
    </div>
  )
}

export default NavBar