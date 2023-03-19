import { useState } from "react"

const Trending = () => {
    
    const [gridElements, setGridElements] = useState(true)
    const toggleGridElements = () => {
        setGridElements((prevState) => !prevState);
      };

    const content =   [
            "London Ice Skating",
            "England Spas",
            "Costa Rica Beaches",
            "Walt Disney World",
            "France Skiing",
            "Canary Wharf",
            "Table Mountain",
            "Paris Wine Bars",
            "Blue Lagoon",
            "Highclere Castle",
            "Greek Island Hopping",
            "National Space Centre",
            "Northern Lights Cruise",
            "London Performances",
            "Burj Khalifa",
            "The Making of Harry Potter Tour",
            "Norwegian Fjord Tours",
            "Prince Charles Cinema",
            "Everglades Boat Tours",
            "Seine River Gourmet Dinner Cruise"
    ]
    const destinations =   [
            "Iceland",
            "Greece",
            "Bora Bora",
            "Dubai",
            "Tromso",
            "Spain",
            "Maldives",
            "Goa",
            "Andorra",
            "Lisbon",
            "Caribbean",
            "Phuket",
            "Geneva",
            "Budapest",
            "Cebu Island",
            "Marrakech",
            "Amsterdam",
            "Las Vegas",
            "Tenerife",
            "Cape Verde"
    ]
    
    
  return (
    <div class="flex flex-col w-full font-medium items-start gap-4 p-6 mt-12 max-w-[1136px] mx-auto">
        <div class="text-2xl font-bold">Trending in Travel</div>
        <div class="font-medium flex flex-row gap-10 text-md md:text-sm pb-4">
                <button class={`hover:underline decoration-2 underline-offset-[16px] ${gridElements && "underline"}`} onClick={toggleGridElements}>Winter Experiences</button>
                <button class={`hover:underline decoration-2 underline-offset-[16px] ${!gridElements && "underline"}`} onClick={toggleGridElements}>Winter Destinations</button>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-4 w-full text-start text-sm md:text-xs gap-6 md:gap-1">
        {   gridElements ?
            content.map((item) => (
                <a class="hover:underline hover:opacity-70" href={`#${item}`}><div key={item}>{item}</div></a>
                ))
                :
            destinations.map((item) => (
                <a class="hover:underline hover:opacity-70" href={`#${item}`}><div key={item}>{item}</div></a>
                ))
        }
        </div>
    </div>
  )
}

export default Trending  
