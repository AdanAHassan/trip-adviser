import React from 'react'

const One = () => {
  return (
    <div class="h-[500px] relative bg-no-repeat">
        <div class="">
            <img class="h-[500px] object-cover w-full object-center" src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/27/79/1c/09/caption.jpg?w=1200&h=1600&s=1" alt="Scuba diving at the beach"/>
        </div>
       
        <div class="absolute bottom-0 flex flex-col px-6 py-20 items-start w-full bg-gradient-to-t from-black/50 via-black/50 h-1/2 text-start justify-end pb-8">
            <h2 class="text-white text-[40px] font-bold leading-10">
                Plan your best trip ever
            </h2>
            <p class="text-white font-light text-lg pb-4">
                We’ve got everything you need to go big in 2023
            </p>
            <button class="rounded-full bg-white text-black text-base px-6 py-3.5 leading-5 no-underline hover:bg-slate-50 transition duration-200 ease-in-out">
                Explore now
            </button>
        </div>
    </div>
  )
}

export default One
