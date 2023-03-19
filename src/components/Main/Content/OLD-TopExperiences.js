const TopExperience = ({topExperienceContent, topExperienceImage}) => {

    
  return (
      
        <div class="flex flex-col gap-4 w-full bg-white justify-end pt-0">
    {
          topExperienceContent.map((item) => (
                <div class="flex flex-col items-start gap-2 pl-6 xl:pl-0 h-28 justify-end">
                    <h1 class="text-left text-3xl text-black font-medium flex-end">{item.title}</h1>
                    <p class="text-xl font-light">{item.subtitle}</p>
                </div>
            ))
    }
        <div class="flex flex-row flex-nowrap overflow-auto scrollbar-hide gap-2 w-full pl-6 scroll-pl-6 snap-x xl:pl-0">
    {
        topExperienceImage.map((item) => (
            <div class="min-w-[calc(100%/1.5)] md:min-w-[calc(100%/3.2)] lg:min-w-[calc(25%)] xl:min-w-[calc(25%-6px)] relative hover:cursor-pointer snap-start">
                <div class="relative ">
                    <img class="w-full h-full hover:opacity-90 transition duration-200 ease-in-out " src={item.image} alt={item.header}/>
                    <div class="absolute top-2 right-2 bg-white rounded-full p-2 hover:bg-slate-100 z-100">
                        <svg viewBox="0 0 24 24" width="24px" height="24px">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.798 5.786A5.769 5.769 0 017.72 4.25c1.455 0 2.857.548 3.922 1.536l.005.005.341.322.332-.317a5.769 5.769 0 013.928-1.54c1.458 0 2.862.55 3.928 1.54l.004.004c1.093 1.032 1.599 2.324 1.569 3.662-.03 1.323-.578 2.643-1.5 3.785-.884 1.096-2.85 2.943-4.547 4.478a183.566 183.566 0 01-3.153 2.785l-.069.059-.489-.569.49.569-.486.416-.488-.412a101.98 101.98 0 01-7.75-7.288l-.021-.021-.02-.023c-1.725-2.115-2.203-5.32.08-7.453l.002-.002zm8.19 13.226a174.415 174.415 0 002.708-2.4c1.72-1.556 3.59-3.32 4.385-4.306.757-.939 1.148-1.948 1.168-2.877.02-.912-.313-1.795-1.097-2.536a4.269 4.269 0 00-2.904-1.138 4.269 4.269 0 00-2.903 1.136l-1.35 1.292-1.375-1.3a4.269 4.269 0 00-2.9-1.133 4.269 4.269 0 00-2.901 1.135c-1.507 1.408-1.353 3.659.042 5.385a100.45 100.45 0 007.127 6.742z"></path>
                        </svg>
                    </div>
                </div>
                <div class="flex flex-col w-full text-start gap-2 pt-2">
                    <div  class="flex flex-row items-start text-xs gap-2 font-medium">
                        {item.likely && 
                            <button class="uppercase rounded-md border-[1px] border-black px-2 py-0.5">likely to sell out</button>
                        }
                        {item.likely && 
                            <button class="uppercase rounded-md border-[1px] border-black px-2 py-0.5">best seller</button>
                        }
                    </div>
                    <h1 class="text-left text-lg text-black hover:underline font-medium">{item.header}</h1>
                    <div class="flex flex-row items-center gap-2">
                        <svg class="fill-green-600" viewBox="0 0 128 24" width="68px" height="12px">
                    {
                        item.score===5?
                        <>
                            <path d="M 12 0C5.388 0 0 5.388 0 12s5.388 12 12 12 12-5.38 12-12c0-6.612-5.38-12-12-12z" transform=""></path>
                            <path d="M 12 0C5.388 0 0 5.388 0 12s5.388 12 12 12 12-5.38 12-12c0-6.612-5.38-12-12-12z" transform="translate(26 0)"></path>
                            <path d="M 12 0C5.388 0 0 5.388 0 12s5.388 12 12 12 12-5.38 12-12c0-6.612-5.38-12-12-12z" transform="translate(52 0)"></path>
                            <path d="M 12 0C5.388 0 0 5.388 0 12s5.388 12 12 12 12-5.38 12-12c0-6.612-5.38-12-12-12z" transform="translate(78 0)"></path>
                            <path d="M 12 0C5.388 0 0 5.388 0 12s5.388 12 12 12 12-5.38 12-12c0-6.612-5.38-12-12-12z" transform="translate(104 0)"></path>
                        </>
                        :
                        item.score===4.5?
                        <>
                            <path d="M 12 0C5.388 0 0 5.388 0 12s5.388 12 12 12 12-5.38 12-12c0-6.612-5.38-12-12-12z" transform=""></path>
                            <path d="M 12 0C5.388 0 0 5.388 0 12s5.388 12 12 12 12-5.38 12-12c0-6.612-5.38-12-12-12z" transform="translate(26 0)"></path>
                            <path d="M 12 0C5.388 0 0 5.388 0 12s5.388 12 12 12 12-5.38 12-12c0-6.612-5.38-12-12-12z" transform="translate(52 0)"></path>
                            <path d="M 12 0C5.388 0 0 5.388 0 12s5.388 12 12 12 12-5.38 12-12c0-6.612-5.38-12-12-12z" transform="translate(78 0)"></path>
                            <path d="M 12 0C5.389 0 0 5.389 0 12c0 6.62 5.389 12 12 12 6.62 0 12-5.379 12-12S18.621 0 12 0zm0 2a9.984 9.984 0 0110 10 9.976 9.976 0 01-10 10z" transform="translate(104 0)"></path>
                        </>
                        :
                        <>
                            <path d="M 12 0C5.388 0 0 5.388 0 12s5.388 12 12 12 12-5.38 12-12c0-6.612-5.38-12-12-12z" transform=""></path>
                            <path d="M 12 0C5.388 0 0 5.388 0 12s5.388 12 12 12 12-5.38 12-12c0-6.612-5.38-12-12-12z" transform="translate(26 0)"></path>
                            <path d="M 12 0C5.388 0 0 5.388 0 12s5.388 12 12 12 12-5.38 12-12c0-6.612-5.38-12-12-12z" transform="translate(52 0)"></path>
                            <path d="M 12 0C5.388 0 0 5.388 0 12s5.388 12 12 12 12-5.38 12-12c0-6.612-5.38-12-12-12z" transform="translate(78 0)"></path>
                        </>
                    }
                        </svg>
                        <p class="text-xs opacity-70">{item.rating}</p>
                    </div>
                    <h2>{item.price}</h2>
                </div>
            </div>
         ))
    }
        </div> </div>
  )
}

export default TopExperience 
