function Experience() {
  return (
    <div>
      <h1>Experience & Resume</h1>

      {/* Resume Download Section */}
      <section>
        <h2>Resume</h2>
        <p>
          {/* Resume description */}
        </p>
        <div>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Resume
          </a>
          <a
            href="/resume.pdf"
            download
          >
            Download Resume
          </a>
        </div>
      </section>

      {/* Work Experience Section */}
      <section>
        <h2>Work Experience</h2>
        <div>
          {/* Experience items go here */}
          <div>
            <h3>
              {/* Job Title */}
            </h3>
            <p>
              {/* Company Name */}
            </p>
            <p>
              {/* Date Range */}
            </p>
            <ul>
              {/* Job responsibilities/achievements */}
              <li>{/* Responsibility 1 */}</li>
              <li>{/* Responsibility 2 */}</li>
            </ul>
          </div>
          {/* Add more experience items */}
        </div>
      </section>

      {/* Education Section */}
      <section>
        <h2>Education</h2>
        <div>
          {/* Education items go here */}
          <div>
            <h3>
              {/* Degree */}
            </h3>
            <p>
              {/* Institution */}
            </p>
            <p>
              {/* Date Range */}
            </p>
          </div>
          {/* Add more education items */}
        </div>
      </section>

      {/* Skills Section */}
      <section>
        <h2>Skills</h2>
        <div>
          {/* Skill tags go here */}
          <span>
            {/* Skill */}
          </span>
        </div>
      </section>
    </div>
  )
}

export default Experience

