const RecentSearches = ({SearchList}) => {
  return (
    <div class="flex flex-col p-6 gap-4 text-start">
        <div class="text-2xl font-medium">Your recent searches</div>
        <div class="flex flex-row gap-4 flex-wrap">
                {
                    SearchList.map((item) => (
        <div class="flex flex-row border-slate-300 border-2 p-4 rounded-lg items-center gap-2 hover:bg-black hover:fill-white hover:text-white hover:border-black ease-in-out duration-150">
            <div class="">
                <svg class="w-6 h-6" viewBox="0 0 24 24">
                    <path d="M11.277 20.26l.53-.532-.53.532zm.035.035l.537-.524-.008-.008-.53.532zM12 21l-.537.524.529.542.537-.534L12 21zm.688-.684l.529.532.002-.002-.53-.53zm.303-8.458l-.287-.693.287.693zm-1.98-4.783l-.288-.693.287.693zM12 2.25c-4.262 0-7.75 3.46-7.75 7.707h1.5c0-3.41 2.808-6.207 6.25-6.207v-1.5zM4.25 9.957c0 2.269 1.128 4.455 2.452 6.292 1.335 1.85 2.947 3.45 4.047 4.543l1.057-1.064c-1.108-1.1-2.634-2.62-3.887-4.356-1.262-1.75-2.169-3.62-2.169-5.415h-1.5zm6.499 10.835l.034.035 1.058-1.064-.035-.035-1.057 1.064zm.026.026l.688.706 1.074-1.048-.688-.705-1.074 1.047zm1.754.714l.688-.684-1.058-1.064-.688.684 1.058 1.064zm.69-.686c1.096-1.098 2.717-2.706 4.06-4.566 1.333-1.846 2.471-4.043 2.471-6.323h-1.5c0 1.806-.916 3.685-2.187 5.445-1.262 1.747-2.797 3.275-3.905 4.384l1.06 1.06zm6.531-10.89c0-4.246-3.488-7.706-7.75-7.706v1.5c3.442 0 6.25 2.797 6.25 6.207h1.5zm-6.051-1.193a1.838 1.838 0 01-.995 2.402l.574 1.386a3.338 3.338 0 001.807-4.362l-1.386.574zm-.995 2.402a1.838 1.838 0 01-2.402-.995l-1.386.574a3.338 3.338 0 004.362 1.807l-.574-1.386zm-2.402-.995a1.838 1.838 0 01.995-2.402l-.574-1.386a3.338 3.338 0 00-1.807 4.362l1.386-.574zm.995-2.402a1.838 1.838 0 012.402.995l1.386-.574a3.338 3.338 0 00-4.362-1.807l.574 1.386z"></path>
                </svg>
            </div>
            <div class="flex flex-row gap-4 text-start pr-2">
                        <div class="flex flex-col">
                        <h1 class="text-md font-medium">{item.title}</h1>
                        <p class="text-xs font-light">{item.subtitle}</p>
                        </div>
            </div>
        </div>
                    ))
                }
    </div></div>
  )
}

export default RecentSearches
 
