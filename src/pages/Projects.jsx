import paProjectImage from '../assets/paprojectscreenshot.png'
import basketballImage from '../assets/collegebasketball.png'
import windowsServerImage from '../assets/windows server.png'
import bankingAppImage from '../assets/banking app.png'
import draynorManorImage from '../assets/draynormanorgame.png'

function Projects() {
  return (
    <div className="space-y-3xl">
      <div className="text-center mb-2xl">
        <h1 className="text-3xl text-md-4xl mb-md text-green-900">My Work</h1>
        <p className="text-lg text-green-800 max-w-2xl mx-auto">
          A collection of projects showcasing my skills in full-stack development, data analysis, and software engineering.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="space-y-3xl">
        <section className="card">
          <div className="project-card">
            {/* Media Section */}
            <div className="project-media">
              <img src={paProjectImage} alt="SFU PA Program Screenshot" className="w-full h-auto rounded-lg" />
            </div>
            
            {/* Content Section */}
            <div className="project-content space-y-md">
              <h2 className="text-2xl text-green-900">
                SFU PA Program
              </h2>
              <p className="text-brown-600 font-bold">
                Full-Stack Desktop Application · Jan 2025 - May 2025
              </p>
              <p className="text-green-800 text-lg">
                A desktop application built for the Physician Assistant department at Saint Francis University to help manage and streamline the accreditation process. Developed using JavaFX for the interface and Spring Boot for the backend, the application allows faculty to easily track accreditation standards, manage student data, and organize important documents.
              </p>
              <p className="text-green-800">
                Led a team of 6 developers through Agile full-stack development of an academic tracking system, writing 9,000+ lines of code and contributing 90+ of 270 commits. Built a full-stack MVC app with Spring Boot and JavaFX, using 21+ controllers, 11 repositories, and a normalized SQLite database for efficient data handling. Engineered academic tools, including a course evaluator, gradebook for 23+ courses, and a lecturer tracker with dynamic filters and reports, all featuring CSV import/export functionality to reduce admin workload by 60%. Designed 18 JavaFX views in SceneBuilder with custom CSS styling and interactive tables, enabling easy data sorting, filtering, and editing.
              </p>
              <div className="flex flex-wrap gap-sm">
                <span className="badge">Java</span>
                <span className="badge">Spring Boot</span>
                <span className="badge">JavaFX</span>
                <span className="badge">SQLite</span>
                <span className="badge">Hibernate</span>
                <span className="badge">Maven</span>
                <span className="badge">Git</span>
              </div>
              <div className="flex flex-wrap gap-md pt-md">
                <a 
                  href="https://github.com/DanLightner/SFU-PA-Project"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary btn-sm"
                >
                  View on GitHub
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="card">
          <div className="project-card">
            {/* Media Section */}
            <div className="project-media">
              <img src={basketballImage} alt="College Basketball EDA Visualization" className="w-full h-auto rounded-lg" />
            </div>
            
            {/* Content Section */}
            <div className="project-content space-y-md">
              <h2 className="text-2xl text-green-900">
                College Basketball EDA
              </h2>
              <p className="text-brown-600 font-bold">
                Data Science & Machine Learning · Nov 2024 - May 2025
              </p>
              <p className="text-green-800 text-lg">
                Explored a dataset of 3,500+ NCAA Division I basketball team seasons (2013–2024), cleaning and analyzing 24 statistical variables including offensive/defensive efficiency and tournament performance.
              </p>
              <p className="text-green-800">
                Applied K-means clustering using scikit-learn; tested 2 (Calinski-Harabasz), 17 (elbow), and chose 3 clusters based on silhouette score, visualizing groupings with matplotlib and seaborn. Built decision tree classifiers to predict conference affiliation from team metrics, achieving 9.56% accuracy (vs. 3% baseline) and revealing cross-conference patterns in play style.
              </p>
              <div className="flex flex-wrap gap-sm">
                <span className="badge">Python</span>
                <span className="badge">pandas</span>
                <span className="badge">NumPy</span>
                <span className="badge">Scikit-learn</span>
                <span className="badge">Matplotlib</span>
                <span className="badge">Seaborn</span>
                <span className="badge">Jupyter</span>
              </div>
            </div>
          </div>
        </section>

        <section className="card">
          <div className="project-card">
            {/* Media Section */}
            <div className="project-media">
              <img src={windowsServerImage} alt="Windows Server & Active Directory Lab" className="w-full h-auto rounded-lg" />
            </div>
            
            {/* Content Section */}
            <div className="project-content space-y-md">
              <h2 className="text-2xl text-green-900">
                Windows Server & Active Directory Lab
              </h2>
              <p className="text-brown-600 font-bold">
                Infrastructure & Systems Administration · Jan 2025 - Apr 2025
              </p>
              <p className="text-green-800 text-lg">
                Deployed and configured Windows Server 2022 on Azure Hyper-V, managing Active Directory, DNS, DHCP, and DFS to simulate a realistic IT environment.
              </p>
              <p className="text-green-800">
                Designed and implemented an Active Directory OU hierarchy to organize resources, delegate admin control, and apply Group Policies to users and computers. Created and linked over 15 Group Policy Objects using Group Policy Management Console, applying security group filtering to control policy scope and support organized, role-based system configuration. Configured and managed Active Directory objects, validated DNS/DHCP settings, and used gpresult and Event Viewer to ensure correct Group Policy application.
              </p>
              <div className="flex flex-wrap gap-sm">
                <span className="badge">Hyper-V</span>
                <span className="badge">Active Directory</span>
                <span className="badge">GPMC</span>
                <span className="badge">Azure</span>
                <span className="badge">Windows Server 2022</span>
                <span className="badge">DNS</span>
                <span className="badge">DHCP</span>
                <span className="badge">DFS</span>
              </div>
            </div>
          </div>
        </section>

        <section className="card">
          <div className="project-card">
            {/* Media Section */}
            <div className="project-media">
              <img src={bankingAppImage} alt="Banking App Screenshot" className="w-full h-auto rounded-lg" />
            </div>
            
            {/* Content Section */}
            <div className="project-content space-y-md">
              <h2 className="text-2xl text-green-900">
                Banking App
              </h2>
              <p className="text-brown-600 font-bold">
                Full-Stack Web Application · Oct 2024 - Dec 2024
              </p>
              <p className="text-green-800 text-lg">
                Developed a secure banking web application with Spring Boot, implementing user authentication, account management, and transaction processing with session-based authentication and data protection using JPA and H2 database.
              </p>
              <p className="text-green-800">
                Created deposit/withdrawal features with form validation and session-based access control to securely prevent account overdrafts. Ensured data integrity and security through Jakarta Validation annotations and built protection for routes and logged-in users across the application. Implemented CRUD operations for user account management, including secure login, updating account details, and transaction history, using JPA and H2 for data persistence.
              </p>
              <div className="flex flex-wrap gap-sm">
                <span className="badge">Java</span>
                <span className="badge">Spring Boot</span>
                <span className="badge">Thymeleaf</span>
                <span className="badge">HTML/CSS</span>
                <span className="badge">H2 Database</span>
                <span className="badge">JPA</span>
                <span className="badge">Maven</span>
              </div>
            </div>
          </div>
        </section>

        <section className="card">
          <div className="project-card">
            {/* Media Section */}
            <div className="project-media">
              <div className="text-center">
                <span className="text-green-800 text-lg">Web Application</span>
              </div>
            </div>
            
            {/* Content Section */}
            <div className="project-content space-y-md">
              <h2 className="text-2xl text-green-900">
                Statify
              </h2>
              <p className="text-brown-600 font-bold">
                React Web Application · Aug 2023 - Jul 2024
              </p>
              <p className="text-green-800 text-lg">
                Developed a responsive Spotify web app with React, integrating OAuth 2.0 for secure authentication and personalized user experiences.
              </p>
              <p className="text-green-800">
                Designed a responsive, visually appealing UI with CSS to ensure accessibility across devices. Leveraged the Spotify API to authenticate users, retrieve data, and enable features like playlist access and profile management. Collaborated with a colleague using Git/GitHub for version control and project management, ensuring code consistency.
              </p>
              <div className="flex flex-wrap gap-sm">
                <span className="badge">React</span>
                <span className="badge">Vite</span>
                <span className="badge">JavaScript</span>
                <span className="badge">HTML/CSS</span>
                <span className="badge">Spotify Web API</span>
                <span className="badge">Node.js</span>
                <span className="badge">OAuth 2.0</span>
                <span className="badge">Git</span>
              </div>
            </div>
          </div>
        </section>

        <section className="card">
          <div className="project-card">
            {/* Media Section */}
            <div className="project-media">
              <img src={draynorManorImage} alt="Draynor Manor Game Screenshot" className="w-full h-auto rounded-lg" />
            </div>
            
            {/* Content Section */}
            <div className="project-content space-y-md">
              <h2 className="text-2xl text-green-900">
                Draynor Manor
              </h2>
              <p className="text-brown-600 font-bold">
                Text Adventure Game · Feb 2023 - May 2023
              </p>
              <p className="text-green-800 text-lg">
                Engineered a Java-based text adventure game utilizing multidimensional arrays for managing game rooms, navigation, and interactive narrative elements.
              </p>
              <p className="text-green-800">
                Implemented gameplay mechanics like item collection and NPC interactions through structured data management and event triggers, enhancing user experience. Employed file I/O for reading game narratives and managing game state, ensuring smooth progression and story continuity.
              </p>
              <div className="flex flex-wrap gap-sm">
                <span className="badge">Java</span>
                <span className="badge">File I/O</span>
                <span className="badge">Exception Handling</span>
                <span className="badge">Arrays</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Projects
