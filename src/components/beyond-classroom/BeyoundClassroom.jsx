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
      partialVisibilityGutter: 10,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      partialVisibilityGutter: 10,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
      partialVisibilityGutter: 10,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
      partialVisibilityGutter: 10,
      infinite: true,
    },
  };
 

  return (
    <div className='flex w-full flex-col h-[500px] bg-[#014828] py-[32px]'>
      <h1 className='self-center text-white text-2xl font-bold mb-4'>Beyond Classroom</h1>
      <div className='w-[80%] self-center ' >
        <Carousel
            responsive={responsive}
            swipeable={true}
            draggable={true}
            arrows={true}
            infinite={false}
            autoPlay={false}
            containerClass="carousel-testimonial-container"
            itemClass="carousel-item-padding-40px py-10 "
            dotListClass="carousel-testimonial-dots"
            partialVisible={true}
          >
       
          {beyondClassData.map((item, index) => (
           
              <Card className='w-[300px] min-h-[280px] border-none ' key={index} >
                <CardContent className="flex flex-col w-[full] h-[100%] items-center justify-center rounded-xl overflow-hidden  p-6">
                  <img src={item.image} alt={item.title} className='object-cover w-full h-40' />
                  <div className='flex flex-col bg-white gap-2 w-full '>
                    <span className="block text-[18px] font-semibold self-center">{item.title}</span>
                     <span className="block text-[16px] text-center self-center grow">{item.description}</span>
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