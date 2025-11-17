function Experience() {
  return (
    <div className="space-y-3xl">
      <h1 className="text-3xl text-md-4xl text-center mb-2xl text-green-900">Experience & Resume</h1>

      {/* Resume Download Section */}
      <section className="card text-center">
        <h2 className="text-2xl text-md-3xl mb-md text-green-900">Resume</h2>
        <p className="text-lg text-green-800 mb-lg">
          Download or view my resume to learn more about my experience, education, and technical skills.
        </p>
        <div className="flex flex-wrap justify-center gap-md">
          <a
            href="/Daniel_Lightner_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            View Resume
          </a>
          <a
            href="/Daniel_Lightner_Resume.pdf"
            download="Daniel_Lightner_Resume.pdf"
            className="btn btn-secondary"
          >
            Download Resume
          </a>
        </div>
      </section>

      {/* Work Experience Section */}
      <section className="section">
        <h2 className="text-2xl text-md-3xl mb-xl text-green-900">Work Experience</h2>
        <div className="space-y-lg">
          <div className="card">
            <h3 className="text-xl text-green-900 mb-sm">
              Application Analyst Intern
            </h3>
            <p className="text-lg text-brown-600 font-bold mb-sm">
              Geisinger · Remote
            </p>
            <p className="text-green-700 mb-md">
              Jun 2025 - Present · 6 mos
            </p>
            <ul className="list-disc space-y-sm text-green-800">
              <li>Managed SAP BusinessObjects and 20+ Tableau workbooks, repointing data sources and promoting tables across DEV, TEST, and PROD, providing dashboard access to 400+ users</li>
              <li>Created, scheduled, and promoted roughly 100 Tidal jobs across all environments, automating workflows across multiple departments</li>
              <li>Troubleshot reports, workbooks, and stored procedures with developers, promoting approximately 150 stored procedures and writing SQL scripts in SSMS as needed</li>
              <li>Closed 600+ ServiceNow tasks, navigating change management processes, documenting resolutions, and contributing in daily and weekly stand-ups for a 10+ member team</li>
            </ul>
          </div>
          <div className="card">
            <h3 className="text-xl text-green-900 mb-sm">
              IT Pre-Sales Strategy Internship
            </h3>
            <p className="text-lg text-brown-600 font-bold mb-sm">
              Marketeq Digital · Remote
            </p>
            <p className="text-green-700 mb-md">
              Jul 2024 - Sep 2024 · 3 mos
            </p>
            <ul className="list-disc space-y-sm text-green-800">
              <li>Collaborated with teams to develop IT solutions, created SLAs, and crafted pre-sales content like presentations and technical documents</li>
              <li>Conducted market research, supported client meetings, and prepared proposals to drive successful IT solution delivery</li>
              <li>Enhanced IT infrastructure knowledge, advanced proficiency in Microsoft Office, and gained hands-on experience in IT consulting and SLA creation</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="section">
        <h2 className="text-2xl text-md-3xl mb-xl text-green-900">Education</h2>
        <div className="space-y-lg">
          <div className="card">
            <h3 className="text-xl text-green-900 mb-sm">
              B.S. in Computer Science, Minor in Cybersecurity
            </h3>
            <p className="text-lg text-brown-600 font-bold mb-sm">
              Saint Francis University
            </p>
            <p className="text-green-700 mb-md">
              Expected May 2026 · GPA: 3.96/4.00
            </p>
            <div className="text-green-800 space-y-sm">
              <p className="font-bold mb-sm">Coursework:</p>
              <p>Software Engineering, Software Craftsmanship, Web Application Architectures, Data Structures, Database Management, Server-Side Programming, Algorithms, Discrete Math, Data Mining & Machine Learning</p>
              <p className="font-bold mt-md mb-sm">Honors:</p>
              <p>School of STEAM Leadership Award, 5-time President's List, Dean's List</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section">
        <div className="card bg-brown-200">
          <h2 className="text-2xl text-md-3xl mb-lg text-brown-900 text-center">Skills</h2>
          <div className="flex flex-wrap justify-center gap-md">
            <span className="badge badge-lg">Java</span>
            <span className="badge badge-lg">Python</span>
            <span className="badge badge-lg">JavaScript</span>
            <span className="badge badge-lg">SQL</span>
            <span className="badge badge-lg">Spring Boot</span>
            <span className="badge badge-lg">React</span>
            <span className="badge badge-lg">JavaFX</span>
            <span className="badge badge-lg">Tableau</span>
            <span className="badge badge-lg">SAP BusinessObjects</span>
            <span className="badge badge-lg">Git</span>
            <span className="badge badge-lg">Maven</span>
            <span className="badge badge-lg">Agile</span>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Experience
