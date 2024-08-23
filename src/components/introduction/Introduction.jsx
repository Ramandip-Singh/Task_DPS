

const Introduction = () => {
 

  return (
    <div className='w-full flex flex-col md:flex-row justify-center items-center ps-[32px] py-[32px] gap-2 bg-[#F9F9F9]'>
      <div className='w-[100%] md:w-[45%] flex-col gap-1 '>
        <span className="block text-[28px] text-[#000000] font-['Kameron'] font-semibold">Welcome To DPS Yamuna Nagar:</span>
        <span className="block text-[28px] text-[#000000] font-['Kameron']">The Best CBSE School In Haryana</span>
        <p className="text-[16px] font-['inter']  text-balance mb-4">
          Delhi Public School Yamuna Nagar, under the aegis of Delhi Public School Society, Delhi offers an inspiring, enriching, and inclusive academic environment to the students. As a school with a global perspective, we believe in honing the natural intellect, individual excellence, and the capacity for interdisciplinary collaboration in our students. We guide our learners to become confident and meticulous citizen-leaders, and encourage them to pursue their passion for growth in life. The school inspires and equips them to be risk-takers and explore new horizons. We pride ourselves on being one of the top CBSE schools in Yamuna Nagar, providing unique all-round education to our wards.
        </p>
        <p className="text-[16px] font-['inter'] text-balance">
          The school inculcates innovation and creativity in the students through holistic learning in state-of-the-art classrooms and labs. The sports academy is equipped with world-class infrastructure for multiple indoor and outdoor games. The students are trained under the guidance of national and international level coaches. We recognize that the knowledge, skills, and experience of our faculty members are significant for achieving our commitment to excellence. In our endeavor to provide the best educators and staff, we offer an outstanding work environment with excellent facilities that are as conducive for the staff as they are for the students by following valuable guidelines from the DPS Society. Read More
        </p>
      </div>
      <div className='w-[80%] md:w-[45%] bg-[#FFBB04] rounded-xl md:rounded-l-xl  overflow-hidden px-[32px] py-[24px] flex items-center  ml-0 md:ml-auto '>
        <div className='w-[80%] rounded-xl md:rounded-none  md:rounded-l-xl'>
            <iframe
              className="w-full h-[315px]"
              src="https://www.youtube.com/embed/qo9q4srz8vI"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
      
        </div>
      </div>
    </div>
  );
};

export default Introduction;

