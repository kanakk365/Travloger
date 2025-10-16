import TopCard from '@/components/Details/TopCard'
import Trip from '@/components/Details/Trip'
import TripDetails from '@/components/Details/TripDetails'
import Package from '@/components/Details/Package'
import React from 'react'
import Whyus from '@/components/Details/Whyus'
import Trending from '@/components/Details/Trending'
import Footer from '@/components/Footer'

function Details() {
  return (
    <div className=" mx-auto">
      <TopCard />
      <Trip />
      <TripDetails />
      <Package />
      <Whyus />
      <Trending />
      <Footer />
    </div>
  ) 
}

export default Details