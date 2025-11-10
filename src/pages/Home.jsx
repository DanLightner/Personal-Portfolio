import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section>
        <h1>
          {/* Your Name */}
        </h1>
        <p>
          {/* Your Title/Role */}
        </p>
        <div>
          <Link to="/about">
            Learn More About Me
          </Link>
          <Link to="/contact">
            Get In Touch
          </Link>
        </div>
      </section>

      {/* Projects Section */}
      <section>
        <h2>Projects</h2>
        <div>
          {/* Project cards go here */}
          <div>
            {/* Project 1 */}
          </div>
          <div>
            {/* Project 2 */}
          </div>
          <div>
            {/* Project 3 */}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section>
        <h2>Skills</h2>
        <div>
          {/* Skill tags go here */}
        </div>
      </section>

      {/* Contact Section */}
      <section>
        <h2>Contact</h2>
        <div>
          {/* Contact form or info goes here */}
        </div>
      </section>
    </div>
  )
}

export default Home

