import Filter from "./Main/Filter"
import Content from "./Main/Content"

import Search from "./Main/Search"

const Main = ({setTotalHeight, totalHeight}) => {
  return (
    <div class="flex flex-col max-w-[1136px] mx-auto mt-16">
        <Filter />
        <Search
            setTotalHeight={setTotalHeight}
            totalHeight={totalHeight}
        />
        <Content />
    </div>
  )
}

export default Main 
