import { useState } from "react"


const Vision = () => {
   const [isHovered,setIsHovered] = useState(false)
  return (
    <div className='w-full  flex flex-col gap-4 py-[32px] px-[8px] sm:px-0' style={{ backgroundColor: 'rgba(1, 72, 40, 0.15)' }}>
      
        <span className=" self-center block text-[24px]  sm:text-[32px] font-bold font-['Kameron'] ">DPS- Where Education Meets Inspiration</span>
        <div className='w-full  flex  flex-col md:flex-row gap-4 self-center justify-center'>
            <div className="w-[100%] md:w-[18%] relative flex h-[200px] sm:h-[300px] md:h-[400px]  bg-cover bg-center hover:${}" style={{backgroundImage: 'url(vision1.png)'}}  onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} >
               {isHovered && <div className="absolute inset-0 bg-gradient-to-b from-[#014828] to-[#014828] opacity-80"></div>}
               {isHovered && <div className='z-10 w-[80%] flex justify-center mt-8 ps-[16px]'>
                  <p className='text balance text-white  '>We aim towards being a center of excellence in education by educating our privileged youth in the essence of enlightened leadership and citizenship.</p>
               </div>}
               <div className='w-[20%] ms-auto flex justify-end'>
                   <div className='w-[40px] h-[120px] bg-[#014828] flex justify-center items-center' >
                      <span className ="text-white font-bold font-['Kameron]" style={{ writingMode: 'vertical-rl', transform: 'rotate(360deg)' }}>OUR VISION</span>
                   </div>
               </div>
            </div>
            <div className="w-[100%] md:w-[18%] flex  h-[200px] sm:h-[300px] md:h-[400px]  bg-cover bg-center" style={{backgroundImage:'url(vision2.png)'}}>
               <div className='w-[20%] ms-auto flex justify-end'>
                   <div className='w-[40px] h-[120px] bg-[#014828] flex justify-center items-center'>
                      <span className ="text-white font-bold font-['Kameron]" style={{ writingMode: 'vertical-rl', transform: 'rotate(360deg)' }}>OUR VISION</span>
                   </div>
               </div>
            </div>
            <div className="w-[100%] md:w-[18%] flex  h-[200px] sm:h-[300px] md:h-[400px] bg-cover bg-center" style={{backgroundImage:'url(vision3.png)'}}>
               <div className='w-[20%] ms-auto flex justify-end'>
                   <div className='w-[40px] h-[120px] bg-[#014828] flex justify-center items-center'>
                      <span className ="text-white font-bold font-['Kameron]" style={{ writingMode: 'vertical-rl', transform: 'rotate(360deg)' }}>OUR VISION</span>
                   </div>
               </div>
            </div>
            <div className='w-[100%] md:w-[18%]'>
               <p className='text-balance '>DPS, Yamuna Nagar is deeply committed towards holistic education of the learners. Our focus not only in the development educational skills of the students but also their non-cognitive skills. The team at DPS, Yamuna Nagar comprises of well-qualified and experienced teachers and instructors supported by experienced administrative staff members. The school campus houses a well-equipped and technologically advanced academic wing, boarding houses, amply equipped sports amenities, medical facilities and state-of-the-art labs, spread over acres of campus, which are well-planned and constructed.
               </p>
            </div>

        </div>

    </div>
  )
}

export default Vision