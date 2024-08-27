import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import '../../../src/App.css'
import { TestimonialCard } from './TestimonialCard';
import {testimonialData} from '../../../data/data'
const Testimonial = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
      partialVisibilityGutter: 40,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      partialVisibilityGutter: 40,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
      partialVisibilityGutter: 30,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
      partialVisibilityGutter: 30,
      infinite: true,
    },
  };

  return (
    <div className='flex w-full flex-col  bg-[#ffffff] py-[32px]'>
      <h1 className='self-center text-2xl font-bold mb-4'>What Our Parents Says</h1>
      <div className='w-[80%] self-center ' >
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
       >
          {testimonialData.map((item, index) => (
            <React.Fragment key={index}>
               <TestimonialCard className='w-[360px] min-h-[280px]' data={item}/>
            </React.Fragment>
          

          ))}
      </Carousel>
      </div>
     
    </div>
  );
}

export default Testimonial;