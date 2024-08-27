import React from 'react'
import {categoryData} from '../../../data/data'
const Header = () => {

  return (
    <div className=" w-full  bg-cover bg-center h-[600px] sm:h-[720px] relative grow-1 " style={{backgroundImage:'url(header_img.png)'}}>
        <div className="absolute inset-0 bg-gradient-to-b from-[#D9D9D9]/20 to-[#1D1D1D]/50"></div>
       <div className='h-[80px] w-[300px] sm:w-[400px] ms-[16px] absolute top-[40px] left-[0px] sm:left-[200px]'>
          <img src={'logo.png'} alt='logo' className='object-fit: cover'/>
       </div>
       <div className='text-center text-[#ffffff] absolute top-[30%] left-1/2 transform -translate-x-1/2 -translate-y-[30%] z-20'>
          <span className="block text-[20px] sm:text-[28px] font-['inter'] font-bold ">Bringing</span>
          <span className="block text-[20px] sm:text-[28px] font-['inter'] font-bold">Excellence to Students</span>
        </div>
       <div className='w-full h-[120px]  bg-[#014828] absolute top-[500px] sm:top-[600px] flex justify-around items-center'>
        {categoryData.map((item,index)=>{
          return (
            <div key={index} className='h-[100px] w-[120px] flex flex-col justify-center items-center'> 
               <span className="block text-[20px] sm:text-[28px] text-[#ffffff] font-['inter'] font-semibold border-b-2 border-white-400">{item.quantity}</span>
               <span className="block text-[12px] sm:text-[14px] text-[#ffffff] font-['inter'] ">{item.category}</span>
            </div>
          )
        })}
       </div>
    </div>
  )
}

export default Header