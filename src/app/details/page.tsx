import TopCard from '@/components/Details/TopCard'
import Trip from '@/components/Details/Trip'
import TripDetails from '@/components/Details/TripDetails'
import Package from '@/components/Details/Package'
import React from 'react'
import Whyus from '@/components/Details/Whyus'
import Trending from '@/components/Details/Trending'
import Footer from '@/components/Footer'
import Policy from '@/components/Details/Policy'
import AnimatedSection from '@/components/AnimatedSection'
import Navbar from '@/components/Navbar'

function Details() {
  const animatedSections = [
    { key: "top-card", node: <TopCard />, delay: 0.05 },
    { key: "trip", node: <Trip />, delay: 0.1 },
    { key: "trip-details", node: <TripDetails />, delay: 0.15 },
    { key: "package", node: <Package />, delay: 0.2 },
    { key: "whyus", node: <Whyus />, delay: 0.25 },
    { key: "trending", node: <Trending />, delay: 0.3 },
    { key: "policy", node: <Policy />, delay: 0.3 },
  ];

  return (
    <div>
        <Navbar />
      <div className="mx-auto">
        {animatedSections.map(({ key, node, delay }) => (
          <AnimatedSection key={key} delay={delay}>
            {node}
          </AnimatedSection>
        ))}
        <Footer />
      </div>
    </div>
  ) 
}

export default Details