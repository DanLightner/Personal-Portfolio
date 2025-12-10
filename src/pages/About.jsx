import profileImage from '../assets/IMG_0761.webp'
import golfImage from '../assets/golf.jpg'
import volleyballImage from '../assets/volleyball.png'
import footballImage from '../assets/foootball.png'
import leadershipAwardImage from '../assets/leadership award.jpg'

function About() {
  return (
    <div className="space-y-3xl">
      {/* Header Section */}
      <section className="hero">
        <div className="mb-lg flex justify-center">
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
          <p>
            Recognized with the STEAM Leadership Award for contributions to the School of STEAM community and consistent academic excellence.
          </p>
          <div className="my-lg flex justify-center">
            <img src={leadershipAwardImage} alt="STEAM Leadership Award" className="w-full max-w-2xl mx-auto rounded-lg shadow-md" />
          </div>
        </div>
      </section>

      {/* Personal Interests & Hobbies Section */}
      <section className="card">
        <h2 className="text-2xl text-md-3xl mb-lg text-green-900">Personal Interests & Hobbies</h2>
        <div className="text-lg text-green-800 space-y-md">
          <p>
            Outside of tech I have always had a long history with gaming and it has played a huge role in shaping how I think. I have been playing Counter Strike for the last decade and the amount of time I have spent learning mechanics, strategy, and teamwork has had a bigger impact on my problem solving skills than I expected when I first started. Competitive play taught me how to stay calm when things get stressful and how to work with people who play and think differently than I do. During my freshman year our esports team went 8 and 0 in both seasons and it felt like the first time I truly understood what real competitive pressure feels like. I have also reached Immortal in Valorant which forced me to think about discipline, consistency, and awareness in a much deeper way. I enjoy breaking down situations in games the same way I break down technical challenges and that habit has helped me with debugging, group projects, and system design.
          </p>

          <div className="my-lg flex justify-center">
            <img src={volleyballImage} alt="Volleyball" className="w-full max-w-2xl mx-auto rounded-lg shadow-md" />
          </div>

          <p>
            Golf has become the main activity that keeps me grounded outside of academics and esports. I play regularly and I also run a <a href="https://danlightner6.wixsite.com/golf-blog" target="_blank" rel="noopener noreferrer" className="text-green-900 font-bold underline hover:text-brown-600">golf blog</a> where I track my progress and write about the improvements I make each time I play. The blog started as a small side project but it helped me realize how much I enjoy analyzing my performance and documenting how small changes in technique can completely shift the outcome. Golf taught me patience and how important it is to stay focused on the long term because real improvement happens slowly and it only shows up if you keep practicing through the frustrating days. There is a level of problem solving in golf that reminds me of software development because both require constant adjustment and the willingness to rethink an approach when something is not working. This makes golf a big part of my personal growth.
          </p>

          <div className="my-lg flex justify-center">
            <img src={golfImage} alt="Golf" className="w-full max-w-2xl mx-auto rounded-lg shadow-md" />
          </div>

          <p>
            I also stay active by playing flag football, basketball, and intramural volleyball. Team sports give me a different type of challenge because they rely on communication, trust, and the ability to adapt quickly to what is happening in real time. Playing with different groups has helped me learn how to read situations, communicate clearly, and keep everyone on the same page even when things get chaotic. These experiences translate directly into how I work on development teams because I am used to helping others, taking feedback, and keeping a positive attitude when a project hits a rough patch. Sports remind me that individual effort matters but real success always depends on the group moving together.
          </p>

          <p>
            I’m also part of the campus Frisbee club, where we play ultimate and keep the competitive spirit going.
          </p>

          <div className="my-lg flex justify-center">
            <img src={footballImage} alt="Flag Football" className="w-full max-w-2xl mx-auto rounded-lg shadow-md" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
