import {useState, useRef} from "react"

const Filter = ({filterItems, moreBool, setMoreBool}) => {
     const [scrollRightBool, setScrollRightBool] = useState(true)
     const [scrollLeftBool, setScrollLeftBool] = useState(false)
     const [scrollIndex, setScrollIndex] = useState(1)
     
     const scrollRef = useRef()
     let scrollChildWidth = 0
// maxIndex = (scrollRef.current.scrollLeftMax/(scrollRef.current.scrollWidth/scrollRef.current.childElementCount))
     const handleRight = () => {
         let scrollWidth  = scrollRef.current.scrollWidth
         let scrollChildNum = scrollRef.current.childElementCount
         scrollChildWidth = scrollWidth/scrollChildNum
         let maxIndex = ((scrollRef.current.scrollWidth-scrollRef.current.offsetWidth)/(scrollRef.current.scrollWidth/scrollRef.current.childElementCount))
         if(scrollIndex < Math.floor(maxIndex+1)){
         scrollRef.current.scrollTo({
            top: 0,
            left: (scrollIndex + 2)*scrollChildWidth,
            behavior: "smooth"
         })
         }
    console.log(scrollIndex)
    }
    
    const handleLeft = () => {
         let scrollWidth  = scrollRef.current.scrollWidth
         let scrollChildNum = scrollRef.current.childElementCount
         scrollChildWidth = scrollWidth/scrollChildNum
         if(scrollIndex >= 0){
         scrollRef.current.scrollTo({
            top: 0,
            left: (scrollIndex - 2)*scrollChildWidth,
            behavior: "smooth"
         })
         }
    console.log(scrollIndex)
    }
    
    const checkScroll = () => {
        setScrollIndex(Math.ceil(scrollRef.current.scrollLeft/(scrollRef.current.scrollWidth/scrollRef.current.childElementCount)))
        console.log(scrollIndex)
    }
    const handleRightScrollBool = () => {
        let maxIndex = ((scrollRef.current.scrollWidth-scrollRef.current.offsetWidth)/(scrollRef.current.scrollWidth/scrollRef.current.childElementCount))
        if (scrollIndex>=maxIndex){
            setScrollRightBool(false)
        }
        else if (scrollIndex<maxIndex){
            setScrollRightBool(true)
        }
    }
    
    const handleLeftScrollBool = () => {
        if (scrollRef.current.scrollLeft>0){
            setScrollLeftBool(true)
        }
        else if (scrollRef.current.scrollLeft===0){
            setScrollLeftBool(false)
        }
    }  
    
    

  return (
      <div class="relative">
    <div ref={scrollRef} onScroll={() => {checkScroll(); handleRightScrollBool(); handleLeftScrollBool()}} class="relative flex flex-row bg-white gap-2 w-full overflow-x-scroll scrollbar-hide md:overflow-hidden md:flex-wrap lg:flex-nowrap px-6 pt-2 pb-2 xl:px-0 text-start">
         {
        filterItems.map((item, index) => (
            item.filter &&
                <div class={`text-black hover:text-white bg-white hover:bg-black transition duration-200 ease-in-out rounded-xl border-[1px] border-black  flex-1 flex-none flex-wrap w-[175px] md:w-[calc(25%-6px)] md:flex-none lg:grow lg:w-[calc((100%/6)-10px)] hover:fill-white cursor-pointer ${item.order} ${item.hiddenAtLarge}`}>
                <div class="flex flex-row justify-between items-start px-4 py-3">
                        <p class="text-sm md:text-base font-medium">{item.text}</p>
                        <svg viewBox="0 0 24 24" class="w-4 md:ml-4 md:w-6">
                            <path fillrule="evenodd" clipule="evenodd" d={`${item.svg}`}></path>
                            {item.svgTwo && 
                                <path d={`${item.svgTwo}`}></path>
                            }
                        </svg>
                    </div>
                </div>
                ))
            }
        <div onClick={() => setMoreBool(!moreBool)} class="text-black hover:text-white bg-white hover:bg-black transition duration-200 ease-in-out rounded-xl px-4 py-[10px] border-[1px] border-black  flex-1 flex-none flex-wrap w-[150px] md:w-[calc(25%-6px)] md:flex-none lg:grow lg:w-[calc((100%/6)-10px)] hover:fill-white cursor-pointer order-last">
            <div class="flex flex-row justify-between items-start">
                <p class="text-sm md:text-base font-medium">More</p>
                <svg viewBox="0 0 24 24" class="w-4 md:ml-2 md:w-6">
                    <circle cx="4.5" cy="11.9" r="2.5"></circle>
                    <circle cx="19.5" cy="11.9" r="2.5"></circle>
                    <circle cx="12" cy="11.9" r="2.5"></circle>
                </svg>
            </div>
        </div>
    </div>
        <div class={`${moreBool ? "flex" : "hidden"} flex-col fixed md:absolute bg-white w-full h-screen md:h-fit md:w-52 p-4 md:rounded-xl md:right-6 top-[0] md:top-[120px] lg:top-[90px] xl:top-16 z-50 shadow-[0_0px_15px_10px_rgba(0,0,0,0.05)]`}>
            <div class="flex md:hidden text-3xl font-bold pl-2 pt-16 pb-6">Explore Tripadvisor</div>
            {
                filterItems.sort(( a, b ) => a.text < b.text ? -1 : a.text > b.text ? 1 : 0).map((item, index) => (
                    
                    <div class={`text-black font-medium hover:bg-red-200/50 w-full py-2.5  pl-2 hover:cursor-pointer ${item.more && moreBool ? "hidden md:flex" : "" } ${item.hiddenAtLarge ? "flex md:hidden lg:flex" : "" } ${!item.moreReveal ? "flex md:hidden" : "" }`}>{item.text}
                    </div>
                ))
            }
            <div onClick={() => setMoreBool(!moreBool)} class={`${moreBool ? "absolute md:hidden" : "hidden" } right-4 top-4 hover:bg-slate-300/50 rounded-full p-2 cursor-pointer`}>
                <svg viewBox="0 0 24 24" class="w-[20px]">
                    <path d="M10.94 12L4.47 5.53l1.06-1.06L12 10.94l6.47-6.47 1.06 1.06L13.06 12l6.47 6.47-1.06 1.06L12 13.06l-6.47 6.47-1.06-1.06L10.94 12z"></path>
                </svg>
            </div>
        </div>
    <div>
        <div onClick={handleLeft} class={`absolute flex items-center pr-40 h-full pl-2 top-0 left-0 bg-gradient-to-r from-white pointer-events-none cursor-pointer transition duration-200 ease-in-out  md:hidden ${scrollLeftBool ? "visible" : " invisible"}`}>
                <svg class="pointer-events-auto" viewBox="0 0 24 24" width="24px" height="24px">
                           <path fillrule="evenodd" clipule="evenodd" d="M16.503 5.163L9.667 12l6.836 6.837-1.06 1.06-7.367-7.367a.75.75 0 010-1.06l7.367-7.367 1.06 1.06z"></path>
                        </svg>
            </div>
             <div onClick={handleRight} class={`absolute flex items-center pl-40 h-full pr-2 top-0 right-0 bg-gradient-to-l from-white pointer-events-none cursor-pointer transition duration-200 ease-in-out md:hidden ${scrollRightBool ? "visible" : " invisible"}`}>
                <svg class="pointer-events-auto" viewBox="0 0 24 24" width="24px" height="24px">
                            <path fillrule="evenodd" clipule="evenodd" d="M7.545 18.837L14.382 12 7.545 5.164l1.061-1.061 7.367 7.367a.75.75 0 010 1.06l-7.367 7.367-1.06-1.06z"></path>
                        </svg>
            </div>
        </div>
    </div>
  )
}

export default Filter
