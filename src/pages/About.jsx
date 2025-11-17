import profileImage from '../assets/IMG_0761.webp'

function About() {
  return (
    <div className="space-y-3xl">
      {/* Header Section */}
      <section className="hero">
        <div className="mb-lg">
          <div className="profile-image">
            <img src={profileImage} alt="Profile" />
          </div>
        </div>
        <h1 className="text-3xl text-md-4xl">
          Daniel Lightner
        </h1>
        <p className="text-xl text-md-2xl">
          Application Analyst Intern @ Geisinger | Computer Science
        </p>
      </section>

      {/* About Content */}
      <section className="card">
        <h2 className="text-2xl text-md-3xl mb-lg text-green-900">About Me</h2>
        <div className="text-lg text-green-800 space-y-md">
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
