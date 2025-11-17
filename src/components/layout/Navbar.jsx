import { Link, useLocation } from 'react-router-dom'
import profileImage from '../../assets/IMG_0761.webp'

function Navbar() {
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <Link to="/" className="navbar-brand">
          <div className="navbar-logo">
            <img src={profileImage} alt="Profile" />
          </div>
          <div>
            <div className="navbar-name">
              Daniel Lightner
            </div>
            <div className="navbar-subtitle">
              Application Analyst Intern @ Geisinger
            </div>
          </div>
        </Link>
        
        <div className="navbar-links">
          <Link
            to="/"
            className={`nav-link ${isActive('/') ? 'active' : ''}`}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`nav-link ${isActive('/about') ? 'active' : ''}`}
          >
            About
          </Link>
          <Link
            to="/projects"
            className={`nav-link ${isActive('/projects') ? 'active' : ''}`}
          >
            Projects
          </Link>
          <Link
            to="/experience"
            className={`nav-link ${isActive('/experience') ? 'active' : ''}`}
          >
            Experience
          </Link>
          <Link
            to="/contact"
            className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
          >
            Contact
          </Link>
        </div>

        <button
          type="button"
          className="mobile-menu-btn"
          aria-label="Main menu"
        >
          <svg
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={3}
            style={{ width: '24px', height: '24px' }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </nav>
  )
}

export default Navbar
