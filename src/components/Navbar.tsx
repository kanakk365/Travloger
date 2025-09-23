export default function Navbar() {
  return (
    <nav className="relative z-50 flex items-center justify-between px-6 py-4 bg-transparent">
      <div className="flex items-center">
        <span className="text-white text-lg font-medium">travloger.in</span>
        <div className="ml-2 w-2 h-2 bg-teal-400 rounded-full"></div>
      </div>

      <div className="hidden md:flex items-center space-x-12">
        <a href="#" className="text-white hover:text-teal-400 transition-colors border-b-2 border-white pb-1">
          Home
        </a>
        <a href="#" className="text-white/80 hover:text-white transition-colors">
          Destinations
        </a>
        <a href="#" className="text-white/80 hover:text-white transition-colors">
          Packages
        </a>
        <a href="#" className="text-white/80 hover:text-white transition-colors">
          Blog
        </a>
        <a href="#" className="text-white/80 hover:text-white transition-colors">
          About
        </a>
      </div>

      <div className="flex items-center space-x-3">
        <button className="bg-teal-500 hover:bg-teal-600 text-white border border-teal-500 px-6 py-2 rounded">
          Login
        </button>
        <button className="bg-black hover:bg-gray-800 text-white px-6 py-2 rounded">Plan my trip</button>
      </div>
    </nav>
  );
}
