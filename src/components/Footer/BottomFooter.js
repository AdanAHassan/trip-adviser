import { useState } from "react"

const BottomFooter = () => {
    
    const [moreButton, setMoreButton] = useState(false)
    const handleMoreButton = () => {
        setMoreButton((prevState) => !prevState);
      };
      
  return (

    <div class="flex flex-col p-6">
        <div class="flex flex-row gap-4 pb-2 items-start">
            <img class="w-10" src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_logoset_solid_green.svg" alt="tripadvisor logo solid green"/>
            <div class="flex flex-col text-start gap-0.5">
                <div class="text-xs font-light">&copy; 2023 Tripadvisor LLC All rights reserved.</div>
                <div class="flex flex-row text-sm font-medium flex-wrap md:gap-4 underline decoration-1 underline-offset-2">
                    <div class="hover:opacity-70 pr-4 md:pr-0">Terms of Use</div>
                    <div class="hover:opacity-70 pr-4 md:pr-0"><a href="https://tripadvdisor.mediaroom.com/uk-privacy-policy">Privacy and Cookies Statement</a></div>
                    <div class="hover:opacity-70 pr-4 md:pr-0">Cookie consent</div>
                    <div class="hover:opacity-70 pr-4 md:pr-0"><a href="https://www.tripadvisor.co.uk/SiteIndex">Site Map</a></div>
                    <div class="hover:opacity-70 pr-4 md:pr-0"><a href="https://www.tripadvisor.co.uk/pages/service_en_UK.html">How the site works</a></div>
                    <div class="hover:opacity-70 pr-4 md:pr-0"><a href="https://tripadvisor.mediaroom.com/UK-contact-us">Contact us</a></div>
                </div>
            </div>
        </div>
        <div class="text-xs text-start font-light flex flex-col gap-2.5">
            <div>This is the version of our website addressed to speakers of English in United Kingdom. If you are a resident of another country or region, please select the appropriate version of Tripadvisor for your country or region in the drop-down menu. <button onClick={handleMoreButton} class={`font-medium text-[11px] ${moreButton && "hidden"}`} >more</button></div>
        
            <div class={`${!moreButton && "hidden"}`}>TripAdvisor LLC makes no guarantees for availability of prices advertised on our sites and applications. Listed prices may require a stay of a particular length or have blackout dates, qualifications or other applicable restrictions. TripAdvisor LLC is not responsible for any content on external web sites that are not owned or operated by Tripadvisor.</div>
        
            <div class={`${!moreButton && "hidden"}`}>TripAdvisor LLC is not a booking agent or tour operator. When you book with one of our partners, please be sure to check their site for a full disclosure of all applicable fees.</div>
        
        </div>
    </div>
  )
}

export default BottomFooter  
