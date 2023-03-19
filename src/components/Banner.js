import React from 'react'

const Banner = () => {
  //  (image width of banner should be 3/8 in mobile)
  return (
    <div class="bg-red-200 flex h-20 md:h-40 justify-between top-0">
        <div class="content flex flex-0 flex-col justify-around items-start md:mx-5 md:my-3 px-2.5 py-2 gap-1 items-start">
          <div class="one">
            <button class="md:rounded md:uppercase md:bg-black md:text-white text-xs md:px-2 md:py-0.5 font-medium leading-5" style={{
              lineHeight: "14px",
              fontSize: "10px"
            }}>Sponsored by Visit Lake Tahoe</button>
          </div>
          <div class="two">
            <h2 class="font-bold text-sm md:text-2xl">Discover Lake Tahoe (California)</h2>
          </div>
          <div class="three pb-2 hidden md:flex">
            <p class="text-base leading-5 font-thin truncate">Find out why travellers like you are raving about Lake Tahoe (California)</p>
          </div>
          <div class="">
            <button class="md:rounded-full text-xs md:bg-black md:text-white md:text-base md:px-6 md:py-3.5 md:leading-5 underline md:no-underline">Explore now</button>
            
          </div>
        </div>
        <div class="flex justify-end content-end w-1/3">
          <img 
            class="object-cover w-full object-center md:w-[339px]"
            src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/48/a6/40/caption.jpg?w=500&h=-1&s=1" 
            alt=""
          />
        </div>
    </div>
  )
}

export default Banner
