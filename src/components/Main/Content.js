import One from "./Content/One"
import TemplateSlider from "./Content/TemplateSlider"
import GetOutThere from "./Content/GetOutThere"
import {cosyEuropeanCitiesTitle, cosyEuropeanCities} from "../../data"
import {mustGoListTitle, mustGoList} from "../../data"
import {topDestinationTitle, topDestination} from "../../data"
import TemplateHalfDiv from "./Content/TemplateHalfDiv"
import {FoundationContent, FoundationImage} from "../../data"
import ExploreSlider from "./Content/ExploreSlider"
import {exploreContent} from "../../data"
import DreamTrip from "./Content/DreamTrip"
import {dreamTitle, dreamContent} from "../../data"
import {DestinationInspoImage, DestinationInspoContent} from "../../data"
import {topExperienceContent, topExperienceImage} from "../../data"
import HomeRentals from "./Content/HomeRentals"
import {HomeRentalsContent, HomeRentalsImage} from "../../data"
import RecentSearches from "./Content/RecentSearches"
import {SearchList} from "../../data"
import TemplateTagSlider from "./Content/TemplateTagSlider"
import {YouMightLikeContent, YouMightLikeImage} from "../../data"

const Content = () => {
  return (
    <div>
        <One />
        <TemplateSlider 
            TemplateTitle={mustGoListTitle}
            TemplateContent={mustGoList}
            TemplateId="mustGo"
        />
        <RecentSearches 
         SearchList={SearchList}
        />
        <TemplateTagSlider
            TemplateContent={YouMightLikeContent}
            TemplateImage={YouMightLikeImage}
        />
        <TemplateTagSlider
            TemplateContent={topExperienceContent}
            TemplateImage={topExperienceImage}
        />
        <div class="mx-6 xl:mx-0">
        <GetOutThere />
        </div>
        <TemplateSlider 
            TemplateTitle={cosyEuropeanCitiesTitle}
            TemplateContent={cosyEuropeanCities}
            TemplateId="cosyEuro"
        />
        <TemplateHalfDiv
            TemplateContent={FoundationContent}
            TemplateImage={FoundationImage}
            BackColor="bg-yellow-500"
        />
        <div class="bg-red-100/60 " style={{
            width: "100vw",
            position: "relative",
            left: "calc(-50vw + 50%)"
        }}>
        <ExploreSlider 
            exploreContent={exploreContent}
        /></div>
        <DreamTrip 
            dreamTitle={dreamTitle}
            dreamContent={dreamContent}
        />
        <TemplateSlider 
            TemplateTitle={topDestinationTitle}
            TemplateContent={topDestination}
            TemplateId="topDest"
        />
        <TemplateHalfDiv
            TemplateContent={DestinationInspoContent}
            TemplateImage={DestinationInspoImage}
            BackColor="bg-red-100/60"
        />
        <HomeRentals
            HomeRentalsContent={HomeRentalsContent}
            HomeRentalsImage={HomeRentalsImage}
        />
    </div>
  )
}

export default Content
