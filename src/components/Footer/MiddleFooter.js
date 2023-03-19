import { useState } from "react"

const MiddleFooter = ({footerTitles}) => {
    const [currencyButton, setCurrencyButton] = useState(false)
    const [countryButton, setCountryButton] = useState(false)
  
    const handleCurrencyButton = () => {
        setCurrencyButton((prevState) => !prevState);
      };
    const handleCountryButton = () => {
        setCountryButton((prevState) => !prevState);
      };
    
  return (
    <div class="flex flex-col gap-6">
        <div class="flex flex-row gap-4 px-6 text-start text-md font-medium">
            <div class="w-1/2 bg-white rounded-xl py-1 border-2 pl-4 hover:bg-blue-100/30 transition duration-200 ease-in-out">
                <button onClick={handleCurrencyButton} class="flex flex-row justify-between w-full">
                    <h2>£ GBP</h2>
                    <svg class="w-12" viewBox="0 0 24 24" width="24px" height="24px">
                        <path class={!currencyButton && `hidden`} d="M19.324 9.175l-6.8 6.6c-.3.301-.7.301-1 0l-6.8-6.6c-.3-.3-.3-.7 0-1 .1-.101.3-.2.5-.2h13.6c.4 0 .7.3.7.7 0 .2-.1.399-.2.5z"></path>
                        <path class={currencyButton && `hidden`} d="M4.7 14.8l6.8-6.6c.3-.3.7-.3 1 0l6.8 6.6c.3.3.3.7 0 1-.1.1-.3.2-.5.2H5.2c-.4 0-.7-.3-.7-.7 0-.2.1-.4.2-.5z"></path>
                    </svg>
                </button>
                
            </div>
            <div class="w-1/2 bg-white rounded-xl py-1 border-2 pl-4 hover:bg-blue-100/30 transition duration-200 ease-in-out">
                <button onClick={handleCountryButton} class="flex flex-row justify-between w-full">
                    <h2>UK</h2>
                    <svg class="w-12" viewBox="0 0 24 24" width="24px" height="24px">
                        <path class={!countryButton && `hidden`} d="M19.324 9.175l-6.8 6.6c-.3.301-.7.301-1 0l-6.8-6.6c-.3-.3-.3-.7 0-1 .1-.101.3-.2.5-.2h13.6c.4 0 .7.3.7.7 0 .2-.1.399-.2.5z"></path>
                        <path class={countryButton && `hidden`} d="M4.7 14.8l6.8-6.6c.3-.3.7-.3 1 0l6.8 6.6c.3.3.3.7 0 1-.1.1-.3.2-.5.2H5.2c-.4 0-.7-.3-.7-.7 0-.2.1-.4.2-.5z"></path>
                    </svg>
                </button>
            </div>
        </div>
        {/*
        <div class="px-6 gap-6 flex flex-row z-30 absolute w-full ">
            <div class={`bg-green-500 w-1/2 ${currencyButton && "hidden"}`}>Lorem</div>
            <div class={`bg-green-500 w-1/2 ${currencyButton && "hidden"}`}>Lorem</div>
        </div>
        */}
        <div class="flex flex-row justify-end pr-3">
            <div class="w-12 hover:opacity-70" title="Facebook"><a href="/ShowUrl-a_partnerKey.1-a_url.http%3A__2F____2F__www__2E__facebook__2E__com__2F__TripAdvisor-a_urlKey.15090f72418302936.html">
                <svg class="w-12" viewBox="0 0 24 24" width="24px" height="24px">
                        <path d="M12.001 2.061C6.478 2.061 2 6.537 2 12.061c0 4.993 3.661 9.132 8.445 9.879v-6.99H7.89v-2.889h2.556l.001-2.203c0-2.506 1.484-3.896 3.769-3.896 1.095 0 2.23.21 2.23.21v2.445h-1.253c-1.242 0-1.639.777-1.639 1.568l.003 1.876h2.777l-.444 2.889h-2.333v6.99C18.34 21.192 22 17.054 22 12.061c0-5.524-4.477-10-9.999-10z"></path>
                </svg>
            </a></div>
           <div class="w-12 hover:opacity-70" title="Twitter"><a href="https://www.tripadvisor.co.uk/ShowUrl-a_partnerKey.1-a_url.https%3A__2F____2F__twitter__2E__com__2F__TripAdvisorUK-a_urlKey.bfb24c722a7bcd1ca.html" title="Twitter">
                <svg class="w-12" viewBox="0 0 24 24" width="24px" height="24px">
                        <path d="M2 18.1c2.2.2 4.3-.5 5.9-1.899-1.2-.101-3.6-2.4-4-2.9h1.6c-1.9-.5-3.2-2.2-3.2-4.1.6.099 1.2.299 1.7.499h.2C2.7 8.3 2.2 6 3.1 4.1c2.1 2.6 5.3 4.2 8.6 4.4V7.4c.1-2.2 2-4 4.2-4 .9 0 1.7.3 2.4.8.4.3.8.3 1.2.2l1.9-.7c-.4.9-.9 1.6-1.6 2.3.601-.1 1.3-.4 1.9-.5l.3.2c-.6.5-1.2 1.1-1.7 1.5-.1.3-.2.7-.2 1.1 0 1.9-.5 3.8-1.3 5.601A11.982 11.982 0 019.5 20.1c-2.4.2-4.9-.199-7-1.3l-.5-.7"></path>
                </svg>
            </a></div>
           <div class="w-12 hover:opacity-70" title="Pinterest"><a href="https://www.tripadvisor.co.uk/ShowUrl-a_partnerKey.1-a_url.https%3A__2F____2F__www__2E__pinterest__2E__com__2F__tripadvisor__2F__-a_urlKey.37f0c4f6234c37ed3.html" title="Pinterest">
                <svg class="w-12" viewBox="0 0 24 24" width="24px" height="24px">
                        <path d="M14.94 2.575c-.804-.458-1.839-.573-2.873-.573C6.547 2.001 2.06 6.488 2.06 12.009c0 4.142 2.53 7.821 6.327 9.317a12.03 12.03 0 010-2.876c.229-.806 1.149-4.946 1.149-4.946a3.169 3.169 0 01-.346-1.495c0-1.381.805-2.416 1.841-2.416.689 0 1.266.575 1.266 1.266v.115c-.229 1.15-.459 2.185-.806 3.334-.229.805.229 1.61 1.035 1.727h.461c1.726 0 3.104-1.841 3.104-4.602.116-2.186-1.609-4.025-3.795-4.025h-.346c-2.3-.116-4.255 1.724-4.37 4.14v.229c0 .805.229 1.609.689 2.301.115.114.115.229.115.229a6.646 6.646 0 00-.229 1.147c0 .229-.116.229-.347.116-1.265-.807-2.069-2.3-2.069-3.913 0-3.105 2.3-5.98 6.556-5.98 3.221-.115 5.98 2.3 6.096 5.521v.229c0 3.454-2.186 6.211-5.174 6.211-.922 0-1.729-.346-2.304-1.148 0 0-.459 1.955-.575 2.415-.345.92-.689 1.842-1.266 2.646 5.292 1.609 10.812-1.267 12.421-6.558C23.104 9.707 20.23 4.186 14.94 2.575z"></path>
                </svg>
            </a></div>
           <div class="w-12 hover:opacity-70" title="Instagram"><a href="https://www.tripadvisor.co.uk/ShowUrl-a_partnerKey.1-a_url.https%3A__2F____2F__instagram__2E__com__2F__tripadvisor__2F__-a_urlKey.95e728d4c18d14f29.html" title="Instagram">
                <svg class="w-12" viewBox="0 0 24 24" width="24px" height="24px">
                        <path d="M21.938 7.9c0-.8-.199-1.6-.5-2.4-.5-1.4-1.5-2.5-2.9-3-.799-.3-1.6-.4-2.4-.5h-4.099c-1.4 0-2.8 0-4.2.1-.8 0-1.6.2-2.3.5-1.3.5-2.4 1.5-2.9 2.8-.3.8-.5 1.6-.5 2.5 0 1.1-.1 1.4-.1 4.1-.1 1.4-.1 2.7 0 4.1 0 .801.2 1.601.5 2.4.5 1.3 1.6 2.4 2.9 2.9.8.3 1.6.399 2.4.5 1.4.1 2.8.1 4.2.1s2.8 0 4.099-.1c.801 0 1.602-.2 2.4-.5a5.17 5.17 0 002.9-2.9c.301-.8.398-1.6.5-2.4 0-1.1.1-1.399.1-4.1s-.1-3.1-.1-4.1zM20.137 16c0 .6-.1 1.3-.299 1.9-.301.898-1 1.6-1.9 1.898-.6.201-1.301.301-1.9.301-1.1 0-1.4.102-4 .102-1.3 0-2.7 0-4-.102-.6 0-1.2-.1-1.9-.3-.9-.3-1.6-1-1.9-1.899-.3-.601-.4-1.2-.4-1.9 0-1.1-.1-1.4-.1-4 0-1.3 0-2.7.1-4 .1-.6.2-1.3.3-1.9.3-.9 1-1.6 1.9-1.9.7-.2 1.3-.3 2-.3 1.1 0 1.4-.1 4-.1 1.3 0 2.701 0 4 .1.6 0 1.301.1 1.9.3.898.3 1.6 1 1.898 1.9.201.6.301 1.3.301 1.9 0 1.1.102 1.4.102 4-.001 2.6-.102 3-.102 4z"></path><path d="M12.138 6.9c-2.9 0-5.1 2.3-5.1 5.1s2.3 5.1 5.1 5.1 5.101-2.3 5.101-5.1-2.301-5.1-5.101-5.1zm0 8.4c-1.8 0-3.3-1.5-3.3-3.3s1.5-3.3 3.3-3.3c1.8 0 3.2 1.5 3.3 3.3 0 1.8-1.5 3.3-3.3 3.3zM17.438 5.5c-.699 0-1.199.5-1.199 1.2s.5 1.2 1.199 1.2 1.199-.5 1.199-1.2-.5-1.2-1.199-1.2z"></path>
                </svg>
            </a></div>
        </div>
    </div>
  )
}

export default MiddleFooter  
 
