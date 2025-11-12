import { Link, useLocation } from 'react-router-dom'
import profileImage from '../../assets/IMG_0761.webp'

function Navbar() {
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  return (
    <nav className="bg-golf-green-500 border-b-4 border-golf-green-800 sticky top-0 z-50 golf-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center gap-3 flex-shrink-0 hover:opacity-90 transition-opacity">
            <div className="w-12 h-12 bg-golf-white border-[3px] border-golf-green-800 flex items-center justify-center overflow-hidden pixel-border">
              <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
            </div>
            <div>
              <div className="text-lg font-pixel text-golf-white">
                Daniel Lightner
              </div>
              <div className="text-xs text-golf-green-100">
                Application Analyst Intern @ Geisinger
              </div>
            </div>
          </Link>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-2">
              <Link
                to="/"
                className={`px-4 py-2 text-sm font-pixel transition-all border-[3px] ${
                  isActive('/')
                    ? 'bg-golf-green-800 text-golf-white border-golf-green-900 shadow-pixel'
                    : 'text-golf-white hover:bg-golf-green-600 border-golf-green-700 shadow-pixel-sm'
                }`}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`px-4 py-2 text-sm font-pixel transition-all border-[3px] ${
                  isActive('/about')
                    ? 'bg-golf-green-800 text-golf-white border-golf-green-900 shadow-pixel'
                    : 'text-golf-white hover:bg-golf-green-600 border-golf-green-700 shadow-pixel-sm'
                }`}
              >
                About
              </Link>
              <Link
                to="/projects"
                className={`px-4 py-2 text-sm font-pixel transition-all border-[3px] ${
                  isActive('/projects')
                    ? 'bg-golf-green-800 text-golf-white border-golf-green-900 shadow-pixel'
                    : 'text-golf-white hover:bg-golf-green-600 border-golf-green-700 shadow-pixel-sm'
                }`}
              >
                Projects
              </Link>
              <Link
                to="/experience"
                className={`px-4 py-2 text-sm font-pixel transition-all border-[3px] ${
                  isActive('/experience')
                    ? 'bg-golf-green-800 text-golf-white border-golf-green-900 shadow-pixel'
                    : 'text-golf-white hover:bg-golf-green-600 border-golf-green-700 shadow-pixel-sm'
                }`}
              >
                Experience
              </Link>
              <Link
                to="/contact"
                className={`px-4 py-2 text-sm font-pixel transition-all border-[3px] ${
                  isActive('/contact')
                    ? 'bg-golf-green-800 text-golf-white border-golf-green-900 shadow-pixel'
                    : 'text-golf-white hover:bg-golf-green-600 border-golf-green-700 shadow-pixel-sm'
                }`}
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 text-golf-white hover:bg-golf-green-600 border-[3px] border-golf-green-700 shadow-pixel-sm focus:outline-none font-pixel"
              aria-label="Main menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={3}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
