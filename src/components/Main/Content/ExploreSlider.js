import {useState, useRef} from "react"

const ExploreSlider = ({exploreContent}) => {

     const [scrollRightBool, setScrollRightBool] = useState(true)
     const [scrollLeftBool, setScrollLeftBool] = useState(false)
     const [scrollIndex, setScrollIndex] = useState(1)
     
     const scrollRef = useRef()
     let scrollChildWidth = 0

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
        <div class="relative flex flex-col max-w-[1136px] mx-auto gap-4 justify-end py-6 mt-28">
                <div class="flex flex-col items-start gap-2 pl-6 lg:pl-0 justify-end h-12">
                    <h1 class="text-left text-2xl md:text-3xl text-black font-medium flex-end">More to explore</h1>
                </div>
        <div ref={scrollRef} onScroll={() => {checkScroll(); handleRightScrollBool(); handleLeftScrollBool()}} class="flex flex-row flex-nowrap overflow-auto scrollbar-hide gap-2 w-full pl-6 lg:pl-0 h-[90%] pr-6">
    {
        exploreContent.map((item) => (
            <div class="min-w-[calc(100%/1.4)] md:min-w-[calc(100%/2.5)] lg:min-w-[calc(100%/3)] xl:min-w-[calc((100%/3)-8px)] relative hover:cursor-pointer bg-white">
                <div class="relative">
                    <img class="w-full hover:opacity-80 transition duration-200 ease-in-out" src={item.image} alt={item.subtitle}/>
                    <div class="absolute top-2 right-2 bg-white rounded-full p-2 hover:bg-slate-100 z-100">
                        <svg viewBox="0 0 24 24" width="24px" height="24px">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.798 5.786A5.769 5.769 0 017.72 4.25c1.455 0 2.857.548 3.922 1.536l.005.005.341.322.332-.317a5.769 5.769 0 013.928-1.54c1.458 0 2.862.55 3.928 1.54l.004.004c1.093 1.032 1.599 2.324 1.569 3.662-.03 1.323-.578 2.643-1.5 3.785-.884 1.096-2.85 2.943-4.547 4.478a183.566 183.566 0 01-3.153 2.785l-.069.059-.489-.569.49.569-.486.416-.488-.412a101.98 101.98 0 01-7.75-7.288l-.021-.021-.02-.023c-1.725-2.115-2.203-5.32.08-7.453l.002-.002zm8.19 13.226a174.415 174.415 0 002.708-2.4c1.72-1.556 3.59-3.32 4.385-4.306.757-.939 1.148-1.948 1.168-2.877.02-.912-.313-1.795-1.097-2.536a4.269 4.269 0 00-2.904-1.138 4.269 4.269 0 00-2.903 1.136l-1.35 1.292-1.375-1.3a4.269 4.269 0 00-2.9-1.133 4.269 4.269 0 00-2.901 1.135c-1.507 1.408-1.353 3.659.042 5.385a100.45 100.45 0 007.127 6.742z"></path>
                        </svg>
                    </div>
                </div>
                <div class="flex flex-col px-10 w-full p-4 content-start justify-center hover:underline">
                    <h1 class="text-md text-black text-center font-bold flex-end py-1.5">{item.subtitle}</h1>
                </div>
            </div>
         ))
    }
        </div>
        <div>
            <div onClick={handleLeft} class={`absolute p-2 left-1 xl:left-[-25px] top-[45%] bg-white hover:bg-black rounded-full border-2 border-black fill-black hover:fill-white cursor-pointer transition duration-200 ease-in-out ${scrollLeftBool ? "visible" : " invisible"}`}>
                <svg viewBox="0 0 24 24" width="24px" height="24px">
                           <path d="M10.304 3.506l-8.048 8.047a.644.644 0 000 .895l8.048 8.047a.624.624 0 00.883 0l.882-.883a.624.624 0 000-.883l-5.481-5.48h14.714a.625.625 0 00.623-.625v-1.248a.624.624 0 00-.623-.624H6.588l5.481-5.481a.624.624 0 000-.883l-.882-.883a.623.623 0 00-.883-.004c-.001.002-.002.003 0 .005z"></path>
                        </svg>
            </div>
             <div onClick={handleRight} class={`absolute p-2 right-0 xl:right-[-25px] top-[45%] bg-white hover:bg-black rounded-full border-2 border-black fill-black hover:fill-white cursor-pointer transition duration-200 ease-in-out ${scrollRightBool ? "visible" : " invisible"}`}>
                <svg viewBox="0 0 24 24" width="24px" height="24px">
                            <path d="M13.696 3.502a.624.624 0 00-.884.004l-.882.883a.624.624 0 000 .883l5.481 5.481H2.698a.624.624 0 00-.623.624v1.248c0 .346.279.623.623.625h14.714l-5.481 5.48a.624.624 0 000 .883l.882.883c.245.244.64.244.883 0l8.049-8.047a.646.646 0 000-.895l-8.049-8.048v-.004z"></path>
                        </svg>
            </div>
        </div>
        </div>
  )
}

export default ExploreSlider


