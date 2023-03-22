 const TemplateHalfDiv = ({TemplateContent, TemplateImage, BackColor}) => {
  return (
      <div class={`flex flex-col md:flex-row ${BackColor} gap-4 p-6 mt-20`}>
        {
            TemplateImage.map((item) => (
        <div class="md:w-1/2">
        {item.foundation &&
            <div class="md:hidden flex flex-row pb-4">
            <img class="w-6 mr-4" src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_logoset_solid_green.svg" alt="trip advisor small green logo"/>
            <p>Tripadvisor Foundation</p>
            </div>
        }
            <img class="w-full aspect-square object-cover" src={item.image} alt={item.description}/>
            
        </div>
         ))
        }
         {
            TemplateContent.map((item) => (
        <div class="flex flex-col md:w-1/2 items-start md:items-center justify-center gap-4">
            
            {item.foundation &&
            <div class="hidden md:flex flex-row gap-2">
                <img class="w-6" src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_logoset_solid_green.svg" alt={item.title}/>
                <p>Tripadvisor Foundation</p>
            </div>
            }
            <div class="text-start md:text-center">
                <div class="text-3xl font-medium">{item.title}</div>
                <div class="font-light">{item.subtitle}</div>
            </div>
            <div class="pt-2">
                <button class="rounded-full font-medium text-base bg-black text-white px-6 py-3.5 leading-5 no-underline hover:bg-zinc-800 transition duration-200 ease-in-out">{item.button}</button>
            </div>
        </div>
            ))
        }
    </div>
  )
}

export default TemplateHalfDiv
