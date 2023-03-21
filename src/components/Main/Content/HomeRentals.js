import {useState, useRef} from "react"

const HomeRentals = ({HomeRentalsContent, HomeRentalsImage}) => {
     
     const [scrollRightBool, setScrollRightBool] = useState(true)
     const [scrollLeftBool, setScrollLeftBool] = useState(false)
     const [scrollIndex, setScrollIndex] = useState(1)
     
     const scrollRef = useRef()
     let scrollChildWidth = 0
     let maxIndex=0

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
        console.log(scrollLeftBool)
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
      
        <div class="flex flex-col gap-4 w-full bg-white justify-end">
    {
          HomeRentalsContent.map((item) => (
                <div class="flex flex-col items-start pl-6 lg:pl-0 h-40 justify-end">
                    <h1 class="text-left text-3xl font-black text-black font-medium flex-end">{item.title}</h1>
                    
                </div>
            ))
    }
    <div class="relative flex flex-col md:flex-row gap-6 md:gap-0">
        <div class="w-2/5">
            <p class="text-xl md:text-2xl font-medium text-start px-6 pb-6 lg:pl-0">{HomeRentalsContent.map((item) => (item.subtitle))}</p>
        </div>
        
        <div ref={scrollRef} onScroll={() => {checkScroll(); handleRightScrollBool(); handleLeftScrollBool()}} class="relative flex flex-row flex-nowrap overflow-auto gap-4 scrollbar-hide w-full pl-6 scroll-pl-8 snap-x xl:pl-0 pr-6">
    {
        HomeRentalsImage.map((item) => (
            <div class="min-w-[calc(100%/1.25)] md:min-w-[calc(100%/2.5)] lg:min-w-[calc(30%)] xl:min-w-[calc((100%/3)-6px)] relative hover:cursor-pointer snap-start">
                <div class="relative ">
                    <img class="w-full aspect-[4/3] object-cover object-top hover:opacity-90 transition duration-200 ease-in-out " src={item.image} alt={item.location}/>
                </div>
                <div class="flex flex-col w-full text-start gap-2 pt-2">
                    <h1 class="text-left text-lg text-black hover:underline font-medium">Rentals in {item.location}</h1>
                    <p>{item.rental} rentals</p>
                </div>
            </div>
         ))
    }
        </div>
        <div>
            <div onClick={handleLeft} class={`absolute p-2 left-[29%] top-[35%] bg-white hover:bg-black rounded-full border-2 border-black fill-black hover:fill-white cursor-pointer transition duration-200 ease-in-out ${scrollLeftBool ? "visible" : " hidden"}`}>
                <svg viewBox="0 0 24 24" width="24px" height="24px">
                           <path d="M10.304 3.506l-8.048 8.047a.644.644 0 000 .895l8.048 8.047a.624.624 0 00.883 0l.882-.883a.624.624 0 000-.883l-5.481-5.48h14.714a.625.625 0 00.623-.625v-1.248a.624.624 0 00-.623-.624H6.588l5.481-5.481a.624.624 0 000-.883l-.882-.883a.623.623 0 00-.883-.004c-.001.002-.002.003 0 .005z"></path>
                        </svg>
            </div>
             <div onClick={handleRight} class={`absolute p-2 right-0 xl:right-[-25px] top-[35%] bg-white hover:bg-black rounded-full border-2 border-black fill-black hover:fill-white cursor-pointer transition duration-200 ease-in-out ${scrollRightBool ? "visible" : " invisible"}`}>
                <svg viewBox="0 0 24 24" width="24px" height="24px">
                            <path d="M13.696 3.502a.624.624 0 00-.884.004l-.882.883a.624.624 0 000 .883l5.481 5.481H2.698a.624.624 0 00-.623.624v1.248c0 .346.279.623.623.625h14.714l-5.481 5.48a.624.624 0 000 .883l.882.883c.245.244.64.244.883 0l8.049-8.047a.646.646 0 000-.895l-8.049-8.048v-.004z"></path>
                        </svg>
            </div>
        </div>
        </div> </div>
  )
}

export default HomeRentals 
