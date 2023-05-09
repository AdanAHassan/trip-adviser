import Header from './components/Header';
import Main from "./components/Main";
import Footer from "./components/Footer";
import Award from "./components/Award"
import Trending from "./components/Trending"
import {WinterCols} from "./data"
import {useState} from "react"
import {RecentlyViewed} from "./data"
import {filterItems} from "./data"


function App() {
    
   const [scrollPos, setScrollPos] = useState(0)
   const [totalHeight, setTotalHeight] = useState(309)

const calcScrollPos = () => {
    setScrollPos(window.scrollY)
}

window.addEventListener('scroll', calcScrollPos)
    const [moreBool, setMoreBool] = useState(false)

  return (
    <div class={`${moreBool ? "h-screen md:h-full" : "" } App overflow-hidden w-full`}>
      <div class={`fixed bg-white z-40 w-full top-0 border-slate-200 ${scrollPos>0 ? "border-b-2" : "border-none"}`}>
      <Header
        totalHeight={totalHeight}
        RecentlyViewed={RecentlyViewed}
        filterItems={filterItems}
      /></div>
      <Main
        setTotalHeight={setTotalHeight}
        totalHeight={totalHeight}
        RecentlyViewed={RecentlyViewed}
        filterItems={filterItems}
        moreBool={moreBool}
        setMoreBool={setMoreBool}
      />
      <Award />
        <Trending 
            WinterCols={WinterCols}
        />
      <div class="bg-red-100/60">
      <Footer />
    </div></div>
  );
}

export default App;
