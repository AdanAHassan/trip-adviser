import {useState, useRef} from "react"

const Filter = () => {
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
         let scrollLeftMax = scrollRef.current.scrollLeftMax
         let maxIndex = scrollLeftMax/scrollChildWidth
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
        let maxIndex = (scrollRef.current.scrollLeftMax/(scrollRef.current.scrollWidth/scrollRef.current.childElementCount))
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
    //grid grid-cols-4 bg-slate-900 gap-4 p-2 
    // banner image and content to change on refresh
  return (
      <div class="relative">
    <div ref={scrollRef} onScroll={() => {checkScroll(); handleRightScrollBool(); handleLeftScrollBool()}} class="relative flex flex-row bg-white gap-2 w-full overflow-x-scroll scrollbar-hide md:overflow-hidden md:flex-wrap lg:flex-nowrap px-6 pt-2 pb-4 xl:px-0 text-start">
        <div class="text-black hover:text-white bg-white hover:bg-black transition duration-200 ease-in-out rounded-xl px-4 py-[10px] border-[1px] border-black  flex-1 flex-none flex-wrap w-[150px] md:w-[calc(25%-6px)] md:flex-none lg:grow lg:w-[calc((100%/6)-10px)] hover:fill-white cursor-pointer">
        <div class="flex flex-row justify-between">
                <p class="text-sm font-medium">Hotels</p>
                <svg viewBox="0 0 24 24" class="w-4">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.832 5.228c0-.469.38-.85.85-.85h15.624c.47 0 .85.381.85.85v6.65c.68.561 1.22 1.392 1.22 2.543v4.847h-1.5v-1.673H3.284v1.673h-1.5V14.394c.025-.655.304-1.589 1.049-2.351V5.228zm2.634 5.587c.264-.034.542-.051.837-.051h3.896c-.503-.483-1.31-.931-2.433-.931-1.09 0-1.83.467-2.3.982zm7.39-.051h4.468l.036.003c.161.016.343.042.536.082a2.36 2.36 0 00-.221-.233c-.447-.41-1.18-.783-2.254-.783-1.078 0-1.751.273-2.181.584a2.395 2.395 0 00-.385.347zm5.8-1.283c-.726-.651-1.812-1.148-3.235-1.148-1.347 0-2.339.347-3.06.868-.342.248-.61.525-.821.802-.736-.86-2.005-1.67-3.774-1.67-1.629 0-2.733.712-3.434 1.503V5.878h14.324v3.603zM3.283 16.095h16.594V14.42c0-.703-.355-1.188-.888-1.545-.56-.374-1.263-.561-1.74-.612H6.304c-1.118 0-1.81.316-2.237.677-.57.482-.765 1.123-.783 1.496v1.658z"></path>
                </svg>
            </div>
        </div>
        <div class="text-black hover:text-white bg-white hover:bg-black transition duration-200 ease-in-out rounded-xl px-4 py-[10px] border-[1px] border-black  flex-1 flex-none flex-wrap w-[150px] md:w-[calc(25%-6px)] md:flex-none lg:grow lg:w-[calc((100%/6)-10px)] hover:fill-white cursor-pointer">
        <div class="flex flex-row justify-between">
                <p class="text-sm font-medium">Things to Do</p>
                <svg viewBox="0 0 24 24" class="w-4">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.25 5.25h19.5v4.454l-.536.16a2.752 2.752 0 000 5.272l.536.16v4.454H2.25v-4.454l.536-.16a2.752 2.752 0 000-5.272l-.536-.16V5.25zm1.5 1.5v1.876a4.25 4.25 0 010 7.748v1.876h16.5v-1.876a4.25 4.25 0 010-7.748V6.75H3.75z"></path><path d="M12 15a1 1 0 110 2 1 1 0 010-2zM12 11.5a1 1 0 110 2 1 1 0 010-2zM12 8a1 1 0 110 2 1 1 0 010-2z"></path>
                </svg>
            </div>
        </div>
        <div class="text-black hover:text-white bg-white hover:bg-black transition duration-200 ease-in-out rounded-xl px-4 py-[10px] border-[1px] border-black  flex-1 flex-none flex-wrap w-[150px] md:w-[calc(25%-6px)] md:flex-none lg:grow lg:w-[calc((100%/6)-10px)] hover:fill-white cursor-pointer">
        <div class="flex flex-row justify-between">
                <p class="text-sm font-medium">Holiday Rental</p>
                <svg viewBox="0 0 24 24" class="w-4">
                    <path d="M3 21.2h-.75v.75H3v-.75zm0-12l-.416-.624-.334.223V9.2H3zm9-6l.416-.624L12 2.299l-.416.277L12 3.2zm9.01 6h.75v-.402l-.334-.222-.416.624zm0 12v.75h.75v-.75h-.75zm-17.26 0v-12h-1.5v12h1.5zM3.416 9.824l9-6-.832-1.248-9 6 .832 1.248zm8.168-6l9.01 6 .832-1.248-9.01-6-.832 1.248zM20.26 9.2v12h1.5v-12h-1.5zm.75 11.25H3v1.5h18.01v-1.5zM18 12.96h-6.99v1.5H18v-1.5zm-7.74.75c0 .69-.56 1.25-1.25 1.25v1.5a2.75 2.75 0 002.75-2.75h-1.5zm-1.25 1.25c-.69 0-1.25-.56-1.25-1.25h-1.5a2.75 2.75 0 002.75 2.75v-1.5zm-1.25-1.25c0-.69.56-1.25 1.25-1.25v-1.5a2.75 2.75 0 00-2.75 2.75h1.5zm1.25-1.25c.69 0 1.25.56 1.25 1.25h1.5a2.75 2.75 0 00-2.75-2.75v1.5zm5.24 1.25v3h1.5v-3h-1.5z"></path>
                </svg>
            </div>
        </div>
        <div class="text-black hover:text-white bg-white hover:bg-black transition duration-200 ease-in-out rounded-xl px-4 py-[10px] border-[1px] border-black  flex-1 flex-none flex-wrap w-[150px] md:w-[calc(25%-6px)] md:flex-none lg:grow lg:w-[calc((100%/6)-10px)] hover:fill-white cursor-pointer">
        <div class="flex flex-row justify-between">
                <p class="text-sm font-medium">Restuarants</p>
                <svg viewBox="0 0 24 24" class="w-4">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.798 5.141L17.47 2.47l1.06 1.06-2.671 2.672c-.679.679-1.055 1.462-1.12 2.199-.043.5.054 1.003.327 1.472L19.97 4.97l1.06 1.06-4.906 4.906c.473.281.974.387 1.466.354.718-.047 1.467-.394 2.096-1.023A905.812 905.812 0 0022.24 7.7l.226-.228 1.067 1.055-.228.23a1012.001 1012.001 0 01-2.559 2.57c-.849.849-1.927 1.384-3.057 1.459a4.027 4.027 0 01-2.647-.768l-1.231 1.231 7.72 7.72-1.061 1.06-5.97-5.97-3 3-1.75-1.75-4.72 4.72-1.06-1.06 4.72-4.72-4.392-4.391a4.75 4.75 0 010-6.718L5 4.44l7.75 7.75 1.232-1.232a3.971 3.971 0 01-.737-2.686c.1-1.147.67-2.246 1.553-3.13zM13.439 15L5.028 6.588a3.25 3.25 0 00.33 4.21L11.5 16.94 13.44 15z"></path>
                </svg>
            </div>
        </div>
        <div class="text-black hover:text-white bg-white hover:bg-black transition duration-200 ease-in-out rounded-xl px-4 py-[10px] border-[1px] border-black  flex-1 flex-none flex-wrap w-[150px] md:w-[calc(25%-6px)] md:flex-none lg:grow lg:w-[calc((100%/6)-10px)] hover:fill-white cursor-pointer">
            <div class="flex flex-row justify-between">
                <p class="text-sm font-medium">Travel Forums</p>
                <svg viewBox="0 0 24 24" class="w-4">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M21.75 3.25V13h-1.5V4.75L8 4.755v-1.5l13.75-.005zm-18.5 4h14.501l-.019 10.625H8.008L4.971 20.75H3.25V7.25zm1.5 1.5v10.143l2.66-2.518h8.825l.014-7.625H4.75z"></path>
                </svg>
            </div>
        </div>
        <div class="text-black hover:text-white bg-white hover:bg-black transition duration-200 ease-in-out rounded-xl px-4 py-[10px] border-[1px] border-black  flex-1 flex-none flex-wrap w-[150px] md:w-[calc(25%-6px)] md:flex-none lg:grow lg:hidden hover:fill-white cursor-pointer">
            <div class="flex flex-row justify-between">
                <p class="text-sm font-medium">Flights</p>
                <svg viewBox="0 0 24 24" class="w-4">
                    <path d="M7.63 20.58L0 12.69l1.87-1.87 3.39.6c.08 0 .5 0 .73-.21l2.15-2.08c.02-.05.04-.13.04-.16 0-.02-.07-.1-.26-.19L.72 5.46l2.74-2.68 8.83 1.59c.2.02.49.02.62 0l3.21-3.24c.86-.78 2.58-1.75 3.76-.58 1.17 1.17.24 2.88-.49 3.71l-3.16 3.23c-.02.06-.05.24.01.61l1.52 8.83-2.7 2.43-3.29-6.84a.518.518 0 00-.18-.14L9.1 14.71s-.01.15.01.3l.55 3.62-2.04 1.95zM2.1 12.71l5.57 5.75.4-.38-.43-2.85c-.16-1.04.25-1.5.51-1.68l2.42-2.24c.45-.42.91-.46 1.2-.43.73.08 1.18.69 1.27.81l.06.1 2.45 5.1.59-.54-1.38-8.01c-.21-1.22.19-1.75.44-1.96l3.09-3.15c.25-.29.89-1.26.53-1.63-.36-.36-1.36.32-1.66.6l-3.27 3.29c-.47.45-1.35.42-1.83.35l-8.1-1.45-.63.62 5.21 2.4c.73.33.99.82 1.08 1.17.2.75-.23 1.38-.28 1.45l-.09.11-2.24 2.17c-.78.71-1.85.62-1.96.6l-2.67-.47-.27.27z"></path>
                </svg>
            </div>
        </div>
        <div class="text-black hover:text-white bg-white hover:bg-black transition duration-200 ease-in-out rounded-xl px-4 py-[10px] border-[1px] border-black  flex-1 flex-none flex-wrap w-[150px] md:w-[calc(25%-6px)] md:flex-none lg:grow lg:hidden hover:fill-white cursor-pointer">
            <div class="flex flex-row justify-between">
                <p class="text-sm font-medium">Cruises</p>
                <svg viewBox="0 0 24 24" class="w-4">
                    <path d="M4.23 12.52l-.344-.666-.551.284.176.595.719-.213zM12 8.51l.354-.661-.347-.186-.35.18.343.667zm7.48 4.01l.72.211.171-.584-.537-.288-.354.661zm-8.24-7.66a.75.75 0 001.5 0h-1.5zM12.74 3a.75.75 0 00-1.5 0h1.5zM6.99 4.98v-.75h-.75v.75h.75zm10 0h.75v-.75h-.75v.75zM7.46 20.787l-2.51-8.48-1.44.426 2.51 8.48 1.44-.426zm-2.886-7.6l7.77-4.01-.688-1.333-7.77 4.01.688 1.333zm7.072-4.016l7.48 4.01.708-1.322-7.48-4.01-.708 1.322zm7.114 3.138l-2.49 8.48 1.44.422 2.49-8.48-1.44-.422zM12.74 4.86V3h-1.5v1.86h1.5zm-1.5 3.66V18h1.5V8.52h-1.5zM3 21.75h17.99v-1.5H3v1.5zm4.74-10.53V4.98h-1.5v6.24h1.5zm-.75-5.49h10v-1.5h-10v1.5zm9.25-.75v6.24h1.5V4.98h-1.5z"></path>
                </svg>
            </div>
        </div>
        <div class="text-black hover:text-white bg-white hover:bg-black transition duration-200 ease-in-out rounded-xl px-4 py-[10px] border-[1px] border-black  flex-1 flex-none flex-wrap w-[150px] md:w-[calc(25%-6px)] md:flex-none lg:grow lg:w-[calc((100%/6)-10px)] hover:fill-white cursor-pointer">
            <div class="flex flex-row justify-between">
                <p class="text-sm font-medium">More</p>
                <svg viewBox="0 0 24 24" class="w-4">
                    <circle cx="4.5" cy="11.9" r="2.5"></circle>
                    <circle cx="19.5" cy="11.9" r="2.5"></circle>
                    <circle cx="12" cy="11.9" r="2.5"></circle>
                </svg>
            </div>
        </div>
    </div>
    <div>
        <div onClick={handleLeft} class={`absolute flex items-center pr-40 h-full pl-2 top-0 left-0 bg-gradient-to-r from-white pointer-events-none cursor-pointer transition duration-200 ease-in-out  md:hidden ${scrollLeftBool ? "visible" : " invisible"}`}>
                <svg class="pointer-events-auto" viewBox="0 0 24 24" width="24px" height="24px">
                           <path fill-rule="evenodd" clip-rule="evenodd" d="M16.503 5.163L9.667 12l6.836 6.837-1.06 1.06-7.367-7.367a.75.75 0 010-1.06l7.367-7.367 1.06 1.06z"></path>
                        </svg>
            </div>
             <div onClick={handleRight} class={`absolute flex items-center pl-40 h-full pr-2 top-0 right-0 bg-gradient-to-l from-white pointer-events-none cursor-pointer transition duration-200 ease-in-out md:hidden ${scrollRightBool ? "visible" : " invisible"}`}>
                <svg class="pointer-events-auto" viewBox="0 0 24 24" width="24px" height="24px">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.545 18.837L14.382 12 7.545 5.164l1.061-1.061 7.367 7.367a.75.75 0 010 1.06l-7.367 7.367-1.06-1.06z"></path>
                        </svg>
            </div>
        </div>
    </div>
  )
}

export default Filter
