import React from 'react';
import {ReactTyped} from "react-typed";

export const Hero = () => {
  return (
    <div className="relative h-screen bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)] flex items-center justify-center">
    <div className='w-full max-w-[800px] h-[345px] text-center mx-auto flex flex-col  items-centre sm:py-5'>
       <p className='text-[#00df9a] font-bold p-1 text-4xl'>LOST SOMETHING SPECIAL?</p>
       
       <p className='font-bold text-7xl p-2'>We've Found It!</p> 
       <div className='flex justify-center' >
       <p className='text-3xl font-bold '>Find your </p>
       <ReactTyped className='text-3xl font-bold pl-2 text-[#d704ea] ' strings={["keys,","wallet,","Mobile Phone,","earpods", "and more.."]}
                            typeSpeed={30}
                            backSpeed={50}
                            loop>
        </ReactTyped>
       </div>
      <p className='text-gray-500 font-bold text-2xl mx-auto mt-6'>Report your lost items and find what others have found.</p>
      <div className='flex justify-center'>
        <button className="bg-[#61d2ac] text-black font-semibold py-2 px-4 rounded-lg w-32 mt-5 hover:bg-[#d385df] transition-all">
          Explore
        </button> 
      </div>
    </div>
    <div className="absolute h-[375px] w-[750px] sm:w-[1500px] sm:h-[300px] rounded-[100%] bg-black left-1/2 -translate-x-1/2 border border-[#a57ad3] bg-[radial-gradient(closest-side,_#000_82%,_#9506EB)] top-[calc(100%-100px)]"></div>
    </div>
  )
}

export default Hero;