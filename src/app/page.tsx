import AnimatedSection from "@/components/AnimatedSection";
import HeroWithNavbar from "@/components/Landing/HeroWithNavbar";
import ExploreDestinations from "@/components/Landing/ExploreDestinations";
import NewCommunityTravelExperiences from "@/components/Landing/NewCommunityTravelExperiences";
import TravelPlan from "@/components/Landing/TravelPlan";
import Explore from "@/components/Landing/Explore";
import UpcomingGroupTrips from "@/components/Landing/UpcomingGroupTrips";
import ExploreBanner from "@/components/Landing/ExploreBanner";
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
    {
      key: "explore-destinations",
      node: <ExploreDestinations />,
      delay: 0.05,
    },
    { key: "upcoming-groups", node: <UpcomingGroupTrips />, delay: 0.1 },
    { key: "explore-banner", node: <ExploreBanner />, delay: 0.12 },
    {
      key: "new-community",
      node: <NewCommunityTravelExperiences />,
      delay: 0.15,
    },
    { key: "explore", node: <Explore />, delay: 0.25 },
    { key: "beyond", node: <BeyondBorders />, delay: 0.3 },
    { key: "destinations", node: <Destinations />, delay: 0.35 },
    { key: "exclusive", node: <Exclusive />, delay: 0.4 },
    { key: "real", node: <Real />, delay: 0.45 },
    { key: "why", node: <WhyTravel />, delay: 0.5 },
    { key: "companies", node: <Companies />, delay: 0.55 },
    { key: "travel", node: <Travel />, delay: 0.6 },
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
