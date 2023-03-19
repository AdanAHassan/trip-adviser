import Header from './components/Header';
import Main from "./components/Main";
import Footer from "./components/Footer";
import Award from "./components/Award"
import Trending from "./components/Trending"
import {WinterCols} from "./data"
import {useState} from "react"


function App() {
    
   const [scrollPos, setScrollPos] = useState(0)
   const [totalHeight, setTotalHeight] = useState(309)

const calcScrollPos = () => {
    setScrollPos(window.scrollY)
}

window.addEventListener('scroll', calcScrollPos)

  return (
    <div class="App overflow-hidden w-full">
      <div class={`fixed bg-white z-40 w-full top-0 border-slate-200 ${scrollPos>0 ? "border-b-2" : "border-none"}`}>
      <Header
        totalHeight={totalHeight}
      /></div>
      <Main
        setTotalHeight={setTotalHeight}
        totalHeight={totalHeight}
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
