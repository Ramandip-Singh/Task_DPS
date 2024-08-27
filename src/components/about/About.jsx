import React, { useState } from 'react';

const About = () => {
 
  return (
    <div className='w-full flex flex-col md:flex-row justify-center items-center ps-[32px] py-[32px] bg-[#F9F9F9]'>
      <div className='w-[100%] sm:[80%] md:w-[60%] flex items-center justify-center  p-[0px] sm:p-[16px]'>
      <div className='w-[100%]  md:w-[80%] lg:w-[65%] flex-col gap-1 items-center justify-end'>
        <span className="block text-[20px] sm:text-[28px] text-[#000000] font-['Kameron'] font-semibold">DPS, Yamuna Nagar</span>
        <span className="block text-[20px] sm:text-[28px] text-[#000000] font-['Kameron'] font-semibold"> The Best CBSE Boarding School in North India</span>
        <p className="text-[16px] font-['inter'] text-balance mb-4">
        The environment at DPS Yamuna Nagar, one of the best boarding schools in Haryana, is highly nurturing, caring and aims towards providing every child with the opportunities to develop their talents as well as achieve their full academic potential. Our objective at the day boarding school is to make students’ life fun, safe, and rewarding, and help them achieve independence and maturity. We take great pride in providing the best amenities to all our students. We focus on every element required for the holistic growth of our wards.
        </p>
        <p className="text-[16px] font-['inter']  text-balance">
        Teachers at the day boarding school in Yamuna Nagar take 100% responsibility for the holistic development of children. Our landmark day boarding school provides unmatched ambiance and a highly motiving learning environment to the students. Besides providing high-quality education, we focus on the overall growth and development of the students. Students from different backgrounds and cultures come together and thrive as their differences are embraced and celebrated by our vibrant community of boarders. The school offers boarding facilities to students from multiple nationalities, making it one of the best residential schools in India. <span className='inline-block text-[16px] text-[#014828] font-bold cursor-pointer'>Read More</span>
        </p>
      </div>
      </div>
     
      <div className='w-[100%] h-[360px] sm:w-[35%] relative px-0 sm:px-[32px] py-0 sm:py-[24px] ml-auto self-start '>
        <div className='absolute top-[40px] w-[160px] h-[160px] bg-[#FFBB04] rounded-xl'></div>
        <div className="absolute top-[80px] left-[30px] sm:left-[60px] w-[220px] sm:w-[320px] h-[180px] sm:h-[240px]  rounded-xl z-10">
          <img src='header_img.png' alt='img' className='rounded-xl object-fit overflow-hidden w-full h-full'/>
        </div>
        <div className='absolute top-[120px] left-[160px] w-[320px] h-[200px] sm:h-[260px] bg-[#014828] rounded-xl z-5'></div>
      </div>
    </div>
  );
};

export default About;