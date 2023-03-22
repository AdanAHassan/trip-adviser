import { useState } from "react"

const Trending = ({WinterCols}) => {
    
    const [gridElements, setGridElements] = useState(true)
    const toggleGridElements = () => {
        setGridElements((prevState) => !prevState);
      };
    let data = WinterCols[0].winter
    
  return (
    <div class="flex flex-col w-full font-medium items-start gap-4 p-6 mt-12 max-w-[1136px] mx-auto">
        <div class="text-3xl font-bold">Trending in Travel</div>
        <div class="font-medium flex flex-row w-96 justify-start gap-6 text-md pb-4 text-clip overflow-hidden">
                <button class={`hover:underline decoration-2 underline-offset-[16px] ${gridElements && "underline"}`} onClick={toggleGridElements}>Winter Experiences</button>
                <button class={`hover:underline decoration-2 underline-offset-[16px] ${!gridElements && "underline"}`} onClick={toggleGridElements}>Winter Destinations</button>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-4 w-full text-start text-sm md:text-xs gap-6 md:gap-1">
        {   gridElements ?
            data.content.map((item) => (
                <a class="hover:underline hover:opacity-70" href={`#${item}`}><div key={item}>{item}</div></a>
                ))
                :
            data.destinations.map((item) => (
                <a class="hover:underline hover:opacity-70" href={`#${item}`}><div key={item}>{item}</div></a>
                ))
        }
        </div>
    </div>
  )
}

export default Trending  
