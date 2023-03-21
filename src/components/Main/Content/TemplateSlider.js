import {useState, useRef} from "react"

const TemplateSlider = ({TemplateTitle, TemplateContent, TemplateId}) => {
    
     const [scrollRightBool, setScrollRightBool] = useState(true)
     const [scrollLeftBool, setScrollLeftBool] = useState(false)
     const [scrollIndex, setScrollIndex] = useState(1)
     
     const scrollRef = useRef()
     let scrollChildWidth = 0
     
//      had issues with this function but it works. The function is called by the onclick attribute and all the variables are declared here. This is because it requires the DOM to be rendered first, if declared outside the function all the variables throw an error. The issue with using state to increment was fixed by setting the state with the onscroll attribute. This is good because the state is still updated without using the button which is necessary when a user scrolls the div with their mouse
     const handleRight = () => {
         let scrollWidth  = scrollRef.current.scrollWidth
         let scrollChildNum = scrollRef.current.childElementCount
         scrollChildWidth = scrollWidth/scrollChildNum
//          console.log(scrollChildWidth * 3)
//          console.log(scrollRef.current)
//          let scrollLeftMax = scrollRef.current.scrollLeftMax
//          let maxIndex = scrollLeftMax/scrollChildWidth
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
    
//     i have to redeclare the variables here because they can't be declared outside the function
    const handleLeft = () => {
         let scrollWidth  = scrollRef.current.scrollWidth
         let scrollChildNum = scrollRef.current.childElementCount
         scrollChildWidth = scrollWidth/scrollChildNum
//          console.log(scrollChildWidth * 3)
//          console.log(scrollRef.current)
         if(scrollIndex >= 0){
         scrollRef.current.scrollTo({
            top: 0,
            left: (scrollIndex - 2)*scrollChildWidth,
            behavior: "smooth"
         })
         }
    console.log(scrollIndex)
    }
    
//     this ensures that the state is updated onscroll 
    const checkScroll = () => {
        setScrollIndex(Math.ceil(scrollRef.current.scrollLeft/(scrollRef.current.scrollWidth/scrollRef.current.childElementCount)))
    }
//     this is used to make the arrow button disappear/reappear 
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
      
        <div class="flex flex-col gap-4 w-full bg-white justify-end relative">
    {
          TemplateTitle.map((item) => (
                <div class="flex flex-col text-start items-start gap-2 pl-6 lg:pl-0 h-40 justify-end">
                    <h1 class="text-left text-2xl md:text-3xl text-black font-medium flex-end">{item.title}</h1>
                    <p class="text-lg md:text-xl font-light">{item.subtitle}</p>
                </div>
            ))
    }
        <div ref={scrollRef} onScroll={() => {checkScroll(); handleRightScrollBool(); handleLeftScrollBool()}} class="flex flex-row flex-nowrap overflow-auto scrollbar-hide gap-4 w-full pl-6 scroll-pl-6 snap-x xl:pl-0 pr-6 ">
    {
        TemplateContent.map((item) => (
            <div class="min-w-[calc(100%/2)] md:min-w-[calc(100%/3)] lg:min-w-[calc(25%)] xl:min-w-[calc(25%-6px)] relative group hover:cursor-pointer snap-start ">
                <div>
                    <img class="w-full object-cover object-top group-hover:opacity-80 transition duration-200 ease-in-out" src={item.image} alt={item.location}/>
                </div>
                <div class="absolute inset-x-0 bottom-0 flex flex-col pl-4 pr-8 w-full bg-gradient-to-t from-black/80 h-1/2 pb-4 items-start justify-end">
                    <h1 class="text-left text-2xl text-white font-bold flex-end">{item.location}</h1>
                </div>
            </div>
         ))
    }
        </div> 
        <div>
            <div onClick={handleLeft} class={`absolute p-2 left-1 xl:left-[-25px] top-[65%] bg-white hover:bg-black rounded-full border-2 border-black fill-black hover:fill-white cursor-pointer transition duration-200 ease-in-out ${scrollLeftBool ? "visible" : " invisible"}`}>
                <svg viewBox="0 0 24 24" width="24px" height="24px">
                           <path d="M10.304 3.506l-8.048 8.047a.644.644 0 000 .895l8.048 8.047a.624.624 0 00.883 0l.882-.883a.624.624 0 000-.883l-5.481-5.48h14.714a.625.625 0 00.623-.625v-1.248a.624.624 0 00-.623-.624H6.588l5.481-5.481a.624.624 0 000-.883l-.882-.883a.623.623 0 00-.883-.004c-.001.002-.002.003 0 .005z"></path>
                        </svg>
            </div>
             <div onClick={handleRight} class={`absolute p-2 right-0 xl:right-[-25px] top-[65%] bg-white hover:bg-black rounded-full border-2 border-black fill-black hover:fill-white cursor-pointer transition duration-200 ease-in-out ${scrollRightBool ? "visible" : " invisible"}`}>
                <svg viewBox="0 0 24 24" width="24px" height="24px">
                            <path d="M13.696 3.502a.624.624 0 00-.884.004l-.882.883a.624.624 0 000 .883l5.481 5.481H2.698a.624.624 0 00-.623.624v1.248c0 .346.279.623.623.625h14.714l-5.481 5.48a.624.624 0 000 .883l.882.883c.245.244.64.244.883 0l8.049-8.047a.646.646 0 000-.895l-8.049-8.048v-.004z"></path>
                        </svg>
            </div>
        </div>
        </div>
  )
}

export default TemplateSlider



//      useEffect(() => { 
//       if (typeof document !== "undefined") {
//         var scrollDiv = document.getElementById("scrollDiv")
//         var scrollWidth = scrollDiv.clientWidth
//         var scrollChildNum = scrollDiv.childElementCount
//         var scrollChildWidth = scrollWidth/scrollChildNum
//      }
//     }, [])
//          const handleRight = () => {
//          console.log(scrollIndex)
//          setScrollIndex(scrollIndex + 1)
//          console.log(scrollIndex)
//          scrollDiv.scrollLeft = scrollChildWidth * scrollIndex
//     }


































