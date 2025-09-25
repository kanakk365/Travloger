import HeroWithNavbar from "@/components/HeroWithNavbar";
import CommunityTravelExperiences from "@/components/CommunityTravelExperiences";
import TravelPlan from "@/components/TravelPlan";
import Explore from "@/components/Explore";

export default function Home() {
  return (
    <div className="relative">
      <HeroWithNavbar />
      
      <TravelPlan/>
      <CommunityTravelExperiences />
      <Explore />
    </div>
  );
}
