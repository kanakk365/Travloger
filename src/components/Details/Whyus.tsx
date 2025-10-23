import { Award, Headset, Users } from 'lucide-react'
import { Percent } from 'lucide-react'
import React from 'react'

function Whyus() {
  return (
    <div className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold mb-12 text-neutral-800">
          WHY TRAVEL WITH US???
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Retention Card */}
          <div className="flex flex-col items-start justify-start">
            <div className="w-16 h-16 bg-gradient-to-r from-[#00A99D] to-[#009186] rounded-full flex items-center justify-center mb-4">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-neutral-800">Retention</h3>
            <p className="text-neutral-600 text-sm leading-relaxed">
              95% of our clients return - once you travel with us, you rarely go elsewhere.
            </p>
          </div>

          {/* Uncompromised Quality Card */}
          <div className="flex flex-col items-start justify-start">
            <div className="w-16 h-16 bg-gradient-to-r from-[#00A99D] to-[#009186] rounded-full flex items-center justify-center mb-4">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Uncompromised Quality</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              We work only with top providers to ensure a safe, smooth, and premium trip.
            </p>
          </div>

          {/* Best Deals Always Card */}
          <div className="flex flex-col items-start justify-start">
            <div className="w-16 h-16 bg-gradient-to-r from-[#00A99D] to-[#009186] rounded-full flex items-center justify-center mb-4">
              <Percent className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Best Deals, Always</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Our network ensures unbeatable value and the best prices for premium experiences.
            </p>
          </div>

          {/* 24*7 Support Card */}
          <div className="flex flex-col items-start justify-start">
            <div className="w-16 h-16 bg-gradient-to-r from-[#00A99D] to-[#009186] rounded-full flex items-center justify-center mb-4">
              <Headset className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">24*7 Support</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              We&apos;re one WhatsApp away, 24*7 - before, during, and after your journey.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Whyus