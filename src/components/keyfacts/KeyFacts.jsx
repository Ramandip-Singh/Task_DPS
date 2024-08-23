import React from 'react';
import {keyData} from '../../../data/data'
const KeyFacts = () => {


  return (
    <div className="relative w-full h-[720px] max-h-[920px] bg-cover bg-center bg-[url('header_bg_img.png')]">
      <div className="absolute inset-0 bg-gradient-to-b from-[#7F007F] to-[#670066] opacity-90"></div>
      <div className="absolute inset-0 z-10 w-full flex justify-around items-center gap-4 p-[32px]">
        <div className="w-[50%] flex justify-center ">
            <div className='w-[60%] h-[90%] relative flex justify-center rounded-xl overflow-hidden'>
            <img src='whydps.jpeg' alt='dps-image' className='rounded-lg'/>
            <span className="block absolute top-[25px] text-[32px] text-white  font-['Kameron]">Why DPS?</span>
            </div>
        </div>
        <div className="w-[50%] flex flex-wrap gap-4 ">
          {keyData.map((item, index) => (
            <div key={index} className="w-[40%] h-[140px] flex flex-col gap-2 justify-center items-center p-4 bg-white cursor-pointer rounded-xl overflow-hidden">
              <div className="h-[40px] w-[40px] mb-2 ">
                <img src={item.icon} alt="icon" className="w-full h-full object-cover fill-current text-[#FFBB04]" />
              </div>
              <span className="block text-[16px] font-semibold text-center">{item.title}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KeyFacts;

