import AnimatedSection from '@/components/AnimatedSection'
import TopCard from '@/components/Details/TopCard'
import Trip from '@/components/Details/Trip'
import TripDetails from '@/components/Details/TripDetails'
import Package from '@/components/Details/Package'
import Whyus from '@/components/Details/Whyus'
import Trending from '@/components/Details/Trending'
import Policy from '@/components/Details/Policy'
import Footer from '@/components/Footer'

function Details() {
  const animatedSections = [
    { key: 'trip', node: <Trip />, delay: 0.05 },
    { key: 'trip-details', node: <TripDetails />, delay: 0.1 },
    { key: 'package', node: <Package />, delay: 0.15 },
    { key: 'whyus', node: <Whyus />, delay: 0.2 },
    { key: 'trending', node: <Trending />, delay: 0.25 },
    { key: 'policy', node: <Policy />, delay: 0.3 },
  ]

  return (
    <div className="mx-auto">
      <TopCard />
      {animatedSections.map(({ key, node, delay }) => (
        <AnimatedSection key={key} delay={delay}>
          {node}
        </AnimatedSection>
      ))}
      <Footer />
    </div>
  )
}

export default Details
