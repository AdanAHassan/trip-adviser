import { useState, useRef, useEffect} from "react"

const Search = ({setTotalHeight, totalHeight}) => {
    
    const [search, setSearch] = useState("")
    const searchRef = useRef()
    const divRef = useRef()
    
    const checkTotalHeight = () => {
        if (divRef.current.offsetTop + searchRef.current.offsetTop !== totalHeight &&  divRef.current!=="undefined" && searchRef.current!=="undefined" ){
            setTotalHeight(divRef.current.offsetTop + searchRef.current.offsetTop)
        }
    }
    useEffect(() => {
        checkTotalHeight()
    }, [divRef])
    
    window.addEventListener('resize', checkTotalHeight)
    
    
    const [revealBool, setRevealBool] = useState(false)
    
    const formRef = useRef()
    
    const calcFormHeight = () => {
            setRevealBool(false)
            console.log("form closed", revealBool)
            window.removeEventListener('scroll', calcFormHeight)
        }
    
    if(revealBool==true && window.scrollY>(divRef.current.offsetTop + searchRef.current.offsetTop + formRef.current.getBoundingClientRect().height + 60)){
        window.addEventListener('scroll', calcFormHeight)
    }
    
    
      
    
    
  return (
    <>
        <div class="h-80 relative mb-20  xl:mx-0 px-0 md:px-6 lg:px-0">
            <div class="h-full">
                <img class="brightness-100 h-full object-cover" src="https://static.tacdn.com/img2/brand/home/homemar2022_tw_trans.webp" alt="search-background" />
            </div>
            <div ref={divRef}>
                <div onClick={() => setRevealBool(false)} class={`fixed top-0 right-0 bg-white/90 w-full  ${ revealBool ? "h-[8000px] z-50" : "" }`}>
                </div>
                <form  class={`bg-white top-[132px] inset-0 w-[80%] mx-auto flex flex-col shadow-xl shadow-black/40 absolute h-fit ${ revealBool ? "rounded-md z-50" : "rounded-full"}`}>
                    <div ref={searchRef} onClick={() => setRevealBool(true)}  class="flex flex-row items-center pl-6 h-14">
                        <svg viewBox="0 0 24 24" width="24px" height="24px">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.74 3.75a5.99 5.99 0 100 11.98 5.99 5.99 0 000-11.98zM2.25 9.74a7.49 7.49 0 1113.3 4.728l5.44 5.442-1.06 1.06-5.44-5.439A7.49 7.49 0 012.25 9.74z"></path>
                        </svg>
                        <input
                            onFocus={() => setRevealBool(true)} 
                            class="mx-6 text-start justify-center my-4 focus:outline-none peer group w-full h-full"
                            type="text" 
                            value={search}
                            placeholder="Where to?"
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>
                    <div ref={formRef} class={`${revealBool ? "block" : "hidden" } w-full mb-6`}>
                        <div class="bg-black pb-0.5 mx-3"></div>
                        <div class="h-[72px] py-4 px-6 mt-6 bg-white w-full flex flex-row items-center gap-2 hover:bg-gray-100 transition duration-200 ease-in-out hover:cursor-pointer">
                            <div class="p-1.5 rounded-full border-slate-200 border-2 bg-white">
                                <svg viewBox="0 0 24 24" width="24px" height="24px">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M19.497 4.612a.85.85 0 011.08 1.072l-5.055 15.29c-.254.769-1.337.781-1.608.019l-2.487-6.988-7.068-2.673c-.746-.282-.728-1.344.028-1.6l15.11-5.12zm-.754 1.84L6.586 10.57l5.653 2.138a.85.85 0 01.5.51l1.953 5.487L18.743 6.45z"></path>
                                </svg>
                            </div>
                            <div class="font-medium">Nearby</div>
                        </div>
                        <div class="bg-slate-200 pb-[1px] mx-6"></div>
                        <div class="h-[72px] py-4 px-6 bg-white w-full flex flex-row items-center gap-2 hover:bg-gray-100 transition duration-200 ease-in-out hover:cursor-pointer">
                            <div class="p-1.5 rounded-full border-slate-200 border-2 bg-white">
                                <svg viewBox="0 0 24 24" width="24px" height="24px">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.798 5.786A5.769 5.769 0 017.72 4.25c1.455 0 2.857.548 3.922 1.536l.005.005.341.322.332-.317a5.769 5.769 0 013.928-1.54c1.458 0 2.862.55 3.928 1.54l.004.004c1.093 1.032 1.599 2.324 1.569 3.662-.03 1.323-.578 2.643-1.5 3.785-.884 1.096-2.85 2.943-4.547 4.478a183.566 183.566 0 01-3.153 2.785l-.069.059-.489-.569.49.569-.486.416-.488-.412a101.98 101.98 0 01-7.75-7.288l-.021-.021-.02-.023c-1.725-2.115-2.203-5.32.08-7.453l.002-.002zm8.19 13.226a174.415 174.415 0 002.708-2.4c1.72-1.556 3.59-3.32 4.385-4.306.757-.939 1.148-1.948 1.168-2.877.02-.912-.313-1.795-1.097-2.536a4.269 4.269 0 00-2.904-1.138 4.269 4.269 0 00-2.903 1.136l-1.35 1.292-1.375-1.3a4.269 4.269 0 00-2.9-1.133 4.269 4.269 0 00-2.901 1.135c-1.507 1.408-1.353 3.659.042 5.385a100.45 100.45 0 007.127 6.742z"></path>
                                </svg>
                            </div>
                            <div class="flex flex-col leading-5">
                                <div class="text-xs font-medium uppercase">sponsored</div>
                                <div class="font-medium ">The Best Activities for Couples in Florida</div>
                                <div class="text-xs">Tripadvisor</div>
                            </div>
                        </div>
                        <div class="text-xs font-medium uppercase my-2 mx-6">recently viewed</div>
                        <div class="h-[72px] py-4 px-6 bg-white w-full flex flex-row items-center gap-2 hover:bg-gray-100 transition duration-200 ease-in-out hover:cursor-pointer">
                            <div class="p-1.5 rounded-full border-slate-200 border-2 bg-white">
                                <svg viewBox="0 0 24 24" width="24px" height="24px">
                                    <path d="M11.277 20.26l.53-.532-.53.532zm.035.035l.537-.524-.008-.008-.53.532zM12 21l-.537.524.529.542.537-.534L12 21zm.688-.684l.529.532.002-.002-.53-.53zm.303-8.458l-.287-.693.287.693zm-1.98-4.783l-.288-.693.287.693zM12 2.25c-4.262 0-7.75 3.46-7.75 7.707h1.5c0-3.41 2.808-6.207 6.25-6.207v-1.5zM4.25 9.957c0 2.269 1.128 4.455 2.452 6.292 1.335 1.85 2.947 3.45 4.047 4.543l1.057-1.064c-1.108-1.1-2.634-2.62-3.887-4.356-1.262-1.75-2.169-3.62-2.169-5.415h-1.5zm6.499 10.835l.034.035 1.058-1.064-.035-.035-1.057 1.064zm.026.026l.688.706 1.074-1.048-.688-.705-1.074 1.047zm1.754.714l.688-.684-1.058-1.064-.688.684 1.058 1.064zm.69-.686c1.096-1.098 2.717-2.706 4.06-4.566 1.333-1.846 2.471-4.043 2.471-6.323h-1.5c0 1.806-.916 3.685-2.187 5.445-1.262 1.747-2.797 3.275-3.905 4.384l1.06 1.06zm6.531-10.89c0-4.246-3.488-7.706-7.75-7.706v1.5c3.442 0 6.25 2.797 6.25 6.207h1.5zm-6.051-1.193a1.838 1.838 0 01-.995 2.402l.574 1.386a3.338 3.338 0 001.807-4.362l-1.386.574zm-.995 2.402a1.838 1.838 0 01-2.402-.995l-1.386.574a3.338 3.338 0 004.362 1.807l-.574-1.386zm-2.402-.995a1.838 1.838 0 01.995-2.402l-.574-1.386a3.338 3.338 0 00-1.807 4.362l1.386-.574zm.995-2.402a1.838 1.838 0 012.402.995l1.386-.574a3.338 3.338 0 00-4.362-1.807l.574 1.386z"></path>
                                </svg>
                            </div>
                            <div class="flex flex-col leading-5">
                                <div class="font-medium ">Stonehenge, Windsor Castle, and Bath from London</div>
                                <div class="text-xs">London, England</div>
                            </div>
                        </div>
                        <div class="bg-slate-200 pb-[1px] mx-6"></div>
                        <div class="h-[72px] py-4 px-6 bg-white w-full flex flex-row items-center gap-2 hover:bg-gray-100 transition duration-200 ease-in-out hover:cursor-pointer">
                            <div class="p-1.5 rounded-full border-slate-200 border-2 bg-white">
                                <svg viewBox="0 0 24 24" width="24px" height="24px">
                                    <path d="M11.277 20.26l.53-.532-.53.532zm.035.035l.537-.524-.008-.008-.53.532zM12 21l-.537.524.529.542.537-.534L12 21zm.688-.684l.529.532.002-.002-.53-.53zm.303-8.458l-.287-.693.287.693zm-1.98-4.783l-.288-.693.287.693zM12 2.25c-4.262 0-7.75 3.46-7.75 7.707h1.5c0-3.41 2.808-6.207 6.25-6.207v-1.5zM4.25 9.957c0 2.269 1.128 4.455 2.452 6.292 1.335 1.85 2.947 3.45 4.047 4.543l1.057-1.064c-1.108-1.1-2.634-2.62-3.887-4.356-1.262-1.75-2.169-3.62-2.169-5.415h-1.5zm6.499 10.835l.034.035 1.058-1.064-.035-.035-1.057 1.064zm.026.026l.688.706 1.074-1.048-.688-.705-1.074 1.047zm1.754.714l.688-.684-1.058-1.064-.688.684 1.058 1.064zm.69-.686c1.096-1.098 2.717-2.706 4.06-4.566 1.333-1.846 2.471-4.043 2.471-6.323h-1.5c0 1.806-.916 3.685-2.187 5.445-1.262 1.747-2.797 3.275-3.905 4.384l1.06 1.06zm6.531-10.89c0-4.246-3.488-7.706-7.75-7.706v1.5c3.442 0 6.25 2.797 6.25 6.207h1.5zm-6.051-1.193a1.838 1.838 0 01-.995 2.402l.574 1.386a3.338 3.338 0 001.807-4.362l-1.386.574zm-.995 2.402a1.838 1.838 0 01-2.402-.995l-1.386.574a3.338 3.338 0 004.362 1.807l-.574-1.386zm-2.402-.995a1.838 1.838 0 01.995-2.402l-.574-1.386a3.338 3.338 0 00-1.807 4.362l1.386-.574zm.995-2.402a1.838 1.838 0 012.402.995l1.386-.574a3.338 3.338 0 00-4.362-1.807l.574 1.386z"></path>
                                </svg>
                            </div>
                            <div class="flex flex-col leading-5">
                                <div class="font-medium ">Spain</div>
                                <div class="text-xs">Europe</div>
                            </div>
                        </div>
                        <div class="bg-slate-200 pb-[1px] mx-6"></div>
                        <div class="h-[72px] py-4 px-6 bg-white w-full flex flex-row items-center gap-2 hover:bg-gray-100 transition duration-200 ease-in-out hover:cursor-pointer">
                            <div class="p-1.5 rounded-full border-slate-200 border-2 bg-white">
                                <svg viewBox="0 0 24 24" width="24px" height="24px">
                                    <path d="M11.277 20.26l.53-.532-.53.532zm.035.035l.537-.524-.008-.008-.53.532zM12 21l-.537.524.529.542.537-.534L12 21zm.688-.684l.529.532.002-.002-.53-.53zm.303-8.458l-.287-.693.287.693zm-1.98-4.783l-.288-.693.287.693zM12 2.25c-4.262 0-7.75 3.46-7.75 7.707h1.5c0-3.41 2.808-6.207 6.25-6.207v-1.5zM4.25 9.957c0 2.269 1.128 4.455 2.452 6.292 1.335 1.85 2.947 3.45 4.047 4.543l1.057-1.064c-1.108-1.1-2.634-2.62-3.887-4.356-1.262-1.75-2.169-3.62-2.169-5.415h-1.5zm6.499 10.835l.034.035 1.058-1.064-.035-.035-1.057 1.064zm.026.026l.688.706 1.074-1.048-.688-.705-1.074 1.047zm1.754.714l.688-.684-1.058-1.064-.688.684 1.058 1.064zm.69-.686c1.096-1.098 2.717-2.706 4.06-4.566 1.333-1.846 2.471-4.043 2.471-6.323h-1.5c0 1.806-.916 3.685-2.187 5.445-1.262 1.747-2.797 3.275-3.905 4.384l1.06 1.06zm6.531-10.89c0-4.246-3.488-7.706-7.75-7.706v1.5c3.442 0 6.25 2.797 6.25 6.207h1.5zm-6.051-1.193a1.838 1.838 0 01-.995 2.402l.574 1.386a3.338 3.338 0 001.807-4.362l-1.386.574zm-.995 2.402a1.838 1.838 0 01-2.402-.995l-1.386.574a3.338 3.338 0 004.362 1.807l-.574-1.386zm-2.402-.995a1.838 1.838 0 01.995-2.402l-.574-1.386a3.338 3.338 0 00-1.807 4.362l1.386-.574zm.995-2.402a1.838 1.838 0 012.402.995l1.386-.574a3.338 3.338 0 00-4.362-1.807l.574 1.386z"></path>
                                </svg>
                            </div>
                            <div class="flex flex-col leading-5">
                                <div class="font-medium ">Lake Tahoe (California)</div>
                                <div class="text-xs">California, United States</div>
                            </div>
                        </div>
                        <div class="bg-slate-200 pb-[1px] mx-6"></div>
                        <div class="h-[72px] py-4 px-6 bg-white w-full flex flex-row items-center gap-2 hover:bg-gray-100 transition duration-200 ease-in-out hover:cursor-pointer">
                            <div class="p-1.5 rounded-full border-slate-200 border-2 bg-white">
                                <svg viewBox="0 0 24 24" width="24px" height="24px">
                                    <path d="M11.277 20.26l.53-.532-.53.532zm.035.035l.537-.524-.008-.008-.53.532zM12 21l-.537.524.529.542.537-.534L12 21zm.688-.684l.529.532.002-.002-.53-.53zm.303-8.458l-.287-.693.287.693zm-1.98-4.783l-.288-.693.287.693zM12 2.25c-4.262 0-7.75 3.46-7.75 7.707h1.5c0-3.41 2.808-6.207 6.25-6.207v-1.5zM4.25 9.957c0 2.269 1.128 4.455 2.452 6.292 1.335 1.85 2.947 3.45 4.047 4.543l1.057-1.064c-1.108-1.1-2.634-2.62-3.887-4.356-1.262-1.75-2.169-3.62-2.169-5.415h-1.5zm6.499 10.835l.034.035 1.058-1.064-.035-.035-1.057 1.064zm.026.026l.688.706 1.074-1.048-.688-.705-1.074 1.047zm1.754.714l.688-.684-1.058-1.064-.688.684 1.058 1.064zm.69-.686c1.096-1.098 2.717-2.706 4.06-4.566 1.333-1.846 2.471-4.043 2.471-6.323h-1.5c0 1.806-.916 3.685-2.187 5.445-1.262 1.747-2.797 3.275-3.905 4.384l1.06 1.06zm6.531-10.89c0-4.246-3.488-7.706-7.75-7.706v1.5c3.442 0 6.25 2.797 6.25 6.207h1.5zm-6.051-1.193a1.838 1.838 0 01-.995 2.402l.574 1.386a3.338 3.338 0 001.807-4.362l-1.386.574zm-.995 2.402a1.838 1.838 0 01-2.402-.995l-1.386.574a3.338 3.338 0 004.362 1.807l-.574-1.386zm-2.402-.995a1.838 1.838 0 01.995-2.402l-.574-1.386a3.338 3.338 0 00-1.807 4.362l1.386-.574zm.995-2.402a1.838 1.838 0 012.402.995l1.386-.574a3.338 3.338 0 00-4.362-1.807l.574 1.386z"></path>
                                </svg>
                            </div>
                            <div class="flex flex-col leading-5">
                                <div class="font-medium ">Turkiye</div>
                                <div class="text-xs">Europe</div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </>
  )
}

