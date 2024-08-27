import React from 'react';
import { Card, CardContent } from "../../../@/components/ui/card";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import '../../../src/App.css'
import {beyondClassData} from '../../../data/data'
const BeyondClassroom = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
      partialVisibilityGutter: 40,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      partialVisibilityGutter: 40,
    },
    tablet: {
      breakpoint: { max: 1024, min: 512 },
      items: 2,
      partialVisibilityGutter: 30,
    },
    mobile: {
      breakpoint: { max: 512, min: 0 },
      items: 1,
      partialVisibilityGutter: 30,
      infinite: true,
    },
   
  };
 

  return (
    <div className='flex w-full flex-col h-[500px] bg-[#014828] py-[32px]'>
      <h1 className='self-center text-white text-2xl font-bold mb-4'>Beyond Classroom</h1>
      <div className='w-[80%] self-center' >
        <Carousel
            responsive={responsive}
            additionalTransfrom={0}
  arrows
  autoPlaySpeed={3000}
  centerMode={false}
  containerClass="container"
  draggable
  focusOnSelect={false}
  infinite={true}
  minimumTouchDrag={80}
  showDots={false}
  slidesToSlide={1}
  swipeable
  partialVisible={true}
  className='flex gap-2 w-[100%]'
          >
          {beyondClassData.map((item, index) => (
              <Card className='w-[100%] sm:w-[320px] h-[300px] border-none ' key={index} >
                <CardContent className="flex flex-col w-[full] h-[100%] items-center justify-center rounded-xl overflow-hidden p-6">
                  <img src={item.image} alt={item.title} className='object-content w-full h-40' />
                  <div className='flex flex-col bg-white gap-2 w-full grow-1'>
                    <span className="block text-[18px] font-semibold self-center">{item.title}</span>
                     <span className="block text-[16px] text-center self-center ">{item.description}</span>
                  </div>
                
                </CardContent>
              </Card>
          
          ))}
       
        
      </Carousel>
      </div>
     
    </div>
  );
}

export default BeyondClassroom;