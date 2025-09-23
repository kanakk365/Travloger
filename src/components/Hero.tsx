import { Search, Star, Users, Heart, CreditCard } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative min-h-screen">
      {/* Hero Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/landing/herobg.png')",
        }}
      />

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center">
        <h1 className="text-white text-5xl md:text-6xl font-bold mb-12 max-w-4xl leading-tight">
          Your Next Memory Starts in
        </h1>

        {/* Search Bar */}
        <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-full p-2 w-full max-w-2xl mb-8">
          <div className="flex items-center flex-1 px-4">
            <Search className="text-white/70 w-5 h-5 mr-3" />
            <input
              type="text"
              placeholder="Search your destination"
              className="flex-1 bg-transparent border-none text-white placeholder:text-white/70 focus:ring-0 focus:outline-none text-lg"
            />
          </div>
          <button className="bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-full">Search</button>
        </div>

        {/* Activity Indicator */}
        <div className="flex items-center text-white/90 text-sm">
          <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
          <span>23 people exploring Europe this week</span>
        </div>
      </div>

      {/* Stats Section */}
      <div className="relative z-10 bg-teal-500 py-6">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center md:justify-between gap-8 text-white">
            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              <span className="font-semibold">4.9 ⭐ Rating</span>
            </div>

            <div className="flex items-center space-x-2">
              <Users className="w-5 h-5" />
              <span className="font-semibold">240k+Community</span>
            </div>

            <div className="flex items-center space-x-2">
              <Heart className="w-5 h-5" />
              <span className="font-semibold">800k+ Happy Travelers</span>
            </div>

            <div className="flex items-center space-x-2">
              <CreditCard className="w-5 h-5" />
              <span className="font-semibold">Flexible Payment Options</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
