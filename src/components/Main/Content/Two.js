import React from 'react'

const Two = () => {
  return (
    <div class="flex flex-col gap-8 w-full bg-white justify-end">
        <div class="flex flex-col items-start gap-2 pl-6 xl:pl-0 h-40 justify-end">
            <h1 class="text-left text-3xl text-black font-medium flex-end">Where to go, right now </h1>
            <p class="text-xl font-light">Spots at the top of travellers&apos; must-go lists</p>
        </div>
        <div class="flex flex-row flex-nowrap overflow-auto gap-4 w-full pl-6 xl:pl-0 ">
            <div class="min-w-[calc(100%/2)] md:min-w-[calc(100%/3)] lg:min-w-[calc(25%)] xl:min-w-[calc(25%-6px)] relative">
                <div>
                    <img class="w-full h-full" src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/27/79/11/8c/caption.jpg?w=300&h=-1&s=1"/>
                </div>
                <div class="absolute inset-x-0 bottom-0 flex flex-col pl-4 pr-8 w-full bg-gradient-to-t from-black/80 h-1/3 pb-4 items-start justify-end">
                    <h1 class="text-left text-2xl text-white font-bold flex-end">Riviera Maya</h1>
                </div>
            </div>
            <div class="min-w-[calc(100%/2)] md:min-w-[calc(100%/3)] lg:min-w-[calc(25%)] xl:min-w-[calc(25%-6px)] relative">
                <div>
                    <img class="w-full h-full" src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/27/79/11/ad/caption.jpg?w=300&h=-1&s=1"/>
                </div>
                <div class="absolute inset-x-0 bottom-0 flex flex-col pl-4 pr-8 w-full bg-gradient-to-t from-black/80 h-1/3 pb-4 items-start justify-end">
                    <h1 class="text-left text-2xl text-white font-bold flex-end">Reykjavik</h1>
                </div>
            </div>
            <div class="min-w-[calc(100%/2)] md:min-w-[calc(100%/3)] lg:min-w-[calc(25%)] xl:min-w-[calc(25%-6px)] relative">
                <div>
                    <img class="w-full h-full" src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/27/79/11/c5/caption.jpg?w=300&h=-1&s=1"/>
                </div>
                <div class="absolute inset-x-0 bottom-0 flex flex-col pl-4 pr-8 w-full bg-gradient-to-t from-black/80 h-1/3 pb-4 items-start justify-end">
                    <h1 class="text-left text-2xl text-white font-bold flex-end">Sydney</h1>
                </div>
            </div>
            <div class="min-w-[calc(100%/2)] md:min-w-[calc(100%/3)] lg:min-w-[calc(25%)] xl:min-w-[calc(25%-6px)] relative">
                <div>
                    <img class="w-full h-full" src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/27/79/11/e8/caption.jpg?w=300&h=-1&s=1"/>
                </div>
                <div class="absolute inset-x-0 bottom-0 flex flex-col pl-4 pr-8 w-full bg-gradient-to-t from-black/80 h-1/3 pb-4 items-start justify-end">
                    <h1 class="text-left text-2xl font-bold text-white">Grand Canyon National Park</h1>
                </div>
            </div>
            <div class="min-w-[calc(100%/2)] md:min-w-[calc(100%/3)] lg:min-w-[calc(25%)] xl:min-w-[calc(25%-6px)] relative">
                <div>
                    <img class="w-full h-full" src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/27/79/12/05/caption.jpg?w=300&h=-1&s=1"/>
                </div>
                <div class="absolute inset-x-0 bottom-0 flex flex-col pl-4 pr-8 w-full bg-gradient-to-t from-black/80 h-1/3 pb-4 items-start justify-end">
                    <h1 class="text-left text-2xl text-white font-bold flex-end">St. Thomas</h1>
                </div>
            </div>
            <div class="min-w-[calc(100%/2)] md:min-w-[calc(100%/3)] lg:min-w-[calc(25%)] xl:min-w-[calc(25%-6px)] relative">
                <div>
                    <img class="w-full h-full" src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/27/79/12/10/caption.jpg?w=300&h=-1&s=1"/>
                </div>
                <div class="absolute inset-x-0 bottom-0 flex flex-col pl-4 pr-8 w-full bg-gradient-to-t from-black/80 h-1/3 pb-4 items-start justify-end">
                    <h1 class="text-left text-2xl text-white font-bold flex-end">Tokyo</h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Two

// 2

// md 3 + some bits 

// lg 4 + some bits

// xl 4

// 2xl 







































