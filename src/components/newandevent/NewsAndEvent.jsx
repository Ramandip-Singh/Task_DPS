import React from 'react'
import { MdArrowRightAlt } from "react-icons/md";
import {eventData} from '../../../data/data'
const NewsAndEvent = () => {
  
  return (
    <div className='w-full h-[500px] flex flex-row gap-2 p-[48px]'>
        <div className='w-[35%] flex flex-col gap-2'>
              <span className="block text-[16px] font-['Kameron'] font-bold">Discover the Best Co-ed CBSE Schoo</span>
        <div className='w-[80%] rounded-l-lg'>
          <img src='360_tour.png' alt='360Img' className='object-cover h-full w-full'/>
       </div>
        </div>
        <div className="w-[60%] flex flex-col gap-2">
  <span className="block text-[16px] font-['Kameron'] font-bold">News and Events</span>
  <div className="w-full flex flex-wrap gap-4 mt-4">
    {eventData.map((event, index) => (
      <div key={index} className="flex rounded-lg gap-4 w-[calc(50%-0.5rem)] h-[120px] bg-white shadow-md rounded-xl overflow-hidden">
        <div className="w-[40%] h-full rounded-l-lg overflow-hidden">
          <img src={event.img} alt={event.title} className="w-full h-full object-cover" />
        </div>
        <div className="w-[60%] flex flex-col justify-center items-center rounded-r-lg">
          <span className="block text-[16px] font-['Kameron'] font-bold">{event.title}</span>
          <p className="text-balance text-[12px]">{event.description}</p>
        </div>
      </div>
    ))}
  </div>
  <div className='flex gap-2 items-center cursor-pointer'>
    <span className='inline-block text-[16px] text-[#014828] font-bold'>Read More</span>
    <MdArrowRightAlt  size={24} color='#FFBB04'/>
  </div>
       </div>
    </div>
  )
}

export default NewsAndEvent