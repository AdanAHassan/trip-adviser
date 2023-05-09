import Filter from "./Main/Filter"
import Content from "./Main/Content"
import Search from "./Main/Search"

const Main = ({setTotalHeight, totalHeight, RecentlyViewed, filterItems, moreBool, setMoreBool}) => {

    
  return (
    <div class={`${moreBool ? "md:mt-16" : "mt-16" } flex flex-col max-w-[1136px] mx-auto `}>
        <Filter 
            filterItems={filterItems}
            moreBool={moreBool}
            setMoreBool={setMoreBool}
        />
        <Search
            setTotalHeight={setTotalHeight}
            totalHeight={totalHeight}
            RecentlyViewed={RecentlyViewed}
        />
        <Content />
    </div>
  )
}

export default Main 
