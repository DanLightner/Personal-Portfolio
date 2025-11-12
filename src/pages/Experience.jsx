function Experience() {
  return (
    <div className="space-y-12">
      <h1 className="text-3xl md:text-4xl text-center mb-12 text-golf-green-900">Experience & Resume</h1>

      {/* Resume Download Section */}
      <section className="pixel-card bg-golf-white p-8 text-center">
        <h2 className="text-2xl md:text-3xl mb-4 text-golf-green-900">Resume</h2>
        <p className="text-lg text-golf-green-800 mb-6">
          Download or view my resume to learn more about my experience, education, and technical skills.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="/Daniel_Lightner_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="pixel-button bg-golf-green-600 text-golf-white px-6 py-3"
          >
            View Resume
          </a>
          <a
            href="/Daniel_Lightner_Resume.pdf"
            download="Daniel_Lightner_Resume.pdf"
            className="pixel-button bg-golf-sky-500 text-golf-white px-6 py-3"
          >
            Download Resume
          </a>
        </div>
      </section>

      {/* Work Experience Section */}
      <section>
        <h2 className="text-2xl md:text-3xl mb-8 text-golf-green-900">Work Experience</h2>
        <div className="space-y-6">
          <div className="pixel-card bg-golf-white p-6">
            <h3 className="text-xl text-golf-green-900 mb-2">
              Application Analyst Intern
            </h3>
            <p className="text-lg text-golf-brown-600 font-bold mb-1">
              Geisinger · Remote
            </p>
            <p className="text-golf-green-700 mb-4">
              Jun 2025 - Present · 6 mos
            </p>
            <ul className="list-disc list-inside space-y-2 text-golf-green-800">
              <li>Managed SAP BusinessObjects and 20+ Tableau workbooks, repointing data sources and promoting tables across DEV, TEST, and PROD, providing dashboard access to 400+ users</li>
              <li>Created, scheduled, and promoted roughly 100 Tidal jobs across all environments, automating workflows across multiple departments</li>
              <li>Troubleshot reports, workbooks, and stored procedures with developers, promoting approximately 150 stored procedures and writing SQL scripts in SSMS as needed</li>
              <li>Closed 600+ ServiceNow tasks, navigating change management processes, documenting resolutions, and contributing in daily and weekly stand-ups for a 10+ member team</li>
            </ul>
          </div>
          <div className="pixel-card bg-golf-white p-6">
            <h3 className="text-xl text-golf-green-900 mb-2">
              IT Pre-Sales Strategy Internship
            </h3>
            <p className="text-lg text-golf-brown-600 font-bold mb-1">
              Marketeq Digital · Remote
            </p>
            <p className="text-golf-green-700 mb-4">
              Jul 2024 - Sep 2024 · 3 mos
            </p>
            <ul className="list-disc list-inside space-y-2 text-golf-green-800">
              <li>Collaborated with teams to develop IT solutions, created SLAs, and crafted pre-sales content like presentations and technical documents</li>
              <li>Conducted market research, supported client meetings, and prepared proposals to drive successful IT solution delivery</li>
              <li>Enhanced IT infrastructure knowledge, advanced proficiency in Microsoft Office, and gained hands-on experience in IT consulting and SLA creation</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section>
        <h2 className="text-2xl md:text-3xl mb-8 text-golf-green-900">Education</h2>
        <div className="space-y-6">
          <div className="pixel-card bg-golf-white p-6">
            <h3 className="text-xl text-golf-green-900 mb-2">
              B.S. in Computer Science, Minor in Cybersecurity
            </h3>
            <p className="text-lg text-golf-brown-600 font-bold mb-1">
              Saint Francis University
            </p>
            <p className="text-golf-green-700 mb-4">
              Expected May 2026 · GPA: 3.96/4.00
            </p>
            <div className="text-golf-green-800 space-y-2">
              <p className="font-bold mb-2">Coursework:</p>
              <p>Software Engineering, Software Craftsmanship, Web Application Architectures, Data Structures, Database Management, Server-Side Programming, Algorithms, Discrete Math, Data Mining & Machine Learning</p>
              <p className="font-bold mt-4 mb-2">Honors:</p>
              <p>School of STEAM Leadership Award, 5-time President's List, Dean's List</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="bg-golf-brown-200 pixel-border p-8">
        <h2 className="text-2xl md:text-3xl mb-6 text-golf-brown-900 text-center">Skills</h2>
        <div className="flex flex-wrap justify-center gap-3">
          <span className="px-4 py-2 bg-golf-white text-golf-green-900 border-2 border-golf-green-700 text-lg">Java</span>
          <span className="px-4 py-2 bg-golf-white text-golf-green-900 border-2 border-golf-green-700 text-lg">Python</span>
          <span className="px-4 py-2 bg-golf-white text-golf-green-900 border-2 border-golf-green-700 text-lg">JavaScript</span>
          <span className="px-4 py-2 bg-golf-white text-golf-green-900 border-2 border-golf-green-700 text-lg">SQL</span>
          <span className="px-4 py-2 bg-golf-white text-golf-green-900 border-2 border-golf-green-700 text-lg">Spring Boot</span>
          <span className="px-4 py-2 bg-golf-white text-golf-green-900 border-2 border-golf-green-700 text-lg">React</span>
          <span className="px-4 py-2 bg-golf-white text-golf-green-900 border-2 border-golf-green-700 text-lg">JavaFX</span>
          <span className="px-4 py-2 bg-golf-white text-golf-green-900 border-2 border-golf-green-700 text-lg">Tableau</span>
          <span className="px-4 py-2 bg-golf-white text-golf-green-900 border-2 border-golf-green-700 text-lg">SAP BusinessObjects</span>
          <span className="px-4 py-2 bg-golf-white text-golf-green-900 border-2 border-golf-green-700 text-lg">Git</span>
          <span className="px-4 py-2 bg-golf-white text-golf-green-900 border-2 border-golf-green-700 text-lg">Maven</span>
          <span className="px-4 py-2 bg-golf-white text-golf-green-900 border-2 border-golf-green-700 text-lg">Agile</span>
        </div>
      </section>
    </div>
  )
}

export default Experience

