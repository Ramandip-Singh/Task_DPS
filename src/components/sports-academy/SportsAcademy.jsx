import React from 'react'

const SportsAcademy = () => {
  return (
    <div className='w-full h-[540px] flex flex-col gap-4 py-[32px] bg-[#FFBB04]'>
        <span className=" self-center block  text-[32px] font-bold font-['Kameron'] ">Rohit Sharma Academy at DPS, Yamuna Nagar</span>
        <div className='w-full flex flex-row gap-4 self-center justify-center'>
            <div className="w-[35%] h-[400px] rounded-xl overflow-hidden "  >
                <img src='academyImg1.png' alt='img1' className='object-cover h-full w-full'/>
            </div>
           
            <div className='w-[35%]'>
               <p className='text-balance'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
               </p>
            </div>
            <div className="w-[15%] h-[400px] rounded-xl overflow-hidden"  >
                <img src='academyImg2.png' alt='img1' className='object-cover h-full w-full '/>
            </div>
        </div>

    </div>
  )
}

export default SportsAcademy