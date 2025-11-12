import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-12 bg-golf-green-400 pixel-border p-8 bg-opacity-80">
        <h1 className="text-3xl md:text-4xl mb-4 text-golf-green-900">
          Daniel Lightner
        </h1>
        <p className="text-xl md:text-2xl text-golf-green-800 mb-8">
          Application Analyst Intern @ Geisinger | Computer Science
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link 
            to="/about"
            className="pixel-button bg-golf-green-600 text-golf-white px-6 py-3"
          >
            Learn More About Me
          </Link>
          <Link 
            to="/contact"
            className="pixel-button bg-golf-sky-500 text-golf-white px-6 py-3"
          >
            Get In Touch
          </Link>
        </div>
      </section>

      {/* Projects Section */}
      <section>
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl text-golf-green-900">Featured Projects</h2>
          <Link 
            to="/projects"
            className="text-golf-green-700 hover:text-golf-green-900 underline text-lg"
          >
            View All Projects →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="pixel-card bg-golf-white p-6 hover:shadow-pixel-lg transition-all">
            <div className="bg-golf-green-200 p-4 mb-4 text-center">
              <span className="text-golf-green-800 font-bold">Desktop Application</span>
            </div>
            <h3 className="text-xl text-golf-green-900 mb-2">SFU PA Program</h3>
            <p className="text-golf-brown-600 font-bold text-sm mb-3">Full-Stack Desktop Application · Jan 2025 - May 2025</p>
            <p className="text-golf-green-800 mb-4">
              A desktop application built for the Physician Assistant department at Saint Francis University to help manage and streamline the accreditation process. Led a team of 6 developers through Agile full-stack development, writing 9,000+ lines of code.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-2 py-1 bg-golf-green-200 text-golf-green-900 border-2 border-golf-green-700 text-xs">Java</span>
              <span className="px-2 py-1 bg-golf-green-200 text-golf-green-900 border-2 border-golf-green-700 text-xs">Spring Boot</span>
              <span className="px-2 py-1 bg-golf-green-200 text-golf-green-900 border-2 border-golf-green-700 text-xs">JavaFX</span>
              <span className="px-2 py-1 bg-golf-green-200 text-golf-green-900 border-2 border-golf-green-700 text-xs">SQLite</span>
            </div>
            <a 
              href="https://github.com/DanLightner/SFU-PA-Project"
              target="_blank"
              rel="noopener noreferrer"
              className="pixel-button bg-golf-sky-500 text-golf-white px-4 py-2 text-sm inline-block"
            >
              View on GitHub
            </a>
          </div>
          
          <div className="pixel-card bg-golf-white p-6 hover:shadow-pixel-lg transition-all">
            <div className="bg-golf-green-200 p-4 mb-4 text-center">
              <span className="text-golf-green-800 font-bold">Data Analysis Project</span>
            </div>
            <h3 className="text-xl text-golf-green-900 mb-2">College Basketball EDA</h3>
            <p className="text-golf-brown-600 font-bold text-sm mb-3">Data Science & Machine Learning · Nov 2024 - May 2025</p>
            <p className="text-golf-green-800 mb-4">
              Explored a dataset of 3,500+ NCAA Division I basketball team seasons, applying K-means clustering and decision tree classifiers to predict conference affiliation, achieving 9.56% accuracy (vs. 3% baseline).
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-2 py-1 bg-golf-green-200 text-golf-green-900 border-2 border-golf-green-700 text-xs">Python</span>
              <span className="px-2 py-1 bg-golf-green-200 text-golf-green-900 border-2 border-golf-green-700 text-xs">pandas</span>
              <span className="px-2 py-1 bg-golf-green-200 text-golf-green-900 border-2 border-golf-green-700 text-xs">Scikit-learn</span>
              <span className="px-2 py-1 bg-golf-green-200 text-golf-green-900 border-2 border-golf-green-700 text-xs">Matplotlib</span>
            </div>
            <Link 
              to="/projects"
              className="pixel-button bg-golf-green-600 text-golf-white px-4 py-2 text-sm inline-block"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="bg-golf-brown-200 pixel-border p-8">
        <h2 className="text-2xl md:text-3xl mb-8 text-golf-brown-900 text-center">Skills</h2>
        <div className="flex flex-wrap justify-center gap-3">
          <span className="px-4 py-2 bg-golf-white text-golf-green-900 border-2 border-golf-green-700 text-lg">Java</span>
          <span className="px-4 py-2 bg-golf-white text-golf-green-900 border-2 border-golf-green-700 text-lg">Python</span>
          <span className="px-4 py-2 bg-golf-white text-golf-green-900 border-2 border-golf-green-700 text-lg">JavaScript</span>
          <span className="px-4 py-2 bg-golf-white text-golf-green-900 border-2 border-golf-green-700 text-lg">SQL</span>
          <span className="px-4 py-2 bg-golf-white text-golf-green-900 border-2 border-golf-green-700 text-lg">Spring Boot</span>
          <span className="px-4 py-2 bg-golf-white text-golf-green-900 border-2 border-golf-green-700 text-lg">React</span>
          <span className="px-4 py-2 bg-golf-white text-golf-green-900 border-2 border-golf-green-700 text-lg">Tableau</span>
          <span className="px-4 py-2 bg-golf-white text-golf-green-900 border-2 border-golf-green-700 text-lg">Git</span>
        </div>
      </section>

      {/* Contact Section */}
      <section>
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl text-golf-green-900">Get In Touch</h2>
          <Link 
            to="/contact"
            className="text-golf-green-700 hover:text-golf-green-900 underline text-lg"
          >
            View Full Contact →
          </Link>
        </div>
        <div className="pixel-card bg-golf-white p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <div className="text-center">
              <h3 className="text-lg text-golf-green-900 mb-2 font-bold">Email</h3>
              <a href="mailto:DRL400@francis.edu" className="text-golf-green-800 hover:text-golf-green-900 underline">
                DRL400@francis.edu
              </a>
            </div>
            <div className="text-center">
              <h3 className="text-lg text-golf-green-900 mb-2 font-bold">Phone</h3>
              <a href="tel:8142542776" className="text-golf-green-800 hover:text-golf-green-900 underline">
                (814) 254-2776
              </a>
            </div>
            <div className="text-center">
              <h3 className="text-lg text-golf-green-900 mb-2 font-bold">LinkedIn</h3>
              <a href="https://linkedin.com/in/daniel-lightner/" target="_blank" rel="noopener noreferrer" className="text-golf-green-800 hover:text-golf-green-900 underline">
                Connect
              </a>
            </div>
            <div className="text-center">
              <h3 className="text-lg text-golf-green-900 mb-2 font-bold">GitHub</h3>
              <a href="https://github.com/DanLightner" target="_blank" rel="noopener noreferrer" className="text-golf-green-800 hover:text-golf-green-900 underline">
                View Profile
              </a>
            </div>
          </div>
          <div className="text-center pt-4 border-t-2 border-golf-green-200">
            <p className="text-golf-green-800 mb-4">
              Interested in working together? Feel free to reach out!
            </p>
            <Link 
              to="/contact"
              className="pixel-button bg-golf-green-600 text-golf-white px-6 py-3 inline-block"
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

