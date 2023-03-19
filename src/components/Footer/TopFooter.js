import { useState } from "react"

const TopFooter = ({footerTitles}) => {
    const [toggleAbout, setToggleAbout] = useState(false)
    const [toggleExplore, setToggleExplore] = useState(false)
    const [toggleBusiness, setToggleBusiness] = useState(false)
    const [toggleApp, setToggleApp] = useState(false)
    const [toggleSites, setToggleSites] = useState(false)
    
    const buttonFunctions = {
        buttonAbout: function() {setToggleAbout(!toggleAbout)
        },
        buttonExplore: function() {setToggleExplore(!toggleExplore)
        },
        buttonBusiness: function() {setToggleBusiness(!toggleBusiness)
        },
        buttonApp: function() {setToggleApp(!toggleApp)
        },
        buttonSites: function() {setToggleSites(!toggleSites)
        },
        key: function(n) {
        return this[Object.keys(this)[n]];
    }
    }
    
    const AboutData = footerTitles[0].subtitle
    const ExploreData = footerTitles[1].subtitle
    const BusinessData = footerTitles[2].subtitle
    const AppData = footerTitles[3].subtitle
    
    
  return (
    <div class="pt-10 flex flex-col lg:flex-row lg:justify-between pr-4">
                <div class="items-start justify-start flex flex-row pl-6 gap-4 pb-8">
                    <svg onClick={buttonFunctions.key(0)} class="w-3 lg:hidden" viewBox="0 0 24 24" width="24px" height="24px">
                        <path class={!toggleAbout && `hidden`} fill-rule="evenodd" clip-rule="evenodd" d="M11.25 11.25V3h1.5v8.25H21v1.5h-8.25V21h-1.5v-8.25H3v-1.5h8.25z"></path>
                        <path class={toggleAbout && `hidden`} fill-rule="evenodd" clip-rule="evenodd" d="M22 12H2.208v-1.5H22V12z"></path>
                    </svg>
                    <div class="flex flex-col items-start gap-1">
                    <button onClick={buttonFunctions.key(0)} class="text-base font-light pb-1 hover:underline">About Tripadvisor</button>
                    <div class={!toggleAbout && `hidden lg:flex flex-col`}>
                    {AboutData.map((item) => (
                                <div class="font-light text-start text-sm hover:opacity=70" dangerouslySetInnerHTML={{__html: item}}/>
                        ))
                    }
                        </div>
                    </div>
                </div>
                <div class="items-start justify-start flex flex-row pl-6 gap-4 pb-8">
                
                    <svg onClick={buttonFunctions.key(1)} class="w-3 lg:hidden" viewBox="0 0 24 24" width="24px" height="24px">
                        <path class={!toggleExplore && `hidden`} fill-rule="evenodd" clip-rule="evenodd" d="M11.25 11.25V3h1.5v8.25H21v1.5h-8.25V21h-1.5v-8.25H3v-1.5h8.25z"></path>
                        <path class={toggleExplore && `hidden`} fill-rule="evenodd" clip-rule="evenodd" d="M22 12H2.208v-1.5H22V12z"></path>
                    </svg>
                    <div class="flex flex-col items-start gap-1">
                    <button onClick={buttonFunctions.key(1)} class="text-base font-light pb-1 hover:underline">Explore</button>
                    <div class={!toggleExplore && `hidden lg:flex flex-col`}>
                    {ExploreData.map((item) => (
                                <div class="font-light text-start text-sm hover:opacity=70" dangerouslySetInnerHTML={{__html: item}}/>
                        ))
                    }
                        </div>
                    </div>
                </div>
                <div class="items-start justify-start flex flex-row pl-6 gap-4 pb-8">
                
                    <svg onClick={buttonFunctions.key(2)} class="w-3 lg:hidden" viewBox="0 0 24 24" width="24px" height="24px">
                        <path class={!toggleBusiness && `hidden`} fill-rule="evenodd" clip-rule="evenodd" d="M11.25 11.25V3h1.5v8.25H21v1.5h-8.25V21h-1.5v-8.25H3v-1.5h8.25z"></path>
                        <path class={toggleBusiness && `hidden`} fill-rule="evenodd" clip-rule="evenodd" d="M22 12H2.208v-1.5H22V12z"></path>
                    </svg>
                    <div class="flex flex-col items-start gap-1">
                    <button onClick={buttonFunctions.key(2)} class="text-base font-light pb-1 hover:underline">Do Business With Us</button>
                    <div class={!toggleBusiness && `hidden lg:flex flex-col`}>
                    {BusinessData.map((item) => (
                                <div class="font-light text-start text-sm hover:opacity=70" dangerouslySetInnerHTML={{__html: item}}/>
                        ))
                    }
                        </div>
                    </div>
                </div>
                <div class="items-start justify-start flex flex-row pl-6 gap-4 pb-8">
                
                    <svg onClick={buttonFunctions.key(3)} class="w-3 lg:hidden" viewBox="0 0 24 24" width="24px" height="24px">
                        <path class={!toggleApp && `hidden`} fill-rule="evenodd" clip-rule="evenodd" d="M11.25 11.25V3h1.5v8.25H21v1.5h-8.25V21h-1.5v-8.25H3v-1.5h8.25z"></path>
                        <path class={toggleApp && `hidden`} fill-rule="evenodd" clip-rule="evenodd" d="M22 12H2.208v-1.5H22V12z"></path>
                    </svg>
                    <div class="flex flex-col items-start gap-1">
                    <button onClick={buttonFunctions.key(3)} class="text-base font-light pb-1 hover:underline">Get The App</button>
                    <div class={!toggleApp && `hidden lg:flex flex-col`}>
                    {AppData.map((item) => (
                                <div class="font-light text-start text-sm hover:opacity=70" dangerouslySetInnerHTML={{__html: item}}/>
                        ))
                    }
                        </div>
                    </div>
                </div>
                <div class="items-start justify-start flex flex-row pl-6 gap-4 pb-8">
                
                    <svg onClick={buttonFunctions.key(4)} class="w-3 lg:hidden" viewBox="0 0 24 24" width="24px" height="24px">
                        <path class={!toggleSites && `hidden`} fill-rule="evenodd" clip-rule="evenodd" d="M11.25 11.25V3h1.5v8.25H21v1.5h-8.25V21h-1.5v-8.25H3v-1.5h8.25z"></path>
                        <path class={toggleSites && `hidden`} fill-rule="evenodd" clip-rule="evenodd" d="M22 12H2.208v-1.5H22V12z"></path>
                    </svg>
                    <div class="flex flex-col items-start gap-1">
                    <button onClick={buttonFunctions.key(4)} class="text-base font-light pb-1 hover:underline">Tripadvisor Sites</button>
                    <div class={!toggleSites && `hidden lg:flex flex-col`}>
            <div class="font-light text-start text-sm">
            Book the best restaurants with <a target="_blank" class="font-medium hover:underline hover:opacity-70 decoration-1" href="https://www.thefork.co.uk/" rel="noreferrer">TheFork</a></div>
            <div class="font-light text-start text-sm">Book tours and attraction tickets on  <a target="_blank" class="font-medium hover:underline hover:opacity-70 decoration-1" href="https://www.viator.com/en-GB/" rel="noreferrer">Viator</a></div>
            <div class="font-light text-start text-sm">Read cruise reviews on <a target="_blank" class="font-medium hover:underline hover:opacity-70 decoration-1" href="https://www.cruisecritic.co.uk/" rel="noreferrer">Cruise Critic</a></div>
            <div class="font-light text-start text-sm">Search for holiday rentals on <a target="_blank" class="font-medium hover:underline hover:opacity-70 decoration-1" href="https://www.holidaylettings.co.uk/" rel="noreferrer">Holiday Lettings</a></div>
                        </div>
                    </div>
                </div>
    
    </div>
  )
}

export default TopFooter  

                     
