import React from 'react'
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { LuMapPin } from "react-icons/lu";
import { IoMdMail } from "react-icons/io";
import { MdLocalPhone } from "react-icons/md";
import { AiOutlineGlobal } from "react-icons/ai";
import { LiaFacebook } from "react-icons/lia";
import { FaInstagram } from "react-icons/fa6";
import { FiYoutube } from "react-icons/fi";
import { TiSocialLinkedinCircular } from "react-icons/ti";
const Footer = () => {
  return (
    <div className='flex flex-col w-full h-full self-end'>
        <div className='flex flex-col md:flex-row w-full h-[90%]  order-1'>
        <div className='w-[100%] md:w-[33%] bg-[#014828] flex flex-col justify-center items-center order-2 md:order-1 p-[4px]'>
           <span className='block text-[20px] text-white'>Quick Links</span>
           <ul className='p-[16px]'>
              <li className='text-white flex  items-center'><MdKeyboardDoubleArrowRight size={16} className='color-white' /><a href='#'>Admission</a></li>
              <li className='text-white flex  items-center'><MdKeyboardDoubleArrowRight size={16} className='color-white' /><a href='#'>Hostel Facilities</a></li>
              <li className='text-white flex  items-center'><MdKeyboardDoubleArrowRight size={16} className='color-white' /><a href='#'>Jobs and Careers</a></li>
              <li className='text-white flex items-center'><MdKeyboardDoubleArrowRight size={16} className='color-white' /><a href='#'>CBSE Mandatory Disclosure</a></li>
              <li className='text-white flex  items-center'><MdKeyboardDoubleArrowRight size={16} className='color-white' /><a href='#'>Alumni Portal</a></li>
              <li className='text-white flex  items-center'><MdKeyboardDoubleArrowRight size={16} className='color-white' /><a href='#'>Privacy Policy</a></li>
              <li className='text-white flex  items-center'><MdKeyboardDoubleArrowRight size={16} className='color-white' /><a href='#'>Reach Us</a></li>
           </ul>
        </div>
        <div className='w-[100%] md:w-[33%] bg-[#00351D] flex flex-col justify-center items-center gap-4 order-1 md:order-2 p-[4px]'>
            <div className='w-[200px] h-[40px]'>
                <img src={'dps-footer.png'} alt='footer-image'/>
            </div>
            <p className='text-balance text-white m-0 text-center '>Delhi Public School Yamunanagar under the aegis of Delhi Public School Society, Delhi believes that quality education is about possibilities. We at DPS-YNR view education as a process which takes along students, educators and parents on an inviting journey - exploring the worlds of intellectual, emotional and spiritual learning.</p>
            <div className='flex justify-center items-center gap-2 mt-4'>
            <LiaFacebook size={24} color='#FFBB04'/>
            <FaInstagram size={20} color='#FFBB04'/>
            <FiYoutube size={24} color='#FFBB04'/>
            <TiSocialLinkedinCircular size={28} color='#FFBB04'/>
            </div>
        </div>
        <div className='w-[100%] md:w-[33%] bg-[#014828] flex flex-col justify-center items-center  order-3 md:order-3 p-[4px]'>
        <span className='block text-[20px] text-white'>Contact Us</span>
           <ul className='p-[32px]'>
              <li className='text-white flex  items-center gap-2'><LuMapPin size={48} color='#FFBB04' /><span className='inline-block text-balance'>Delhi Public School Yamuna NagarVill. Bhambholi, 9 Km Milestone,Jagadhri – Ambala Road, Opposite Power Grid Station Jagadhri, District Yamuna Nagar, Pin – 133103 Haryana (INDIA)</span></li>
              <li className='text-white flex  items-center gap-2'><IoMdMail size={16} color='#FFBB04' /><span >info@dpsyamunanagar.com</span></li>
              <li className='text-white flex  items-center gap-2 '><MdLocalPhone size={16} color='#FFBB04' /><span >1800-8911-007</span></li>
              <li className='text-white flex items-center gap-2'><AiOutlineGlobal size={16} color='#FFBB04' /><span >www.dpsyamunanagar.com</span></li>
              
           </ul>
        </div>
        </div>
        <div className='w-full flex justify-center items-center h-[5%]  bg-[#FFBB04] order-2 self-end'>
             <span className='text-center text-[#014828]'>© 2024-2025 Delhi Public School, Yamuna Nagar</span>
        </div>
    </div>
  )
}

export default Footer