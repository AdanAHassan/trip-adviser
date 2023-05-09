import { useState, useRef } from "react"
import { RxCross2 } from "react-icons/rx"
import { BsChevronDown } from "react-icons/bs"


const Header = ({totalHeight, RecentlyViewed, filterItems}) => {
    const headerRef = useRef()

    const [searchBool, setSearchBool] = useState(false)
    const [search, setSearch] = useState("")
    
    const checkBool = () => {
        setSearchBool(window.scrollY>totalHeight)
//         I tried use scollPos but for some reason it was unreliable and glitch. The bar would be visible above the scroll positio and when I checked the scrollPos would randomly reset to 0 on every scroll. window.scrollY is very fast and reliable
    }
window.addEventListener('scroll', checkBool)

    const [revealBool, setRevealBool] = useState(false)
// lg:1024 md:768 difference is 256 pixels but i need to gain 84px width which is 1/3px per gain in screenwidth calc(514px + ((100% -768px)/3))
// 33% -256 + 514

    const [sidebarBool, setSidebarBool] = useState(false)
    const [sidebarBoolTwo, setSidebarBoolTwo] = useState(false)
    const handleSidebar = () => {
        setSidebarBool((prevState) => !prevState)
        setSidebarBoolTwo((prevState) => !prevState)
      }

    
    const insertArr = [
        {
            text: "Write a review"
        },
        {
            text: "Post photos"
        },
        {
            text: "Alerts"
        },
        {
            text: "Trips"
        },
        {
            text: "Bookings"
        }
    ]

    
    const [moreButton, setMoreButton] = useState(false)
    const handleMoreButton = () => {
        setMoreButton((prevState) => !prevState);
      }
    
    
  return (
    <div ref={headerRef} class="max-w-[1136px] mx-auto">
      <div class="flex items-center h-[50px] md:h-[60px] gap-2 justify-between mx-6 xl:mx-0">
        <button onClick={() => {setSidebarBoolTwo(true); setTimeout(() => setSidebarBool(true),1)}} class="block md:hidden border-slate-700 hover:cursor-pointer">
            <svg viewBox="0 0 24 24" width="24px" height="24px">
                <path fillrule="evenodd" cliprule="evenodd" d="M21 7.75H3v-1.5h18v1.5zm0 5H3v-1.5h18v1.5zm0 5H3v-1.5h18v1.5z"></path>
            </svg>
        </button>
        <div class={`bg-black/40 h-screen w-screen absolute top-0 left-0 flex-row transition ${sidebarBoolTwo ? "flex" : "hidden" } flex duration-1000`}>
            <div class={`flex flex-col bg-white h-full w-96 text-start items-start overflow-y-scroll px-4 pt-14 pb-8 gap-4 ${sidebarBool ? "translate-x-[0%]" : "translate-x-[-100%]" } duration-1000`}>
                <div onClick={() => {setSidebarBool(false); setTimeout(() => setSidebarBoolTwo(false),1000); setTimeout(() => setMoreButton(false),1500)}} class="absolute text-xl font-black top-4 left-[350px] hover:cursor-pointer"><RxCross2/></div>
                <div class="bg-black py-2 px-4 font-medium text-center text-white rounded-full w-[90%] self-center">Sign in</div>
                <div class="flex flex-col gap-6 text-xl pt-4 font-medium">
                    {
                        insertArr.map((item, index) => (
                            <div class="pl-2 text-black hover:underline decoration-solid hover:cursor-pointer">{item.text}
                            </div>
                        ))
                    }
                </div>
                <hr class="bg-black w-4/5"/>
                <div class="flex flex-col gap-1 w-full">
                    {
                        filterItems.map((item, index) => 
                        item.hidden
                            ?
                        (
                            <div class={`text-black hover:bg-slate-200/50 rounded w-full py-2 pl-2 hover:cursor-pointer ${!moreButton && "hidden"}`}>{item.text}
                            </div>
                        )
                            :
                        item.more
                            ?
                        (
                            <div onClick={handleMoreButton} class={`text-black flex flex-row items-center gap-2 hover:bg-slate-200/50 rounded w-full py-2 pl-2 hover:cursor-pointer ${moreButton && "hidden"}`}><>{item.text}</>
                            <BsChevronDown />
                            </div>
                        )
                            :
                        (
                            <div class={`text-black hover:bg-slate-200/50 rounded w-full py-2 pl-2 hover:cursor-pointer`}>{item.text}
                            </div>
                        )
                        )
                    }
                </div>
            </div>
        </div>
        <div class="w-46 flex flex-initial mx-auto md:grow-0">
            <img class="w-[132px] md:w-[188px]" src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_lockup_horizontal_secondary_registered.svg" alt="Tripadvisor lockup horizontal secondary registered"
            />
        </div>
        <div class="flex flex-row justify-end md:grow items-center gap-2 ">
          <div class="buttons flex flex-row gap-4 items-center grow">
            <div class={`hidden ${searchBool ? "md:flex" : "md:hidden" } flex flex-row w-52 items-center flex-initial bg-white grow pl-6`}>
                <div class="flex flex-row items-center pl-4 absolute justfiy-center w-fit">
                    <svg viewBox="0 0 24 24" width="24px" height="24px">
                        <path fillrule="evenodd" cliprule="evenodd" d="M9.74 3.75a5.99 5.99 0 100 11.98 5.99 5.99 0 000-11.98zM2.25 9.74a7.49 7.49 0 1113.3 4.728l5.44 5.442-1.06 1.06-5.44-5.439A7.49 7.49 0 012.25 9.74z"></path>
                    </svg>
                </div>
                <input onFocus={() => setRevealBool(true)} 
                    class="form-input focus:outline-none w-full rounded-full border-2 border-slate-200 py-1.5 pl-12"
                    type="text" 
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                >
                </input>
            </div>
            <div class={`${revealBool ? "flex" : "hidden" } bg-green-900 `}>
                <div onClick={() => setRevealBool(false)} class="fixed top-0 right-0 bg-white/90 w-full h-full"></div>
                <div  onFocus={() => setRevealBool(true)} class={`bg-white left-0 md:left-[220px] lg:inset-x-0 w-full mx-auto md:h-fit md:w-[calc(278px+(100%/3.333))] md:max-w-[700px] shrink fixed ${revealBool ? "top-0 h-full" : "h-fit top-1.5" } md:top-1.5 rounded-sm flex-initial drop-shadow-2xl pb-4 border-[1px] border-slate-400/50`}>
                    <div class="flex flex-row items-center justify-start pl-6">
                        <div onClick={() => setRevealBool(false)} class="flex flex-row items-center scale-75 absolute justfiy-center order-1 md:hidden hover:cursor-pointer">
                            <svg viewBox="0 0 24 24" width="24px" height="24px">
                                <path d="M10.304 3.506l-8.048 8.047a.644.644 0 000 .895l8.048 8.047a.624.624 0 00.883 0l.882-.883a.624.624 0 000-.883l-5.481-5.48h14.714a.625.625 0 00.623-.625v-1.248a.624.624 0 00-.623-.624H6.588l5.481-5.481a.624.624 0 000-.883l-.882-.883a.623.623 0 00-.883-.004c-.001.002-.002.003 0 .005z"></path>
                            </svg>
                        </div>
                        <div class={`flex flex-row items-center ${revealBool ?  "pr-6 md:pr-0": "pr-0"} md:pl-4 absolute justfiy-center order-last md:order-1 right-0 md:left-0 scale-75 md:scale-100 w-fit`}>
                            <svg viewBox="0 0 24 24" width="24px" height="24px">
                                <path fillrule="evenodd" cliprule="evenodd" d="M9.74 3.75a5.99 5.99 0 100 11.98 5.99 5.99 0 000-11.98zM2.25 9.74a7.49 7.49 0 1113.3 4.728l5.44 5.442-1.06 1.06-5.44-5.439A7.49 7.49 0 012.25 9.74z"></path>
                            </svg>
                        </div>
                        <input 
                            class="form-input focus:outline-none w-full bg-white py-[11px] pl-6"
                            type="text" 
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        >
                        </input>
                    </div>
                    <div class="bg-black pb-0.5 mx-3">
                    </div>
                    <div class="h-[72px] py-4 px-6 bg-white w-full flex flex-row items-center gap-2 hover:bg-slate-100 transition duration-200 ease-in-out hover:cursor-pointer">
                        <div class="p-1.5 rounded-full border-slate-200 border-2 bg-white">
                            <svg viewBox="0 0 24 24" width="24px" height="24px">
                                <path fillrule="evenodd" cliprule="evenodd" d="M19.497 4.612a.85.85 0 011.08 1.072l-5.055 15.29c-.254.769-1.337.781-1.608.019l-2.487-6.988-7.068-2.673c-.746-.282-.728-1.344.028-1.6l15.11-5.12zm-.754 1.84L6.586 10.57l5.653 2.138a.85.85 0 01.5.51l1.953 5.487L18.743 6.45z"></path>
                            </svg>
                        </div>
                        <div class="font-medium">Nearby</div>
                    </div>
                    <div class="bg-slate-200 pb-[1px] mx-6"></div>
                    <div class="h-[72px] py-4 px-6 bg-white w-full flex flex-row items-center gap-2 hover:bg-slate-100 transition duration-200 ease-in-out hover:cursor-pointer">
                        <div class="p-1.5 rounded-full border-slate-200 border-2 bg-white">
                            <svg viewBox="0 0 24 24" width="24px" height="24px">
                                <path fillrule="evenodd" cliprule="evenodd" d="M3.798 5.786A5.769 5.769 0 017.72 4.25c1.455 0 2.857.548 3.922 1.536l.005.005.341.322.332-.317a5.769 5.769 0 013.928-1.54c1.458 0 2.862.55 3.928 1.54l.004.004c1.093 1.032 1.599 2.324 1.569 3.662-.03 1.323-.578 2.643-1.5 3.785-.884 1.096-2.85 2.943-4.547 4.478a183.566 183.566 0 01-3.153 2.785l-.069.059-.489-.569.49.569-.486.416-.488-.412a101.98 101.98 0 01-7.75-7.288l-.021-.021-.02-.023c-1.725-2.115-2.203-5.32.08-7.453l.002-.002zm8.19 13.226a174.415 174.415 0 002.708-2.4c1.72-1.556 3.59-3.32 4.385-4.306.757-.939 1.148-1.948 1.168-2.877.02-.912-.313-1.795-1.097-2.536a4.269 4.269 0 00-2.904-1.138 4.269 4.269 0 00-2.903 1.136l-1.35 1.292-1.375-1.3a4.269 4.269 0 00-2.9-1.133 4.269 4.269 0 00-2.901 1.135c-1.507 1.408-1.353 3.659.042 5.385a100.45 100.45 0 007.127 6.742z"></path>
                            </svg>
                        </div>
                        <div class="flex flex-col leading-5">
                            <div class="text-xs font-medium uppercase">sponsored</div>
                            <div class="font-medium ">The Best Activities for Couples in Florida</div>
                            <div class="text-xs">Tripadvisor</div>
                        </div>
                    </div>
                    <div class="text-xs font-medium uppercase my-4 mx-6">recently viewed</div>
                    <div class="h-[72px] py-4 px-6 bg-white w-full flex flex-row items-center gap-2 hover:bg-slate-100 transition duration-200 ease-in-out hover:cursor-pointer">
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
                    <div class="h-[72px] py-4 px-6 bg-white w-full flex flex-row items-center gap-2 hover:bg-slate-100 transition duration-200 ease-in-out hover:cursor-pointer">
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
                    <div class="h-[72px] py-4 px-6 bg-white w-full flex flex-row items-center gap-2 hover:bg-slate-100 transition duration-200 ease-in-out hover:cursor-pointer">
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
                    <div class="h-[72px] py-4 px-6 bg-white w-full flex flex-row items-center gap-2 hover:bg-slate-100 transition duration-200 ease-in-out hover:cursor-pointer">
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
        <div class="review hidden md:flex flex-none flex-row hover:bg-slate-200/80 p-2 rounded-full ease-in-out duration-100">
            <svg viewBox="0 0 24 24" width="24px" height="24px">
                    <path fillrule="evenodd" cliprule="evenodd" d="M14.288 6.793L6.69 14.368l-.816 3.746 3.724-.839 7.588-7.583-2.9-2.9zm3.96 1.84l-2.898-2.9.556-.554A2.318 2.318 0 0117.52 4.5c.378 0 .73.104 1.031.315l.01.007.012.008c1.12.757 1.221 2.26.326 3.151l-.65.651zm-7.896 10.01l-5.99 1.35C4.34 20 4.319 20 4.298 20a.297.297 0 01-.29-.36l1.31-6.023 9.529-9.5A3.818 3.818 0 0117.52 3c.66 0 1.318.184 1.893.587a3.536 3.536 0 01.546 5.457l-9.607 9.599z"></path>
            </svg>
            <p class="hidden lg:block">Review</p>
        </div>
        <div class="trips hidden md:flex flex-row hover:bg-slate-200/80 p-2 rounded-full ease-in-out duration-100">
            <svg viewBox="0 0 24 24" width="24px" height="24px">
                <path fillrule="evenodd" cliprule="evenodd" d="M3.798 5.786A5.769 5.769 0 017.72 4.25c1.455 0 2.857.548 3.922 1.536l.005.005.341.322.332-.317a5.769 5.769 0 013.928-1.54c1.458 0 2.862.55 3.928 1.54l.004.004c1.093 1.032 1.599 2.324 1.569 3.662-.03 1.323-.578 2.643-1.5 3.785-.884 1.096-2.85 2.943-4.547 4.478a183.566 183.566 0 01-3.153 2.785l-.069.059-.489-.569.49.569-.486.416-.488-.412a101.98 101.98 0 01-7.75-7.288l-.021-.021-.02-.023c-1.725-2.115-2.203-5.32.08-7.453l.002-.002zm8.19 13.226a174.415 174.415 0 002.708-2.4c1.72-1.556 3.59-3.32 4.385-4.306.757-.939 1.148-1.948 1.168-2.877.02-.912-.313-1.795-1.097-2.536a4.269 4.269 0 00-2.904-1.138 4.269 4.269 0 00-2.903 1.136l-1.35 1.292-1.375-1.3a4.269 4.269 0 00-2.9-1.133 4.269 4.269 0 00-2.901 1.135c-1.507 1.408-1.353 3.659.042 5.385a100.45 100.45 0 007.127 6.742z"></path>
                </svg>
            <p class="hidden lg:block">Trips</p>
        </div>
        <div class="alerts hidden md:flex flex-row hover:bg-slate-200/80 p-2 rounded-full ease-in-out duration-100">
            <svg viewBox="0 0 24 24" width="24px" height="24px">
                <path fillrule="evenodd" cliprule="evenodd" d="M12 2.25a.75.75 0 01.75.75v1.283c1.865.168 3.412.964 4.529 2.218 1.254 1.409 1.922 3.343 1.956 5.487.013.811.015 4.106.015 5.762H21v1.5h-5.336c-.063.31-.172.694-.368 1.085-.232.464-.592.951-1.146 1.32-.558.372-1.269.595-2.15.595s-1.592-.223-2.15-.595a3.382 3.382 0 01-1.146-1.32 4.378 4.378 0 01-.368-1.085H3v-1.5h1.75c0-1.651.002-4.932.015-5.755C4.76 9.843 5.43 7.907 6.694 6.5 7.82 5.245 9.384 4.45 11.25 4.283V3a.75.75 0 01.75-.75zm-5.75 15.5h11.5c0-1.657-.002-4.94-.015-5.738-.03-1.856-.604-3.422-1.576-4.513C15.196 6.418 13.799 5.75 12 5.75c-1.8 0-3.218.67-4.19 1.751-.98 1.09-1.552 2.651-1.545 4.496v.015a748.17 748.17 0 00-.015 5.738zm3.632 1.5c.04.135.094.276.164.415.143.286.346.549.636.742.285.19.7.343 1.318.343.619 0 1.033-.152 1.318-.343.29-.193.493-.456.636-.742a2.7 2.7 0 00.164-.415H9.883z"></path>
            </svg>
            <p class="hidden lg:block">Alerts</p>
        </div>
        <div class="sign-in hidden md:flex">
            <button class="bg-black px-4 py-2.5 font-medium rounded-full text-white hover:opacity-80 ease-in-out duration-150">Sign in</button>
        </div>
        </div>
        <div onClick={() => setRevealBool(true)} class="content-end search block md:hidden">
            <svg viewBox="0 0 24 24" width="24px" height="24px">
            <path fillrule="evenodd" cliprule="evenodd" d="M9.74 3.75a5.99 5.99 0 100 11.98 5.99 5.99 0 000-11.98zM2.25 9.74a7.49 7.49 0 1113.3 4.728l5.44 5.442-1.06 1.06-5.44-5.439A7.49 7.49 0 012.25 9.74z"></path>
            </svg>
        </div>
        <div class="cart flex flex-row hover:bg-slate-200/80 p-2 rounded-full ease-in-out duration-100 mr-2">
            <svg viewBox="0 0 24 24" width="24px" height="24px">
              <path fillrule="evenodd" cliprule="evenodd" d="M4.5 4.75H2v-1.5h2.5c.779 0 1.354.398 1.71.844.339.423.54.959.54 1.406v.25h14.71l-1.874 7.5H6.75v1.25c0 .29.164.76.475 1.175.327.436.632.575.775.575h9a2.75 2.75 0 11-2.45 1.5h-3.1a2.75 2.75 0 11-4.645-.407c-.314-.219-.578-.499-.78-.768-.439-.585-.775-1.365-.775-2.075v-9a.95.95 0 00-.21-.469c-.144-.179-.319-.281-.54-.281zm4.5 13a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5zm8 0a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5zm-10.25-6h11.664l1.125-4.5H6.75v4.5z"></path>
            </svg>
          <p class="hidden lg:block">Basket</p>
        </div>
      </div>
    </div>
  )
}

export default Header
