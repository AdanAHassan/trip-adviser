import TopFooter from "./Footer/TopFooter"
import MiddleFooter from "./Footer/MiddleFooter"
import BottomFooter from "./Footer/BottomFooter"
import {footerTitles} from "../data"


const Footer = () => {
  return (
    <div class="relative max-w-[1136px] mx-auto">
        <TopFooter 
            footerTitles={footerTitles}
        />
        <MiddleFooter
        />
        <BottomFooter />
    </div>
  )
}

export default Footer
