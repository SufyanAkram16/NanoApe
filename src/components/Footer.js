import React from 'react'
import tg from '../assets/icons/telegram-svgrepo-com.svg'
import tw from '../assets/icons/twitter-circle-blue-logo-16617.svg'
import logo from '../assets/logo/apeblack.png'
export default function Footer() {
  return (
    <>
      <div className=" text-black  md:felx-row flex-col items-center justify-between py-6">
        <div className='flex items-center justify-around md:flex-row  flex-col md:space-y-0 space-y-5 mb-5'> 
          <span className='flex flex-row flex-wrap items-center justify-center'><img src={logo} alt="" className='w-20 mr-5' /><p className='font-bold text-[24px]'>Nano Ape</p></span>
            <p className='font-bold text-[16px]'>Follow for more
              <ul className="flex items-center justify-center space-x-2">
                <li>
                  <a href="https://twitter.com/NanoApeBSC" ><img src={tw} alt="" className='w-6' /></a>
                </li>
                <li>
                  <a href="https://t.me/nanoapebsc"><img src={tg} alt="" className='w-6' /></a>
                </li>
              </ul>
            </p>
        </div>
        <hr class="my-6 border-gray-700 lg:my-8" />
        <span className="block text-center text-sm ">© 2023 <a href="#0" className="hover:underline">Nano Ape</a>. All Rights Reserved.</span>
      </div>
    </>
  )
}
