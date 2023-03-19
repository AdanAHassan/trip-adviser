 const GetOutThere = () => {
  return (
    <div class="relative w-80 h-80 m-auto mt-10 md:w-[100%] flex flex-row md:h-56">
        <div class="w-full h-full brightness-50 md:brightness-100 md:w-1/2 md:ml-auto">
            <img class="w-full h-full object-cover" src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/f7/1d/4d/caption.jpg?w=1000&h=-1&s=1" alt="room with checkered floor"/>
        </div>
        <div>
            <img class="absolute right-4 bottom-4 w-28 z-30" src="https://static.tacdn.com/img2/fallback_ads/tc-badge.png" alt="traveler's choice badge"/>
            
        </div>
        <div class="absolute inset-x-0 bottom-0 flex flex-col pl-8 pr-12 md:pr-4 pb-8 w-full pb-4 items-start h-full text-white text-start justify-end gap-6 md:w-1/2  md:bg-red-100/60">
            <div class="w-3/5 md:hidden">
            <img 
                
                src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_lockup_horizontal_tertiary_on_dark.svg" alt="TripAdvisor" />
            </div>
            <div class="justify-around">
                <h2 class="text-3xl font-medium md:text-black pb-2">Get out there</h2>
                <p class="text-md font-light text-white w-full md:text-black">Best of the Best tours, attractions & activities you won&#39;t want to miss.</p>
            </div>
            <div>
                <button class="rounded-full text-base bg-white md:bg-black text-black md:text-white px-6 py-3.5 leading-5 no-underline hover:opacity-90 transition duration-200 ease-in-out">See the list</button>
            </div>
        </div>
    </div>
  )
}

export default GetOutThere

