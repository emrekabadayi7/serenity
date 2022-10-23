import React from 'react'
import Fade from "react-reveal/Fade"
import SerenityPNG from "./images/serenity.png"

export default function Navbar(){
return (
    <div className='-mt-[5px] bg-gradient-to-tr font-semibold items-center -mb-[8px] h-[120px] justify-center bg-gray-900'>
        <div className='text-3xl rounded-md border-y-4 justify-center left-0 flex w-full h-full'>
        <Fade bottom duration={4000}>
          <img className='absolute w-[300px] -top-[33px]' src={SerenityPNG} alt=""></img>
        </Fade>
      <button type="submit" className='md:ml-5 rounded-lg border duration-500 transition-all hover:text-purple-400 w-[90px] h-10 text-lg text-white hover:border-purple-400 border-fill absolute right-14 md:right-40 top-10'>Contact</button>
      <button type="submit" className='rounded-lg border transition-all duration-500 hover:text-purple-400 w-[90px] h-10 text-lg text-white hover:border-purple-400 border-fill absolute md:left-40 left-14 top-10'>About us</button>
        </div>
    </div>
  )
}
