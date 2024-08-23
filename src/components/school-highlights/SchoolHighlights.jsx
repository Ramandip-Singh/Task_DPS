import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
const SchoolHighlights = () => {
  return (
    <div className='flex w-full flex-col  gap-4 h-[600px] bg-[#F9F9F9] p-[32px]'>
        <div className='flex justify-between self-center w-[80%]'>
            <span className='inline-block text-[32px]'>School Highlights</span>
            <button className='flex w-[120px] justify-center items-center gap-1 h-[40px] border rounded-full p-[4px] text-[14px] text-white bg-[#014828]'>
                <span className='inline-block'>Full Gallary</span> 
                <IoIosArrowForward size={20} />
            </button>
        </div>
        <div className='flex gap-6 w-[80%] h-[80%] self-center' style={{ backgroundColor: 'rgba(255, 187, 4, 0.2)' }}>
        <div className='flex flex-col gap-4'>
    <div className='flex flex-row gap-4'>
        <div className='w-[600px] h-[205px] rounded-xl overflow-hidden'>
            <img src={'s1.png'} alt='s1' className='object-cover w-full h-full'/>
        </div>
        <div className='w-[200px] h-[205px] rounded-xl overflow-hidden'>
            <img src={'s2.png'} alt='s2' className='object-cover w-full h-full'/>
        </div>
    </div>
    <div className='flex flex-row gap-4'>
        <div className='w-[200px] h-[205px] rounded-xl overflow-hidden'>
            <img src={'s4.png'} alt='s4' className='object-cover w-full h-full'/>
        </div>
        <div className='w-[600px] h-[205px] rounded-xl overflow-hidden'>
            <img src={'s5.png'} alt='s5' className='object-cover w-full h-full'/>
        </div>
    </div>
</div>
           
            <div className='w-[320px] h-[426px] rounded-xl overflow-hidden'>
                <img src={'s3.png'} alt='s3' className='object-cover w-full h-full'/>
            </div>
           
        </div>
    </div>
  )
}

export default SchoolHighlights