function Projects() {
  return (
    <div className="space-y-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl mb-4 text-golf-green-900">My Work</h1>
        <p className="text-lg text-golf-green-800 max-w-2xl mx-auto">
          A collection of projects showcasing my skills in full-stack development, data analysis, and software engineering.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="space-y-12">
        <section className="pixel-card bg-golf-white overflow-hidden">
          <div className="md:flex">
            {/* Media Section */}
            <div className="md:w-1/2 bg-golf-green-200 p-8 flex items-center justify-center">
              <div className="text-center">
                <span className="text-golf-green-800 text-lg">Desktop Application</span>
              </div>
            </div>
            
            {/* Content Section */}
            <div className="md:w-1/2 p-8 space-y-4">
              <h2 className="text-2xl text-golf-green-900">
                SFU PA Program
              </h2>
              <p className="text-golf-brown-600 font-bold">
                Full-Stack Desktop Application · Jan 2025 - May 2025
              </p>
              <p className="text-golf-green-800 text-lg">
                A desktop application built for the Physician Assistant department at Saint Francis University to help manage and streamline the accreditation process. Developed using JavaFX for the interface and Spring Boot for the backend, the application allows faculty to easily track accreditation standards, manage student data, and organize important documents.
              </p>
              <p className="text-golf-green-800">
                Led a team of 6 developers through Agile full-stack development, writing 9,000+ lines of code and contributing 90+ of 270 commits. Built a full-stack MVC app with 21+ controllers, 11 repositories, and a normalized SQLite database. Engineered academic tools including a course evaluator, gradebook for 23+ courses, and a lecturer tracker with dynamic filters and reports, all featuring CSV import/export functionality to reduce admin workload by 60%.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-golf-green-200 text-golf-green-900 border-2 border-golf-green-700 text-sm">Java</span>
                <span className="px-3 py-1 bg-golf-green-200 text-golf-green-900 border-2 border-golf-green-700 text-sm">Spring Boot</span>
                <span className="px-3 py-1 bg-golf-green-200 text-golf-green-900 border-2 border-golf-green-700 text-sm">JavaFX</span>
                <span className="px-3 py-1 bg-golf-green-200 text-golf-green-900 border-2 border-golf-green-700 text-sm">SQLite</span>
                <span className="px-3 py-1 bg-golf-green-200 text-golf-green-900 border-2 border-golf-green-700 text-sm">Hibernate</span>
                <span className="px-3 py-1 bg-golf-green-200 text-golf-green-900 border-2 border-golf-green-700 text-sm">Maven</span>
                <span className="px-3 py-1 bg-golf-green-200 text-golf-green-900 border-2 border-golf-green-700 text-sm">Git</span>
              </div>
              <div className="flex flex-wrap gap-3 pt-4">
                <a 
                  href="https://github.com/DanLightner/SFU-PA-Project"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pixel-button bg-golf-sky-500 text-golf-white px-4 py-2 text-sm"
                >
                  View on GitHub
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="pixel-card bg-golf-white overflow-hidden">
          <div className="md:flex">
            {/* Media Section */}
            <div className="md:w-1/2 bg-golf-green-200 p-8 flex items-center justify-center">
              <div className="text-center">
                <span className="text-golf-green-800 text-lg">Data Analysis Project</span>
              </div>
            </div>
            
            {/* Content Section */}
            <div className="md:w-1/2 p-8 space-y-4">
              <h2 className="text-2xl text-golf-green-900">
                College Basketball EDA
              </h2>
              <p className="text-golf-brown-600 font-bold">
                Data Science & Machine Learning · Nov 2024 - May 2025
              </p>
              <p className="text-golf-green-800 text-lg">
                Explored a dataset of 3,500+ NCAA Division I basketball team seasons (2013–2024), cleaning and analyzing 24 statistical variables including offensive/defensive efficiency and tournament performance.
              </p>
              <p className="text-golf-green-800">
                Applied K-means clustering using scikit-learn; tested 2 (Calinski-Harabasz), 17 (elbow), and chose 3 clusters based on silhouette score, visualizing groupings with matplotlib and seaborn. Built decision tree classifiers to predict conference affiliation from team metrics, achieving 9.56% accuracy (vs. 3% baseline) and revealing cross-conference patterns in play style.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-golf-green-200 text-golf-green-900 border-2 border-golf-green-700 text-sm">Python</span>
                <span className="px-3 py-1 bg-golf-green-200 text-golf-green-900 border-2 border-golf-green-700 text-sm">pandas</span>
                <span className="px-3 py-1 bg-golf-green-200 text-golf-green-900 border-2 border-golf-green-700 text-sm">NumPy</span>
                <span className="px-3 py-1 bg-golf-green-200 text-golf-green-900 border-2 border-golf-green-700 text-sm">Scikit-learn</span>
                <span className="px-3 py-1 bg-golf-green-200 text-golf-green-900 border-2 border-golf-green-700 text-sm">Matplotlib</span>
                <span className="px-3 py-1 bg-golf-green-200 text-golf-green-900 border-2 border-golf-green-700 text-sm">Seaborn</span>
                <span className="px-3 py-1 bg-golf-green-200 text-golf-green-900 border-2 border-golf-green-700 text-sm">Jupyter</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Projects

