import React, { useState } from 'react';

const About = () => {
 
  return (
    <div className='w-full h-[480px] flex flex-row justify-center items-center ps-[32px] py-[32px] bg-[#F9F9F9]'>
      <div className='w-[50%] flex-col gap-1 items-center justify-center ps-[32px]'>
        <span className="block text-[28px] text-[#000000] font-['Kameron'] font-semibold">DPS, Yamuna Nagar</span>
        <span className="block text-[28px] text-[#000000] font-['Kameron']"> The Best CBSE Boarding School in North India</span>
        <p className="text-[16px] font-['inter'] text-balance mb-4">
        The environment at DPS Yamuna Nagar, one of the best boarding schools in Haryana, is highly nurturing, caring and aims towards providing every child with the opportunities to develop their talents as well as achieve their full academic potential. Our objective at the day boarding school is to make students’ life fun, safe, and rewarding, and help them achieve independence and maturity. We take great pride in providing the best amenities to all our students. We focus on every element required for the holistic growth of our wards.
        </p>
        <p className="text-[16px] font-['inter']  text-balance">
        Teachers at the day boarding school in Yamuna Nagar take 100% responsibility for the holistic development of children. Our landmark day boarding school provides unmatched ambiance and a highly motiving learning environment to the students. Besides providing high-quality education, we focus on the overall growth and development of the students. Students from different backgrounds and cultures come together and thrive as their differences are embraced and celebrated by our vibrant community of boarders. The school offers boarding facilities to students from multiple nationalities, making it one of the best residential schools in India. Read More
        </p>
      </div>
      <div className='w-[35%] relative px-[32px] py-[24px] ml-auto self-start '>
        <div className='absolute top-[40px] w-[160px] h-[160px] bg-[#FFBB04] rounded-xl'></div>
        <div className="absolute top-[80px] left-[60px] w-[320px] h-[240px]  rounded-xl z-10">
          <img src='header_img.png' alt='img' className='rounded-xl object-fit overflow-hidden w-full h-full'/>
        </div>
        <div className='absolute top-[120px] left-[160px] w-[320px] h-[260px] bg-[#014828] rounded-xl z-5'></div>
      </div>
    </div>
  );
};

export default About;