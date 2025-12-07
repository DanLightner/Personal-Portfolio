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
            I am currently pursuing a Bachelor of Science in Computer Science with a minor in Cybersecurity at Saint Francis University, and I am expected to graduate in May 2026. Alongside my coursework, I work as an Application Analyst Intern at Geisinger. In this role, I support enterprise analytics platforms like SAP BusinessObjects and Tableau. I help manage and troubleshoot reports, handle dashboard access for a large number of users, and work closely with teams to make sure data tools run smoothly. I also use tools like Tidal for job scheduling, write SQL queries in SSMS, and work through ServiceNow tickets as part of daily operations.
          </p>
          <p>
            My technical interests go beyond just analytics and reporting. I enjoy building full-stack applications using Java, Spring Boot, and React, and I like working through both the back-end logic and the front-end user experience. I have experience leading Agile team projects where we planned sprints, divided tasks, and pushed features on tight timelines. I have built desktop applications to help streamline academic processes, and I have also worked with enterprise tools like Active Directory and Azure. These projects helped me better understand how real systems are designed, secured, and maintained. I like learning how everything connects from the code level to the infrastructure behind it.
          </p>
          <p>
            Outside of class and work, I spend a lot of time learning on my own. I like improving my coding habits, writing cleaner and more maintainable code, and understanding best practices like testing and CI/CD at a deeper level. My goal is to continue growing into a well-rounded software engineer who understands both development and systems. I want to work on projects that actually help people and solve real problems, not just build things for the sake of it.
          </p>
        </div>
      </section>

      {/* Personal Interests & Hobbies Section */}
      <section className="card">
        <h2 className="text-2xl text-md-3xl mb-lg text-green-900">Personal Interests & Hobbies</h2>
        <div className="text-lg text-green-800 space-y-md">
          <p>
            Outside of tech, esports and competitive gaming are a big part of my life. I enjoy the strategy, teamwork, and constant improvement that come with competitive games. Working with teammates, communicating under pressure, and learning from mistakes are all things that directly carry over into how I approach group projects and programming challenges. I also enjoy breaking down game strategies the same way I break down technical problems.
          </p>
          <p>
            I stay active through sports as well. I play golf regularly and run a <a href="https://danlightner6.wixsite.com/golf-blog" target="_blank" rel="noopener noreferrer" className="text-green-900 font-bold underline hover:text-brown-600">golf blog</a> where I track my progress, reflect on what I am learning, and document changes in my swing. Golf has taught me patience, focus, and how small adjustments can make a big difference over time. I enjoy the analytical side of improving, whether it is in sports or in coding.
          </p>
          <p>
            In addition to golf, I play flag football, basketball, and intramural volleyball. Being part of team sports has helped me develop communication skills, accountability, and trust in others. It reminds me that individual effort matters, but success always depends on the whole group working together. These experiences shape how I work in team-based development environments and professional settings.
          </p>
        </div>
      </section>
    </div>
  )
}

export default About
