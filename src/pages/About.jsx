import profileImage from '../assets/IMG_0761.webp'

function About() {
  return (
    <div className="space-y-12">
      {/* Header Section */}
      <section className="text-center bg-golf-green-400 pixel-border p-8 bg-opacity-80">
        <div className="mb-6">
          <div className="w-32 h-32 mx-auto bg-golf-white pixel-border flex items-center justify-center overflow-hidden">
            <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
          </div>
        </div>
        <h1 className="text-3xl md:text-4xl mb-4 text-golf-green-900">
          Daniel Lightner
        </h1>
        <p className="text-xl md:text-2xl text-golf-green-800">
          Application Analyst Intern @ Geisinger | Computer Science
        </p>
      </section>

      {/* About Content */}
      <section className="pixel-card bg-golf-white p-8">
        <h2 className="text-2xl md:text-3xl mb-6 text-golf-green-900">About Me</h2>
        <div className="text-lg text-golf-green-800 space-y-4">
          <p>
            Currently pursuing a Bachelor of Science in Computer Science with a Cybersecurity minor at Saint Francis University, expected May 2026. Actively contributing as an Application Analyst Intern at Geisinger, focusing on managing SAP BusinessObjects and Tableau workbooks, while providing dashboard access to a large user base.
          </p>
          <p>
            Skilled in workflow automation using Tidal job scheduling, SQL scripting in SSMS, and troubleshooting reports. Experienced in navigating ServiceNow tasks and collaborating with a 10+ member team.
          </p>
        </div>
      </section>
    </div>
  )
}

export default About

