import tablet from "../images/tablet.jpg"
import desktop from "../images/desktop.jpg"

const Award = () => {
  return (
<div class="bg-green-900">
    <div class="bg-green-900 text-white mt-24 flex flex-col lg:flex-row lg:h-[600px] lg:max-w-[1136px] mx-auto text-center">
        <div class="flex flex-col gap-4 items-center p-16 justify-center lg:w-96">
            <img class="w-32" src="https://static.tacdn.com/img2/travelers_choice/TC_logomark_solid_cream.svg" alt="traveler's choice best choice logo"/>
            <h1 class="text-4xl font-bold">Travellers' Choice Best of the Best</h1>
            <button class="rounded-full text-base bg-black text-white px-6 py-3.5 leading-5 no-underline hover:bg-zinc-800 transition duration-200 ease-in-out">See the winners</button>
        </div>
         <div class="flex justify-center lg:hidden">
           <img class="" src={tablet} alt="tablet background"/>
        </div>
        <div class="justify-center hidden lg:flex">
            <img class="" src={desktop} alt="desktop background"/>
        </div>
    </div>
    </div>
  )
}

export default Award 
