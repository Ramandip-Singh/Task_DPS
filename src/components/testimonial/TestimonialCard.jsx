
export const TestimonialCard = ({data}) => {
  return (
    <div className="px-4 ">
      <div className="feedback-card relative p-5 bg-background2 rounded-xl py-12 text-left border-2 border-gray-50 shadow-lg shadow-zinc-400 bg-[#F9F9F9]">

        <img
          src={'quote.png'}
          className="w-[40px] h-[40px] absolute top-12 left-5"
          alt="icon"
        />
       
        <div className="viewer flex flex-col justify-center items-center w-full gap-4 align-center -mt-5 md:mt-0">
          <img src={data.image} className="rounded-full w-6 h-6 md:w-14 md:h-14" alt="viewer" />
          <div className="flex flex-col items-end justify-start">
            <p className="font-semibold text-[8px] md:text-[16px]">
              {data.name }
            </p>
          
          </div>
        </div>
        <p className="text-zinc-700 mt-4 mb-16 text-xs md:text-sm lg:text-[16px] line-clamp-6">
          {data.review}
        </p>
      </div>
    </div>
  );
};