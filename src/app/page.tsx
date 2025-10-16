import AnimatedSection from "@/components/AnimatedSection";
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
  const animatedSections = [
    { key: "travel-plan", node: <TravelPlan />, delay: 0.05 },
    { key: "community", node: <CommunityTravelExperiences />, delay: 0.1 },
    { key: "explore", node: <Explore />, delay: 0.15 },
    { key: "upcoming", node: <UpcomingTrip />, delay: 0.2 },
    { key: "beyond", node: <BeyondBorders />, delay: 0.25 },
    { key: "destinations", node: <Destinations />, delay: 0.3 },
    { key: "exclusive", node: <Exclusive />, delay: 0.35 },
    { key: "real", node: <Real />, delay: 0.4 },
    { key: "why", node: <WhyTravel />, delay: 0.45 },
    { key: "companies", node: <Companies />, delay: 0.5 },
    { key: "travel", node: <Travel />, delay: 0.55 },
  ];

  return (
    <div className="relative">
      <HeroWithNavbar />
      {animatedSections.map(({ key, node, delay }) => (
        <AnimatedSection key={key} delay={delay}>
          {node}
        </AnimatedSection>
      ))}
      <Photographs />
      <Footer />
    </div>
  );
}
