function About() {
  return (
    <div>
      {/* Header Section */}
      <section>
        <div>
          {/* Profile picture - add to src/assets/images/profile.jpg and import it */}
          {/* import profileImage from '../assets/images/profile.jpg' */}
          <div>
            {/* <img src={profileImage} alt="Profile" /> */}
            <span>Profile Picture</span>
          </div>
        </div>
        <h1>
          {/* Your Name */}
        </h1>
        <p>
          {/* Your Title/Role */}
        </p>
      </section>

      {/* About Content */}
      <section>
        <h2>About Me</h2>
        <div>
          {/* About me content goes here */}
          <p>
            {/* Your bio/introduction */}
          </p>
        </div>
      </section>
    </div>
  )
}

export default About

