
import {keyData} from '../../../data/data'
const KeyFacts = () => {


  return (
    <div className="relative w-full h-[900px] md:h-[720px] max-h-[920px] bg-cover bg-center " style={{backgroundImage:'url(header_img.png)'}}>
      <div className="absolute inset-0 bg-gradient-to-b from-[#7F007F] to-[#670066] opacity-90"></div>
      <div className="absolute inset-0 z-10 w-full h-[100%] flex flex-col md:flex-row justify-around items-center gap-4 p-[16px] sm:p-[32px]">
        <div className=" w-[100%] md:w-[50%] flex justify-center ">
            <div className='w-[80%] md:w-[60%] h-[240px] md:h-[600px] relative flex justify-center rounded-xl overflow-hidden'>
            <img src='whydps.jpeg' alt='dps-image' className='rounded-xl w-full object-cover'/>
            <span className="block absolute top-[25px] text-[24px] sm:text-[32px] text-white  font-['Kameron]">Why DPS?</span>
            </div>
        </div>
        <div className="w-[100%] md:w-[50%] flex flex-wrap justify-center gap-4 ">
          {keyData.map((item, index) => (
            <div key={index} className="w-[40%] md:w-[40%] h-[140px] md:h-[140px] flex flex-col gap-2 justify-center items-center p-4 bg-white cursor-pointer rounded-xl overflow-hidden">
              <div className=" h-[24px] md:h-[40px] w-[24px] md:w-[40px] mb-2 ">
                <img src={item.icon} alt="icon" className="w-full h-full object-cover fill-current text-[#FFBB04]" />
              </div>
              <span className="block text-[12px] md:text-[16px] font-semibold text-center">{item.title}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KeyFacts;

