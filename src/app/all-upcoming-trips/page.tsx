import React from "react";
import NewNavbar from "@/components/Landing/NewNavbar";
import AllUpcomingTripsContent from "@/components/Landing/AllUpcomingTripsContent";
import Reviews from "@/components/Landing/Reviews";
import WhyChoose from "@/components/Landing/WhyChoose";
import FAQ from "@/components/Landing/FAQ";
import Real from "@/components/Landing/Real";
import Photographs from "@/components/Landing/Photographs";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";

export default function AllUpcomingTripsPage() {
  const animatedSections = [
    { key: "upcoming-trips", node: <AllUpcomingTripsContent />, delay: 0 },
    { key: "reviews", node: <Reviews />, delay: 0.1 },
    { key: "faq", node: <FAQ />, delay: 0.3 },
    { key: "real", node: <Real />, delay: 0.4 },
    { key: "photographs", node: <Photographs />, delay: 0.5 },
  ];

  return (
    <div className="bg-[#f9fafc] min-h-screen font-manrope">
      <NewNavbar />

      {animatedSections.map(({ key, node, delay }) => {
        if (key === "reviews") {
          return (
            <React.Fragment key={key}>
              <AnimatedSection delay={delay}>{node}</AnimatedSection>
              {/* Place WhyChoose immediately after Reviews without AnimatedSection mapping */}
              <WhyChoose />
            </React.Fragment>
          );
        }
        return (
          <AnimatedSection key={key} delay={delay}>
            {node}
          </AnimatedSection>
        );
      })}

      <Footer />
    </div>
  );
}
