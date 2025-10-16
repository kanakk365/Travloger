import TopCard from '@/components/Details/TopCard'
import Trip from '@/components/Details/Trip'
import TripDetails from '@/components/Details/TripDetails'
import Package from '@/components/Details/Package'
import React from 'react'
import Whyus from '@/components/Details/Whyus'
import Trending from '@/components/Details/Trending'
import Footer from '@/components/Footer'
import Policy from '@/components/Details/Policy'

function Details() {
  return (
    <div className=" mx-auto">
      <TopCard />
      <Trip />
      <TripDetails />
      <Package />
      <Whyus />
      <Trending />
      <Policy />
      <Footer />
    </div>
  ) 
}

export default Details