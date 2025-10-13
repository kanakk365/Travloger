import HeroWithNavbar from "@/components/HeroWithNavbar";
import CommunityTravelExperiences from "@/components/CommunityTravelExperiences";
import TravelPlan from "@/components/TravelPlan";
import Explore from "@/components/Explore";
import UpcomingTrip from "@/components/UpcomingTrip";
import BeyondBorders from "@/components/BeyondBorders";
import Destinations from "@/components/Destinations";
import Exclusive from "@/components/Exclusive";
import Real from "@/components/Real";
import WhyTravel from "@/components/WhyTravel";
import Companies from "@/components/Companies";
import Travel from "@/components/Travel";

export default function Home() {
  return (
    <div className="relative">
      <HeroWithNavbar />
      <TravelPlan/>
      <CommunityTravelExperiences />
      <Explore />
      <UpcomingTrip/>
      <BeyondBorders/>
      <Destinations/>
      <Exclusive/>
      <Real/>
      <WhyTravel/>
      <Companies/>
      <Travel/>
    </div>
  );
}
