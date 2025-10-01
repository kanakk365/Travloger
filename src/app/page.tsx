import HeroWithNavbar from "@/components/HeroWithNavbar";
import CommunityTravelExperiences from "@/components/CommunityTravelExperiences";
import TravelPlan from "@/components/TravelPlan";
import Explore from "@/components/Explore";
import UpcomingTrip from "@/components/UpcomingTrip";
import BeyondBorders from "@/components/BeyondBorders";
import Destinations from "@/components/Destinations";
import Exclusive from "@/components/Exclusive";

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
    </div>
  );
}