export default Search

{/*
           <div class="bg-white/90 w-full h-[8000px] top-0 absolute z-30"></div>
    <div ref={divRef} class="h-80 mb-12 xl:mx-0 px-0 md:px-6 lg:px-0 relative">
        <img class="brightness-100 w-full h-full object-cover" src="https://static.tacdn.com/img2/brand/home/homemar2022_tw_trans.webp" alt="search-background" />
        <div class="rounded-full bg-white h-fit w-fit ">
            <div ref={searchRef} class="bg-white top-[132px] inset-0 h-14  w-[80%] mx-auto flex flex-col shadow-xl shadow-black/40 z-40 absolute rounded-full focus-within:rounded-none">
                <input
                    onFocus={() => setRevealBool(true)}
                    class="mr-4 text-start justify-center ml-14 my-4 focus:outline-none peer group"
                    type="text" 
                    value={search}
                    placeholder="Where to?"
                    onChange={(e) => setSearch(e.target.value)}
                />
                <div class="flex flex-row items-center pl-6 absolute justfiy-center top-4">
                    <svg viewBox="0 0 24 24" width="24px" height="24px">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.74 3.75a5.99 5.99 0 100 11.98 5.99 5.99 0 000-11.98zM2.25 9.74a7.49 7.49 0 1113.3 4.728l5.44 5.442-1.06 1.06-5.44-5.439A7.49 7.49 0 012.25 9.74z"></path>
                    </svg>
                </div>
                <div class="w-full bg-white hidden peer-focus:flex flex-col rounded-b-sm top-[-10px]">
                    <div class="bg-black pb-0.5 mx-3">
                        </div>
                        <div class="h-[72px] py-4 px-6 bg-white w-full flex flex-row items-center gap-2 hover:bg-gray-100 transition duration-200 ease-in-out hover:cursor-pointer">
                            <div class="p-1.5 rounded-full border-slate-200 border-2 bg-white">
                                <svg viewBox="0 0 24 24" width="24px" height="24px">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M19.497 4.612a.85.85 0 011.08 1.072l-5.055 15.29c-.254.769-1.337.781-1.608.019l-2.487-6.988-7.068-2.673c-.746-.282-.728-1.344.028-1.6l15.11-5.12zm-.754 1.84L6.586 10.57l5.653 2.138a.85.85 0 01.5.51l1.953 5.487L18.743 6.45z"></path>
                                </svg>
                            </div>
                            <div class="font-medium">Nearby</div>
                        </div>
                        <div class="bg-slate-200 pb-[1px] mx-6"></div>
                        <div class="h-[72px] py-4 px-6 bg-white w-full flex flex-row items-center gap-2 hover:bg-gray-100 transition duration-200 ease-in-out hover:cursor-pointer">
                            <div class="p-1.5 rounded-full border-slate-200 border-2 bg-white">
                                <svg viewBox="0 0 24 24" width="24px" height="24px">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.798 5.786A5.769 5.769 0 017.72 4.25c1.455 0 2.857.548 3.922 1.536l.005.005.341.322.332-.317a5.769 5.769 0 013.928-1.54c1.458 0 2.862.55 3.928 1.54l.004.004c1.093 1.032 1.599 2.324 1.569 3.662-.03 1.323-.578 2.643-1.5 3.785-.884 1.096-2.85 2.943-4.547 4.478a183.566 183.566 0 01-3.153 2.785l-.069.059-.489-.569.49.569-.486.416-.488-.412a101.98 101.98 0 01-7.75-7.288l-.021-.021-.02-.023c-1.725-2.115-2.203-5.32.08-7.453l.002-.002zm8.19 13.226a174.415 174.415 0 002.708-2.4c1.72-1.556 3.59-3.32 4.385-4.306.757-.939 1.148-1.948 1.168-2.877.02-.912-.313-1.795-1.097-2.536a4.269 4.269 0 00-2.904-1.138 4.269 4.269 0 00-2.903 1.136l-1.35 1.292-1.375-1.3a4.269 4.269 0 00-2.9-1.133 4.269 4.269 0 00-2.901 1.135c-1.507 1.408-1.353 3.659.042 5.385a100.45 100.45 0 007.127 6.742z"></path>
                                </svg>
                            </div>
                            <div class="flex flex-col leading-5">
                                <div class="text-xs font-medium uppercase">sponsored</div>
                                <div class="font-medium ">The Best Activities for Couples in Florida</div>
                                <div class="text-xs">Tripadvisor</div>
                            </div>
                        </div>
                        <div class="text-xs font-medium uppercase my-4 mx-6">recently viewed</div>
                        <div class="h-[72px] py-4 px-6 bg-white w-full flex flex-row items-center gap-2 hover:bg-gray-100 transition duration-200 ease-in-out hover:cursor-pointer">
                            <div class="p-1.5 rounded-full border-slate-200 border-2 bg-white">
                                <svg viewBox="0 0 24 24" width="24px" height="24px">
                                    <path d="M11.277 20.26l.53-.532-.53.532zm.035.035l.537-.524-.008-.008-.53.532zM12 21l-.537.524.529.542.537-.534L12 21zm.688-.684l.529.532.002-.002-.53-.53zm.303-8.458l-.287-.693.287.693zm-1.98-4.783l-.288-.693.287.693zM12 2.25c-4.262 0-7.75 3.46-7.75 7.707h1.5c0-3.41 2.808-6.207 6.25-6.207v-1.5zM4.25 9.957c0 2.269 1.128 4.455 2.452 6.292 1.335 1.85 2.947 3.45 4.047 4.543l1.057-1.064c-1.108-1.1-2.634-2.62-3.887-4.356-1.262-1.75-2.169-3.62-2.169-5.415h-1.5zm6.499 10.835l.034.035 1.058-1.064-.035-.035-1.057 1.064zm.026.026l.688.706 1.074-1.048-.688-.705-1.074 1.047zm1.754.714l.688-.684-1.058-1.064-.688.684 1.058 1.064zm.69-.686c1.096-1.098 2.717-2.706 4.06-4.566 1.333-1.846 2.471-4.043 2.471-6.323h-1.5c0 1.806-.916 3.685-2.187 5.445-1.262 1.747-2.797 3.275-3.905 4.384l1.06 1.06zm6.531-10.89c0-4.246-3.488-7.706-7.75-7.706v1.5c3.442 0 6.25 2.797 6.25 6.207h1.5zm-6.051-1.193a1.838 1.838 0 01-.995 2.402l.574 1.386a3.338 3.338 0 001.807-4.362l-1.386.574zm-.995 2.402a1.838 1.838 0 01-2.402-.995l-1.386.574a3.338 3.338 0 004.362 1.807l-.574-1.386zm-2.402-.995a1.838 1.838 0 01.995-2.402l-.574-1.386a3.338 3.338 0 00-1.807 4.362l1.386-.574zm.995-2.402a1.838 1.838 0 012.402.995l1.386-.574a3.338 3.338 0 00-4.362-1.807l.574 1.386z"></path>
                                </svg>
                            </div>
                            <div class="flex flex-col leading-5">
                                <div class="font-medium ">Stonehenge, Windsor Castle, and Bath from London</div>
                                <div class="text-xs">London, England</div>
                            </div>
                        </div>
                        <div class="bg-slate-200 pb-[1px] mx-6"></div>
                        <div class="h-[72px] py-4 px-6 bg-white w-full flex flex-row items-center gap-2 hover:bg-gray-100 transition duration-200 ease-in-out hover:cursor-pointer">
                            <div class="p-1.5 rounded-full border-slate-200 border-2 bg-white">
                                <svg viewBox="0 0 24 24" width="24px" height="24px">
                                    <path d="M11.277 20.26l.53-.532-.53.532zm.035.035l.537-.524-.008-.008-.53.532zM12 21l-.537.524.529.542.537-.534L12 21zm.688-.684l.529.532.002-.002-.53-.53zm.303-8.458l-.287-.693.287.693zm-1.98-4.783l-.288-.693.287.693zM12 2.25c-4.262 0-7.75 3.46-7.75 7.707h1.5c0-3.41 2.808-6.207 6.25-6.207v-1.5zM4.25 9.957c0 2.269 1.128 4.455 2.452 6.292 1.335 1.85 2.947 3.45 4.047 4.543l1.057-1.064c-1.108-1.1-2.634-2.62-3.887-4.356-1.262-1.75-2.169-3.62-2.169-5.415h-1.5zm6.499 10.835l.034.035 1.058-1.064-.035-.035-1.057 1.064zm.026.026l.688.706 1.074-1.048-.688-.705-1.074 1.047zm1.754.714l.688-.684-1.058-1.064-.688.684 1.058 1.064zm.69-.686c1.096-1.098 2.717-2.706 4.06-4.566 1.333-1.846 2.471-4.043 2.471-6.323h-1.5c0 1.806-.916 3.685-2.187 5.445-1.262 1.747-2.797 3.275-3.905 4.384l1.06 1.06zm6.531-10.89c0-4.246-3.488-7.706-7.75-7.706v1.5c3.442 0 6.25 2.797 6.25 6.207h1.5zm-6.051-1.193a1.838 1.838 0 01-.995 2.402l.574 1.386a3.338 3.338 0 001.807-4.362l-1.386.574zm-.995 2.402a1.838 1.838 0 01-2.402-.995l-1.386.574a3.338 3.338 0 004.362 1.807l-.574-1.386zm-2.402-.995a1.838 1.838 0 01.995-2.402l-.574-1.386a3.338 3.338 0 00-1.807 4.362l1.386-.574zm.995-2.402a1.838 1.838 0 012.402.995l1.386-.574a3.338 3.338 0 00-4.362-1.807l.574 1.386z"></path>
                                </svg>
                            </div>
                            <div class="flex flex-col leading-5">
                                <div class="font-medium ">Spain</div>
                                <div class="text-xs">Europe</div>
                            </div>
                        </div>
                        <div class="bg-slate-200 pb-[1px] mx-6"></div>
                        <div class="h-[72px] py-4 px-6 bg-white w-full flex flex-row items-center gap-2 hover:bg-gray-100 transition duration-200 ease-in-out hover:cursor-pointer">
                            <div class="p-1.5 rounded-full border-slate-200 border-2 bg-white">
                                <svg viewBox="0 0 24 24" width="24px" height="24px">
                                    <path d="M11.277 20.26l.53-.532-.53.532zm.035.035l.537-.524-.008-.008-.53.532zM12 21l-.537.524.529.542.537-.534L12 21zm.688-.684l.529.532.002-.002-.53-.53zm.303-8.458l-.287-.693.287.693zm-1.98-4.783l-.288-.693.287.693zM12 2.25c-4.262 0-7.75 3.46-7.75 7.707h1.5c0-3.41 2.808-6.207 6.25-6.207v-1.5zM4.25 9.957c0 2.269 1.128 4.455 2.452 6.292 1.335 1.85 2.947 3.45 4.047 4.543l1.057-1.064c-1.108-1.1-2.634-2.62-3.887-4.356-1.262-1.75-2.169-3.62-2.169-5.415h-1.5zm6.499 10.835l.034.035 1.058-1.064-.035-.035-1.057 1.064zm.026.026l.688.706 1.074-1.048-.688-.705-1.074 1.047zm1.754.714l.688-.684-1.058-1.064-.688.684 1.058 1.064zm.69-.686c1.096-1.098 2.717-2.706 4.06-4.566 1.333-1.846 2.471-4.043 2.471-6.323h-1.5c0 1.806-.916 3.685-2.187 5.445-1.262 1.747-2.797 3.275-3.905 4.384l1.06 1.06zm6.531-10.89c0-4.246-3.488-7.706-7.75-7.706v1.5c3.442 0 6.25 2.797 6.25 6.207h1.5zm-6.051-1.193a1.838 1.838 0 01-.995 2.402l.574 1.386a3.338 3.338 0 001.807-4.362l-1.386.574zm-.995 2.402a1.838 1.838 0 01-2.402-.995l-1.386.574a3.338 3.338 0 004.362 1.807l-.574-1.386zm-2.402-.995a1.838 1.838 0 01.995-2.402l-.574-1.386a3.338 3.338 0 00-1.807 4.362l1.386-.574zm.995-2.402a1.838 1.838 0 012.402.995l1.386-.574a3.338 3.338 0 00-4.362-1.807l.574 1.386z"></path>
                                </svg>
                            </div>
                            <div class="flex flex-col leading-5">
                                <div class="font-medium ">Lake Tahoe (California)</div>
                                <div class="text-xs">California, United States</div>
                            </div>
                        </div>
                        <div class="bg-slate-200 pb-[1px] mx-6"></div>
                        <div class="h-[72px] py-4 px-6 bg-white w-full flex flex-row items-center gap-2 hover:bg-gray-100 transition duration-200 ease-in-out hover:cursor-pointer">
                            <div class="p-1.5 rounded-full border-slate-200 border-2 bg-white">
                                <svg viewBox="0 0 24 24" width="24px" height="24px">
                                    <path d="M11.277 20.26l.53-.532-.53.532zm.035.035l.537-.524-.008-.008-.53.532zM12 21l-.537.524.529.542.537-.534L12 21zm.688-.684l.529.532.002-.002-.53-.53zm.303-8.458l-.287-.693.287.693zm-1.98-4.783l-.288-.693.287.693zM12 2.25c-4.262 0-7.75 3.46-7.75 7.707h1.5c0-3.41 2.808-6.207 6.25-6.207v-1.5zM4.25 9.957c0 2.269 1.128 4.455 2.452 6.292 1.335 1.85 2.947 3.45 4.047 4.543l1.057-1.064c-1.108-1.1-2.634-2.62-3.887-4.356-1.262-1.75-2.169-3.62-2.169-5.415h-1.5zm6.499 10.835l.034.035 1.058-1.064-.035-.035-1.057 1.064zm.026.026l.688.706 1.074-1.048-.688-.705-1.074 1.047zm1.754.714l.688-.684-1.058-1.064-.688.684 1.058 1.064zm.69-.686c1.096-1.098 2.717-2.706 4.06-4.566 1.333-1.846 2.471-4.043 2.471-6.323h-1.5c0 1.806-.916 3.685-2.187 5.445-1.262 1.747-2.797 3.275-3.905 4.384l1.06 1.06zm6.531-10.89c0-4.246-3.488-7.706-7.75-7.706v1.5c3.442 0 6.25 2.797 6.25 6.207h1.5zm-6.051-1.193a1.838 1.838 0 01-.995 2.402l.574 1.386a3.338 3.338 0 001.807-4.362l-1.386.574zm-.995 2.402a1.838 1.838 0 01-2.402-.995l-1.386.574a3.338 3.338 0 004.362 1.807l-.574-1.386zm-2.402-.995a1.838 1.838 0 01.995-2.402l-.574-1.386a3.338 3.338 0 00-1.807 4.362l1.386-.574zm.995-2.402a1.838 1.838 0 012.402.995l1.386-.574a3.338 3.338 0 00-4.362-1.807l.574 1.386z"></path>
                                </svg>
                            </div>
                            <div class="flex flex-col leading-5">
                                <div class="font-medium ">Turkiye</div>
                                <div class="text-xs">Europe</div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    </div>
    */}
