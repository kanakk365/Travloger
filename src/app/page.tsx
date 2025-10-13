import HeroWithNavbar from "@/components/Landing/HeroWithNavbar";
import CommunityTravelExperiences from "@/components/Landing/CommunityTravelExperiences";
import TravelPlan from "@/components/Landing/TravelPlan";
import Explore from "@/components/Landing/Explore";
import UpcomingTrip from "@/components/Landing/UpcomingTrip";
import BeyondBorders from "@/components/Landing/BeyondBorders";
import Destinations from "@/components/Landing/Destinations";
import Exclusive from "@/components/Landing/Exclusive";
import Real from "@/components/Landing/Real";
import WhyTravel from "@/components/Landing/WhyTravel";
import Companies from "@/components/Landing/Companies";
import Travel from "@/components/Landing/Travel";
import Photographs from "@/components/Landing/Photographs";
import Footer from "@/components/Footer";

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
      <Photographs/>
      <Footer/>
    </div>
  );
}
