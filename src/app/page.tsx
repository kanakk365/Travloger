import AnimatedSection from "@/components/AnimatedSection";
import HeroWithNavbar from "@/components/Landing/HeroWithNavbar";
import ExploreDestinations from "@/components/Landing/ExploreDestinations";
import NewCommunityTravelExperiences from "@/components/Landing/NewCommunityTravelExperiences";
import Explore from "@/components/Landing/Explore";
import UpcomingTrip from "@/components/Landing/UpcomingTrip";
import UpcomingGroupTrips from "@/components/Landing/UpcomingGroupTrips";
import ExploreBanner from "@/components/Landing/ExploreBanner";
import BeyondBorders from "@/components/Landing/BeyondBorders";
import Destinations from "@/components/Landing/Destinations";
import Exclusive from "@/components/Landing/Exclusive";
import WhyChoose from "@/components/Landing/WhyChoose";
import Real from "@/components/Landing/Real";
import Companies from "@/components/Landing/Companies";
import WhyTravel from "@/components/Landing/WhyTravel";
import Travel from "@/components/Landing/Travel";
import Photographs from "@/components/Landing/Photographs";
import FAQ from "@/components/Landing/FAQ";
import Reviews from "@/components/Landing/Reviews";
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
    { key: "upcoming-trip", node: <UpcomingTrip />, delay: 0.28 },
    { key: "beyond", node: <BeyondBorders />, delay: 0.3 },
    { key: "faq", node: <FAQ />, delay: 0.32 },
    { key: "reviews", node: <Reviews />, delay: 0.35 },
    { key: "real", node: <Real />, delay: 0.45 },
    { key: "exclusive", node: <Exclusive />, delay: 0.4 },
    { key: "why-choose", node: <WhyChoose />, delay: 0.42 },
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
