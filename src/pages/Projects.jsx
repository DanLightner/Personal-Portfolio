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
              <div className="text-center">
                <span className="text-green-800 text-lg">Desktop Application</span>
              </div>
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
                Led a team of 6 developers through Agile full-stack development, writing 9,000+ lines of code and contributing 90+ of 270 commits. Built a full-stack MVC app with 21+ controllers, 11 repositories, and a normalized SQLite database. Engineered academic tools including a course evaluator, gradebook for 23+ courses, and a lecturer tracker with dynamic filters and reports, all featuring CSV import/export functionality to reduce admin workload by 60%.
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
              <div className="text-center">
                <span className="text-green-800 text-lg">Data Analysis Project</span>
              </div>
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
      </div>
    </div>
  )
}

export default Projects
