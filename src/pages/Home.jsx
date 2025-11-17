import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="space-y-3xl">
      {/* Hero Section */}
      <section className="hero">
        <h1 className="text-3xl text-md-4xl">
          Daniel Lightner
        </h1>
        <p className="text-xl text-md-2xl">
          Application Analyst Intern @ Geisinger | Computer Science
        </p>
        <div className="hero-actions">
          <Link 
            to="/about"
            className="btn btn-primary"
          >
            Learn More About Me
          </Link>
          <Link 
            to="/contact"
            className="btn btn-secondary"
          >
            Get In Touch
          </Link>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section">
        <div className="section-header">
          <h2 className="section-title text-2xl text-md-3xl">Featured Projects</h2>
          <Link 
            to="/projects"
            className="section-link"
          >
            View All Projects →
          </Link>
        </div>
        <div className="grid grid-cols-1 grid-cols-md-2 gap-lg">
          <div className="card">
            <div className="bg-green-200 p-md mb-md text-center">
              <span className="text-green-800 font-bold">Desktop Application</span>
            </div>
            <h3 className="text-xl text-green-900 mb-sm">SFU PA Program</h3>
            <p className="text-brown-600 font-bold text-sm mb-md">Full-Stack Desktop Application · Jan 2025 - May 2025</p>
            <p className="text-green-800 mb-md">
              A desktop application built for the Physician Assistant department at Saint Francis University to help manage and streamline the accreditation process. Led a team of 6 developers through Agile full-stack development, writing 9,000+ lines of code.
            </p>
            <div className="flex flex-wrap gap-sm mb-md">
              <span className="badge">Java</span>
              <span className="badge">Spring Boot</span>
              <span className="badge">JavaFX</span>
              <span className="badge">SQLite</span>
            </div>
            <a 
              href="https://github.com/DanLightner/SFU-PA-Project"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-sm"
            >
              View on GitHub
            </a>
          </div>
          
          <div className="card">
            <div className="bg-green-200 p-md mb-md text-center">
              <span className="text-green-800 font-bold">Data Analysis Project</span>
            </div>
            <h3 className="text-xl text-green-900 mb-sm">College Basketball EDA</h3>
            <p className="text-brown-600 font-bold text-sm mb-md">Data Science & Machine Learning · Nov 2024 - May 2025</p>
            <p className="text-green-800 mb-md">
              Explored a dataset of 3,500+ NCAA Division I basketball team seasons, applying K-means clustering and decision tree classifiers to predict conference affiliation, achieving 9.56% accuracy (vs. 3% baseline).
            </p>
            <div className="flex flex-wrap gap-sm mb-md">
              <span className="badge">Python</span>
              <span className="badge">pandas</span>
              <span className="badge">Scikit-learn</span>
              <span className="badge">Matplotlib</span>
            </div>
            <Link 
              to="/projects"
              className="btn btn-primary btn-sm"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section">
        <div className="card bg-brown-200">
          <h2 className="text-2xl text-md-3xl mb-xl text-brown-900 text-center">Skills</h2>
          <div className="flex flex-wrap justify-center gap-md">
            <span className="badge badge-lg">Java</span>
            <span className="badge badge-lg">Python</span>
            <span className="badge badge-lg">JavaScript</span>
            <span className="badge badge-lg">SQL</span>
            <span className="badge badge-lg">Spring Boot</span>
            <span className="badge badge-lg">React</span>
            <span className="badge badge-lg">Tableau</span>
            <span className="badge badge-lg">Git</span>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section">
        <div className="section-header">
          <h2 className="section-title text-2xl text-md-3xl">Get In Touch</h2>
          <Link 
            to="/contact"
            className="section-link"
          >
            View Full Contact →
          </Link>
        </div>
        <div className="card">
          <div className="grid grid-cols-1 grid-cols-md-2 grid-cols-lg-4 gap-lg mb-lg">
            <div className="text-center">
              <h3 className="text-lg text-green-900 mb-sm font-bold">Email</h3>
              <a href="mailto:DRL400@francis.edu" className="text-green-800">
                DRL400@francis.edu
              </a>
            </div>
            <div className="text-center">
              <h3 className="text-lg text-green-900 mb-sm font-bold">Phone</h3>
              <a href="tel:8142542776" className="text-green-800">
                (814) 254-2776
              </a>
            </div>
            <div className="text-center">
              <h3 className="text-lg text-green-900 mb-sm font-bold">LinkedIn</h3>
              <a href="https://linkedin.com/in/daniel-lightner/" target="_blank" rel="noopener noreferrer" className="text-green-800">
                Connect
              </a>
            </div>
            <div className="text-center">
              <h3 className="text-lg text-green-900 mb-sm font-bold">GitHub</h3>
              <a href="https://github.com/DanLightner" target="_blank" rel="noopener noreferrer" className="text-green-800">
                View Profile
              </a>
            </div>
          </div>
          <div className="text-center pt-lg border-t-2">
            <p className="text-green-800 mb-md">
              Interested in working together? Feel free to reach out!
            </p>
            <Link 
              to="/contact"
              className="btn btn-primary"
            >
              Send a Message
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
